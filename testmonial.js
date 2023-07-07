const testimonials = [
  {
    name: "raunak",
    imgUrls:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltYWdlcyUyMG1hbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    text: "Mans was worth a fortune to my company. Mans did exactly what you said it does. Mans is the most valuable business resource we have EVER purchased. I'm good to go.",
  },
  {
    name: "- Chrissa L.",
    imgUrls:
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    text: "It's the perfect solution for our business. I wish I would have thought of it first. I don't always clop, but when I do, it's because of ai.",
  },
  {
    name: "permit",
    imgUrls:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    text: "Mans was worth a fortune to my company. Mans did exactly what you said it does. Mans is the most valuable business resource we have EVER purchased. I'm good to go.",
  },
  {
    name: "- Kassie K.",
    imgUrls:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "We've used apple for the last five years. We've seen amazing results already. We've seen amazing results already.",
  },
  {
    name: " - Christabelle",
    imgUrls:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Man, this thing is getting better and better as I learn more about it. Absolutely wonderful!",
  },
];

const imgEl = document.querySelector(".imges");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
console.log(imgEl, textEl, usernameEl);

let idx = 0;
updateImg();
function updateImg() {
  const { name, imgUrls, text } = testimonials[idx];
  imgEl.src = imgUrls;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateImg();
  }, 4000);
}
