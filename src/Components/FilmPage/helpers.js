import {baseImgUrl} from "../../httpServices";

function getTimeFromMinutes(minutes) {
    let hours = Math.trunc(minutes / 60);
    let resultMinutes = minutes % 60;
    return hours + 'h. ' + resultMinutes + 'm.';

}

function convertNumberToCurrencies(number) {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'USD'}).format(number)

}

function createImgUrl(url) {
    return `url(${baseImgUrl}${url})`;
}

export {getTimeFromMinutes, convertNumberToCurrencies, createImgUrl}