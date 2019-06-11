---
templateKey: blog-post
title: A thought on Responsive Web Design
date: 2019-06-05T21:12:35.490Z
category:
  - Responsive web design
thumbnail: /images/top-home-interior-designer-01.jpg
featuredpost: true
tags:
  - CSS3
  - Responsive web design
---
This post is all about creating responsive website from scratch. While talking about Responsive Web Design (RWD), it allows web content to expand or contract gracefully into whatever size space it is provided. Wow, that sounds pretty cool right! There is a CSS3 attribute called “ @media screen” which makes it possible so easily. In short media queries are CSS declarations which can be called based upon the current screen dimensions of the viewing device. I find media queries to be very interesting as it’s the same kind of traditional conditional statements applied in CSS declarations. 

For example see the below code:

```
@media screen and (min-width:320px) and (max-width:480px) {
  /*Style declarations for this width range */
}
```

That says call the CSS declarations when the screen size is between 320px to 480px both sizes inclusive ,as simple as that.

Media queries are the backbone for any Responsive Web Design framework. While there are so many great frameworks already available for RWD like [Foundation by Zurb](https://foundation.zurb.com/), [Twitter Bootstrap](https://getbootstrap.com/) etc, it could be very tempting for beginners or anyone to go for it without bothering what is inside there. But as a web developer I would be always wondering to know what’s there inside those masterpiece frameworks ,just out of curiosity!

**min-width and max-width :**

Min-width and max-width are the width parameters which makes your website to call different CSS declarations based on different viewing widths.

For above example code we set min and max width as 320px and 480px respectively. This implies whenever we are viewing screen size between these two parameters those declared queries will be called only.

**device-width and width :**

I hope you might come across with these two terms at some point of time. Device-width is the actual width of device and width is the currently viewing width of the browser or the rendering area of the window. As a rule of thumb we go with width parameter in our demo example.

For example see the below code:

```
@media screen and (min-device-width:320px) and (max-device-width:480px){
  /*Style Declarations For This Device Width Range */
}
```

**See the** [**DEMO**](http://jsfiddle.net/upenpanging/Ldsj1cz2/1/embedded/result/) **here.**

In our demo we are creating a mobile first website but in order to accomplish that don’t forget to add the following viewport meta tag to your head of the document which ensures proper rendering.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

For proper rendering in IE 6-8, we can have a quick fix like below :

```
<!--[if lt IE 9]>
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
```

**mediaqueries.css**  for the above demo example looks something like below: 

```
/*other styling */
@media screen and (max-width:320px){
  .smalllogo{
    display:block;
  }
  .smalllogo img{
    width:100px;
    height:100px;
  }
  .biglogo{
    display:none;
  }
  header nav{
    float:left;
  }
  h1.resezie{
    font-size:.9rem;
  }
  h1.resezie1{
    display:block;
    font-size:.9rem;
    background:#CCFF99;
  }
  .work-item1, .work-item2, .work-item3, .work-item4{
    width:100%;
    max-width:100%;
    padding:0;
  }
}
------------
@media screen and (min-width:1024px) and (max-width:1200px){
  h1.resezie6{
    display:block;
    font-size:.9rem;
    background:#FFFF00;
  }
  .work-item1, .work-item2, .work-item3, .work-item4{
    width:31%;
    padding: 0 1% 1%;
    float:left;
  }
}
------------
/* more css */
```

Hopefully this post will give a brief idea about responsive web design and media queries. Cheers!
