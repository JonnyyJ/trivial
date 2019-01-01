//declare the adjacent matrix
let Arr2 = [
    [0, 1, 5, 65535, 65535, 65535, 65535, 65535, 65535],
    [1, 0, 3, 7, 5, 65535, 65535, 65535, 65535],
    [5, 3, 0, 65535, 1, 7, 65535, 65535, 65535],
    [65535, 7, 65535, 0, 2, 65535, 3, 65535, 65535],
    [65535, 5, 1, 2, 0, 3, 6, 9, 65535],
    [65535, 65535, 7, 65535, 3, 0, 65535, 5, 65535],
    [65535, 65535, 65535, 3, 6, 65535, 0, 2, 7],
    [65535, 65535, 65535, 65535, 9, 5, 2, 0, 4],
    [65535, 65535, 65535, 65535, 65535, 65535, 7, 4, 0],
]

let numVertexes = 9, //declare the number of vertexes
    numEdges = 15; //declare the number of edges
//declare the structure of the graph
 function MGraph(){
     this.vexs = []; //vertex table
     this.arc = []; //adjacent matrix, treat as edge table
     this.numVertexes = null; //current number of vertex in the graph
     this.numEdges = null; //current number of edges in the graph

 }
 let G = new MGgraph(); //create graph for using
 //create graph
 function createMGrapgh(){
     G.numVertexes = numVertexes; //set up the number of vertex
     G.numEdges = numEdges; //set up the number of edges
     //entry vertex information
     for (let i = 0; i < G.numVertexes; i++) {
         G.vexs[i] = 'V' + i; //scanf('%s'); //ascii 码转字符 //String.fromCharCode(i+65);
     }
     console.log(G.vexs) //print the vertex

     //initialize the adjacent matrix
     for (let i = 0; i < G.numVertexes; i++){
         G.arc[i] = [];
         for (j = 0; j < G.numVertexes; j++){
             G.arc[i][j] = Arr2[i][j]; //INFINITY;
         }
     }
     console.log(G.arc);//print the adjacent matrix
}

let Pathmatrix = [] //used for storing the array which has the shortest path subscript, the subscript stands for each vertex, the value is the predecessor of subscript vertex
let ShortPathTable = [] //used for storing the weight of shortest path of each point

function Dijkstra(){
    let k,min;
    let final = [];
    for (let v = 0; v < G.numVertexes; v++){
        final[v] = 0;
        ShortPathTable[v] = G.arc[0][v];
        Pathmatirx[v] = 0;
    }
    ShortPathTable[0] = 0;
    final[0] = 1;

    for (let v = 1; v < G.numVertexes; v++){
        //initialize the data
        min = 65535;
        for (let w = 0; w < G.numVertexes; w++){
            //find the nearest vertex from V0
            if (!final [w] && ShortPathTable[w] < min){
                k = w;
                min = ShortPathTable[w]; //w vertex is more closed to V0
            }
        }
        final[k] = 1;//
        for (let w = 0; w < G.numVertexes; w++){
            //fix the current shortest path and distance
            if (!final[w] && (min + G.arc[k][w] < ShortPathTable[w])){
                // found a shorter path, modify the Pathmatirx[w] and ShortPathTable[w]
                ShortPathTable[w] = min + G.arc[k][w];
                Pathmatirx[w] = k;
            }
        } 
    }
}
function PrintVn(Vn){
    //print the shortest path of V0-VN 
    console.log("%s-%s the smallest value and :%d", G.vexs[0], G.vexs[Vn], ShortPathTable[Vn]);
    //print the shortest path
    let temp = Vn;
    str = '';
    while (temp != 0){
     str = '->' + G.vexs[temp] + str
     temp = Pathmatirx[temp]
    }
    str = 'V0' + str;
    console.log('shortest path:' + str);

}
createMGrapgh();
Dijkstra();
PrintVn(8);



        