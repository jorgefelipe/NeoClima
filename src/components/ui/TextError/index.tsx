import {Text, BoxProps} from '@chakra-ui/react';

export const TextError: React.FC<BoxProps> = ({children, ...rest})=>(
  <Text fontSize="p" color="danger" fontWeight="400" {...rest}>
    {children}
  </Text>
);
