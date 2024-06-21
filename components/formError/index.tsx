import { Image } from "@nextui-org/react";
import NextImage from 'next/image';
import InfoSvg from '@/public/info.svg';
type FormErrorProps = {
  error: string;
};
export default function FormError({ error }: FormErrorProps) {
  return (
    <span className="text-xs text-rose-500 flex gap-1">
      <Image
        as={NextImage}
        alt="nextui logo"
        height={16}
        radius="sm"
        src={InfoSvg.src}
        width={16}
      />
      {error}
    </span>
  );
}
