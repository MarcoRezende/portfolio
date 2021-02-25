import { Container, Content, Reflection } from '../styles/components/Card';

interface CardProps {
  className?: string;
  color?: string;
  borderRadius?: string;
  margin?: number;
  reflection?: number;
  distanceRate?: number;
  applyBorderRadiusAll?: boolean;
}

const Navbar: React.FC<CardProps> = ({
  className = '',
  color = '#1a191d',
  borderRadius = '0',
  margin = 1,
  reflection = 1,
  distanceRate = 1,
  applyBorderRadiusAll = true,
  children,
}) => {
  const styles = {
    color,
    margin,
    borderRadius,
  };

  const reflections = Array(reflection).fill(0);

  return (
    <Container
      className={className}
      styles={styles}
      reflections={reflections}
      distanceRate={distanceRate}
      applyBorderRadiusAll={false}
    >
      {reflections.map((_, i) => (
        <Reflection className="reflection" key={'reflection-' + i++} />
      ))}
      <Content styles={styles} applyBorderRadiusAll={applyBorderRadiusAll}>
        {children}
      </Content>
    </Container>
  );
};

export default Navbar;
