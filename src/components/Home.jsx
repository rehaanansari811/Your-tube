import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/4.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/1.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50% ,-50%)",
    p: "4"
};

const Home = () => {
    return (
        <Box>
            <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                showStatus={false}
                showThumbs={false}
                showArrows={true}
            >
                <Box w="full" h={'100vh'}>
                    <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Watch Your Favourite Show's
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
                    <Heading bgColor={'blackAlpha.100'} color={'white'} {...headingOptions}>
                        Without any Buffering
                    </Heading>
                </Box>

                <Box w="full" h={'100vh'}>
                    <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
                    <Heading  color={'white'} {...headingOptions}>
                        Recall Your Memories
                    </Heading>
                </Box>

                <Box w="full" h={'100vh'}>
                    <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Get Set And Watch
                    </Heading>
                </Box>

            </Carousel>
            <Container maxW={'container.xl'} minH={'100vh'} p='16'>
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m={'auto'}
                >
                    Services
                </Heading>
                <Stack
                    h={'full'}
                    alignItems={'center'}
                    p={'4'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']}>
                        With more streaming services and TV channels than ever before, 2023 has plenty of great shows to look forward to. Hit television and streaming shows are returning, prequels and spinoffs abound, and a ton of intriguing new stories will hit our screens.The lineup of original series on streaming services is only getting hotter as the summer goes on. This week, there are new seasons of What We Do in the Shadows, Foundation, and The Summer I Turned Pretty. And there are even more new shows heading to the various streamers before the end of the month.
                    </Text>
                </Stack>
            </Container>

        </Box>

    );

};

// const MyCarousel = () => {

// };

export default Home;