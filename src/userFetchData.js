const fakeUserData = {
  id: "001",
  email: "fake@user.com",
  firstName: "Justin",
  lastName: "Alequin",
};

// Function that simulates making a network request to fetch products
export const fetchUser = (email, password) =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        resolve(fakeUserData);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
