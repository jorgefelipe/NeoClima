import { useHistory } from 'react-router-dom';

import { Flex, Image } from '@chakra-ui/react';
import logo from 'assents/images/logo.png';
import { SecondaryText } from 'components/ui';
import MenuItem from 'components/ui/MenuDashboard/components/MenuItem';

import SingoutButton from './components/SingoutButton';

const MenuDashboard: React.FC = () => {
  const { location } = useHistory();
  const menu = [{ pathname: './clente', title: 'Cliente' }];
  return (
    <Flex>
      <Flex
        pl="250px"
        py="padding"
        boxShadow="6px 0px 15px -9px rgba(0,0,0,0.75)"
        minW="100%"
      >
        <SecondaryText fontSize="h3" fontWeight="600">
          {
            menu.find(
              menu => menu.pathname === `/${location.pathname.split('/')[1]}`
            )?.title
          }
        </SecondaryText>
      </Flex>
      <Flex
        flexDir="column"
        w="217px"
        minH="100vh"
        position="fixed"
        bg="secondary"
        boxShadow="6px 0px 15px -9px rgba(0,0,0,0.75)"
        justify-content="space-between"
        pb="padding"
      >
        <Flex flexDir="column">
          <Flex
            justify="center"
            align="center"
            w="100%"
            bg="primary"
            mb="1px"
          >
            <Image src={logo} objectFit="contain" w="100%" />
          </Flex>
          {menu?.length > 0 &&
            menu.map((item, index) => (
              <MenuItem
                key={index.toString()}
                menuPathname={item.pathname}
                title={item.title}
              />
            ))}
        </Flex>
        <SingoutButton />
      </Flex>
    </Flex>
  );
};

export default MenuDashboard;
