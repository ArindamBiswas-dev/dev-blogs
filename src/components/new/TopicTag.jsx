import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/tag';
import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { IoRemoveOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { PostContext } from './New';

function TopicTag({ name }) {
  const postContext = useContext(PostContext);

  const initialVal =
    postContext.postState.postTags.indexOf(name) > -1 ? true : false;

  const [isInclude, setInclude] = useState(initialVal);

  const onSelect = () => {
    if (isInclude) {
      postContext.postDispatch({
        type: 'removePostTags',
        value: name,
      });
    } else {
      if (postContext.postState.postTags.length === 4) return;
      postContext.postDispatch({
        type: 'setPostTags',
        value: name,
      });
    }
    setInclude(!isInclude);
  };

  return (
    <Tag
      size="lg"
      variant={isInclude ? 'solid' : 'outline'}
      colorScheme="blue"
      cursor="pointer"
      onClick={onSelect}
    >
      <TagLabel>{name}</TagLabel>
      {!isInclude ? (
        <TagRightIcon as={RiAddFill} />
      ) : (
        <TagRightIcon as={IoRemoveOutline} color="white" />
      )}
    </Tag>
  );
}

export default TopicTag;
