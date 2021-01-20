import { useRef, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import {
  Button,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { SecondaryText } from 'components/ui';

import { theme } from 'styles/theme';

interface IProps {
  options: Array<{ label: string; danger?: boolean; safe?: boolean }>;
  onPressOptions(index: number): void;
}

const PopoverDotsThree: React.FC<IProps> = ({ options, onPressOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef(null);
  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      placement="left-start"
      initialFocusRef={refButton}
    >
      <PopoverTrigger>
        <Button
          variant="unstyled"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{ bg: 'gray.200' }}
          _focus={{}}
          w="0"
          borderRadius="full"
        >
          <BsThreeDotsVertical size="20px" color={theme.colors.primary} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
       zIndex={4} border="0"
       >
        <Flex flexDir="column" p="padding">
          {options.map((item, index) => (
            <Button
              ref={refButton}
              variant="unstyled"
              display="flex"
              justifyContent="center"
              key={index.toString()}
              onClick={() => {
                onPressOptions(index);
                setIsOpen(false);
              }}
              _hover={{ bg: 'ice' }}
              _focus={{}}
              p="padding"
              borderBottom={index !== options.length - 1 ? '1px solid' : 'none'}
              borderColor="gray.300"
            >
              <SecondaryText
                color={
                  item.danger ? 'danger' : item.safe ? 'primary' : undefined
                }
              >
                {item.label}
              </SecondaryText>
            </Button>
          ))}
        </Flex>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDotsThree;
