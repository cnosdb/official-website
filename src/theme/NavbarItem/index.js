import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';

export default function NavbarItemWrapper(props) {
  // 这里只有中文有解决方案，英文不需要展示
  if (props.label === 'Solutions') {
    return '';
  }
  return (
    <>
      <NavbarItem {...props} />
    </>
  );
}
