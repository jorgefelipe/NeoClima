import { Flex } from '@chakra-ui/react';
import  DefaultModal from 'components/ui/DefaultModal';
import ModalButton  from 'components/ui/ModalButton';
import {SecondaryText} from 'components/ui/Text';


export interface IProps {
  showAlertModal: boolean;
  setShowAlertModal(showAlertModal: boolean): void;
  onPressConfirm(): void;
  title: string;
  description: any;
  textButtonConfirm?: string;
  loading?: boolean;
  bgButtonConfirm?: string;
}

const AlertModal: React.FC<IProps> = ({
  showAlertModal,
  setShowAlertModal,
  onPressConfirm,
  title,
  description,
  textButtonConfirm,
  loading,
  bgButtonConfirm,
}) => {
  return (
    <DefaultModal
      header={title.charAt(0).toUpperCase() + title.slice(1)}
      isOpen={showAlertModal}
      setIsOpen={setShowAlertModal}
      size="400px"
    >
      <Flex flexDir="column">
        <SecondaryText color="gray" textAlign="justify">
          {description}
        </SecondaryText>
        <Flex justify="flex-end" mt="margin2x">
          <ModalButton onClick={() => setShowAlertModal(false)} color="grey">
            Cancelar
          </ModalButton>
          <ModalButton
            color="secondary"
            bg={bgButtonConfirm || 'danger'}
            onClick={onPressConfirm}
            ml={3}
            justifyContent="center"
            alignItems="center"
            display="flex"
            isLoading={loading}
          >
            {textButtonConfirm || 'Confirmar'}
          </ModalButton>
        </Flex>
      </Flex>
    </DefaultModal>
  );
};

export default AlertModal;
