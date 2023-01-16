var teacher = {
    firstName: 'Buck',
    lastName: 'Martin',
    languages: [
        'C#',
        'SQL'
    ]
};

function displayTeacher(teacher) {
    var firstNameElem = document.getElementById('firstName');
    var lastNameElem = document.getElementById('lastName');
    var teacherNameElem = document.getElementById('teacherName');
    var languagesList =document.getElementById('techerLanguages');

    console.log(firstNameElem);

    firstNameElem.value = teacher.firstName;
    lastNameElem.value = teacher.lastName;
    teacherNameElem.innerText = `${teacher.firstName} ${teacher.lastName}`;
    languagesList.innerHTML = '';
    teacher.languages.forEach(lang => {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(lang));
        languagesList.appendChild(node);
    });
}

function addSkill() {
    var skillInput = document.getElementById('skill');

    if (skillInput.value == '') {return;}
      
    teacher.languages.push(skillInput.value);
    displayTeacher(teacher);

    skillInput.value = '';
}

function saveTeacher() {
var firstNameElem = document.getElementById('firstName');
var lastNameElem = document.getElementById('lastName');

teacher.firstName = firstNameElem.value;
teacher.lastName = lastNameElem.value;
displayTeacher(teacher);

var viewDiv = document.getElementById('viewTeacher');
var editDiv = document.getElementById('editTeacher');

editDiv.style.display = 'none';
viewDiv.style.display = 'block';
}

function toggleEdit() {

var viewDiv = document.getElementById('viewTeacher');
var editDiv = document.getElementById('editTeacher');

editDiv.style.display = 'block';
viewDiv.style.display = 'none';
}

displayTeacher(teacher);
toggleEdit();