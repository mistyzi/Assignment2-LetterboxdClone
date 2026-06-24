import { Image, StyleSheet, TouchableOpacity } from 'react-native';

type MoviePosterProps = {
  poster: any; 
};

export default function MoviePoster({ poster }: MoviePosterProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={poster} style={styles.poster} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
});
