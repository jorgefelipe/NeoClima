import { useHistory } from 'react-router-dom';

import { Flex, Image } from '@chakra-ui/react';
import { SecondaryText } from 'components/ui';

import Logo from 'assets/images/Logo.png';

import MenuItem from './components/MenuItem';
import SingoutButton from './components/SingoutButton';


const MenuDashboard: React.FC = () => {
  const { location } = useHistory();
  const menus = [
    { pathname: '/cliente', title: 'Clientes' },
  ];

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
            menus.find(
              (menu) => menu.pathname === `/${location.pathname.split('/')[1]}`
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
        justifyContent="space-between"
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
            <Image src={Logo} objectFit="contain" w="100%" />
          </Flex>
          {menus?.length > 0 &&
            menus.map((item, index) => (
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
