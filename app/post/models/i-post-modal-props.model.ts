import { IPostModalValueModel } from "./i-post-modal-value.model";
import { IPostModel } from "./i-post.model";

export interface IPostModalPropsModel {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  title: string;
  value?: IPostModel;
  onChangeValue: (value: IPostModalValueModel) => void;
}
