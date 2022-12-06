import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NortheasternMap from '../../assets/images/northeastern-map.png';
import PlantingImage from '../../assets/images/planting.jpg';
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Grid,
  Link,
  GridItem,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import colors from '../../theme/colors';

// Home Page
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box p='1.875rem'>
      <Grid
        gap='1rem'
        templateRows={{
          base: 'repeat(3)',
          xl: 'repeat(2)',
        }}
        templateColumns='repeat(5, 1fr)'
      >
        <GridItem colSpan={{ base: 5, xl: 3 }}>
          <Box
            backgroundColor='#000'
            position='relative'
            width='100%'
            _hover={{
              cursor: 'pointer',
            }}
            onClick={() => navigate(ROUTES.MAP)}
          >
            <Image
              width='100%'
              transition='opacity 0.2s'
              _hover={{
                opacity: '80%',
              }}
              src={NortheasternMap}
            />
            <Heading
              backgroundColor='#FFFFFFBF'
              bottom='1rem'
              fontStyle='italic'
              left='1rem'
              padding='0.5rem'
              position='absolute'
            >
              Explore sustainability on campus!
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, xl: 2 }}>
          <Box
            backgroundColor={colors.orange[500]}
            color={colors.light}
            height='100%'
            padding='1rem'
          >
            <Text fontSize={{ base: '2rem', xl: '1.5rem' }}>
              Opportunities for Students
            </Text>
            <List>
              <ListIcon as={ChevronRightIcon} />
              <Link variant='onDark'>Participate in an eco-challenge.</Link>
            </List>
            <List>
              <ListIcon as={ChevronRightIcon} />
              <Link variant='onDark'>Join a conservation club.</Link>
            </List>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex
            align='center'
            backgroundColor={colors.blue[500]}
            height='100%'
            justify='center'
            padding='0.5rem'
          >
            <Image maxHeight='100%' maxWidth='100%' src={PlantingImage} />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 5, xl: 4 }}>
          <Box backgroundColor={colors.light} height='100%' padding='1rem'>
            <Heading size='lg'>December 2023 Challenge</Heading>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
