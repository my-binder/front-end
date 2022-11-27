import React from 'react';
import { ContainerProps } from 'types';
import { Style } from './Container.styles';

export function Container(props: React.PropsWithChildren<ContainerProps>) {
  return (
    <Style
      bordered={props.bordered}
      noBackground={props.noBackground}
      margin={props.margin}
      width={props.width}
      height={props.height}
      extra={props.extra}
    >
      {props.children}
    </Style>
  );
}
