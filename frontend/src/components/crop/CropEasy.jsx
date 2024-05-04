/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./CropImage";

function CropEasy({ photo, setOpenCrop }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [CropAreaPixels, setCropAreaPixels] = useState(null);
  const handleCropComplete = (cropArea, cropAreaPixels) => {
    setCropAreaPixels(cropAreaPixels);
  };
  const handleCropImage = async () => {
    try {
      const croppedImg = await getCroppedImg(photo?.url, CropAreaPixels);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="fixed-z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto">
      <div className="bg-white h-fit w-full max-w-[350px] p-5 rounded-lg">
        <h2 className="font-semibold text-darK-hard mb-2">Crop Image</h2>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Cropper
            image={photo?.url}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onZoomChange={setZoom}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
          />
        </div>
        <div>
          <label
            htmlFor="zoomRange"
            className="block mt-2 mb-0.5 text-sm font-medium text-gray-900"
          >
            Zoom : {`${Math.round(zoom * 100)}%`}
          </label>
          <input
            type="range"
            name=""
            id="zoomRange"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => {
              setZoom(e.target.value);
            }}
            className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
          />
        </div>
        <div className="flex justify-between gap-2 flex-wrap">
          <button
            onClick={() => setOpenCrop(false)}
            className="px-5 py-2.5 rounded-lg text-red-500 border-red-500 text-sm disabled:opacity-70"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleCropImage;
            }}
            className="px-5 py-2.5 rounded-lg text-blue-500 bg-blue-500 text-sm disabled:opacity-70"
          >
            Crop & Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropEasy;
