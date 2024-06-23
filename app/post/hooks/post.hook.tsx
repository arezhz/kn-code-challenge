import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  createNewPost,
  getPost,
  getPostData,
} from "../services/post-api.service";
import { AxiosError } from "axios";
import { IPostModel } from "../models/i-post.model";
import { toast } from "react-toastify";

export function useGetPostsHook(): UseQueryResult<
  IPostModel[],
  AxiosError<unknown, any>
> {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });
}
export function useGetPostDetailsHook(
  param: string
): UseQueryResult<IPostModel, AxiosError<unknown, any>> {
  return useQuery({
    queryKey: ["postDetails"],
    queryFn: () => getPost(Number(param)),
  });
}

export function useMutationPostHook(): UseMutationResult<
  IPostModel,
  Error,
  IPostModel,
  unknown
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewPost,
    onSuccess: () => {
      toast.success("Mission accomplished");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
}
