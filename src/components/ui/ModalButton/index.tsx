import { Button, ButtonProps } from '@chakra-ui/react';

const ModalButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Button
    color="primary"
    fontSize="p"
    fontWeight="600"
    p="padding"
    textTransform="uppercase"
    variant="unstyled"
    _hover={{}}
    _focus={{}}
    {...rest}
  >
    {children}
  </Button>
);

export default ModalButton;
