"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostData } from "./services/post-api.service";
import NextImage from "next/image";
import styles from "./styles.module.css";
import EditSvg from "@/public/edit.svg";
import type { PressEvent } from "@react-types/shared";
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
import { useState } from "react";
import { IPostModalValueModel } from "./models/i-post-modal-value.model";

export default function Posts() {
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalValue, setModalValue] = useState<IPostModel>();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });

  const openModalHandler = (
    e: PressEvent,
    editMode = false,
    post?: IPostModel
  ) => {
    setModalTitle(editMode ? "Edit Post" : "New Post");
    setModalValue(post || undefined);
    onOpen();
  };

  const modalValueHandler = (values: IPostModalValueModel) => {
    debugger;
  };

  if (isLoading) {
    return <div>در حال دریافت اطلاعات...</div>;
  }
  if (isError) {
    return <div> {error.message}:ارور</div>;
  }
  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-3xl">Posts</h1>
        <Button
          color="primary"
          isIconOnly
          variant="solid"
          onPress={openModalHandler}
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
                color="secondary"
                variant="bordered"
                isIconOnly
                aria-label="edit"
                onPress={(e) => openModalHandler(e, true, post)}
              >
                <Image
                  as={NextImage}
                  alt="nextui logo"
                  height={24}
                  radius="sm"
                  src={EditSvg.src}
                  width={24}
                />
              </Button>
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
      <PostModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        title={modalTitle}
        value={modalValue}
        onChangeValue={modalValueHandler}
      />
    </>
  );
}
