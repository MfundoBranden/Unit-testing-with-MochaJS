function isFromCapeTown(item) {
    return item.startsWith('CA') || item.endsWith('CJ')
}
console.log(isFromCapeTown('CA'));

function isFromGauteng(item) {
    return item.endsWith('GP')
}
console.log(isFromGauteng('DR 12 TY GP'));

function isFromLimpopo(item) {
    return item.endsWith('L')
}
console.log(isFromLimpopo('DRT 122 L'));