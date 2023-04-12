'use client'
import React from 'react'
import { Box, IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Footer from '../components/footer'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364716/wit/50217115_10156517506971281_2052493063200178176_n.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364749/wit/51029395_10156517515841281_7963296630130606080_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50690232_10156517507666281_4171136796081520640_n.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50458348_10156517507336281_6817312210671370240_n.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50985903_10156517518846281_6420746962424823808_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50685972_10155901301712623_7726406252925812736_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364725/wit/50448704_10156517507676281_1689263323880620032_n.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364747/wit/50850130_10156517530851281_4777873481524051968_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364744/wit/50778365_10156517513361281_8933050299392720896_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364742/wit/50762687_10156517514306281_4049375349413249024_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364742/wit/50692532_10156517513696281_5955230622740905984_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364740/wit/50658241_10156517512971281_9132307851027415040_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364735/wit/50477400_10156517511881281_4236157524291616768_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364740/wit/50558571_10156517515861281_4249838270734663680_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50444213_10156517519731281_738414734855897088_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364726/wit/50404247_10156517514536281_8459621307099643904_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364723/wit/50271442_10156517515326281_4900157385194078208_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364722/wit/50309673_10156517509586281_5771227553696055296_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50995020_10156517517406281_2236550296077598720_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364720/wit/50270033_10156517518211281_3210567115517984768_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364719/wit/50306287_10156517508116281_971157191560003584_n.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364714/wit/49504421_10155878744647623_6739767413660712960_o.jpg',
        'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364712/wit/49864686_10155886003927623_6068066380043780096_o.jpg'
    ];

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
                                        <Link href='/steps'>How it Works</Link>
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
                <Image src={'/Images/bg1.png'} alt='background images of WIT' width={2000} height={2000} />
                <Container maxW={1200}>
                    <Text fontWeight={400} mt={10}>The Women Empowerment Division of the Presidential Initiative for Artificial Intelligence & Computing is committed to the empowerment and autonomy of women in Pakistan.</Text>
                    <br />
                    <Text fontWeight={400}>The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.</Text>
                    <br />
                    <Text fontWeight={400}>The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.</Text>
                    <Heading mt={20} fontWeight={400} fontSize={{ lg: 100, base: 50 }}>WOMEN INCLUSION IN TECHNOLOGY</Heading>
                    <Heading fontSize={30} mt={5} mb={5} textAlign={'center'}>PIAIC WOMEN’S GALLERY</Heading>
                </Container>
            </Box>


            <Box
                position={'relative'}
                height={'auto'}
                width={'full'}
                overflow={'hidden'}>
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((url, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${url})`}
                        />
                    ))}
                </Slider>
            </Box>



            <Footer />
        </>
    );
}