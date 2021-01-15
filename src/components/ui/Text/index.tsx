import {Text, TextProps, BoxProps } from '@chakra-ui/react';

export const Title: React.FC<TextProps> = ({ children, ...rest }) => (
  <Text
    fontSize="h1"
    color="ice"
    textAlign="center"
    fontWeight="700"
    lineHeight="40px"
    {...rest}
  >
    {children}
  </Text>
);

export const TextError: React.FC<BoxProps> = ({children, ...rest})=>(
  <Text fontSize="p" color="danger" fontWeight="400" {...rest}>
    {children}
  </Text>
);
