import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Post from "@/app/post/page";
import { renderHook, waitFor } from "@testing-library/react";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import {
  useGetPostsHook,
  useMutationPostHook,
} from "@/app/post/hooks/post.hook";
import { log } from "console";

describe("Post page test wrapper", () => {
  test("isSuccess ['posts'] queryKey", async () => {
    const { result } = renderHook(() => useGetPostsHook(), {
      wrapper: ReactQueryProvider,
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data![0].id).toBe(1));
  });

  test("display posts page", async () => {
    render(
      <ReactQueryProvider>
        <Post />
      </ReactQueryProvider>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Posts");
  });

  test("display new post modal", async () => {
    render(
      <ReactQueryProvider>
        <Post />
      </ReactQueryProvider>
    );
    fireEvent.click(screen.getByTestId("openNewPostModal"));
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });

  test("mutation new post", async () => {
    const { result } = renderHook(() => useMutationPostHook(), {
      wrapper: ReactQueryProvider,
    });
    act(() => {
      result.current.mutate({
        title: "foo",
        body: "bar",
        userId: 1,
      });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
