"use client";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post-api.service";
import { Divider } from "@nextui-org/react";
export default function PostDetails({ params }: { params: { slug: string } }) {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["postDetails"],
    queryFn: () => getPost(Number(params.slug)),
  });
  if (isLoading) {
    return <div>در حال دریافت اطلاعات...</div>;
  }
  if (isError) {
    return <div> {error.message}:ارور</div>;
  }
  return (
    <>
      <section className="max-w-4xl m-auto">
        <h1>{data?.title}</h1>
        <Divider className="my-4" />
        <p>{data?.body}</p>
      </section>
    </>
  );
}
