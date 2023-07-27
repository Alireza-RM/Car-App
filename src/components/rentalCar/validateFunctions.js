const validBox1 = (ob) => {
  const error = {};

  if (!ob.name.trim()) {
    error.name = "Username required";
  } else {
    delete error.name;
  }

  if (!ob.address.trim()) {
    error.address = "Address required";
  } else {
    delete error.address;
  }

  if (!ob.phoneNumber.trim()) {
    error.phoneNumber = "Phonenumber required";
  } else if (ob.phoneNumber.length < 11) {
    error.phoneNumber = "Number 10 character";
  } else {
    delete error.phoneNumber;
  }

  if (!ob.townCity.trim()) {
    error.townCity = "TownCity required";
  } else {
    delete error.townCity;
  }

  return error;
};




const validBox2 = (ob) => {
  const error = {};

  if (ob.city1 === "default") {
    error.city1 = "Select your city";
  } else {
    delete error.city1;
  }

  if (ob.time1 === "default") {
    error.time1 = "Select your Time";
  } else {
    delete error.time1;
  }

  if (ob.date1 === "default") {
    error.date1 = "Select your Date";
  } else {
    delete error.date1;
  }

  if (ob.city2 === "default") {
    error.city2 = "Select your city";
  } else {
    delete error.city2;
  }

  if (ob.time2 === "default") {
    error.time2 = "Select your Time";
  } else {
    delete error.time2;
  }

  if (ob.date2 === "default") {
    error.date2 = "Select your Date";
  } else {
    delete error.date2;
  }

  return error
};

const validBox3 = (ob) => {
  const error = {};

  if (!ob.cardNumber.trim()) {
    error.cardNumber = "CardNumber required";
  } else {
    delete error.cardNumber;
  }

  if (!ob.cardHolder.trim()) {
    error.cardHolder = "CardHolder required";
  } else {
    delete error.cardHolder;
  }

  if (!ob.exprationDate.trim()) {
    error.exprationDate = "ExprationDate required";
  } else {
    delete error.exprationDate;
  }

  if (!ob.cvc.trim()) {
    error.cvc = "CVC required";
  } else {
    delete error.cvc;
  }

  return error;
};

export { validBox1, validBox2 ,validBox3};

// { cardNumber: "", cardHolder: "", exprationDate: "", cvc: "" }
