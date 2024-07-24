import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Canvas, useThree } from "@react-three/fiber";
import { setCamera } from "../../redux/Slices/ColorsSlice";
import { NissanSkyline } from "./NissanSkyline";
import { Porsche911 } from "./Porsche911";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ToyotaSupra } from "./ToyotaSupra";
import { useParams } from "react-router-dom";
import { LotusEmira } from "./LotusEmira";

const CameraController = () => {
  const { camera, gl } = useThree();
  const dispatch = useDispatch();
  const { fov, position, target } = useSelector(
    (state) => state.carColors.camera
  );

  useEffect(() => {
    if (fov !== undefined && position !== undefined) {
      camera.fov = fov;
      camera.position.set(...position);
      camera.updateProjectionMatrix();
    }
  }, [camera, fov, position]);

  useEffect(() => {
    if (fov !== undefined && position !== undefined) {
      dispatch(
        setCamera({
          fov: camera.fov,
          position: [camera.position.x, camera.position.y, camera.position.z],
        })
      );
    }
  }, [
    camera.fov,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    dispatch,
  ]);

  return null;
};
export default function CameraSetting() {
  const { carid } = useParams();
  const { fov, position, target } = useSelector(
    (state) => state.carColors.camera
  );
  const orbitControlsRef = useRef(null);

  const cameraProps = useMemo(() => {
    return {
      fov: fov || 75,
      position: position || [0, 0, 5],
      target: target || [0, 0, 0],
    };
  }, [fov, position, target]);

  return (
    <Canvas className="drop-shadow-[0_35px_18px_rgba(0,0,0,0.6)] w-full h-full rounded-2xl ">
      <PerspectiveCamera
        camera={(cameraProps.fov, cameraProps.position)}
        gl={{ antialias: true }}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[0, 1, 0]} intensity={0.1} />
      <directionalLight intensity={2} position={(1.83, -0.25, 0.93)} />
      <directionalLight intensity={2} position={(-1.97, -0.002, -0.97)} />
      {carid == 1 && <NissanSkyline />}
      {carid == 2 && <Porsche911 />}
      {carid == 3 && <LotusEmira />}
      {carid == 4 && <ToyotaSupra />}

      <CameraController />
      <OrbitControls
        ref={orbitControlsRef}
        target={cameraProps.target}
        enableDamping
      />
    </Canvas>
  );
}
