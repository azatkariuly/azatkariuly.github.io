"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    // const divRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }

        console.log('height', ref)
    }, [ref]);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            setHeight(entry.contentRect.height);
        }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
        if (containerRef.current) {
            observer.unobserve(containerRef.current);
        }
        };
    }, []);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
        className="w-full font-sans md:px-10"
        ref={containerRef}
        >
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
            <div
                key={index}
                className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-bold text-neutral-500 ">
                    {item.title}
                </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                    {item.title}
                </h3>
                {item.content}{" "}
                </div>
            </div>
            ))}
            <div
            style={{
                height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-neutral-200  "
            >
            <motion.div
                style={{
                height: heightTransform,
                opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-black via-black-100 to-transparent from-[0%] via-[10%] rounded-full"
            />
            </div>
        </div>
        </div>
    );
};