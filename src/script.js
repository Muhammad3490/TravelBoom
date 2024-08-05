const cities = [
  {
    name: "Tokyo",
    img: "https://i.postimg.cc/Jn7ZhBxT/tokyo.jpg",
    desp: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.",
  },
  {
    name: "Sydney",
    img: "https://i.postimg.cc/Hk5Qvmjt/sydney.jpg",
    desp: "Sydney, capital of New South Wales and one of Australia’s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design.",
  },
  {
    name: "Cape Town",
    img: "https://i.postimg.cc/Pqj1B7wn/capetown.jpg",
    desp: "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city.",
  },
];

const temples = [
  {
    name: "Angkor Wat",
    img: "https://i.postimg.cc/rmhWRFYq/t1.jpg",
    desp: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, originally constructed as a Hindu temple dedicated to the god Vishnu.",
  },
  {
    name: "Shwedagon Pagoda",
    img: "https://i.postimg.cc/4yq9w2gM/t2.webp",
    desp: "The Shwedagon Pagoda, also known as the Golden Pagoda, is a gilded stupa located in Yangon, Myanmar. It is considered the most sacred Buddhist pagoda in Myanmar.",
  },
  
];

const beaches = [
  {
    name: "Bondi Beach",
    img: "https://i.postimg.cc/G2pTRn3V/b1-1.jpg",
    desp: "Bondi Beach is a popular beach and the name of the surrounding suburb in Sydney, New South Wales, Australia. It is known for its golden sands and great surfing conditions.",
  },
  {
    name: "Waikiki Beach",
    img: "https://i.postimg.cc/T2FLzszN/b2-1.jpg",
    desp: "Waikiki Beach is located on the south shore of Honolulu, Hawaii. It is famous for its white sand, surf culture, and stunning views of Diamond Head crater.",
  }
];

const dropDown = document.getElementById("dropDown");
let visibility = false;

function openDropDown() {
  dropDown.style.display = visibility ? "none" : "grid";
  visibility = !visibility;
}

function viewDestination(destination) {
    destination = destination.toLowerCase().trim();
    console.log(destination);
    let html = "";
    let location = "";
    let localTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    }).format(new Date());
  
    if (destination === "city" || destination === "cities") {
      location = "Various Cities";
      html = `
        <div class='w-full text-center mb-4'>
          <p class='text-lg font-bold'>Location: ${location}</p>
          <p class='text-sm'>Local Time: ${localTime}</p>
        </div>
        <div class='grid grid-cols-1 place-items-center px-2 gap-4'>
          ${cities.map(city => `
            <div class='w-auto grid grid-cols-1 place-items-center rounded-md bg-white py-2 px-3'>
              <div class='px-3 flex justify-center'><img src='${city.img}' alt='${city.name}' class='rounded-md w-2/3'/></div>
              <div class='flex justify-start px-2 w-full'><p class='font-bold text-lg py-2'>${city.name}</p></div>
              <div class='flex justify-start px-2 text-wrap w-full'><p class='w-2/4'>${city.desp}</p></div>
            </div>
          `).join("")}
        </div>
      `;
      dropDown.innerHTML = html;
    } else if (destination === "temple" || destination == "temples") {
      location = "Various Temples";
      html = `
        <div class='w-full text-center mb-4'>
          <p class='text-lg font-bold'>Location: ${location}</p>
          <p class='text-sm'>Local Time: ${localTime}</p>
        </div>
        <div class='grid grid-cols-1 place-items-center px-2 gap-4'>
          ${temples.map(temple => `
            <div class='w-auto grid grid-cols-1 place-items-center rounded-md bg-white py-2 px-3'>
              <div class='px-3 flex justify-center'><img src='${temple.img}' alt='${temple.name}' class='rounded-md w-2/3'/></div>
              <div class='flex justify-start px-2 w-full'><p class='font-bold text-lg py-2'>${temple.name}</p></div>
              <div class='flex justify-start px-2 text-wrap w-full'><p class='w-2/4'>${temple.desp}</p></div>
            </div>
          `).join("")}
        </div>
      `;
      dropDown.innerHTML = html;
    } else if (destination === "beach" || destination == "beaches") {
      location = "Various Beaches";
      html = `
        <div class='w-full text-center mb-4'>
          <p class='text-lg font-bold'>Location: ${location}</p>
          <p class='text-sm'>Local Time: ${localTime}</p>
        </div>
        <div class='grid grid-cols-1 place-items-center px-2 gap-4'>
          ${beaches.map(beach => `
            <div class='w-auto grid grid-cols-1 place-items-center rounded-md bg-white py-2 px-3'>
              <div class='px-3 flex justify-center'><img src='${beach.img}' alt='${beach.name}' class='rounded-md w-2/3'/></div>
              <div class='flex justify-start px-2 w-full'><p class='font-bold text-lg py-2'>${beach.name}</p></div>
              <div class='flex justify-start px-2 text-wrap w-full'><p class='w-2/4'>${beach.desp}</p></div>
            </div>
          `).join("")}
        </div>
      `;
      dropDown.innerHTML = html;
    } else {
      html = `
        <div class='w-full grid grid-cols-1 place-items-center'>
          <div><img src='https://i.postimg.cc/Gpgvgxvk/error.png' class='w-[230px]'/></div>
          <div class='py-2'><p class='font-bold text-xl'>Unable to find</p></div>
        </div>
      `;
      dropDown.innerHTML = html;
    }
  
    dropDown.style.display = "grid";
    visibility = true;
  }
  


function handleFormSubmit(event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

   
    alert(`${name} thank you for your message! We have received your response.`);

  
    document.querySelector('form').reset();
}

window.onload = function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}