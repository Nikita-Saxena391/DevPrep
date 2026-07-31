import dagre from "dagre";

const nodeWidth = 380;
const nodeHeight = 200;

export function layoutNodes(nodes = [], edges = []) {

  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));


  dagreGraph.setGraph({
    rankdir: "TB",
    align: "UL",

    nodesep: 70,
    ranksep: 100,

    marginx: 50,
    marginy: 50,
  });


  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });


  edges.forEach((edge) => {
    if(edge.source && edge.target){
      dagreGraph.setEdge(
        edge.source,
        edge.target
      );
    }
  });


  dagre.layout(dagreGraph);


  return nodes.map((node) => {

    const pos = dagreGraph.node(node.id);

    return {
      ...node,
      position:{
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      }
    };

  });

}