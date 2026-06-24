import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MoviePosterProps = {
  poster: ImageSourcePropType;
  user?: string;
  rating?: string;
};

export default function MoviePoster({ poster, user, rating }: MoviePosterProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={poster} style={styles.poster} />

      {user && (
        <View style={styles.info}>
          <Text style={styles.user}>{user}</Text>
          {rating && <Text style={styles.rating}>{rating}</Text>}
        </View>
      )}
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
  info: {
    marginTop: 6,
  },
  user: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rating: {
    color: '#9aa0a6',
    fontSize: 12,
    marginTop: 2,
  },
});
