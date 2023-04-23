import Image from "next/image";
import { useEffect, useState } from "react";


type CardImageProps = {
  images: string[]
}


const CardImage = ({ images }: CardImageProps) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (currentImg < 1) {
        setCurrentImg(img => img + 1);
      } else {
        setCurrentImg(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <>
      <Image src={images[currentImg]} alt="Abyss Card Project" className="rounded-t-2xl h-[10rem]" width={350} height={0}/>
    </>
  );
}

export default CardImage;
