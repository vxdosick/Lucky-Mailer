"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, invalidate } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

const Model = ({ isUserInteracting }: { isUserInteracting: boolean }) => {
  const modelRef = useRef<THREE.Group | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const rotationSpeed = 0.01;

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/models/Lucky_Mailer.glb", (gltf) => {
      modelRef.current = gltf.scene;
      setIsLoaded(true);
      invalidate();
    });
  }, []);

  useFrame(() => {
    if (modelRef.current && isLoaded) {
      if (!isUserInteracting) {
        modelRef.current.rotation.y += rotationSpeed;
      } else {
        modelRef.current.rotation.y = THREE.MathUtils.lerp(
          modelRef.current.rotation.y,
          0,
          0.05
        );
      }
    }
  });

  return isLoaded && modelRef.current ? (
    <primitive object={modelRef.current} scale={[0.7, 0.7, 0.7]} />
  ) : null;
};

const ModelAnimation = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  return (
    <Canvas style={{ height: "500px", width: "500px" }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      <Model isUserInteracting={isUserInteracting} />

      <OrbitControls
        enableZoom={false}
        enableDamping={true}
        dampingFactor={0.1}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </Canvas>
  );
};

export default ModelAnimation;
