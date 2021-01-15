import {Text, TextProps } from '@chakra-ui/react';

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
