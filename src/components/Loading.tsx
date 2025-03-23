// src/components/LoadingPage.tsx
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <PuffLoader color="#4B90D9" size={80} />
    </div>
  );
};

export default Loading;
