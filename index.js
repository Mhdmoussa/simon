fetch('https://pure-bastion-99185.herokuapp.com/data/')
  .then(response => response.json())
  .then(json => {
        studentSelect = document.getElementById('students')
        json.Sheet1.forEach(element => {
            var option = document.createElement('option')
            option.innerHTML = element["A"]
            studentSelect.appendChild(option)
        });
  })
