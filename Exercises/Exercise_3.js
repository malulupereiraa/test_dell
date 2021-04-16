$(document).ready(function () {

    var newFilterStyle = document.createElement('style');
    newFilterStyle.innerHTML =
        '#newDiv a {' +
        'margin-right: 20px;' +
        '}' +
        '#newDiv a:hover {' +
        'cursor: pointer;' +
        '}';

    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);

    var divNova1 = document.createElement("div");
    divNova1.setAttribute("id", "newDiv1");

    var firstChild = document.getElementById("cat-cards").firstElementChild;

    document.getElementById("cat-cards").insertBefore(divNova1, firstChild);


    var element2 = document.getElementsByClassName("anavmfe__accordion__item__name");

    $(document).ready(function () {

        var divNova1 = document.createElement("div");
        divNova1.setAttribute("id", "newDiv1");

        var firstChild = document.getElementById("cat-cards").firstElementChild;

        document.getElementById("cat-cards").insertBefore(divNova1, firstChild);


        var element2 = document.getElementsByClassName("anavmfe__accordion__item__name");

        for (let i = 0; i < element2.length; i++) {
            var a = document.createElement('a');
            var link = document.createTextNode(element2[i].textContent);
            a.appendChild(link);
            a.title = element2[i].textContent;
            a.style.marginRight = '20px';

            a.onclick = function () {
                checkAllFilter(element2[i].textContent); return false;
            };

            document.getElementById("newDiv1").appendChild(a);
        }

    })

    function checkAllFilter(filterName) {
        var allFilterItem = document.getElementsByClassName("anavmfe__accordion__item__name");

        let codeFilter = [];
        let urlFilter = "https://www.dell.com/en-us/shop/dell-laptops/sr/laptops/ready-to-ship?appliedRefinements=";

        for (let j = 0; j < allFilterItem.length; j++) {
            if (allFilterItem[j].textContent === filterName) {
                var block = document.getElementsByClassName("anavmfe__accordion__item");

                var checkboxes = block[j].getElementsByClassName("anavmfe__accordion__row link");

                for (let k = 0; k < checkboxes.length; k++) {
                    checkboxes[k].querySelector("input").checked = true;
                    codeFilter.push(checkboxes[k].querySelector("input").getAttribute('name'));
                }
            }
        };

        for (let l = 0; l < codeFilter.length; l++) {
            l === 0 ? urlFilter += codeFilter[l] : urlFilter += "," + codeFilter[l];
        }

        window.location.href = urlFilter;
    };




    for (let i = 0; i < element2.length; i++) {
        var a = document.createElement('a');
        var link = document.createTextNode(element2[i].textContent);
        a.appendChild(link);
        a.title = element2[i].textContent;

        a.onclick = function () {
            checkAllFilter(element2[i].textContent); return false;
        };

        document.getElementById("newDiv1").appendChild(a);
    }




})

function checkAllFilter(filterName) {
    var allFilterItem = document.getElementsByClassName("anavmfe__accordion__item__name");

    let codeFilter = [];
    let urlFilter = "https://www.dell.com/en-us/shop/dell-laptops/sr/laptops/ready-to-ship?appliedRefinements=";

    for (let j = 0; j < allFilterItem.length; j++) {
        if (allFilterItem[j].textContent === filterName) {
            var block = document.getElementsByClassName("anavmfe__accordion__item");

            var checkboxes = block[j].getElementsByClassName("anavmfe__accordion__row link");
            console.log(checkboxes.length);
            for (let k = 0; k < checkboxes.length; k++) {
                checkboxes[k].querySelector("input").checked = true;
                codeFilter.push(checkboxes[k].querySelector("input").getAttribute('name'));
            }
        }
    };

    for (let l = 0; l < codeFilter.length; l++) {
        l === 0 ? urlFilter += codeFilter[l] : urlFilter += "," + codeFilter[l];
    }

    console.log(urlFilter);
    window.location.href = urlFilter;
};

