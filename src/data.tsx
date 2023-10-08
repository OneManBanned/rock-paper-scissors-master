export interface Mode {
    options: string[];
    rules: string;
    title: string;
    background: string;
    original: boolean;
}

export let original: Mode = {
    options: ['rock', 'paper', 'scissors'],
    rules: '/assets/images/image-rules.svg',
    title: '/assets/images/logo.svg',
    background: '/assets/images/bg-triangle.svg',
    original: true
}

export let bonus: Mode = {
    options: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    rules: '/assets/images/image-rules-bonus.svg',
    title: '/assets/images/logo-bonus.svg',
    background: '/assets/images/bg-pentagon.svg',
    original: false
}