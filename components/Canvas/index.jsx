/* eslint-disable react/no-unknown-property */
import { Canvas } from "react-three-fiber";

const CanvasBody = ({ design }) => {
  return (
    <Canvas>
      {design}
      <ambientLight args={["#fff", 1]} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
    </Canvas>
  );
};

export default CanvasBody;
