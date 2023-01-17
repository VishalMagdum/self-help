let sidebar_list = document.querySelectorAll('.list');
// console.log(sidebar_list)
for (i = 0; i < sidebar_list.length; i++) {
    sidebar_list[i].onclick = function () {

        let j = 0;
        while (j < sidebar_list.length) {
            // sidebar_list[i].className = 'list selected' 
            sidebar_list[j++].className = 'list selected';
        }

        sidebar_list[i].classList.add('selected')

    }
}



