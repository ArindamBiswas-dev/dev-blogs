import { Box } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import { useContext } from 'react';
import { PostContext } from './New';

function PostContent() {
  const postContext = useContext(PostContext);
  return (
    <Box mt="8">
      <Textarea
        placeholder="Write your content here..."
        _focus={{ borderColor: 'grey.300' }}
        fontSize="20px"
        rows="12"
        defaultValue={postContext.postState.postContent}
        onChange={(e) =>
          postContext.postDispatch({
            type: 'setPostContent',
            value: e.target.value,
          })
        }
      />
    </Box>
  );
}

export default PostContent;
