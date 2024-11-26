"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff4eb"
          polygonOffset
          polygonOffsetFactor={-3}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 25]}
          scale={1}
          map={decal}
          
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }:any) => {
  return (
    <div
    
      className="cursor-grab  "
      
      onMouseDown={(e) => {
        e.currentTarget.classList.add("cursor-grabbing");
        e.currentTarget.classList.remove("cursor-grab");
      }}

      onMouseUp={(e) => {
        e.currentTarget.classList.remove("cursor-grabbing");
        e.currentTarget.classList.add("cursor-grab");
      }}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon.src} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
