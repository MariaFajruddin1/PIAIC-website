'use client'
import React from 'react'
import { Box,Image,chakra, IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '../components/footer'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook,FaPhone } from 'react-icons/fa';
import { ReactNode } from 'react';



export default function page() {
  return (
    <>
      <Box bg={'#285E61'}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{ lg: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }} >
            <Box ml={{ lg: '0', base: '20px' }} mt='10px'>
              <Link href='/'>
                <Image
                  src='/Images/logo.png'
                  alt='panaverse Logo'
                  width={20}
                  height={28} />
              </Link>
            </Box>
            <Flex display={{ lg: 'flex', base: 'none' }} alignItems='center' color='white' fontSize={18} gap={10}>
              <Link href={'/steps'}>How it Works</Link>
              <Link href='/course'>Available Course</Link>
              <Link href='/about'>About</Link>
              <Link href='/study'>WIT</Link>
            </Flex>
            <Box display={{ xl: 'initial', lg: 'none', base: 'none' }}>

              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#1D4044'}
                w={100}
                h={50}
                borderRadius={30}
                float='right'
                mt={'40px'}
                href={'https://portal.piaic.org/signup'}
                _hover={{
                  bg: '#319795',
                  border: '0px solid white',
                  boxShadow: "#d5d5d5"
                }}>
                Apply
              </Button>
            </Box>
            <Box pt={'40px'} float='right' display={{ lg: 'none', md: 'initial', base: 'initial' }}>
              <Menu>
                <MenuButton
                  float='right'
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon color='black' />}
                  variant='outline'
                />
                <MenuList bg={'green.800'}>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/'>How it Works</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/course'>Available Course</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/about'>About</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/study'>WIT</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>

        </Container>
      </Box>






















      <Box>
        <Container maxW={1200}>
          <Flex display={{lg:'flex',base:'flex-1'}}>
            <Box mt={20} >
            <Heading>Dr. Arif Alvi</Heading>
            <Text fontSize={'20px'} color={'#319795'}>President of the Islamic Republic of Pakistan</Text>
            <Text mt={10} mr={{lg:5,base:0}}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
            <Text mt={5} mr={{lg:5,base:0}}>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1972) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
            <Text mt={5} mr={{lg:5,base:0}}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
          </Box>
          <Box>
            <Image src={'/Images/arifAlvi.png'} alt='Arif Alvi Images' width={3050} height={800} />
            </Box>
          </Flex>
        </Container>
      </Box>









      <Footer />
    </>
  )
}