import React, { useState } from 'react';
import { IconType } from 'react-icons';
import InputMask from 'react-input-mask';


import { Flex, Text, Input, Box, InputProps, FlexProps } from '@chakra-ui/react';
import {TextError} from 'components/ui/Text';


export interface DefaultInputProps extends InputProps {
  containerProps?: FlexProps;
  labelColor?: string;
  bgLabelColor?: string;
  label?: string;
  errorMsg?: string;
  maskPlaceholder?: string;
  register?: any;
  mask?: string | (string | RegExp)[];
  IconRight?: IconType;
  fillIcon?: string;
  onPressIconRight?(): void;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  containerProps,
  labelColor,
  bgLabelColor,
  label,
  errorMsg,
  register,
  mask,
  maskPlaceholder,
  IconRight,
  onPressIconRight,
  fillIcon,
  onChange,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Flex flexDir="column" my="margin" {...containerProps}>
      {label && (
        <Box position="relative">
          <Text
            color={errorMsg ? 'danger' : labelColor || 'primary'}
            fontSize="p"
            fontWeight="500"
            position="absolute"
            top={-2}
            left={2}
            backgroundColor={bgLabelColor || 'secondary'}
            pl="padding"
            pr="padding2x"
          >
            {label}
          </Text>
        </Box>
      )}
      <Flex
        border="1px solid"
        borderColor={
          errorMsg
            ? 'danger'
            : isFocused
            ? labelColor || 'primary'
            : 'gray.200'
        }
        borderRadius="4px"
        p="padding"
      >
        <InputMask
          mask={mask || ''}
          maskPlaceholder={maskPlaceholder || null}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          value={value}
        >
          <Input
            ref={register}
            variant="unstyled"
            fontSize="p"
            fontWeight="800"
            _placeholder={{
              fontSize: 'p',
              fontWeight: '600',
            }}
            {...rest}
          />
        </InputMask>
        {IconRight && (
          <Box as={IconRight} onClick={onPressIconRight} fill={fillIcon} />
        )}
      </Flex>
      {errorMsg && (
        <TextError fontSize="p" color="danger" fontWeight="400">
          {errorMsg}
        </TextError>
      )}
    </Flex>
  );
};

export default DefaultInput;
