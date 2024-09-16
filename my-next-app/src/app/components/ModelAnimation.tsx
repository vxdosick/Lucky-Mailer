"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, invalidate } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

const Model = ({ isUserInteracting }: { isUserInteracting: boolean }) => {
  const modelRef = useRef<THREE.Group | null>(null);
  const [isLoaded, setIsLoaded] = useState(false); // Добавляем состояние для отслеживания загрузки
  const rotationSpeed = 0.01;

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/models/Lucky_Mailer.glb", (gltf) => {
      modelRef.current = gltf.scene;
      setIsLoaded(true); // Обновляем состояние, когда модель загружена
      invalidate(); // Перерисовываем сцену после загрузки модели
    });
  }, []);

  useFrame(() => {
    if (modelRef.current && isLoaded) { // Проверяем, что модель загружена
      if (!isUserInteracting) {
        // Модель вращается по оси Y, когда пользователь не взаимодействует
        modelRef.current.rotation.y += rotationSpeed;
      } else {
        // Плавное возвращение к исходному состоянию, если пользователь взаимодействует
        modelRef.current.rotation.y = THREE.MathUtils.lerp(
          modelRef.current.rotation.y,
          0,
          0.05
        );
      }
    }
  });

  return isLoaded && modelRef.current ? ( // Рендерим модель только если она загружена
    <primitive object={modelRef.current} scale={[0.7, 0.7, 0.7]} />
  ) : null;
};

const ModelAnimation = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false); // Состояние для отслеживания взаимодействия

  return (
    <Canvas style={{ height: "500px", width: "500px" }}>
      {/* Освещение */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Модель с передачей состояния */}
      <Model isUserInteracting={isUserInteracting} />

      {/* Управление камерой */}
      <OrbitControls
        enableZoom={false} // Отключаем масштабирование колесиком
        enableDamping={true} // Плавность вращения камеры
        dampingFactor={0.1}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </Canvas>
  );
};

export default ModelAnimation;
