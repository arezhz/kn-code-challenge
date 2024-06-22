"use client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPost } from "../services/post-api.service";
import { Button, Image, Divider, Link } from "@nextui-org/react";
import ArrowBackSvg from "@/public/arrow_back.svg";
import NextImage from "next/image";
import PostDetailsSkeletonLoading from "./postDetailsSkeletonLoading";
import { IPostModel } from "../models/i-post.model";
import { AxiosError } from "axios";
import Error from "@/app/error";

export default function PostDetails({ params }: { params: { slug: string } }) {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<IPostModel, AxiosError<unknown, any>> = useQuery({
    queryKey: ["postDetails"],
    queryFn: () => getPost(Number(params.slug)),
  });
  if (isError) {
    return <Error error={error} />;
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
