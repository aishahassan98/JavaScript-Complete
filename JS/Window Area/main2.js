// HLT - Window Area

// Basic version with no size validation

/*
 * overallWidth and overallHeight are in metres.
 */
function calcGlassArea(overallWidth, overallHeight)
{
  let glassWidth = (overallWidth * 100 - 2.54 - 2.54) / 100;
  let glassHeight = (overallHeight * 100 - 2.54 - 2.54) / 100;
  //or...
  //glassWidth = overallWidth - 0.0254 - 0.0254;
  //glassWidth = overallWidth - 0.0508;

  return glassWidth * glassHeight;
}


let overallWidth = prompt("3.4");

let overallHeight = prompt("1.9");

let glassArea = calcGlassArea(overallWidth, overallHeight);

// calc area of wood
let overallArea = overallWidth * overallHeight;
let woodArea = overallArea - glassArea;

// display results
console.log(`Glass area (m2) required is: ${glassArea}`);
console.log(`Wood area (m2) required is: ${woodArea}`);

// overallwidth = 3.4 overallheight = 1.9
// area = height x width
// because border is an inch away from wood and an inch equals 0.0254, to then work out the area of the glass 
// to find out area of glass, find overall width and take away an inch from both side //
