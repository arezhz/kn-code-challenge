import {
  Input,
  Modal,
  Textarea,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { postMocalSchema } from "./schema/postModal.schema";
import FormError from "@/components/formError";
import { IPostModalPropsModel } from "./models/i-post-modal-props.model";
import { IPostModalValueModel } from "./models/i-post-modal-value.model";

export default function PostModal({
  isOpen,
  onOpenChange,
  onClose,
  onChangeValue,
}: IPostModalPropsModel) {
  const closeModal = () => {
    formik.resetForm();
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    enableReinitialize: true,
    validateOnBlur: true,
    validationSchema: postMocalSchema,
    onSubmit: async (values: IPostModalValueModel) => {
      onChangeValue({
        userId: 1,
        ...values,
      });
      closeModal();
    },
  });
  const { errors, touched, values, handleChange, handleSubmit, handleBlur } =
    formik;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">New Post</ModalHeader>
            <form onSubmit={handleSubmit} onBlur={handleBlur}>
              <ModalBody>
                <Input
                  autoFocus
                  name="title"
                  label="Title"
                  value={values.title}
                  placeholder="Enter your post title"
                  variant="bordered"
                  onChange={handleChange}
                />
                {touched.title && errors.title && (
                  <FormError error={errors.title} />
                )}
                <Textarea
                  name="body"
                  label="Description"
                  placeholder="Enter your post description"
                  variant="bordered"
                  value={values.body}
                  onChange={handleChange}
                />
                {touched.body && errors.body && (
                  <FormError error={errors.body} />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={closeModal}>
                  Close
                </Button>
                <Button
                  color="primary"
                  isDisabled={!formik.isValid}
                  type="submit"
                >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
