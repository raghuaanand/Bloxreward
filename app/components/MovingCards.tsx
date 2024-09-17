"use client";

import React  from "react";
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
      "/user1.svg",
    username: "rag****and",
    earned: "Just earned ",
    money: "$15"
  },
  {
    id: 1,
    image:
      "/user2.svg",
    username: "rag****and",
    earned: "Just earned ",
    money: "$09"
  },
  {
    id: 1,
    image: "/user3.svg",
    username: "rag****and",
    earned: "Just earned ",
    money: "$11"
  },
  {
    id: 1,
    image:
      "/user4.svg",
    username: "rag****and",
    earned: "Just earned ",
    money: "$21"
  },
  {
    id: 1,
    image:
      "/user2.svg",
    username: "rag****and",
    earned: "Just earned ",
    money: "$18"
  },
];
