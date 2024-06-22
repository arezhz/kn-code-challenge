import { IPostModel } from "../models/i-post.model";
import ApiService from "@/api";

export async function getPostData(): Promise<IPostModel[]> {
  const url = "posts";
  return await ApiService.Get(url);
}

export async function getPost(id: number): Promise<IPostModel> {
  const url = `posts/${id}`;
  return await ApiService.Get(url);
}

export async function createNewPost(body: IPostModel): Promise<IPostModel> {
  const url = "posts";
  return await ApiService.Post(url, body);
}
