// let contacts = [
//   {
//     name: "Mr. Freeman",
//     phone: "ххх-ххх-ххх",
//     image:
//       "https://avatars.mds.yandex.net/i?id=61cbab5f39c2ec39445472a274734088f1e6ab4b-9151370-images-thumbs&n=13",
//   },
//   {
//     name: "П.П. Петров",
//     phone: "ххх-ххх-ххх",
//     image: "https://instalook.ru/uploads/dakimakura/mr-freeman-2912.jpg",
//   },
// ];

let btn = document.querySelector("#btn");
let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let img = document.querySelector("#image");

let contacts = JSON.parse(localStorage.getItem("contacts-data")) || [];

btn.addEventListener("click", () => {
  let contact = {
    name: name.value,
    phone: phone.value,
    img: img.value,
  };

  contacts.push(contact);

  setItemToStorage(contacts);
  console.log(name.value, phone.value);
  if (!name.value.trim() && !phone.value.trim()) alert("Заполните поля!");
  return;
});

function setItemToStorage(contacts) {
  localStorage.setItem("contacts-data", JSON.stringify(contacts));
  console.log(contacts);
}

// !==============================================================================

function displayContacts() {
  let contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach(function (contact) {
    let li = document.createElement("li");
    li.className = "contact";

    let img = document.createElement("img");
    img.src = contact.image;
    img.alt = contact.name;

    let div = document.createElement("div");
    div.innerHTML = "<h3>" + contact.name + "</h3><p>" + contact.phone + "</p>";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteContact(contact);
    };

    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(deleteButton);

    contactList.appendChild(li);
  });
}

function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let image = document.getElementById("image").value;

  if (name && phone && image) {
    contacts.push({ name: name, phone: phone, image: image });
    displayContacts();
    setItemToStorage(Object);
  } else if (name && phone) {
    contacts.push({ name: name, phone: phone });
    displayContacts();
    setItemToStorage(Object);
  } else {
    alert("Заполните все поля");
    return;
  }
}

function deleteContact(contact) {
  let index = contacts.indexOf(contact);
  if (index !== -1) {
    contacts.splice(index, 1);
    displayContacts();
  }
}

displayContacts();

// const API = "http://localhost:8000";
// fetch(API)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.Search.forEach((elem) => {
//       info.innerHTML += `
//
//        `;
//     });
// });
