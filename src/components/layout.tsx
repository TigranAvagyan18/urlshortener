import React from 'react';
import BlockClasses from '../scss/modules/block.module.scss';
import ContentClasses from '../scss/modules/content.module.scss'

export const Content: React.FC = (props) => {
  return <div className={ContentClasses.content}>{props.children}</div>;
};

export const Block: React.FC = (props) => {
  return <div className={BlockClasses.block}>{props.children}</div>;
};

export const Loader: React.FC = () => {
  return <div className={BlockClasses.loader}></div>;
};
