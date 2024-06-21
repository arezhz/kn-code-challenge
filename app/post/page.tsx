"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewPost, getPostData } from "./services/post-api.service";
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
import { toast } from "react-toastify";
import PostSkeletonLoading from "./services/postSkeletonLoading";

export default function Posts() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });

  const mutation = useMutation({
    mutationFn: createNewPost,
    onSuccess: () => {
      toast.success("Mission accomplished");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      toast.error("An unexpected error occurred");
    },
  });
  const modalValueHandler = (values: IPostModel) => {
    mutation.mutate(values);
  };

  // if (isLoading) {
  //   return <div>در حال دریافت اطلاعات...</div>;
  // }
  if (isError) {
    return <div> {error.message}:ارور</div>;
  }
  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-3xl">Posts</h1>
        <Button color="primary" isIconOnly variant="solid" onPress={onOpen}>
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
