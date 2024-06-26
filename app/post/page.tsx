"use client";
import { UseQueryResult } from "@tanstack/react-query";
import NextImage from "next/image";
import styles from "./styles.module.css";
import VisibilitySvg from "@/public/visibility.svg";
import AddSvg from "@/public/add.svg";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Divider,
  Link,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { IPostModel } from "./models/i-post.model";
import PostModal from "./postModal";
import PostSkeletonLoading from "./postSkeletonLoading";
import Error from "@/app/error";
import { AxiosError } from "axios";
import { useGetPostsHook, useMutationPostHook } from "./hooks/post.hook";

export default function Posts() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<IPostModel[], AxiosError<unknown, any>> = useGetPostsHook();

  const mutation = useMutationPostHook();

  const modalValueHandler = (values: IPostModel) => {
    mutation.mutate(values);
  };

  if (isError) {
    return <Error error={error} />;
  }
  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-3xl">Posts</h1>
        <Button
          data-testid="openNewPostModal"
          color="primary"
          isIconOnly
          variant="solid"
          onPress={onOpen}
        >
          <Image
            as={NextImage}
            alt="nextui logo"
            height={24}
            radius="sm"
            src={AddSvg.src}
            width={24}
          />
        </Button>
      </section>
      <Divider className="my-4" />
      {isLoading ? (
        <PostSkeletonLoading />
      ) : (
        <>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data!.map((post: IPostModel) => (
              <Card shadow="sm" key={post.id}>
                <CardHeader>
                  <Link href={`/post/${post.id}`} className="text-black">
                    <h6 className={styles.title}>{post.title}...</h6>
                  </Link>
                </CardHeader>
                <Divider />

                <CardFooter className="flex gap-1 justify-end">
                  <Button
                    href={`/post/${post.id}`}
                    as={Link}
                    color="primary"
                    isIconOnly
                    variant="bordered"
                  >
                    <Image
                      as={NextImage}
                      alt="nextui logo"
                      height={24}
                      radius="sm"
                      src={VisibilitySvg.src}
                      width={24}
                    />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        </>
      )}
      <PostModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        onChangeValue={modalValueHandler}
      />
    </>
  );
}
