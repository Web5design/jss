body{
  margin: 0;
  padding: 0;
}
iframe{
  border: 0px;
}
#frame1 {
  background: #ddd;
  position: fixed;
  top:0;
  height: 140px;
  width: [$width]px;
  font-size: [$height/12]px;
}
#frame2 {
  background: #eee;
  position: fixed;
  top:140px;
  width: 180px;
  height: [$height-140]px;
  left:0;
}
#frame3 {
  position: fixed;
  padding:20px;
  top:140px;
  left:180px;
  height: [$height-180]px;
  width: [$width-220]px;
  overflow-y: scroll;
}