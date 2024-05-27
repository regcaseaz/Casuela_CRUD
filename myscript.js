var rollV, nameV, genderV, addressV, emailV;

function readFom() {
  uidV = document.getElementById("uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("mname").value;
  snameV = document.getElementById("sname").value;
  addressV = document.getElementById("address").value;
  eaddV = document.getElementById("eadd").value;
  console.log(uidV, fnameV, mnameV, snameV, addressV, genderV, eaddV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      UniqueID: uidV,
      FirstName: fnameV,
      MiddleName: mnameV,
      Surname: snameV,
      Address: addressV,
      Email: eaddV
    });
  Swal.fire("Data inserted!");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("eadd").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().UniqueID;
      document.getElementById("fname").value = snap.val().FirstName;
      document.getElementById("mname").value = snap.val().MiddleName;
      document.getElementById("sname").value = snap.val().Surname;
      document.getElementById("address").value = snap.val().Address;
      document.getElementById("eadd").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   UniqueID: uidV,
      FirstName: fnameV,
      MiddleName: mnameV,
      Surname: snameV,
      Address: addressV,
      Email: eaddV,
    });
  Swal.fire("Data updated!");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("eadd").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
  Swal.fire("Data deleted!");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("eadd").value = "";
};
