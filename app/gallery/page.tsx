"use client";
import { Button } from "@/components/ui/button";
import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import { HiArrowUpTray } from "react-icons/hi2";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const GalleryPage = () => {
  const [imageId, setImageId] = useState("");

  return (
    <section className="w-full px-8 pt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <div className="flex gap-2">
            <HiArrowUpTray />
            <CldUploadButton
              onUpload={(result: UploadResult) => {
                setImageId(result.info.public_id);
              }}
              uploadPreset="jvx7vpw1"
            />
          </div>
        </Button>
      </div>

      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </section>
  );
};

export default GalleryPage;
