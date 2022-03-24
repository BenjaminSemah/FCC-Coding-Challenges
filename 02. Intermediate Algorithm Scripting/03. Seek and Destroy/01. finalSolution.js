// 03/21 Seek and Destroy

function destroyer(arr) {
    const argumentArray = Object.values(arguments);
    const firstArgument = argumentArray[0];

    const otherArguments = argumentArray.filter(element => {
        return (argumentArray.indexOf(element) > 0);
    })

    const finalArray = firstArgument.filter(element => {
        return !otherArguments.includes(element)
    });

    return finalArray;
}
