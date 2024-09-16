"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image: string;
    username: string;
    earned: string;
    money: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 md:max-w-full  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item ) => (
          <li
            className="w-[200px] h-[62px] md:h-[114px] rounded-[5px] flex-shrink-0  md:w-[316px] bg-white"
            key={item.id}
          >
              <div className="flex items-center justify-center py-[8.25px] px-[16.5px] gap-3">
                <div>
                    <Image src={item.image} width={46.2} height={46.2} alt="image"  className="relative z-20 text-sm leading-[1.6] md:w-[84px] md:h-[84px] text-gray-100 font-normal"/>
                </div>
                <div className="flex flex-col items-center">
                    <p className=" text-[12.1px] leading-[16.46px] md:text-[22px] md:leading-[29.92px] text-[#161c18] font-rubik font-semibold">
                        {item.username}
                    </p>
                    <p className=" text-sm md:text-[16px] md:leading-[21.76px] leading-[1.6] text-gray-400 font-normal">
                        {item.earned}
                        <span className="text-myGreen">
                            {item.money}
                        </span>
                    </p>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
