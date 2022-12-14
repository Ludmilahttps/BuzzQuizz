const feed = document.querySelector('.view')
const loading = document.querySelector('.loading');
const container = document.querySelector('.container');
const WithQuizz = document.querySelector('.WithQuizz');
const NoQuizz = document.querySelector('.NoQuizz');
const YourQuizzes = document.querySelector(".WithQuizz .table");
//let userCreatedQuizzId = JSON.parse(localStorage.getItem("quizzes"))
let localQuizzes = JSON.parse(localStorage.getItem("quizzes"));
let quizzes;
let id;

init();

function init() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promise.then(pullquizzes);
    promise.catch((error) => {
        alert(error);
        window.location.reload();
    });
}

function pullquizzes(promise) {
    quizzes = promise.data;
    console.log(promise);
    renderizeQuizzes();
    loading.classList.add("hidden");
    container.classList.remove("hidden");
    SyncLayout();
}

function renderizeQuizzes() {
    feed.innerHTML = "";
    for (let i = 0; i < quizzes.length; i++) {
        //console.log(quizzes[i]); //printa quizz por quizz
        feed.innerHTML += `<div class="quizz-image box" id="${quizzes[i].id}" onclick="goToQuizz(this)">
                                <p class="titulo-quizz">${quizzes[i].title}</p>
                            </div>`;
        feed.children[i].style.backgroundImage = `url(${quizzes[i].image})`;
    }
}

function goToQuizz(quizz) {
    id = quizz.getAttribute("id");
    console.log(id);
    window.location.href = 'quizz.html?id=' + id;
}

function SyncLayout() {
    /*se não tiver quizz add hidden em seus quizzes*/
    if (localQuizzes === null || localStorage.quizzes === "[]") {
        WithQuizz.classList.add("hidden");
    } /* senão add none em add hidden em criar quizz*/
    else {
        NoQuizz.classList.add("hidden");
        renderyourQuizzes();
    }
}
function renderyourQuizzes() {
    //console.log(localQuizzes);
    YourQuizzes.innerHTML = "";
    for (let i = 0; i < localQuizzes.length; i++) {
        YourQuizzes.innerHTML += `
                                <div class="extern">
                                    <div class="quizz-image box" id="${localQuizzes[i].id}" onclick="goToQuizz(this)">
                                        <p class="titulo-quizz">${localQuizzes[i].title}</p> 
                                    </div>
                                    <div class="edit-delete">
                                        <ion-icon name="create-outline" onclick="deleteQuizzConfirmation(this)"></ion-icon>
                                        <ion-icon name="trash" onclick="deleteQuizzConfirmation(this)"></ion-icon>
                                    </div>
                                </div>`;
        YourQuizzes.children[i].children[0].style.backgroundImage = `url(${localQuizzes[i].image})`;
    }
}

function deleteQuizzConfirmation(element) {
    if (confirm("Você deseja realmente remover esse quiz?") == true) {
        let id = element.parentNode.parentNode;
        //console.log(id);

        let userQuizzes;
        userQuizzes = localQuizzes.filter(quizz => quizz.id === Number(id.children[0].id));
        let quizz = userQuizzes[0];
        deleteQuizz(quizz);
    }
}

function deleteQuizz(quizz) {
    //console.log(quizz);
    try {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Secret-Key": quizz.key ? quizz.key : ""
            }
        };
        let request = fetch("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + quizz.id, options);
        request.then(()=> {
            console.log(quizz);
            let x = localQuizzes.indexOf(quizz);
            localQuizzes.splice(x, 1);
            localStorage.quizzes = JSON.stringify(localQuizzes);
            window.location.reload();
        });
        request.catch((error) => {
            alert(error);
            window.location.reload();
        });
    } catch (error) {
        console.log(error);
    }
}
