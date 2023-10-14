export interface Mode {
    options: string[];
    rules: string;
    rulesAlt: string;
    background: string;
    original: boolean;
}

export let original: Mode = {
    options: ['rock', 'paper', 'scissors'],
    rules: '/assets/images/image-rules.svg',
    rulesAlt: 'rock beats scissors, paper beats rock, scissors beats paper',
    background: '/assets/images/bg-triangle.svg',
    original: true
}

export let bonus: Mode = {
    options: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    rules: '/assets/images/image-rules-bonus.svg',
    rulesAlt: 'rock beats scissors and lizard, paper beats rock and spock, scissors beats paper and lizard, spock beats scissors and rock, lizard beats spock and paper',
    background: '/assets/images/bg-pentagon.svg',
    original: false
}

export interface Item {
    name: string,
    nodeRef: any
}