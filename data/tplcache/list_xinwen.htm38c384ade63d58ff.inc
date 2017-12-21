<?php
$z[0]=Array("field","",177,196);
$z[0][4]['name']="title";
$z[1]=Array("global","",197,223);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",264,293);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",333,391);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",778,813);
$z[4][4]['filename']="head.htm";
$z[5]=Array("list","\r\n        <li>\r\n          <div class=\"gly_left fl\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\"><img src=\"[field:picname/]\" width=\"636\" height=\"287\" alt=\"[field:title/]\" /></a></div>\r\n          <div class=\"gly_right fl pl40\"> <a href=\"[field:arcurl/]\" title=\"[field:title/]\">\r\n            <p class=\"baiszt26\">[field:title/]</p>\r\n            <p class=\"baiszt12 mt30\">[field:description/]</p>\r\n            </a>\r\n            <p class=\"baiszt pt95\">[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]<a href=\"[field:arcurl/]\" class=\"ml185\">更多+</a></p>\r\n          </div>\r\n        </li>\r\n        ",1005,1648);
$z[5][4]['pagesize']="10";
$z[5][4]['limit']="0,2";
$z[6]=Array("list","\r\n        <p class=\"chengsbg\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a><span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span></p>\r\n        ",1912,2120);
$z[6][4]['pagesize']="15";
$z[7]=Array("include","",2186,2223);
$z[7][4]['filename']="footer.htm";

?>