export const breakParagraph = (str, symbol) => {
    const symbolPos = str.includes(symbol) && str.indexOf(symbol);
    const strLength = str.length;
    
    return (
        <>
            { str.slice(0, symbolPos) }
            <br/>
            { str.slice(symbolPos, strLength).replace(symbol, '') }
        </>
           
    )
}