import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

interface IProps {
  size?: string
  header?: string
  isOpen: boolean
  setIsOpen(isOpen: boolean): void
}

const DeafaultModal: React.FC<IProps> = ({
  size,
  isOpen,
  children,
  setIsOpen,
  header
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent pb={5} w={{ base: '90%', md: size || '400px' }}>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeafaultModal;
