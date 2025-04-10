"use client";

import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChangerPage = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    "caramellatte",
    "abyss",
    "silk",
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {themes.map((t) => (
          <div
            key={t}
            className="bg-base-100 text-base-content w-full cursor-pointer border rounded-xl overflow-hidden"
            data-set-theme={t}
            data-theme={t}
          >
            <div className="grid grid-cols-5 grid-rows-3">
              <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
              <div className="bg-base-300 col-start-1 row-start-3"></div>
              <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                <p className="font-bold">{t}</p>
                <div className="flex flex-wrap gap-1">
                  <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-primary-content text-sm font-bold">
                      A
                    </div>
                  </div>
                  <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-secondary-content text-sm font-bold">
                      A
                    </div>
                  </div>
                  <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-accent-content text-sm font-bold">
                      A
                    </div>
                  </div>
                  <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-neutral-content text-sm font-bold">
                      A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThemeChangerPage;
