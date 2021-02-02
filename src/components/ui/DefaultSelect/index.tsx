import Select, {
  Styles,
  Props as SelectProps,
  OptionTypeBase
} from 'react-select';
import makeAnimated from 'react-select/animated';

import { Flex, Box, Text, FlexProps } from '@chakra-ui/react';

import { theme } from 'styles/theme';

import { TextError } from '../Text';

interface IProps extends SelectProps<OptionTypeBase> {
  containerProps?: FlexProps
  errorMsg?: string
  label?: string
  labelColor?: string
  backgroundColor?: string
}

const DefaultSelect: React.FC<IProps> = ({
  containerProps,
  errorMsg,
  label,
  labelColor,
  backgroundColor
}) => {
  const animatedComponents = makeAnimated();
  const customStyle: Styles = {
    menu: provided => ({
      ...provided,
      zIndex: 3,
      color: labelColor || theme.colors.primary,
      fontSize: theme.fontSize.p,
      fontWeigth: '500'
    }),
    option: provided => ({
      ...provided,
      color: labelColor || theme.colors.primary,
      fontSize: theme.fontSize.p,
      fontWeigth: 500,
      background: theme.colors.transparent,
      active: {
        backgroud: theme.colors.ice
      },
      ':hover': {
        background: theme.colors.ice
      }
    }),
    singleValue: () => ({
      marginLeft: '5px',
      fontSize: theme.fontSize.p,
      fontWeigth: 'bold'
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused
        ? labelColor || theme.colors.primary
        : errorMsg
        ? theme.colors.danger
        : theme.colors.gray[300],
      boxShadow: 'none',
      borderRadius: 4,
      hover: {
        borderColor: state.isFocused
          ? labelColor || theme.colors.primary
          : errorMsg
          ? theme.colors.danger
          : theme.colors.gray[300]
      }
    }),
    input: provided => ({
      ...provided,
      padding: '8px',
      paddingLeft: '5px',
      paddingRigth: '5px',
      fontSize: theme.fontSize.p,
      fontWeigth: 800
    }),
    placeholder: () => ({
      color: theme.colors.gray[400],
      fontSize: theme.fontSize.p,
      fontWeight: 600,
      padding: '5px'
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: labelColor || theme.colors.primary,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      'hover': {
        backgroundColor: labelColor || theme.colors.primary,
        color: theme.colors.primary,
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: backgroundColor || 'rgba(22,150,185,0.08)',
      color: labelColor || theme.colors.primary,
      borderRadius: '14px',
      padding: '2px',
      paddingRight: theme.space.padding,
      paddingLeft: theme.space.padding,
      marginLeft: '5px',
      fontSize: theme.fontSize.p,
      fontWeight: 'bold',
    })
  };

  return (
    <Flex flexDir="column" my="margin" {...containerProps}>
      {label && (
        <Box>
          <Text
            color={errorMsg ? 'danger' : labelColor || 'primay'}
            fontSize="p"
            fontWeigth="500"
            position="absolute"
            top={-2}
            left={2}
            backgroundColor="secondary"
            pl="padding"
            pr="padding2x"
          >
            {label}
          </Text>
        </Box>
      )}
      <Select styles={customStyle}
      components={animatedComponents}
      noOptionsMessage={()=> 'Nada encontrado'}
      >
        {errorMsg && <TextError>{errorMsg}</TextError>}
      </Select>
    </Flex>
  );
};

export default DefaultSelect;
