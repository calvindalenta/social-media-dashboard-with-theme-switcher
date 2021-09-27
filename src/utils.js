export function appendIfBigger(value){
    if (value < 10000) return value;
    return Math.round(value / 1000) + 'K';
}

export function resolveIconPath(type){
    return type === 'up' ? "images/icon-up.svg" : "images/icon-down.svg";
}

export function resolveSocialImagePath(platform){
    const socialIcon = `images/icon-${platform}.svg`
    return socialIcon;
}