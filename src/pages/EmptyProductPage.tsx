// src/components/EmptyProductPage.tsx
import { FaExclamationTriangle } from "react-icons/fa";

const EmptyProductPage = ({ title }: { title?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <FaExclamationTriangle size={100} className="text-red-500 mb-4" />
      <div className="text-2xl font-semibold text-red-500">
        {title || "No Product Found"}
      </div>
    </div>
  );
};

export default EmptyProductPage;
