"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  // Automatically loads and caches the GLB file
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "50%", height: "500px" }}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          {/* Stage provides automatic studio lighting and centering */}
          <Stage environment="city" intensity={0.6}>
            <Model url="/dvk-3d-figure.glb" />
          </Stage>
        </Suspense>
        {/* OrbitControls allows users to rotate and zoom the model */}
        <OrbitControls makeDefault enableZoom={true} />
      </Canvas>
    </div>
  );
}

