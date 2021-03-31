import React, { memo, HTMLAttributes } from 'react';
import {
  Container,
  Ignore,
  Content,
  Reflection,
} from '../styles/components/Card';

export interface CardProps {
  className?: string;

  cardColor?: string;
  reflectColor?: string;
  borderRadius?: string;

  reflection?: number;
  distanceRate?: number;
  applyBorderRadiusAll?: boolean;
  darkenRate?: number;
}

const Card: React.FC<CardProps & HTMLAttributes<HTMLDivElement>> = memo(
  ({
    className,
    cardColor,
    reflectColor,
    borderRadius,
    reflection,
    distanceRate,
    applyBorderRadiusAll,
    darkenRate,
    children,
    ...rest
  }) => {
    const reflections = Array(reflection).fill(0);
    const [styles, features] = [
      { cardColor, reflectColor, borderRadius },
      { reflection, distanceRate, applyBorderRadiusAll, darkenRate },
    ];

    return (
      <Container
        className={className}
        styles={styles}
        features={features}
        reflections={reflections}
        {...rest}
      >
        {reflections.map((_, i) => (
          <Reflection className="reflection" key={'reflection-' + i++} />
        ))}
        <Ignore className="ignore" />
        <Content className="card-content" styles={styles} features={features}>
          {children}
        </Content>
      </Container>
    );
  },
);

Card.defaultProps = {
  className: '',

  cardColor: '#1a191d',
  reflectColor: '',
  borderRadius: '0',

  reflection: 1,
  distanceRate: 0,
  applyBorderRadiusAll: true,
  darkenRate: 0.1,
};

export default Card;
