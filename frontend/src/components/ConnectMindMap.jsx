import React, { useRef, useEffect, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

const CustomNode = ({ data }) => {
  return (
    <div className="relative flex min-w-[200px] justify-center items-center">
      <div className="flex flex-row -space-x-2 relative">
        {data.logos?.map((logo, i) => {
          const size = data.logoSize ? `${data.logoSize}rem` : "3rem"; // default 12 (3rem)
          return (
            <div key={i} className="relative flex justify-center items-center">
              <img
                src={logo}
                alt="logo"
                className="rounded-full object-contain p-1"
                style={{ width: size, height: size }}
              />
              <Handle
                type="target"
                position={Position.Top}
                id={`target-${i}`}
                className="w-3 h-3 !bg-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <Handle
                type="source"
                position={Position.Bottom}
                id={`source-${i}`}
                className="w-3 h-3 !bg-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};


// --- CENTER NODE (CONNECT.PNG) ---
const CenterNode = () => (
  <div className="p-1 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-2xl">
    <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
      <img
        src="/connect.png"
        alt="Connect"
        className="w-full h-full object-contain"
      />
    </div>
    <Handle type="source" position={Position.Top} className="!opacity-0" />
    <Handle type="source" position={Position.Bottom} className="!opacity-0" />
    <Handle type="source" position={Position.Left} className="!opacity-0" />
    <Handle type="source" position={Position.Right} className="!opacity-0" />
  </div>
);

const nodeTypes = {
  custom: CustomNode,
  center: CenterNode,
};

const ConnectMindmap = () => {
  const reactFlowWrapper = useRef(null);
  const reactFlowInstance = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (reactFlowInstance.current) {
        reactFlowInstance.current.fitView({ padding: 0.2 });
      }
    });

    if (reactFlowWrapper.current) {
      resizeObserver.observe(reactFlowWrapper.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const initialNodes = [
    // CENTRE
    {
      id: "center",
      type: "center",
      position: { x: 400, y: 300 },
    },

    // RIGHT SECTION
    {
      id: "whatsapp",
      type: "custom",
      position: { x: 700, y: 200 },
      data: {
        label: "WhatsApp",
        logos: ["/whatsapp-logo.svg"],
        contentPngs: ["/chat-ui.png", "/automation.png"],
        borderColor: "border-green-400",
      },
    },
    {
      id: "social",
      type: "custom",
      position: { x: 700, y: 400 },
      data: {
        label: "Social Media",
        logos: ["/ig-logo.svg", "/fb-logo.svg", "/pin-logo.svg"],
        verticalLogos: true, // <-- NEW
        contentPngs: ["/feed.png"],
        borderColor: "border-pink-400",
      },
    },

    // TOP SECTION
    {
      id: "reporting",
      type: "custom",
      position: { x: 250, y: 50 },
      data: {
        label: "Reporting & Analytics",
        logos: ["/chart-icon.png"],
        contentPngs: ["/stats.png"],
        targetPos: Position.Bottom,
        sourcePos: Position.Top,
        borderColor: "border-blue-400",
      },
    },
    {
      id: "sherlock",
      type: "custom",
      position: { x: 550, y: 50 },
      data: {
        label: "Sherlock.ai",
        logos: ["/ai-logo.png"],
        contentPngs: ["/insight.png"],
        targetPos: Position.Bottom,
        sourcePos: Position.Top,
        borderColor: "border-purple-600",
      },
    },

    // LEFT SECTION
    {
      id: "crm",
      type: "custom",
      position: { x: 50, y: 300 },
      data: {
        label: "CRM & Management",
        logos: ["/users-icon.png"],
        contentPngs: ["/database.png"],
        targetPos: Position.Right,
        sourcePos: Position.Left,
        borderColor: "border-orange-400",
      },
    },

    // BOTTOM SECTION
    {
      id: "backoffice",
      type: "custom",
      position: { x: 400, y: 550 },
      data: {
        logos: ["/office-icon.png"],
        logoSize: 32, // optional, will use to make this logo bigger
      },
    },
  ];

  const initialEdges = [
    {
      id: "e-wa",
      source: "center",
      target: "whatsapp",
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: "#A855F7" },
      style: { stroke: "#A855F7" },
    },
    {
      id: "e-soc",
      source: "center",
      target: "social",
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: "#A855F7" },
      style: { stroke: "#A855F7" },
    },
    {
      id: "e-rep",
      source: "center",
      target: "reporting",
      animated: true,
      style: { stroke: "#60A5FA" },
    },
    {
      id: "e-sh",
      source: "center",
      target: "sherlock",
      animated: true,
      style: { stroke: "#9333EA" },
    },
    {
      id: "e-crm",
      source: "center",
      target: "crm",
      animated: true,
      style: { stroke: "#FB923C" },
    },
    {
      id: "e-bo",
      source: "center",
      target: "backoffice",
      animated: true,
      style: { stroke: "#9CA3AF" },
    },
  ];

  useEffect(() => {
    if (reactFlowInstance.current) {
      reactFlowInstance.current.fitView({ padding: 0.2 });
      reactFlowInstance.current.setZoom(1); // Keep all nodes visible
    }
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      {/* Container div: occupies part of the screen */}
      <div
        ref={reactFlowWrapper}
        className="w-[30%] h-[300px] bg-transparent rounded-3xl overflow-hidden shadow-lg border border-gray-200"
      >
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={{ custom: CustomNode, center: CenterNode }}
          onInit={(instance) => (reactFlowInstance.current = instance)}
          minZoom={0.1}
          maxZoom={2}
          panOnDrag
          zoomOnScroll={false}
          style={{ background: "transparent", width: "100%", height: "100%" }}
          fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
        >
          <Background variant="dots" gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ConnectMindmap;
