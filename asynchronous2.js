const API_URL = "https://jsonplaceholder.typicode.com/posts";

/*------------------------------------------------------------------------------------------------------ */

const makeAJAXRequest = () => {
  try {
    let promise = new Promise(async (resolve, reject) => {
      $.ajax({
        // async: true,
        type: "GET",
        // method: 'POST'     Use method for version above Jquery 1.9.0
        // accept: "*/*",
        url: API_URL,
        // headers: {"Authorization": "Bearer <SEND TOKEN HERE>"},
        // data: JSON.stringify(jsonData),
        // contentType: "application/json",
        error: function (error) {
          console.log(error);
          reject(error);
        },
        success: function (data) {
          console.log(data);
          resolve(data);
        },
      });
    });
    return promise;
  } catch (error) {
    console.log("Catch Error: ", error);
    throw new Error(error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

const makeFetchRequest = async () => {
  try {
    const response = await fetch(API_URL);

    if (response.ok) {
      const data = await response.json();
      console.log("Fetched Data:", data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const postDataWithFetch = async () => {
  try {
    const postData = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Posted Data Response:", data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

/*------------------------------------------------------------------------------------------------------ */

const makeXMLHTTPRequest = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.status);
      }
    };

    xhr.onerror = () => reject("Network error");
    xhr.send();
  });
};

/*------------------------------------------------------------------------------------------------------ */

const handleServerResponse = async () => {
  try {
    //   const response = await makeAJAXRequest();
    //   const response = await makeXMLHTTPRequest();
    const response = await makeFetchRequest();
    console.log(response);
  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

handleServerResponse();

