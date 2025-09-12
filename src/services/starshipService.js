const BASE_URL = "https://swapi.info/api/starships";

const index = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch starships.");
    }

    const data = await response.json();
    // console.log("Data", data);
    return data;
  } catch (error) {
    //   console.error('Error fetching starships:', error);
      throw error;
  }
};

// index();

export { index };
