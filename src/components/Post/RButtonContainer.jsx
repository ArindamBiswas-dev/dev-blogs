import React from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';
import { MdCollectionsBookmark } from 'react-icons/md';
import ReactionIcon from './ReactionIcon';
import { useState } from 'react';

function RButtonContainer() {
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
    <>
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
    </>
  );
}

export default RButtonContainer;
