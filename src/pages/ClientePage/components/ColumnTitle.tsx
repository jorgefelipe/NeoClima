import { Grid } from '@chakra-ui/react';
import { SecondaryText } from 'components/ui';

const ColumnTitleTable: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="20% repeat(3, 15%) 5%"
      bg="ice"
      justifyContent="space-around"
      p="padding"
    >
      <SecondaryText fontWeight="700" fontSize="h4">
        Cliente
      </SecondaryText>
      <SecondaryText fontWeight="700" fontSize="h4">
        Telefone
      </SecondaryText>
      <SecondaryText fontWeight="700" fontSize="h4">
        E-mail
      </SecondaryText>
      <SecondaryText fontWeight="700" fontSize="h4">
        CPF/CNPJ
      </SecondaryText>
    </Grid>
  );
};

export default ColumnTitleTable;
