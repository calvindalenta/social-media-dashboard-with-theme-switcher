export function appendIfBigger(value){
    if (value < 10000) return value;
    return Math.round(value / 1000) + 'K';
}