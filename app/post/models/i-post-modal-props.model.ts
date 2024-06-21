import { IPostModel } from "./i-post.model";

export interface IPostModalPropsModel {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  onChangeValue: (value: IPostModel) => void;
}
