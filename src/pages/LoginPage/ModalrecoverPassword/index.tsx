
import { DefaultModal, SecondaryText } from 'components/ui';

interface IProps {
  showModal: boolean
  setShowModal(showModal: boolean): void
}

const ModalRecoverPassword: React.FC<IProps> = ({
  showModal,
  setShowModal
}) => {
  return (
    <DefaultModal isOpen={showModal} setIsOpen={setShowModal}>
      <SecondaryText>informe o email para trocar senha</SecondaryText>
    </DefaultModal>
  );
};
export default ModalRecoverPassword;
