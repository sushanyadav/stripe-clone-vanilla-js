const DashedLines = ({ zIndex, opacity }) => {
  const zIndexClass = zIndex || -1;
  const opacityHoverClass = opacity || "";

  const requiredHTML = `
      <div
        style="z-index: ${+zIndexClass}"
        class="border-gray-200 ${opacityHoverClass} absolute top-0 right-0 border-dashed sm:border-l border-r h-full  w-1/4"
      ></div>
      <div
        style="z-index: ${+zIndexClass}"
        
        class="border-gray-200 ${opacityHoverClass} absolute sm:block hidden top-0 left-0 border-dashed border-r h-full  w-1/4"
      ></div>
      <div
        style="z-index: ${+zIndexClass}"
        class="border-gray-200 ${opacityHoverClass} absolute inset-0 border-dashed sm:border-r border-l h-full  w-1/2"
      ></div>`;

  return requiredHTML;
};

export default DashedLines;
