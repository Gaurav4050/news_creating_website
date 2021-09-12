//c324f145031f42e78c84ffa317e586b7

console.log("my name is gaurav")

let source=`bbc-news`;

let newsaccordian = document.getElementById("newsaccordian");


const xhr = new XMLHttpRequest();


xhr.open('GET', `
https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c324f145031f42e78c84ffa317e586b7`, true);

xhr.onload = function () {
    if (this.status == 200) {
        // console.log("All is fine");
        // This.responseText
        let json = JSON.parse(this.responseText);

        let articles = json.articles;
        console.log(articles)



        let newHTMl = "";
        articles.forEach(function (element, index) {
            // console.log(articles[news]);

            let news = `
            
                    <p class="" style="text-align: center;">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample${index}" aria-expanded="false" aria-controls="collapseWidthExample${index}">
                        ${element["title"]}
                    </button>
                    </p>
                    <div style="min-height: 120px;position: relative;
                    
                   
                    left: 55%;
                    top: 50%;
                    height: 200px;
                    margin-top: -100px /* half of you height */
                    width: 400px;
                    margin-left: -200px /* half of you width */
                    " class="gaurav">

                    
                    <div class="collapse collapse-horizontal "  style=" text-align: center;"id="collapseWidthExample${index}">
                        <div class="card card-body" style="width: 300px;  text-align: center;">
                        ${element["content"]} . <a href="${element["url"]}" target="_blank">Read More</a>
                        </div>
                    </div>
                    </div>
                    
                    <h4 style="text-align: center;"> <span class="badge bg-warning my-5">Breaking News ${index+2}</span></h4>
                    `;

            newHTMl += news;

        });

        newsaccordian.innerHTML = newHTMl;
    }
    else {
        console.log("page not found")
    }
}

xhr.send();



