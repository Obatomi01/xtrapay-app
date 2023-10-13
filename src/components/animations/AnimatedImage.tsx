import React, { useState } from 'react';
import { Animated } from 'react-native';

const AnimatedImage = (props: any) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  //   console.log(props.curFeature);

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
  //   React.useEffect(() => {
  //   }, [props.curFeature]);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
        flex: 1,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default AnimatedImage;
