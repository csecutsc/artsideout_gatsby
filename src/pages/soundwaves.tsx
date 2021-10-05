import React from 'react';
import { Text, Heading, SimpleGrid, Box, Avatar, Flex, Link } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import * as kelcie from '../images/kelcie.jpg'
import * as ryan from '../images/ryan.jpg'
import * as meera from '../images/meera.jpg'
import * as michael from '../images/michael.jpg'
import * as aquaribliz from '../images/aquaribliz.jpg'

const MarketPage = () => {

  const test = [
    {
      "name": "Ryan Bucao",
      "image": "https://lh3.googleusercontent.com/oO1dXS1Ch3RL2kdgglXtcUZiECh57Ei0nWr4wFL_yrevYVy8WU2NPTG3U2IPXrCyXagy0WExFWRjl3Dxc3DBpBHnkAqT0fazkF4AB0wGrcQgzyQ_YvDCBjvcF7PJrvaN2MlIHhFjFo3WEYDdD_AmoAthNBUxd4o1v8iq7Ch3mcyXO_9K3aCYHEEtVCJdaH-s9N8H5eun40QLdcczaaE4sWXE90hkPkfEOqnwNAlve1V9PnthpE1VDZgEL5P2e_zec3GyBxLvjNmqDoruhAXEDLKPwYCPANZrMTaJnYWSfremPNYnfTIGTbZc9PANp-YYGK2A_DKGaQLjFaWXYkOQqYeD0wAMBvu092MloOZzatI5aBHzRL4pSfEUE6keqNN0mzYgfYVNLAO0F_R6tLMqqMzAlJkTWkjgYgpmyXOgnVlvp3x_hXEt0876HLoyYAcX1hyl7hAN9VnWxqZKxRnhlEd2q2tfadqa7Ed-HKRgquTQCFx_nIzwlUTzoW7PPUv8r8lcqt5DFLxR4t4h_W7lBwaNWPpE0OJeUxBJzNOuNlw1i_Ge3i77E2tnWTtxjZl9PoRA1hR9kPd6GMDHk0FOqNdpJm1ODMzTkVHKH4AAz-dKMuIjT2GJQQ_VQUOWz5epqbsoK8DU6QFJEjz8hwMdQEsv1Aff5N5jCqD1wKZTx-tC0O8C7lI6-8Xgw-HTQp_TNpqLOLPEj6vJCSe34pTeaJXa=w196-h197-no?authuser=0",
      "bio": "I'm Ryan Bucao, 4th year at UTSC, majoring in psychology and a double minor in media studies and economics. I joined SoundWaves last January and was immediately impressed by the creativity of its members. \n\nI started with the piano when I was a toddler. I went to piano school briefly but dropped out and taught myself by ear. I've also played the tenor saxophone for seven years and, momentarily, the drums. \nIn sixth grade, I was gifted FL Studio by my best friend. I've used MIDI ever since. In 2018, at Mary Ward CSS, I received the Music and Computers Senior Award for my MIDI projects, among them a 15-minute medley of Star Wars that took four months to arrange.\n Currently, I'm learning jazz theory, FM synthesis, and intermediate guitar. ",
      "desc": "For my piece, I wrote a triphop track, inspired by the kung fu scene from The Matrix. The soundtrack played during that scene was a modified version of Leave You Far Behind by Lunatic Calm. I also drew upon elements from the music of Crystal Method, Leftfield, and Fluke.\nThe pandemic in which we presently find ourselves can be said to be reminiscent of The Matrix. Many were interrupted from a familiar daily routine and forced to decide whether to reject or accept a new reality. We were to adopt an unusual perspective of how things were, one disconnected from it, looking in from the outside.\nThe pandemic continues to demand our patience, and it requires us all a collective effort to protect each other. So, we must together endure.",
      "links": [
        {
          "type": "Instagram",
          "url": "https://www.instagram.com/ryanrbmusic/",
        }
      ]
    },
    {
      "name": "Kelcie",
      "image": "https://lh3.googleusercontent.com/_jjTmE8MgH9iZZ1wCfM-x2hjO81aJb0YvaHJ9rJYu77trKgb0SmENKDyjWMoUzeXPkBGJbcTG7yAb4p3B7EBqnnbjarT6sC8x2PMyiWz1rwMrb4pE8AxvMx0R8SC7rMtANwpeLulp4-LwTeLUi5SxtTsB-ItCRHigpe8EhZXTkzVP4uvjYggSJZz9k5m3F6Fu3WhNhKuf7ZLT2M8My5EjuPgLN3TSJHglETNJQ_EsKP4tHnRHAU7J3M5I-PJDC-JBgQoaV4Yt8H-cMEU64ulaXnyhng3AOHlQ7N72YW5mgWW6TIK6ZFDR2uk9BbAIQ615upU_ldWmnonaN51rCMw1E1cJz0LCu1xS5dBQAFfZebrPgS8dlbC0VKGssnnD8Z3_SRPjUoAbGumKIXPcpI0PJssny_M7EfWQ0IVetHa-YN0ByrVElLHnpMjcn2a7sWYU7U5n88J3NKWTiznkOMiUE64EaC27wAggxnI5dBzY5ZOILfCr2VAEjorbXVd4yKyhZdTDz3WwSt5wQYq4ALhgvqNA_aOVdigA5KruHHyoTdEaQ_DYiw2oGDQwzAG9jHKBTIUvc4cb-xtL4VapHmFI3qOA59K3iObHxcNJRRG9y-nM-PsDvNwLAujF-3bcnTFTwSrSOJIHqDVXIA1BHQud2n3DMjw5lgF9Gh95bpT7j8c8UD8pc1SCtRpOe5vlKmqLyFRoQMMlarNLRyVKelPPkMu=w1503-h2004-no?authuser=0",
      "bio": "I’m currently in my second year at UTSC, hoping to major in Music & Culture as well as minor in Culture, Creativity and Cities & Lit + Film Studies. I started taking voice lessons at the age of ten and continued to take them for seven years. Growing up, I was very shy, and music served as an escape for me. It was a way for me to express myself in ways I wouldn’t otherwise know how to. I love to sing in a variety of different genres, including Pop, EDM, R&B, and some Alternative and Rock.  As I started to gain more confidence in my musical abilities, about 2 years ago I start posting covers on YouTube. I also took a couple of courses with Berklee Online last year. It wasn’t until I got to know about the music community at UTSC, this past year, that I truly realized my passion for music and that there’s a lot more that I can do with it so long as I am confident.  In terms of song-writing, I didn’t really plan on doing anything with it when I started writing lyrics about two years ago. It was just a way for me to express myself. ",
      "desc": "Emotions can be a real burden when you are going through a tough time. Enduring these emotions, despite feeling a sense of uncertainty help build resilience. That is at the heart of my piece and how you choose to deal with it is the message that I tried to express. ",
      "links": [
        {
          "type": "Youtube",
          "url": "https://www.youtube.com/channel/UCIEsjAyWOemTpp2QkjgW4iw",
        },
        {
          "type": "Instagram",
          "url": "https://www.instagram.com/k3lci3_d/",
        }
      ]
    },
    {
      "name": "Meera",
      "image": "https://lh3.googleusercontent.com/NyzNfBzN9sEUwBuVzvB-XNcdw7hl-nNa9xqVoPLWvpU7S7-0zbB8DbONGMJd9o1g9BeXhGxl2bNaOdIgphsTCPqbqxACLmPEWIxfpy8WSzXm7q1Do0nAXavuNJjTpVQicAIriPay40jA_2M0LSrYcKLPPWevDgNB7yctwq0mmHpzQM7Wf4UhmzXxSi-2ZEquZsQu8Y6DKXOLIYK_Ab8Vn8etzVrDVZAw4W3Gm1SDtpI08d6891OtfvJe39dbIMqmqlTZOypwTv1RI7KAisSyO_lYKqOc7pGAbJgMH5Ejl3lzinSCSpYYXwH1FHd0Qxb4I_AwXXVeWw-evI5u9KEy3raHWmRuQsL5sWjosxp-4pE3mu79KseKuV9UAPiIBM3a5AIptaxEAE-zLghBc_T3e87PZcoMMFSW0Op7mqafyXENN18yBxeYmygXoMqB26hkT1HShWU7eQRLMcH2Mo2YUcrUkkwh59Bvpby9ajPze2voHL4n_uvS-YeMip2QNyS7Lei-D4l8AvM02wXpO6jtwyXhtzHPz_OZw20PxM5rU24no9ct88HOEcVqYqSDxNf2k0ZZtmJFKuLjpt-Z4IIwaMaBd2QdGRKmO0VomCrvHeXKMkaVV1_XK_ofUWAt2TKOo7Sz4G1PlGo3tBd9lHI5v1YFHeQIAuHrmUm_UqRAL3N0YLSC9zMkKx0SDKEB2dUyh3viEnHMK_HyMNYJ6rlJ7B_3=w1121-h1837-no?authuser=0",
      "bio": "I am a third-year student pursuing a specialist in Biodiversity + Conservation and a minor in Music & Culture. Music has played a significant role in my life since I was very young but I’ve only recently become interested in composing. I’m mainly self-taught and have been enjoying learning to write for small ensemble and concert band. Endurance is my first piece for flute quintet. ",
      "desc": "This piece for flute quintet is meant to symbolize Endurance by describing one possible perspective of someone’s experience with hardship or pain. The first section is slower and mournful, representing the initial struggle of encountering a challenge. The middle section is faster, more hectic and less melodic, representing someone working through a difficult time. Finally, the last section brings everything together by adding a new melody on top of the first section that is meant to weave everything together, and symbolize everyone coming back together after the pandemic, that being the universal struggle we’re all facing together. ",
      "links": [
      ]
    },
    {
      "name": "wareblewan AKA Michael Wan",
      "image": "https://lh3.googleusercontent.com/Nj2PRo7oWI7dKs2VJYiaWcgn1ltozF6aXdygwMJ76MBMrYDV3GlBbSbh_qEQx8pZIZlYOSO5LAEszSF-ZD0rlQaoDf4Mxs8UsGnhtJkvA5-rTiClhEc9k5mouGM7MMEEUx8qTgP1ldoMbWNLTHuuhabhMMoOhkaSLqQWcApbn_lgiROf7sQZaNUXtaXxxYgh-_RIYNTcQwK3ID0dSJgINs4Ac6z2zOSKINTP3rhKBuJlfvXEHgcLzmO-tlRZMocUzkQV5zeic0jzMPCooV2eCsqbWw6J2RnsZqq3djqBh_3KmeDxPmoLx9eL2nk8krTmjzUsw3CcDMMflwOX-6KiHq1gyT5cHLFl0_i-mJ3WQ_Zo9uOF6By2ZvXgOiLC9HpXG2F8POLd8jGaEhn40GjnhV79ptkXnPZFQH60pC2Udu9rOBDdiA7ueateaHCY14YTfnlnIpSIurINuTPvI6HWI9UYgaRTHk4wS6YSd2cSIVweoe3JRrCjfwNvFeXF-lOgBXklpyP2p2tbNeTCdl0sxS1jfNrOV4y-lr5Liww6zL3Dh5-mEvhW-X7zYKij7sAt4smoVOPEqDnlW5AF38OF02oZVkMnTjEEPsQ7qEr55eV6gg2U-_Yq7ICioq-ymwRCn6WK74HjBr5zQkSI8ZOGFu1W831iQBMXnTuWgkPxSPoYthf0H1tAUmGBjmKGteefkRDF1AnGW32rV3Fk4DdDhJau=s2004-no?authuser=0",
      "bio": "I am a third-year university student who studies mathematics as well as music. I have had a growing relationship with music ever since I started learning piano at the age of 6, and have progressed slowly until now when I am able to compose and produce my own original music! I like to look into how different elements of music might be analyzed, and try to find new ways to think about and feel the music.",
      "desc": "This piece is a medley of five tunes from five different video game soundtracks. Each of these tunes either explicitly are about determination or endurance or portrays some feeling of loss similar to the losses we all face at some point. Linking these pieces together cohesively was somewhat difficult, but it all came through in the end, which is why we all endure hardships.",
      "links": [
      ]
    },
    {
      "name": "Aquaribliz",
      "image": "https://lh3.googleusercontent.com/svOH76kMaZNe-oLwlyZDzuIby9AvWQZlXZLpQpYQdHk0LFVj5pREPq4h8m5vM9tn5-emrfYi7jPVGyHfnl-YTXCbZcgKsRRp1Hulwf4FAnUzuLIgqcXWQsaGc4MpLox613gGkkqg35F-8hjK1qfZSkXP6RA0ewgmzY-gkFDP0ucIdFtEZqZXKnLAOPX4uMYs3tFRoi1Jh9WLqFwLF7iJ9Tv7UiyDOTFdyVoVjutNYht91BmocFLYKuZoFxcybb9_HjNmL8LTlWC3K2xizXnMxGv7AZ4LbsKdgEMyJyt7dLtpPpFLLU5m6Z8ymMRhKJu7vGjpRJ40kKSa0uGvlYSJNn0fqhriAb8ZNZDL2Oqx8fNqO4DN7TiB5PpI873NSqJj8acXpSjHs5UtjqKBkLotgGxP41E95QokTics-XgAkUodoHnjCpOIWtCEDa_bZIvG20SJDLUyjc_mEWeXYDyHqomD-rFfKMkaCsqlMYNvAB4WbyLPLeek32kH0WSa8X-g3CHob46BMQlqJrPySnp0RTRkxjLsR1bKizy4NeZC7-9TYQMcXzi4XhJ_I9zQSsD_gSoY6cRsS5TVyKaIW9gEKbGCjRkJNFEqPC8BmvC-HLcJ2muDi9QCzsaS1EL-UBcSYUmzoaDT5EN8h0MsJY0dSTtnHBZWf2sPZFPc4iyJDXGF5nDwo6xEqMY8NUc2ntnL27HEiF6Ny_7fF9TARLN2g41n=w215-h230-no?authuser=0",
      "bio": "2nd year UTSC student double-majoring Environmental Science and Environmental Studies. Experienced flutist. Rookie composer with interests in all sorts of genres, from EDM, R&B to orchestral and classical music. ",
      "desc": "“I wanted to capture the process of endurance from start to end with this composition. To me, the concept of endurance is starting a goal that seems vague at first. As a result, I started off with some gloomy, dreamy mallet style elements to illustrate the vagueness. When the blaring horns and drum kit mix start kicking in, we reach the stage where we totally commit ourselves to a goal without any more hesitation. The twist in the middle section illustrates how endurance can shed light to a different perspective towards your goal as long as you don’t give up. And the piece ends with a solid orchestral harmony to indicate the fruits of perseverance.”",
      "links": [
      ]
    }
  ]


  return (
    <Layout>
      <Seo title="Art Market" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
        marginBottom="20px"
      >
        ASO X Soundwaves
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {test.map((artist) => {
          return (
            <Box padding="10px" width="600px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar size="lg" marginBottom="15px" src={artist.image} />
                <Heading
                  as={Text}
                  size="lg"
                  color="#E81D77"
                  marginBottom="20px"
                  textAlign={['center', 'center', 'left', 'left']}
                >{artist.name}</Heading>

                {artist.bio.split("\n").map((paragraph) => {
                  return (
                    <Heading
                      as={Text}
                      size="md"
                      fontWeight="light"
                      color="#E81D77"
                      pb="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >{paragraph}</Heading>
                  )
                })}

                <Heading
                  as={Text}
                  size="md"
                  color="#E81D77"
                  marginBottom="20px"
                  textAlign={['center', 'center', 'left', 'left']}
                >Piece Description</Heading>

                {artist.desc.split("\n").map((paragraph) => {
                  return (
                    <Heading
                      as={Text}
                      size="md"
                      fontWeight="light"
                      color="#E81D77"
                      pb="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >{paragraph}</Heading>
                  )
                })}

                {artist.links.map((link) => {
                  return (
                    <Link ><a target="_blank" href={link.url}>{link.type}</a></Link>
                  )
                })}

              </Flex>
            </Box>
          )
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default MarketPage;
