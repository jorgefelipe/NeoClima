import { Button, ButtonProps } from '@chakra-ui/react';

const OutlineButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Button
    variant="outline"
    borderColor="primary"
    fontWeight="500"
    fontSize="h6"
    borderRadius="10px"
    color="primary"
    _hover={{}}
    _focus={{}}
    {...rest}
  >
    {children}
  </Button>
);
export default OutlineButton;
