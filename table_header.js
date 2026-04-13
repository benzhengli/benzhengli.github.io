// 去掉了表格固定的 height="184"，让它自适应内容高度
document.write("<table width=\"850\" border=\"0\">");
document.write("<tbody>");
document.write("<tr>");
document.write("<td width=\"350\" style=\"vertical-align: top;\"> <img src=\"Images/athens-lbz.JPG\" alt=\"Ben-Zheng Li\" width=\"320\" height=\"250\"> <\/td>");

// 1. 将 line-height (行高) 从 1.8 调小到了 1.4，去掉了多余的顶部内边距
document.write("<td style=\"line-height: 1.1; vertical-align: top;\">");

// 2. 将标题下方的间距从 15px 缩小到 10px
document.write("<h1 style=\"margin-top: 0; margin-bottom: 6px;\">Ben-Zheng Li (李本正)<\/h1>");

// 3. 将区块间的间距从 20px 缩小到 12px
document.write("<div style=\"margin-bottom: 10px;\">");
document.write("<b>Assistant Professor<\/b><br>");
document.write("<a href=\"https://maths.ccnu.edu.cn/\"> School of Mathematics and Statistics <\/a><br>");
document.write("<a href=\"https://www.ccnu.edu.cn/\"> Central China Normal University <\/a>");
document.write("<\/div>");

// 同上，缩小间距为 12px
document.write("<div style=\"margin-bottom: 10px;\">");
document.write("<b>Contact info:<\/b><br>");
document.write("Wuhan, Hubei, China. <br>");
document.write("Office: Room 306, Math. Building<br>");
document.write("E-mail: mathlibz@ccnu.edu.cn, lbz1604179601@126.com");
document.write("<\/div>");

// 图标区块
document.write("<div>");
document.write("<a href=\"https://scholar.google.com/citations?user=pXU2ncUAAAAJ&hl=en\"><img src=\"Images/scholar.png\" alt=\"Scholar\" width=\"25\" height=\"25\" border=\"0\" style=\"margin-right: 10px;\"> <\/a>");
document.write("<a href=\"https://www.researchgate.net/profile/Ben-Zheng-Li-2?ev=hdr_xprf\"><img src=\"Images/Researchgate.jpg\" alt=\"Researchgate\" width=\"25\" height=\"25\" border=\"0\" style=\"margin-right: 10px;\"> <\/a>");
document.write("<a href=\"https://github.com/benzhengli\"><img src=\"Images/GitHub-Mark-120px-plus.png\" alt=\"GitHub\" width=\"25\" height=\"25\" border=\"0\"> <\/a>");
document.write("<\/div>");

document.write("<\/td>");
document.write("<\/tr>");
document.write("<\/tbody>");
document.write("<\/table>");
// 去掉了一个多余的 <br>，让下方正文往上提一点
document.write("<br>");
