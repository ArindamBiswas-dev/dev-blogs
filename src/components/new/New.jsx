import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useReducer } from 'react';
import Headers from './Headers';
import PostContent from './PostContent';
import PreviewContent from './PreviewContent';

// useReducer + useContext => managing state + providing data
export const PostContext = React.createContext();
const initialState = {
  coverImage: '',
  postTitle: '',
  postContent: '',
  postTags: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCoverImage':
      return { ...state, coverImage: action.value };
    case 'setPostTitle':
      return { ...state, postTitle: action.value };
    case 'setPostContent':
      return { ...state, postContent: action.value };
    case 'setPostTags':
      return { ...state, postTags: [...state.postTags, action.value] };
    case 'removePostTags':
      return {
        ...state,
        postTags: state.postTags.filter((tag) => tag !== action.value),
      };
    default:
      return;
  }
};

function New() {
  // useReducer && useContext
  const [post, dispatch] = useReducer(reducer, initialState);

  const [isEditMode, setEditMode] = useState(true);

  useEffect(() => {
    console.log('render at new');
  }, []);

  return (
    <PostContext.Provider value={{ postState: post, postDispatch: dispatch }}>
      <Flex justify="center">
        <Flex
          width={{ base: '100%', md: '85%' }}
          maxW="1140px"
          py="5"
          justify="center"
          gridGap="20px"
        >
          <Box w={{ base: '100%' }} maxW="900px">
            <Flex justify="flex-end">
              <Button
                mx="2"
                size="sm"
                colorScheme="twitter"
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>
              <Button
                mx="2"
                colorScheme="blue"
                size="sm"
                onClick={() => setEditMode(false)}
              >
                Preview
              </Button>
            </Flex>
            <Box
              mt="4"
              bgColor="white"
              p={{ base: '4', md: '8' }}
              borderRadius="md"
              border="1px solid black"
              borderColor="gray.300"
              h="600px"
              overflowY="scroll"
            >
              {isEditMode && (
                <>
                  <Headers />
                  <PostContent />
                </>
              )}
              {!isEditMode && <PreviewContent />}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </PostContext.Provider>
  );
}

export default New;
