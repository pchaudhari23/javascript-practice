const makeRequestToServer = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.clear();
  console.log(data);
};

const pollingRequest = async (limit) => {
  let attempt = 1;
  await makeRequestToServer();

  let id = setInterval(async () => {
    if (attempt < limit) {
      await makeRequestToServer();
      attempt++;
    }

    if (attempt == limit) {
      console.clear();
      console.log("Maximum limit is reached");
      clearInterval(id);
    }
  }, 2000);
};

pollingRequest(5);
