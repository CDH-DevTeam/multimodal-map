import type { RephotographyProject } from "./types";

export default <RephotographyProject>{
  name: "Rephotography",
  urls: {
    baseURL: "https://diana.dh.gu.se/api/rwanda",
    place: "geojson/place",
  },
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nulla imperdiet, sollicitudin diam sit amet, porttitor urna. Cras malesuada commodo urna vitae lobortis. Fusce nec mollis libero. Sed rutrum justo eget vehicula dignissim. Mauris eu neque erat. Vestibulum in erat non dui condimentum interdum. Aliquam cursus diam in lorem egestas, eu efficitur nisi iaculis. Maecenas arcu sapien, dignissim ac hendrerit id, cursus tempus libero. Ut sagittis lectus eu tortor egestas, a laoreet ligula commodo. Donec dapibus pulvinar euismod.",
  projection: "EPSG:3857",
  center: [11.0, 79.6],
  zoom: 10,
  timeRange: [1700, new Date().getFullYear()],
};
