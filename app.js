const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 22,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 37,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;


  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul>
  <li>Name: ${currentProfile.name}</li>
  <li>Age: ${currentProfile.age}</li>
  <li>Location: ${currentProfile.location}</li>
  <li>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;

    document.getElementById('imageDisplay').innerHTML = `
  <img src="${currentProfile.image}">
  `;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}