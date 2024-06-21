"use client";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post-api.service";
import { Button, Image, Divider, Link } from "@nextui-org/react";
import ArrowBackSvg from "@/public/arrow_back.svg";
import NextImage from "next/image";
import PostDetailsSkeletonLoading from "./postDetailsSkeletonLoading";

export default function PostDetails({ params }: { params: { slug: string } }) {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["postDetails"],
    queryFn: () => getPost(Number(params.slug)),
  });
  if (isError) {
    return <div> {error.message}:ارور</div>;
  }
  return (
    <>
      {isLoading ? (
        <PostDetailsSkeletonLoading />
      ) : (
        <section className="max-w-4xl m-auto">
          <div className="flex justify-between items-center">
            <h1>{data?.title}</h1>
            <Button
              href={`/post`}
              as={Link}
              color="secondary"
              isIconOnly
              variant="bordered"
            >
              <Image
                as={NextImage}
                alt="nextui logo"
                height={24}
                radius="sm"
                src={ArrowBackSvg.src}
                width={24}
              />
            </Button>
          </div>
          <Divider className="my-4" />
          <p>{data?.body}</p>
        </section>
      )}
    </>
  );
}
