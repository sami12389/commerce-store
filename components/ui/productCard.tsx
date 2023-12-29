"use client"
import { Expand, ShoppingCart } from "lucide-react";
import IconButton  from "@/components/ui/iconButton";
import Currency  from "@/components/ui/currency";
import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps{
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
  const onAddToCart = () => {}
  const onPreview = () => {}
  return (
    <div className = "bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* IMAGES AND ACTIONS */}
        <div className = "aspect-square rounded-xl bg-gray-100 relative">
            <Image 
            src = {data?.images?.[0]?.url}
            fill
            alt = "Image"
            className = "apsect-square object-cover rounded-md"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
        </div>
  )
}

export default ProductCard