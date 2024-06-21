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

export default function PostModal({ isOpen, onOpenChange, title }: any) {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: postMocalSchema,
    onSubmit: async (values) => {
      debugger
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <form onSubmit={handleSubmit}>
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
                {touched.title && errors.title && <FormError error={errors.title} />}
                <Textarea
                  name="body"
                  label="Description"
                  placeholder="Enter your post description"
                  variant="bordered"
                  value={values.body}
                  onChange={handleChange}
                />
                {touched.body && errors.body && <FormError error={errors.body} />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
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
