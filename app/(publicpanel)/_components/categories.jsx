"use client"
import { FcMultipleDevices } from "react-icons/fc"
import { FaPython } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdLanguage, MdSecurity } from "react-icons/md";
import { SiBlockchaindotcom, SiGooglemarketingplatform, SiThealgorithms } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";
import { cn } from "@/lib/utils";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const CategoryItem = ({ id, label, icon: Icon, value }) => {


  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategoryId = searchParams.get("categoryId")
  const currentTitle = searchParams.get('title')

  const isSelect = currentCategoryId === value


  const onClick = () => {
    const url = queryString.stringifyUrl({
      url: pathname,
      query: {
        title: currentTitle,
        categoryId: isSelect ? null:value,
      }
    }, { skipNull: true, skipEmptyString: true })

    router.push(url)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 rounded-full flex gap-x-1 hover:border-sky-600 transition",
        isSelect && "border-sky-700 bg-sky-200/20 text-sky-800 dark:text-sky-100"
      )}
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

const IconMap = {
  "Development": FcMultipleDevices,
  "Data Science with Python": FaPython,
  "Artificial Intelligence": GiArtificialIntelligence,
  "Programming": MdLanguage,
  "Security": MdSecurity,
  "Blockchain": SiBlockchaindotcom,
  "Marketing": SiGooglemarketingplatform,
  "Cloud Computing": TbCloudComputing,
  "Data Structures & Algorithms": SiThealgorithms,
  "Software Engineering": GrCloudSoftware,
};

const Categories = ({ items }) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2 my-2">
      {items.map((item) => (
        <CategoryItem
          key={item._id}
          id={item._id}
          label={item.name}
          icon={IconMap[item.name]}
          value={item._id}
        />
      ))}
    </div>
  );
};

export default Categories;
