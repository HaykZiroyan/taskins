    let products = [
        {
            name: 'a',
            price: 10
        },
        {
            name: 'b', 
            price: 10
        },
        {
            name: 'c',
            price: 10
        }
    ];
    var sum = 0;
    var sum = products.reduce(function (gumar, objects) {
        return gumar + objects.price;
    }, sum)
    
    console.log(sum);
