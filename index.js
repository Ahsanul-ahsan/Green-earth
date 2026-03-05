
const categoriesContainer = document.getElementById("btn-container");
const treeContainer = document.getElementById("tree-container");

// btn loadCategories
async function loadCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json();
    data.categories.forEach(catagory => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline w-full";
        btn.innerHTML = catagory.category_name;
        categoriesContainer.appendChild(btn)

    });

};

async function loadTree() {
    const res = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await res.json();
    displayTree(data.plants);

};

function displayTree(trees) {
    trees.forEach((tree) => {
        const card = document.createElement("div");
        card.className = "card bg-white w-[220px]  shadow-sm";
        card.innerHTML = `
                        <figure>
                            <img class="h-[220px] w-[200px] pt-2 rounded-sm" src="${tree.image}"
                                alt="Shoes" />
                         </figure>
                         <div class="card-body">
                            <h2 class="card-title text-[#1F2937] ">${tree.name}</h2>
                            <p class="line-clamp-2 text-[#1F2937] text-[12px]">${tree.description}</p>
                            <div class="badge badge-dash badge-success">${tree.category}</div>
                            <div class="flex justify-between items-center gap-4">
                                <h2 class="font-bold text-xl text-success">$${tree.price}</h2>
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>


       `;

     treeContainer.appendChild(card);
    });


}



loadCategories();
loadTree();

