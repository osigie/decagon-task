let body = document.querySelector("body");

const modalDiv = document.querySelector(".modal-div");
const close_modal = document.querySelector(".close");
const modal_span = document.querySelector(".modal-span");

const openModal = () => {
  modalDiv.style.display = "block";
};

const closeModal = () => {
  modalDiv.style.display = "none";
  // console.log("In!");
};

close_modal.addEventListener("click", closeModal);
body.addEventListener("click", closeModal);

const getMovieCard = document.querySelector(".movieCard");

const { movieFile } = data;

const getIdAndCallApi = async (id) => {
  // console.log(id)
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const result = await response.json();
  console.log(result);
  if (result) {
    modal_span.innerHTML = `
  
        <ul class="unorderd-list">
          <li class ="name"> ${result.name}</li>
          <li class="gender">${result.gender}</li>
          <li class = "height">${result.height}</li>
        </ul>
      
    `;
  }
  if (result) return openModal();
};

movieFile &&
  movieFile.map(({ id, image }) => {
    return (getMovieCard.innerHTML += `
    <div id="${id}" onclick="getIdAndCallApi(${id})"> 
   <img src="${image}" class = "imgTag">
    </div>
  `);
  });
