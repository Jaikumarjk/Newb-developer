"use client";
import apps from "@/data/products.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface product {
        id : number,
        title : string,
        description : string,
        isFeature : boolean
    }
function Products() {
  const productList = apps.lists.filter((list:product) => list.isFeature) 
  return (
    <div className="py-12 bg-gray-900">
    <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED APP</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Experience innovation at your fingertips with our app solutions.</p>
        </div>
    </div>
    <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
            {productList.map((prod:product) => (
                <div key={prod.id} className="flex justify-center">
                    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{prod.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{prod.description}</p>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
    </div>
</div>
  );
}
export default Products;
