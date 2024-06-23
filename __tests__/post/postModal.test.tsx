import { IPostModel } from "@/app/post/models/i-post.model";
import PostModal from "@/app/post/postModal";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Post modal test wrapper", () => {
  let onOpenChange: () => void = () => {};
  let onClose: () => void = () => {};
  const handleSubmit = jest.fn();

  test("display post modal page", () => {
    render(
      <ReactQueryProvider>
        <PostModal
          isOpen={true}
          onClose={onClose}
          onOpenChange={onOpenChange}
          onChangeValue={handleSubmit}
        />
      </ReactQueryProvider>
    );
    expect(screen.getByText("New Post")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByTestId("postModalSubmitBtn")).toBeInTheDocument();
  });

  test("post modal form", async () => {
    const handleSubmit = jest.fn();
    render(
      <ReactQueryProvider>
        <PostModal
          isOpen={true}
          onClose={onClose}
          onOpenChange={onOpenChange}
          onChangeValue={handleSubmit}
        />
      </ReactQueryProvider>
    );
    const user = userEvent.setup();
    await user.type(screen.getByTestId("postModalTitleTextbox"), "foo");
    expect(
      (screen.getByTestId("postModalSubmitBtn") as HTMLButtonElement).disabled
    ).toBeTruthy();

    await user.type(screen.getByTestId("postModalBodyTextbox"), "bar");
    expect(
      (screen.getByTestId("postModalSubmitBtn") as HTMLButtonElement).disabled
    ).toBeFalsy();

    await user.click(screen.getByTestId("postModalSubmitBtn"));
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        title: "foo",
        body: "bar",
        userId: 1,
      })
    );
  });
});
