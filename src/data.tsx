import { createRef } from 'react';

export interface Mode {
    options: string[];
    rules: string;
    img: string;
    rulesAlt: string;
    background: string;
    original: boolean;
}

export let original: Mode = {
    options: ['rock', 'paper', 'scissors'],
    rules: 'images/image-rules.svg',
    img: 'images/logo.svg',
    rulesAlt: 'rock beats scissors, paper beats rock, scissors beats paper',
    background: 'images/bg-triangle.svg',
    original: true
}

export let bonus: Mode = {
    options: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    rules: 'images/image-rules-bonus.svg',
    img: 'images/logo-bonus.svg',
    rulesAlt: 'rock beats scissors and lizard, paper beats rock and spock, scissors beats paper and lizard, spock beats scissors and rock, lizard beats spock and paper',
    background: 'images/bg-pentagon.svg',
    original: false
}

export interface Item {
    name: string,
    nodeRef: any
}

export function createItemsArray(arr: string[]) {
    const itemsArr: Item[] = []
    arr.forEach(item => itemsArr.push({ name: item, nodeRef: createRef() }))
    return itemsArr
}

export const gameModes = [original, bonus]
