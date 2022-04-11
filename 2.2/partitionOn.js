function partitionOn(pred, items) {
    let evenItems = items.filter(el => pred(el));
    let oddItems = items.filter(el => !pred(el));

    items.length = 0;
    items.push.apply(items, oddItems.concat(evenItems));

    return items.indexOf(evenItems[0])

}
f