import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPostData } from "../services/post-api.service";
import { AxiosError } from "axios";
import { IPostModel } from "../models/i-post.model";

export function usePostHook(): UseQueryResult<
  IPostModel[],
  AxiosError<unknown, any>
> {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });
}
