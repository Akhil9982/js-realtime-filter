let users = [
  {
    name: "kaushik verma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    bio: "code, coffee, repeat",
  },
  {
    name: "tanishka shetty",
    pic: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=800&auto=format&fit=crop&q=60",
    bio: "code, coffee, repeat",
  },
  {
    name: "priya sharma",
    pic: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&auto=format&fit=crop&q=60",
    bio: "design is intelligence made visible",
  },
  {
    name: "ankit patel",
    pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&auto=format&fit=crop&q=60",
    bio: "debugging is my cardio",
  },
  {
    name: "sneha kapoor",
    pic: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60",
    bio: "living between pixels and reality",
  },
  {
    name: "vikram singh",
    pic: "https://plus.unsplash.com/premium_vector-1683140924463-adba1c428d66?w=352&dpr=1&h=367&auto=format&fit=crop&q=60",
    bio: "building things that scale",
  },
  {
    name: "keshav gupta",
    pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60",
    bio: "frontend with a touch of chaos",
  },
  {
    name: "rohani das",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
    bio: "minimal code, maximum impact",
  },
];

const container = document.querySelector("#cards");

function showUsers(arr) {
  container.innerHTML = "";

  if (arr.length === 0) {
    container.innerHTML = `<p id="para">No users found</p>`;
    document.querySelector("#para").style.color = "lightgreen";
    return;
  }

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blur = document.createElement("div");
    blur.style.backgroundImage = `url(${user.pic})`;
    blur.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    h3.style.color = "lightgreen";

    const p = document.createElement("p");
    p.textContent = user.bio;
    p.style.color = "lightgreen";

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    container.appendChild(card);
  });
}

showUsers(users);

const inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
  const query = inp.value.toLowerCase().trim();

  if (!query) {
    showUsers(users);
    return;
  }

  const newUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query),
  );

  showUsers(newUsers);
});
