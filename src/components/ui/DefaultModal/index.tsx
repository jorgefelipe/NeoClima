import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody
} from '@chakra-ui/react';

interface IProps {
  size?: string
  header?: string
  isOpen: boolean
  setIsOpen(isOpen: boolean): void
}

const DefaultModal: React.FC<IProps> = ({
  size,
  isOpen,
  children,
  header,
  setIsOpen
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent pb={5} w={{ base: '90%', md: size || '400px' }}>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DefaultModal;
