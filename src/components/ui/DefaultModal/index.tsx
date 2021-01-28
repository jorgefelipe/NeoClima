import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

interface IProps {
  size?: string;
  header?: string;
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void
}

const DefaultModal: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  children,
  header,
  size
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent p={10} w={{ base: '90%', md: size || '400px' }}>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DefaultModal;
