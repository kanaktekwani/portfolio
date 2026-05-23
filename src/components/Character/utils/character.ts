import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
  dracoLoader.setDecoderPath(assetPath("draco/"));
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async () => {
    try {
      const encryptedBlob = await decryptFile(
        assetPath("models/character.enc?v=2"),
        "MyCharacter12"
      );
      const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

      return await new Promise<GLTF | null>((resolve, reject) => {
        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            const parallelCompile = renderer.extensions.get(
              "KHR_parallel_shader_compile"
            );
            if (parallelCompile) {
              try {
                await Promise.race([
                  renderer.compileAsync(character, camera, scene),
                  new Promise((resolve) => setTimeout(resolve, 2500)),
                ]);
              } catch {
                renderer.compile(scene, camera);
              }
            } else {
              renderer.compile(scene, camera);
            }
            character.traverse((child: THREE.Object3D) => {
              const mesh = child as THREE.Mesh;
              if (mesh.isMesh) {
                const material = mesh.material;

                if (material && !Array.isArray(material)) {
                  if (mesh.name === "BODY.SHIRT") { // The shirt mesh
                    const newMat = material.clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#8B4513");
                    mesh.material = newMat;
                  } else if (mesh.name === "Pant") {
                    const newMat = material.clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#000000");
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      });
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return { loadCharacter };
};

export default setCharacter;
