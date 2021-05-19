import { Tag, TagLabel, TagRightIcon } from '@chakra-ui/tag';
import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { IoRemoveOutline } from 'react-icons/io5';

function TopicTag({ postTags, name, setPostTags }) {
  const initialVal = postTags.indexOf(name) > -1 ? true : false;
  const [isInclude, setInclude] = useState(initialVal);

  const onSelect = () => {
    if (isInclude) {
      const index = postTags.indexOf(name);
      postTags.splice(index, 1);
      setPostTags(postTags);
    } else {
      if (postTags.length === 4) return;
      postTags.push(name);
    }
    setInclude(!isInclude);
    // console.log(postTags);
    // console.log(isInclude);
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
