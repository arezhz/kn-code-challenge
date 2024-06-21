"use client";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post-api.service";

export default function PostDetails({ params }: { params: { slug: string } }) {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPost(Number(params.slug)),
  });
  if (isLoading) {
    return <div>در حال دریافت اطلاعات...</div>;
  }
  if (isError) {
    return <div> {error.message}:ارور</div>;
  }
    return <div>My Post: {data!.body}</div>
  }