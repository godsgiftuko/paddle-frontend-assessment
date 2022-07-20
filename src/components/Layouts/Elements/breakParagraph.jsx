

export const breakParagraph = (str, symbol) => {
    const symbolPos = str.includes(symbol) && str.indexOf(symbol);
    const strLength = str.length;

    const mixedString = symbolPos 
    ? (
        <>
            { str.slice(0, symbolPos) }
            <br/>
            { str.slice(symbolPos, strLength).replace(symbol, '') }
        </>
           
    ) : str;

    // console.log(load(mixedString, null, false).html())
    return mixedString;
    // return load(mixedString, null, false).html();
}