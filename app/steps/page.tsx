'use client'
import React from 'react'
import { Box, IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import { HamburgerIcon,ArrowForwardIcon } from '@chakra-ui/icons'

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
                  width={80}
                  height={80} />
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


















      <Box backgroundImage={
        'url(https://media.istockphoto.com/id/1174989482/photo/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-resolution.jpg?b=1&s=170667a&w=0&k=20&c=hn1EQ6i2fEBS0Cf-tFMfUsbNBGY1ATMNwgz1n7ffIKg=)'
      } bgAttachment={'fixed'} backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <Container maxW={1400} pt={20}>
          <Heading textAlign={'center'} mb={'50px'} fontSize='50px'>How it Works</Heading>
          <Flex gap={5} display={{lg:'flex',base:"flex-1"}}>
            <Box bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/pk.png' alt='Artifical intelligence image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Step 01</Text>
              <Text>PIAIC will launch classes in the following locations, one city at a time, in the following order</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={3} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/men.png' alt='Blockchain image' width={100} height={0} />
              <Text fontWeight={500} fontSize={20}>Step 02</Text>
              <Text>To participate in the program and become eligible for the most prestigious credentials for AI, ...</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={3} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/clock.png' alt='Cloud Computing image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Step 03</Text>
              <Text>All programs are one year long in duration. Each program is divided into four quarters (12 weeks each).</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={6} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/fee.png' alt='Internet of Thing image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Step 04</Text>
              <Text>Those students who wish to participate in the program online can check the distance learning option ...</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
          </Flex>
        </Container>
        <Container maxW={1000} mt={20} pb={20}>
          <Flex gap={5} display={{lg:'flex',base:"flex-1"}}>
            <Box bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/fun.png' alt='Artifical intelligence image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Step 01</Text>
              <Text>Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan.</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={3} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/cer.png' alt='Blockchain image' width={100} height={0} />
              <Text fontWeight={500} fontSize={20}>Step 02</Text>
              <Text>Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% ...</Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={3} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/phone.png' alt='Cloud Computing image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Step 03</Text>
              <Text>you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM Please note we are ... </Text>
              <br />
              <Link href='https://www.piaic.org/howitworks'>Learn More <ArrowForwardIcon /></Link>
            </Box>
          </Flex>
        </Container>
      </Box>














      <Footer />
    </>
  )
}