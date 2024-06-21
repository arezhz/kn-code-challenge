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

export default function PostModal({ isOpen, onOpenChange, title }: any) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Title"
                placeholder="Enter your post title"
                variant="bordered"
              />
              <Textarea
                label="Description"
                placeholder="Enter your post description"
                variant="bordered"
              />
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
