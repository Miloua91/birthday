import { useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import "./App.css";

import { useGLTF } from "@react-three/drei";

useGLTF.preload("/bed.glb");

function Room() {
  const gltf = useGLTF("/bed.glb");
  return <primitive object={gltf.scene} />;
}

function ArcadeOne() {
  const gltf = useGLTF("/final_fight_arcade.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[-2.3, 0, 1.1]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

function ArcadeTwo() {
  const gltf = useGLTF("/arcade_game_-_space_invaders.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.9, 0, -0.4]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[1.2, 1.1, 1.3]}
    />
  );
}

function ArcadeThree() {
  const gltf = useGLTF("/arcade_machine.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[-0.9, 0, 1.88]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[0.11, 0.13, 0.13]}
    />
  );
}

function ArcadeFour() {
  const gltf = useGLTF("/metal_gear_solid_arcade_machine.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[2.1, 0, 1.76]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[0.22, 0.28, 0.35]}
    />
  );
}

function PinBall() {
  const gltf = useGLTF("/pinball_machine.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[-1.9, 0, -1.08]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[0.12, 0.1, 0.12]}
    />
  );
}

function Couch() {
  const gltf = useGLTF("/old_couch.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.62, 0, 1.5]}
      rotation={[0, Math.PI, 0]}
      scale={[0.01, 0.01, 0.01]}
    />
  );
}

function Table() {
  const gltf = useGLTF("/old_table.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.62, 0, 0.2]}
      rotation={[0, Math.PI, 0]}
      scale={[0.013, 0.008, 0.013]}
    />
  );
}

function Cake() {
  const gltf = useGLTF("/chocolate_cake.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.62, 0.679, 0.325]}
      rotation={[0, Math.PI, 0]}
      scale={[0.013, 0.008, 0.013]}
    />
  );
}

function Plates() {
  const gltf = useGLTF("/plates.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[1.07, 0.6, 0.15]}
      rotation={[0, Math.PI, 0]}
      scale={[0.0014, 0.0009, 0.0014]}
    />
  );
}

function ForkOne() {
  const gltf = useGLTF("/plastic_fork.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[1.02, 0.61, 0.12]}
      rotation={[0, 0.1, 0]}
      scale={[0.14, 0.09, 0.14]}
    />
  );
}

function ForkTwo() {
  const gltf = useGLTF("/plastic_fork1.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[1.06, 0.61, 0.1]}
      rotation={[0, -0.19, 0]}
      scale={[0.14, 0.09, 0.14]}
    />
  );
}

function ForkThree() {
  const gltf = useGLTF("/plastic_fork2.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[1.07, 0.61, 0.18]}
      rotation={[0, Math.PI, 0]}
      scale={[0.14, 0.09, 0.14]}
    />
  );
}

function ForkFour() {
  const gltf = useGLTF("/plastic_fork3.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[1.1, 0.61, 0.1]}
      rotation={[0, Math.PI / 10, 0]}
      scale={[0.14, 0.09, 0.14]}
    />
  );
}

function Katana() {
  const gltf = useGLTF("/katana.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.1, 0.625, 0.22]}
      rotation={[0, -Math.PI / 2, 0.056]}
      scale={[0.54, 0.59, 0.54]}
    />
  );
}

function TvTable() {
  const gltf = useGLTF("/tv_table.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.2, 0, -2]}
      rotation={[0, 0, 0]}
      scale={[1, 0.8, 0.8]}
    />
  );
}

function Ps5() {
  const gltf = useGLTF("/playstation_5_digital_edition.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0.6, 0.388, -1.9]}
      rotation={[0, 0, 0]}
      scale={[0.001, 0.001, 0.001]}
    />
  );
}

function Books() {
  const gltf = useGLTF("/childhood_books.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0, 0.395, -1.95]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[1, 0.8, 0.8]}
    />
  );
}

function Ballons() {
  const gltf = useGLTF("/teal_balloon_times_five.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[-1, 1.58, -1.33]}
      rotation={[0, Math.PI, 0]}
      scale={[0.8, 0.8, 0.8]}
    />
  );
}

function App() {
  const lightRef = useRef<THREE.DirectionalLight | null>(null);

  useEffect(() => {
    let time = 0;
    const animateLight = () => {
      if (lightRef.current) {
        time += 0.01; // Increase time for the animation
        const color = new THREE.Color();
        color.setHSL(time % 1, 1, 0.5); // This will cycle through a full rainbow (HSL)
        lightRef.current.color.set(color);
      }
      requestAnimationFrame(animateLight); // Continue animation loop
    };

    animateLight(); // Start the animation loop
  }, []);

  return (
    <>
      <div id="canvas-container">
        <span hidden>Happy Birthday Motherucker</span>
        <Canvas>
          <Suspense fallback={<LoadingScreen />}>
            <PerspectiveCamera makeDefault position={[6, 3, 0]} />
            <OrbitControls target={[0, 0, 0]} />
            <ambientLight intensity={1} />
            <directionalLight
              ref={lightRef}
              color="white"
              position={[5, 5, 5]}
            />
            <mesh position={[0, 0, 0]}>
              <Room />
              <ArcadeOne />
              <ArcadeTwo />
              <ArcadeThree />
              <ArcadeFour />
              <PinBall />
              <Couch />
              <Table />
              <Cake />
              <Plates />
              <ForkOne />
              <ForkTwo />
              <ForkThree />
              <ForkFour />
              <Katana />
              <TvWithVideo />
              <TvTable />
              <Ps5 />
              <Books />
              <Ballons />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

function TvWithVideo() {
  const gltf = useGLTF("/tv.glb");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Create a video element
    const video = document.createElement("video");
    video.src = "/music.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    // Find the screen mesh in the TV model
    const screenMesh = gltf.scene.getObjectByName("TV_49Zoll_Screen1_0");
    if (screenMesh && screenMesh instanceof THREE.Mesh) {
      videoTexture.repeat.set(1.8, 3);
      screenMesh.material = new THREE.MeshBasicMaterial({ map: videoTexture });
    }

    videoRef.current = video;

    // Wait for user interaction to play the video
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      // Remove the event listener after first interaction
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [gltf]);

  return (
    <primitive
      object={gltf.scene}
      position={[-2.87, 2, -2.1]}
      rotation={[0, 0, 0]}
      scale={[1.2, 1.2, 1]}
    />
  );
}

function LoadingScreen() {
  const { progress } = useProgress(); // Track loading progress

  return (
    <Html center>
      <div
        style={{
          width: 300,
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        🎉 Happy Birthday Madjid! My Ninja 🎂 <br />
        Loading... {Math.round(progress)}%
      </div>
    </Html>
  );
}

export default App;
