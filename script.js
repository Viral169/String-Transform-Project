let input_out = document.querySelector(".input");
let lowercase = document.querySelector(".lowercase");
let uppercase = document.querySelector(".uppercase");
let camelcase = document.querySelector(".camelcase");
let pascalcase = document.querySelector(".pascalcase");
let snakecase = document.querySelector(".snakecase");

function toCamelCase(str) {
  return str
    .replace(/_./g, (match) => match.charAt(1).toUpperCase())
    .replace(/-/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
    .replace(/\s+/g, " ")
}

function toPascalCase(str) {
  return str
    .split(/[^a-zA-Z0-9]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(''); 
}

function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')  
    .replace(/[^a-zA-Z0-9]+/g, '_')     
    .toLowerCase();                   
}

input_out.addEventListener("input", () => {
  lowercase.innerText = input_out.value.toLowerCase();
  uppercase.innerText = input_out.value.toUpperCase();
  camelcase.innerHTML = toCamelCase(input_out.value);
  pascalcase.innerHTML = toPascalCase(input_out.value);
  snakecase.innerHTML = toSnakeCase(input_out.value);
});


