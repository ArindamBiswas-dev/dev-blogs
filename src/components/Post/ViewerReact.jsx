import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';
import { MdCollectionsBookmark } from 'react-icons/md';
import ReactionIcon from './ReactionIcon';
import { useState } from 'react';

function ViewerReact() {
  const onHeartClick = () => {
    console.log(`count + 1 heart`);
    setheart(!heart);
  };
  const onSavedClick = () => {
    console.log(`count + 1 save`);
    setSave(!save);
  };

  const [heart, setheart] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <Flex
      flexDir="column"
      py="8"
      flexBasis="70px"
      align="center"
      mr="3"
      alignSelf="flex-start"
      pos="sticky"
      top="90px"
      d={{ base: 'none', lg: 'flex' }}
    >
      <ReactionIcon
        icon={<RiHeartPulseFill />}
        color={heart ? 'red' : 'blackAlpha.700'}
        count="258"
        onClickHandeler={onHeartClick}
      />
      <ReactionIcon
        icon={<MdCollectionsBookmark />}
        color={save ? 'blue' : 'blackAlpha.700'}
        count="116"
        onClickHandeler={onSavedClick}
      />
    </Flex>
  );
}

export default ViewerReact;
