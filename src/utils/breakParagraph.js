export const breakParagraph = (str, symbol) => {
    const element = 'br';
    const symbolPos = str.includes(symbol) && str.indexOf(symbol);
    const strLength = str.length;
    
    const output = `
        ${str.slice(0, symbolPos)}
            <${element}>
        ${str.slice(symbolPos, strLength)}    
    `;
    
    return (
           `
        ${str.slice(0, symbolPos)}
            <${element} />
        ${str.slice(symbolPos, strLength).replace(symbol, '')}    
    `)
}