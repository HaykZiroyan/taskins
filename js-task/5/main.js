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
var div1 = document.getElementById('demoC');
function create(where, from) {
    var ul = document.createElement("ul");
    for(var i = 0; i<from.length; i++) {
        if (Object.keys(from[i]).length == 1) {
            let li = document.createElement("li");
            li.innerText = from[i][Object.keys(from[i])];
            ul.appendChild(li);
        } else {
            let li = document.createElement("li");
            var uls = document.createElement("ul");

            // var ul1 = document.createElement("ul");
            li.innerText = from[i][Object.keys(from[i])[0]];
            li.appendChild(uls);
            ul.appendChild(li);
            
            create(uls, from[i][Object.keys(from[i])[1]]);
        }


    }
    where.appendChild(ul);
}
create(div,list);