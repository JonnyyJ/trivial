function networkSums(cNodes, cFrom, cTo){
    let numberNodes = cNodes;
    let numberConnections = 0;
    let num_from = cFrom;
    let  num_to = cTo;
    
    for(let i = 0; i < numberNodes.length; i++){
        if(numberNodes !== null){
            numberconnections++
        }
    }
    
}
function main(){
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
    const cNodesEdges = readLine().split('')
    const cNodes = parseInt(cNodesEdges[0], 10);
    const cEdges = parseInt(cNodesEdges[1], 10);

    let cFrom = [];
    let cTo = [];

    for(let65 i = 0; i < cEdges; i++){
    const cFromTo = readLine().split('')

    cFrom.push(parseInt(cFromTo[0], 10))
    cTo.push(parseInt(cFromTo[1], 10))
}
const result = networkSums(cNodes, cFrom, cTo)
ws.write(result.join('\n') + '\n');
ws.end()
}