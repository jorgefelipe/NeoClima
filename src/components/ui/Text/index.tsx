import { Text, TextProps, BoxProps } from '@chakra-ui/react';

export const Title: React.FC<TextProps> = ({ children, ...rest }) => (
  <Text
    fontSize="h1"
    color="primary"
    textAlign="center"
    fontWeight="700"
    lineHeight="40px"
    {...rest}
  >
    {children}
  </Text>
);

export const TextError: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Text fontSize="p" color="danger" fontWeight="400" {...rest}>
    {children}
  </Text>
);

export const SubTitle: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Text
    fontSize="h5"
    color="primary"
    textAlign="center"
    textTransform="uppercase"
    fontWeight="700"
    {...rest}
  >
    {children}
  </Text>
);

export const PrimaryText: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Text
    fontSize="h6"
    color="primary"
    textAlign="center"
    fontWeight="400"
    {...rest}
  >
    {children}
  </Text>
);

export const SecondaryText: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Text
    fontSize="h6"
    color="primary"
    textAlign="center"
    fontWeight="400"
    {...rest}
  >
    {children}
  </Text>
);
