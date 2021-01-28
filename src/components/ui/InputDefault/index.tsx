import { useState } from 'react';
import { IconType } from 'react-icons';
import InputMask from 'react-input-mask';

import { Flex, Box, Text, Input, FlexProps, InputProps } from '@chakra-ui/react';
import { TextError } from 'components/ui/Text';
export interface DefaultInputProps extends InputProps {
  containerProps?: FlexProps
  labelColor?: string
  bgLabelColor?: string
  label?: string
  errorMsg?: string
  maskPlaceholder?: string
  register?: any
  mask?: string | (string | RegExp)[]
  iconRigth?: IconType
  fillIcon?: string
  onPressIconRigth?(): void
}

const InputDefault: React.FC<DefaultInputProps> = ({
  containerProps,
  labelColor,
  bgLabelColor,
  label,
  errorMsg,
  register,
  mask,
  maskPlaceholder,
  iconRigth,
  onPressIconRigth,
  fillIcon,
  onChange,
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Flex flexDir="column" margin="margin">
      {label && (
        <Box position="relative">
          <Text
            color={errorMsg ? 'danger' : labelColor || 'primary'}
            fontSize="p"
            fontWeight="500"
            position="absolute"
            top={2}
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
        border="1px solid "
        borderColor={errorMsg ? 'danger' : isFocused ? labelColor : 'gray.200'}
        borderReadiu="4px"
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
            variant="undstyled"
            fontSize="p"
            fontWeigth="800"
            _placeHolder={{
              fontSize: 'p',
              fontWeigth: '600'
            }}
            {...rest}
          ></Input>
        </InputMask>
        {iconRigth && (
          <Box as={iconRigth} onClick={onPressIconRigth} fill={fillIcon} />
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

export default InputDefault;
