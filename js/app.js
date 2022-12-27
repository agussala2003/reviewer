const reviews = [
{
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
    id: 3,
    name: "Peter Jones",
    job: "intern",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
},
];

let left = document.querySelector('.bx-chevron-left');
let right = document.querySelector('.bx-chevron-right')
let number = 0;
let img = document.getElementById('author');
let names = document.querySelector('.name')
let charge = document.querySelector('.charge')
let des = document.querySelector('.des');

right.addEventListener('click', function () {
    number++;
    img.src = reviews[number].img;
    names.innerText = reviews[number].name;
    charge.innerText = reviews[number].job;
    des.innerText = reviews[number].text;
    console.log(number)
    left.classList.remove('first');
})
left.addEventListener('click', function () {
    number--;
    img.src = reviews[number].img;
    names.innerText = reviews[number].name;
    charge.innerText = reviews[number].job;
    des.innerText = reviews[number].text;
    console.log(number)
    if (reviews[number].id == 1) {
        left.className = 'bx bx-chevron-left first';
    }
    else {
        left.classList.remove('first');
    }
})