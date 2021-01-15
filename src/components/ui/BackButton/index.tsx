import { FaArrowCircleLeft } from 'react-icons/fa';

import {Link, Flex, Text, LinkProps, Box} from '@chakra-ui/react';

interface IProps extends LinkProps{
  color?: string;
}

const BackButton: React.FC<IProps> = ({color, ...rest})=>(
  <Link {...rest} color={color || 'primary'} zIndex={3} >
    <Flex align="center">
      <Box as={FaArrowCircleLeft} mr="magin" color={color || 'primary'} size="30px" />
      <Text color={color || 'primary'} fontWeight="400" fontSize="h4">
        Voltar
      </Text>
    </Flex>
  </Link>
);

export default BackButton;
