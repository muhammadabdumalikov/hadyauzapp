export const fetchCategories = async () => {
  const url =
    'http://45.10.154.95:4444/api/category/parents';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      page: 1,
      per_page: 10,
    }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();

  return json;
};

export const fetchProductsForHome = async () => {
  const url =
    'http://192.168.100.64:3001/api/admin/products/get-by-idea';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      page: 1,
      per_page: 10,
      idea_id: '67324ebc61ebde5bae14986d',
    }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();

  return json;
};

export const addMovieToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/21050033/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjhhMTE5YzAzODNlNWUxM2VkODQxNjY4ZWRlNzU4MiIsInN1YiI6IjY1ZTFlN2FhNDFhNTYxMDE4Njg0MGVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UJVtqRNQ-1QFfb4733gzUQ5VgFYFj1Iimk_1GvDwSMo',
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json;
};
