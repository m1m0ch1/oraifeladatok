var array = ["egy","kettő","három"]
array.push

function listCreate() {
    list = document.getElementById('list')
    alert(list.name)
    new_option = new Option("négy",3)
    array.forEach(element,index => {
        new_option = new Option(element,index)
        list.add(new_option)

    });

}












