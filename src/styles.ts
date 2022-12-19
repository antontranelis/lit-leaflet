import { css } from "lit";

export const MapStyles = css`
:host {
  display:block;
  height: 100vh;
  width: 100%
}
.calendar-icon {
  position: relative;
  top: -40px;
  left: 10px;
  width: 13px;
}
.circle-icon {
  position: relative;
  top: -38px;
  left: 10px;
  width: 13px;
}
.leaflet-data-marker {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAB3klEQVR42s3U4UdDURzG8czMXJnJ1Vwzc6VJZjaZJdlMlpQsKdmUFNOUspRSSqUolfQfr+fF98Vx5mwv9qbDx7LdznnO7/7Omej3+/+Ga0QMUYkhbvBgmhzCQxwxibIGrGEF8CQhU+LLtKQkQNqScUgjxRxTBIxbgfgD/BgnhM8kM5KTeclLQYqGkkMRBckzR8ic/mAgd5BAZplsUaqyIg2sDtHg2brUZJk5SmwopErJUWE8SpmTMhNvya60Zd/SNrR4bkeaskG4uiwRZk6yrJEYFibGAxn+scECHTmTnuVCzvmty3PHciB7bGKN6lQkzysPqIrHmpFhYbKUtckC1/Ioz4ZHuZdbuSLYiRxRpSZVWXZVxAzC0R4Ik5SQsu6w8yd5l2/5kg95I9SdXMoZQfYIUjeqEUrgOkXGPeN4TYRhxy8E+ZUf+eS7B7miIoeybVSjKDnm8u3+gH3pDTYwu1igATvs/pXqvBKiR4i2bNJfi1ZfUAnjgrOG8wY2quNzBKuU/ZS+uSFEl5O0xRGuUIlZCcw7xG5QPkeHYUSNV5WXGou2sC3rBC0LjenqCXGO0WEiTJa0Lr4KixdHBrDGuGGiRqCUpFk8pGIpQtCU7p4YPwxYxEMCk1aAMQZh8Ac8PfbIzYPJOwAAAABJRU5ErkJggg==') no-repeat;
  background-position: 6px 32px;
}
.popup-text{
  white-space: pre-wrap;
}

.leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {
  -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;
  -moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;
  -o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;
  transition: transform 0.3s ease-out, opacity 0.3s ease-in;
}

.leaflet-cluster-spider-leg {
  /* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */
  -webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;
  -moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;
  -o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;
  transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;
}

.marker-cluster-small {
  background-color: rgba(181, 226, 140, 0.6);
  }
.marker-cluster-small div {
  background-color: rgba(110, 204, 57, 0.6);
  }

.marker-cluster-medium {
  background-color: rgba(241, 211, 87, 0.6);
  }
.marker-cluster-medium div {
  background-color: rgba(240, 194, 12, 0.6);
  }

.marker-cluster-large {
  background-color: rgba(253, 156, 115, 0.6);
  }
.marker-cluster-large div {
  background-color: rgba(241, 128, 23, 0.6);
  }

  /* IE 6-8 fallback colors */
.leaflet-oldie .marker-cluster-small {
  background-color: rgb(181, 226, 140);
  }
.leaflet-oldie .marker-cluster-small div {
  background-color: rgb(110, 204, 57);
  }

.leaflet-oldie .marker-cluster-medium {
  background-color: rgb(241, 211, 87);
  }
.leaflet-oldie .marker-cluster-medium div {
  background-color: rgb(240, 194, 12);
  }

.leaflet-oldie .marker-cluster-large {
  background-color: rgb(253, 156, 115);
  }
.leaflet-oldie .marker-cluster-large div {
  background-color: rgb(241, 128, 23);
}

.marker-cluster {
  background-clip: padding-box;
  border-radius: 20px;
  }
.marker-cluster div {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;

  text-align: center;
  border-radius: 15px;
  font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
.marker-cluster span {
  line-height: 30px;
  }
`