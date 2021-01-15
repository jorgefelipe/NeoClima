import { Button, ButtonProps } from '@chakra-ui/react';

const DefaultButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Button
    backgroundColor="primary"
    fontWeight="500"
    fontSize="h6"
    borderRadius="10px"
    color="secondary"
    _hover={{}}
    _focus={{}}
    {...rest}
  >
    {children}
  </Button>
);

export default DefaultButton;
