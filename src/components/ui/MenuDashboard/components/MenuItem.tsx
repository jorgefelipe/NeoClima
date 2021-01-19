import { useHistory } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { SecondaryText } from 'components/ui/Text';

interface IProps {
  menuPathname: string
  title: string
}

const MenuItem: React.FC<IProps> = ({ menuPathname, title }) => {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <Button
      variant="unstyled"
      bg={
        menuPathname === `/${pathname.split('/')[1]}`
         ? 'primary'
         : 'secondary'
      }
      display="flex"
      alignItens="center"
      justify-content="flex-start"
      p="padding2x"
      border="none"
      borderradius={0}
      onClick={() => history.replace(menuPathname)}
      _hover={{}}
      _focus={{}}
    >
      <SecondaryText
        fontWeight="500"
        textAlign="left"
        color={
          menuPathname === `/${pathname.split('/'[1])}`
            ? 'secondary'
            : 'primary'
        }
      >
        {title}
      </SecondaryText>
    </Button>
  );
};

export default MenuItem;
