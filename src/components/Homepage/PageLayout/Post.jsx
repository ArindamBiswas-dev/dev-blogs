import { Avatar } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import FluidHeading from '../../global/FluidHeading';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from 'react-icons/ti';
import { AiOutlineComment } from 'react-icons/ai';
import { Button, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchFeedData(post_id) {
  const result = await axios.get(`http://localhost:8000/posttags/${post_id}`);
  console.log(result.data.data);
  return result.data.data;
}

function Post(props) {
  const fakeTags = ['webdev', 'javascript', 'react', 'sql'];
  const [isFakeLoading, setLoading] = useState(!false);
  const {
    isFirst,
    isOwnProfile,
    onDeleteClick,
    setTargetId,
    fakeId,
    post_data,
  } = props;
  const { post_id } = post_data.post_id;

  const { isLoading, error, data } = useQuery(
    `feedData`,
    fetchFeedData(post_id),
    {
      keepPreviousData: true,
    }
  );

  // on delete click set the target id and call the alert modal
  const onDelHandelCilick = () => {
    setTargetId(fakeId);
    onDeleteClick();
  };

  return (
    <Box
      w="100%"
      borderRadius="md"
      overflow="hidden"
      bgColor="white"
      cursor="pointer"
      borderWidth="1px"
      borderColor="gray.300"
    >
      {isFirst && (
        <Image
          src="https://source.unsplash.com/user/erondu/1600x900"
          alt="post-image"
          w="100%"
          h={{ base: '200px', sm: '250px', md: '300px' }}
          objectFit="cover"
          objectPosition="center"
        />
      )}
      <Box p={{ base: '2', md: '5' }} pb="4">
        <Stack spacing="10px">
          <Flex>
            <SkeletonCircle size={10} isLoaded={isFakeLoading}>
              <Avatar size="md" name={post_data.name} src={post_data.avater} />
            </SkeletonCircle>
            <Box ml="4" mt="1">
              <SkeletonText noOfLines={2} mt={1} isLoaded={isFakeLoading}>
                <Heading size="sm">{post_data.name}</Heading>
                <Text fontSize="sm">{post_data.created_at}</Text>
              </SkeletonText>
            </Box>
          </Flex>

          <Box w="100%">
            <SkeletonText noOfLines={3} isLoaded={isFakeLoading}>
              <Stack spacing="15px" ml={{ md: '14' }}>
                <Link to="/nextjs intro">
                  <FluidHeading _hover={{ color: 'blue' }}>
                    {post_data.title}
                  </FluidHeading>
                </Link>

                <HStack spacing="15px" color="gray.600">
                  {fakeTags.map((tag) => (
                    <Link key={tag} to={`/tag/${tag}`}>
                      <Text _hover={{ color: 'black' }}>#{tag}</Text>
                    </Link>
                  ))}
                </HStack>
                <Flex>
                  <Flex justify="space-between" w="100%" align="center">
                    <HStack spacing="25px">
                      <Flex align="center" color="gray.600">
                        <TiHeartOutline fontSize="25px" />
                        <Text
                          ml="2"
                          display={{ base: 'none', md: 'inline-block' }}
                        >
                          13 Reactions
                        </Text>
                        <Text
                          ml="2"
                          display={{ base: 'inline-block', md: 'none' }}
                        >
                          13
                        </Text>
                      </Flex>
                      <Flex align="center" color="gray.600">
                        <AiOutlineComment fontSize="25px" />
                        <Text
                          ml="2"
                          display={{ base: 'none', md: 'inline-block' }}
                        >
                          5 Comments
                        </Text>
                        <Text
                          ml="2"
                          display={{ base: 'inline-block', md: 'none' }}
                        >
                          5
                        </Text>
                      </Flex>
                    </HStack>
                    <Flex>
                      {!isOwnProfile && (
                        <Button size="sm" colorScheme="twitter">
                          Save
                        </Button>
                      )}
                      {isOwnProfile && (
                        <>
                          <Button size="sm" colorScheme="twitter" mr="2">
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                            onClick={onDelHandelCilick}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              </Stack>
            </SkeletonText>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Post;
