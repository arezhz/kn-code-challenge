import { IPostModel } from "../models/i-post.model";

export async function getPostData(): Promise<IPostModel[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export async function getPost(id: number): Promise<IPostModel> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
}

export async function createNewPost(body: IPostModel): Promise<IPostModel> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
}

