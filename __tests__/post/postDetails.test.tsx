import PostDetails from "@/app/post/[slug]/page";
import { useGetPostDetailsHook } from "@/app/post/hooks/post.hook";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import { render, renderHook, waitFor, screen } from "@testing-library/react";

describe("Post details page test wrapper", () => {
  test("isSuccess ['postDetails'] queryKey", async () => {
    const { result } = renderHook(() => useGetPostDetailsHook("1"), {
      wrapper: ReactQueryProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data!.id).toBe(1));
  });

  test("post detail page element", async () => {
    render(
      <ReactQueryProvider>
        <PostDetails params={{ slug: "1" }} />
      </ReactQueryProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
