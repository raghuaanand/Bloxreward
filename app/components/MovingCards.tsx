"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-[200px] rounded-md flex flex-col antialiased bg-[#fcf9f9]  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    image:
      "/sliding_img.png",
    username: "rag****and",
    earned: "Just earned ",
    money: "$15"
  },
  {
    id: 1,
    image:
      "/sliding_img2.png",
    username: "rag****and",
    earned: "Just earned ",
    money: "$09"
  },
  {
    id: 1,
    image: "/sliding_img.png",
    username: "rag****and",
    earned: "Just earned ",
    money: "$11"
  },
  {
    id: 1,
    image:
      "/sliding_img2.png ",
    username: "rag****and",
    earned: "Just earned ",
    money: "$21"
  },
  {
    id: 1,
    image:
      "/sliding_img.png",
    username: "rag****and",
    earned: "Just earned ",
    money: "$18"
  },
];
