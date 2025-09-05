"use client";

import IconBadge from "@/components/icon-badge";
import { formatDuration, formatPrice } from "@/lib/format";
import { Clock, ListCheck, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const CourseCard = ({ key, title, id, image, prerequisites, fee, enrollmentLimit, category, duration }) => {
  return (
    <Link href={`course/${id}`}>
      <div className="group hover:shadow:sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          {/* <Image fill className="object-cover" alt={title} src={image}/> */}
          <Image
            fill
            className="object-cover"
            alt={title}
            src={image && image.length ? (image.startsWith("http") || image.startsWith("/") ? image : `/${image}`) : "/images/placeholder.png"}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base capitalize font-medium group  transition dark:group hover:text-sky-500 line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">
            {category}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={UserCheck} className=" text-sky-600" />
              <span>
                {enrollmentLimit} Seats Only
              </span>
            </div>

            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={Clock} className=" text-sky-600" />
              <span>
                {formatDuration(duration)}
              </span>
            </div>

            
          </div>

           <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={ListCheck}/>
              <span className="truncate">
                {prerequisites}
              </span>
            </div>
          {/* display fees  */}

          <p className="text-md md:text-sm font-medium text-slate-700">
            {formatPrice(fee)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard
