import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon: Array<string>;
  link: string;
}) => {
  return (
    <Link href={link}>
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border-2 justify-between flex flex-col space-y-4",
                className
            )}
        >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 mb-2 mt-2">
                {title}
            </div>
            <div className="my-2 flex gap-1">
                {icon.map((item:string, idx:number) => (
                    <Image key={idx} width={16} height={16} src={item} alt=""/>
                ))}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs">
                {description}
            </div>
        </div>
        </div>
    </Link>
  );
};