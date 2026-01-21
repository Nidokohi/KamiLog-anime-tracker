
export function delay() {

    const ms = 500;

    return new Promise(resolve => setTimeout(resolve, ms));
}