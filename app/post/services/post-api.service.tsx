import { IPostModel } from "../models/i-post.model";
import ApiService from "@/api";

export async function getPostData(): Promise<IPostModel[]> {
  const url = "postasdsads";
  return await ApiService.Get(url);
}

export async function getPost(id: number): Promise<IPostModel> {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/888`);
  // const t = await res.json();
  // return await res.json();
  const url = "posts/888";
  return await ApiService.Get(url);
}

export async function createNewPost(body: IPostModel): Promise<IPostModel> {
  const url = "posts";
  return await ApiService.Post(url, body);
}
