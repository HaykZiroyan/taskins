    var list = [
        {
            name: "item 1"
        },
        {
            name: "item 2"
        },
        {
            name: "item 3"
        },
        {
            name: "item 4",
            items: [
                {
                    name: "sub-item 1"
                },
                {
                    name: "sub-item 2"
                },
                {
                    name:  "sub-item 3",
                    items: [
                        {
                            name: "sub-sub-item 1"
                        },
                        {
                            name: "sub-sub-item 2"
                        },
                        {
                            name:  "sub-sub-item 3",
                            items: [
                                {
                                    name: "sub-sub-sub-item 1"
                                },
                                {
                                    name: "sub-sub-sub-item 2"
                                },
                                {
                                    name: "sub-sub-sub-item 3"
                                },
                                {
                                    name: "sub-sub-sub-item 4"
                                }
                            ]
                        }
                    ]
                },
                {
                    name:  "sub-item 4"
                }
            ]
        },
        {
            name: "item 5"
        },
        {
            name: "item 6"
        }
    ]

    var div = document.getElementById('add');

    
    list.forEach(element => {
        let li = document.createElement("li");
        li.innerText = element[Object.keys(element)];
        if (element[Object.keys(element)] == undefined) {
            element.forEach(elem => {
                console.log(elem[Object.keys(elem)])
            })
            // li.innerText = element[Object.keys(element)];
        }
        div.appendChild(li);
    });
    // }
    // adds(list, div);
    // list.forEach(element => {
    //     let li = document.createElement("li");
    //     li.innerText = element[Object.keys(element)] ;
    //     div.appendChild(li);
    // });