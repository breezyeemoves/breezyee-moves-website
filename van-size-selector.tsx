"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Truck } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface VanSizeOption {
  id: string
  name: string
  description: string
  capacity: string
  images: string[]
}

interface VanSizeSelectorProps {
  selectedSize: string
  onChange: (value: string) => void
}

export default function VanSizeSelector({ selectedSize, onChange }: VanSizeSelectorProps) {
  const vanSizes: VanSizeOption[] = [
    {
      id: "small",
      name: "Small Van (Citroen Berlingo)",
      description: "Perfect for small moves, single items, or studio flats",
      capacity: "Up to 400 cubic feet",
      images: [
        "/small-van-front.jpeg",
        "/small-van-rear.jpeg",
        "/small-van-side-door.jpeg",
        "/small-van-interior-rear.jpeg",
        "/small-van-interior-side.jpeg",
      ],
    },
    {
      id: "medium",
      name: "Medium Van",
      description: "Ideal for 1-2 bedroom flats or multiple large items",
      capacity: "Up to 650 cubic feet",
      images: ["/medium-van-front.jpeg", "/medium-van-side.jpeg", "/medium-van-rear.jpeg", "/medium-van-interior.jpeg"],
    },
    {
      id: "large",
      name: "Large Van (Mercedes-Benz Sprinter)",
      description: "Suitable for 2-3 bedroom houses or large office moves",
      capacity: "Up to 1000 cubic feet",
      images: [
        "/large-van-exterior.jpeg",
        "/large-van-interior-1.jpeg",
        "/large-van-interior-2.jpeg",
        "/large-van-interior-3.jpeg",
      ],
    },
    {
      id: "luton",
      name: "Luton Van (Mercedes-Benz)",
      description: "Perfect for larger house moves or commercial relocations",
      capacity: "Up to 1400 cubic feet",
      images: ["/luton-van-hire.jpeg"],
    },
  ]

  // Safe handler for onChange
  const handleChange = (value: string) => {
    if (typeof onChange === "function") {
      onChange(value)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select Van Size</h3>
      <p className="text-sm text-muted-foreground mb-4">
        All our vans feature automatic transmission for easy driving.
      </p>
      <RadioGroup
        value={selectedSize}
        onValueChange={handleChange}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {vanSizes.map((van) => (
          <div key={van.id} className="relative">
            <RadioGroupItem value={van.id} id={van.id} className="peer sr-only" />
            <Label
              htmlFor={van.id}
              className="flex flex-col h-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
            >
              <div className={`relative ${van.id === "luton" ? "h-36" : "h-32"} mb-4 overflow-hidden rounded-md`}>
                {(van.id === "medium" || van.id === "small" || van.id === "large") && van.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {van.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative h-32 w-full">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${van.name} - View ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="h-8 w-8 -left-3" />
                    <CarouselNext className="h-8 w-8 -right-3" />
                  </Carousel>
                ) : (
                  <Image
                    src={van.images[0] || "/placeholder.svg"}
                    alt={van.name}
                    fill
                    className={`object-cover ${van.id === "luton" ? "object-center" : ""}`}
                  />
                )}
              </div>
              <div className="font-semibold">{van.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{van.description}</div>
              <div className="flex items-center mt-2 text-sm font-medium">
                <Truck className="h-4 w-4 mr-1" />
                {van.capacity}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
