const staff_data = {
  staff_id: 59484,
  name: "U Thu Rain Soe",
  worked_year: 3,
};

const id = document.querySelector(".staff_id");
const staff_name = document.querySelector(".name");
const years = document.querySelector(".years_worked");
id.textContent = staff_data.staff_id;
staff_name.textContent = staff_data.name;
years.innerHTML = staff_data.worked_year;
