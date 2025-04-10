import ThemeChanger from "@/components/theme-changer";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ThemeChanger />
      <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
        <div className="font-bold">light</div>
        <div className="flex flex-wrap gap-1">
          <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div className="text-primary-content text-sm font-bold">A</div>
          </div>
          <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div className="text-secondary-content text-sm font-bold">A</div>
          </div>
          <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div className="text-accent-content text-sm font-bold">A</div>
          </div>
          <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div className="text-neutral-content text-sm font-bold">A</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
