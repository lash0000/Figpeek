figma.showUI(__html__, { width: 400, height: 300 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "generate-thumbnail") {
    // logic mo dito later
    console.log("Generating thumbnail...");
  }

  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};