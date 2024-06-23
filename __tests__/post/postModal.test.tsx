import { IPostModel } from "@/app/post/models/i-post.model";
import PostModal from "@/app/post/postModal";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import { render, screen } from "@testing-library/react";

describe("Post modal test wrapper", () => {
  let onOpenChange: () => void = () => {};
  let onClose: () => void = () => {};
  const modalValueHandler = (values: IPostModel) => {
    return values;
  };

  test("display posts page", () => {
    render(
      <ReactQueryProvider>
        <PostModal
          isOpen={true}
          onClose={onClose}
          onOpenChange={onOpenChange}
          onChangeValue={modalValueHandler}
        />
      </ReactQueryProvider>
    );
    expect(screen.getByText("New Post")).toBeInTheDocument();
  });
});
