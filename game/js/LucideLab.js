/*

<link rel="icon" type="image/svg+xml" href="/vite.svg" /> <!--Lucide Lab-->

<!--<script src="https://unpkg.com/lucide@latest"></script>-->
<script src="https://unpkg.com/lucide@0.432.0/dist/umd/lucide.min.js"></script>
<script src="https://unpkg.com/@lucide/lab@latest"></script>

<script src="js/LucideLab.js"></script>

*/

console.log(lucide.icons.ZoomIn, lucide.defaultAttributes)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function extendIcons(icons) {
  return {
    ...lucide.icons,
    ...Object.keys(icons).reduce((map, iconName) => {
      icons[capitalizeFirstLetter(iconName)] = ["svg", {
        fill: "none",
        height: 24,
        stroke: "currentColor",
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': 2,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg"
      }, icons[iconName]];
      return icons;
    }, {})
  };
}


/*
function LabLucide () {
    lucide.createIcons({
        icons: extendIcons({
            wavesBirds
        })
    });
}
*/

