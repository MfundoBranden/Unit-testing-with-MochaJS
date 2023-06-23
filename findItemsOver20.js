function findItemsOver20(plus20){
    let over20 = [];
    for (let i in plus20) {
        let items = plus20[i];
        if (items.qty > 20) {
            over20.push(plus20);
        }
    }
    return over20;
}
console.log(findItemsOver(list, thold));

function findItemsOver20(itemList) {
    letThold = [];
    for (let i in list){
        var items = list[i];
        if (items.qty > 20) {
            overThold.push(items);
        }
    }
    return overThold;
}

