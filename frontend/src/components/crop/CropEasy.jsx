/* eslint-disable react/prop-types */
import React from "react";
import Cropper from "react-easy-crop";
function CropEasy({ photo }) {
  return (
    <div className="fixed z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto">
      <div className="bg-white h-fit w-full sm:max-w-[350px] rounded-lg">
        <h2 className="font-semibold text-darK-hard mb-2">Crop Image</h2>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Cropper image={photo?.url} />
        </div>
      </div>
    </div>
  );
}

export default CropEasy;
