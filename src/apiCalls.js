export const getTopStories = async (section) => {
  section = 'home';
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=H7gdiWL0eP6A5389w0R1HGa8rgBO7rvu`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  return await response.json();
};
