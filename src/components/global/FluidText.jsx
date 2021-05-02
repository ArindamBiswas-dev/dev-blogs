const { Text } = require('@chakra-ui/react');

function FluidText(props) {
  const { children, ...rest } = props;
  return (
    <Text
      fontSize={{ base: 'large', sm: 'larger', md: 'xl', lg: '2xl' }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default FluidText;
