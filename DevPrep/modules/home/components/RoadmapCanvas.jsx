"use client";

import { layoutNodes } from "@/lib/dagre";
import { useState, useCallback, useMemo, useEffect } from "react";

import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  BackgroundVariant,
  ConnectionLineType,
  Controls,
  MarkerType,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import TurboNode from "./TurboNode";


const nodeTypes = {
  turbo: TurboNode,
};


const RoadmapCanvas = ({
  initialNodes = [],
  initialEdges = [],
}) => {


  const layoutedNodes = useMemo(() => {

    if (!initialNodes.length) {
      return [];
    }


    const preparedNodes = initialNodes.map(
      (node, index) => ({

        ...node,

        id:
          node.id ||
          `node-${index}`,


        type: "turbo",


        data: {
          title:
            node.data?.title ||
            "Untitled",

          description:
            node.data?.description ||
            "No description",

          link:
            node.data?.link ||
            "",
        }

      })
    );


    return layoutNodes(
      preparedNodes,
      initialEdges
    );


  }, [
    initialNodes,
    initialEdges
  ]);




  const safeEdges = useMemo(()=>{

    return initialEdges.map(
      (edge,index)=>({

        ...edge,

        id:
        edge.id ||
        `edge-${index}`,

        type:"smoothstep"

      })
    );


  },[initialEdges]);





  const [nodes,setNodes] = useState([]);
  const [edges,setEdges] = useState([]);




  useEffect(()=>{


    setNodes(layoutedNodes);

    setEdges(safeEdges);


  },[
    layoutedNodes,
    safeEdges
  ]);







  const onNodesChange = useCallback(
    (changes)=>{

      setNodes((current)=>
        applyNodeChanges(
          changes,
          current
        )
      );

    },
    []
  );





  const onEdgesChange = useCallback(
    (changes)=>{

      setEdges((current)=>
        applyEdgeChanges(
          changes,
          current
        )
      );

    },
    []
  );





  return (

    <div className="w-full h-[85vh]">


      <ReactFlow

        nodes={nodes}

        edges={edges}

        nodeTypes={nodeTypes}


        onNodesChange={
          onNodesChange
        }


        onEdgesChange={
          onEdgesChange
        }


        fitView

        fitViewOptions={{
          padding:0.4,
        }}


        minZoom={0.4}

        maxZoom={1.8}


        defaultViewport={{
          x:0,
          y:0,
          zoom:1,
        }}


        connectionLineType={
          ConnectionLineType.SmoothStep
        }


        defaultEdgeOptions={{

          type:"smoothstep",

          animated:true,


          style:{
            stroke:"#64748b",
            strokeWidth:2
          },


          markerEnd:{

            type:
            MarkerType.ArrowClosed,

            color:"#64748b"

          }

        }}

      >


        <Background

          variant={
            BackgroundVariant.Dots
          }

          gap={16}

          size={1}

        />


        <Controls />


        <MiniMap />


      </ReactFlow>


    </div>

  );

};


export default RoadmapCanvas;