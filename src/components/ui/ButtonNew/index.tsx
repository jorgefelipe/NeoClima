import { IoIosAddCircleOutline } from 'react-icons/io';

import { ButtonProps } from '@chakra-ui/react';
import OutlineButton from 'components/ui/OutlineButton';

const ButtonNew: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <OutlineButton
      leftIcon={
        <IoIosAddCircleOutline size="22px" style={{ marginRight: 5 }} />
      }
      w="157px"
      h="51px"
      borderRadius="8px"
      borderColor="primaryDark"
      color="primaryDark"
      fontSize="h4"
      {...rest}
    >
      {children}
    </OutlineButton>
  );
};

export default ButtonNew;
