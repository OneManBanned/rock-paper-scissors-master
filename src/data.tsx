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
    rules: './image-rules.svg',
    img: './logo.svg',
    rulesAlt: 'rock beats scissors, paper beats rock, scissors beats paper',
    background: './bg-triangle.svg',
    original: true
}

export let bonus: Mode = {
    options: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    rules: './image-rules-bonus.svg',
    img: './logo-bonus.svg',
    rulesAlt: 'rock beats scissors and lizard, paper beats rock and spock, scissors beats paper and lizard, spock beats scissors and rock, lizard beats spock and paper',
    background: './bg-pentagon.svg',
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
