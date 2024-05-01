function init() {
    var $ = go.GraphObject.make; // Acceder a las funciones de GoJS

    // Crear un nuevo diagrama
    var myDiagram = $(go.Diagram, "myDiagramDiv");

    // Definir el aspecto de los nodos
    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        $(go.Shape, "Square", { fill: "lightblue", stroke: null }),
        $(go.TextBlock, { margin: 8 },
          new go.Binding("text", "key"))
      );

    // Definir el aspecto de los enlaces
    myDiagram.linkTemplate =
      $(go.Link,
        $(go.Shape, { stroke: "black" }),
        $(go.Shape, { toArrow: "" }),  // Establecer la propiedad toArrow en "" para ocultar las flechas
        $(go.TextBlock,  // Agregar un bloque de texto para mostrar el puerto
        { margin: 4, background: "white" },
          new go.Binding("text", "port"))  // Enlazar el texto al dato "port" del enlace
      );

    // Crear los nodos y enlaces
    var model = $(go.GraphLinksModel);
    model.nodeDataArray = [
      { key: "ZAC_MED_ATP_SABANETA_N1_C600" },
      { key: "ISWFTTHSABANΕΤΑΑΤΡ" },
      { key: "RACK1_CAJA_OB_1" },
      { key: "RACK1_CAJA_OB_2" },
      { key: "NGWESPACIOSUR"},
      { key: "ZAC_MED_ATP" },
      { key: "ISWF" },
      { key: "RACK1" },
      { key: "RACK2" },
      { key: "NGW"}
    ];
  
    model.linkDataArray = [
      { from: "ZAC_MED_ATP_SABANETA_N1_C600", to: "ISWFTTHSABANΕΤΑΑΤΡ", port:"1/10/2 -> Xge0/0/1" },
      { from: "ZAC_MED_ATP_SABANETA_N1_C600", to: "ISWFTTHSABANΕΤΑΑΤΡ", port:"1/11/2 -> Xge1/0/1" },
      { from: "ISWFTTHSABANΕΤΑΑΤΡ", to: "RACK1_CAJA_OB_1",port:"100GE0/0/1 -> Hilo 1 y 2" },
      { from: "ISWFTTHSABANΕΤΑΑΤΡ", to: "RACK1_CAJA_OB_2",port:"100GE1/0/1 -> Hilo 1 y 2" },
      { from: "RACK1_CAJA_OB_1", to: "NGWESPACIOSUR", port:"null -> 50|100GE9/0/4" },
      { from: "RACK1_CAJA_OB_2", to: "NGWESPACIOSUR",port:"null -> 50|100GE9/0/4"},
      { from: "ZAC_MED_ATP", to: "ISWF", port:"1/10/2 -> Xge0/0/1" },
      { from: "ZAC_MED_ATP", to: "ISWF", port:"1/11/2 -> Xge1/0/1" },
      { from: "ISWF", to: "RACK1",port:"100GE0/0/1 -> Hilo 1 y 2" },
      { from: "ISWF", to: "RACK1",port:"100GE1/0/1 -> Hilo 1 y 2" },
      { from: "RACK1", to: "NGW", port:"null -> 50|100GE9/0/4" },
      { from: "RACK2", to: "NGW",port:"null -> 50|100GE9/0/4"}
    ];

    model.linkDataArray1 = [
      { from: "ZAC_MED_ATP", to: "ISWF", port:"1/10/2 -> Xge0/0/1" },
      { from: "ZAC_MED_ATP", to: "ISWF", port:"1/11/2 -> Xge1/0/1" },
      { from: "ISWF", to: "RACK1",port:"100GE0/0/1 -> Hilo 1 y 2" },
      { from: "ISWF", to: "RACK1",port:"100GE1/0/1 -> Hilo 1 y 2" },
      { from: "RACK1", to: "NGW", port:"null -> 50|100GE9/0/4" },
      { from: "RACK2", to: "NGW",port:"null -> 50|100GE9/0/4"}
    ];



    // Asignar el modelo al diagrama
    myDiagram.model = model;
  }