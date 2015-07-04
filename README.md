#LazyImage
LazyImage is a simple library to lazily load multiple sizes of images to improve perceived performance of a website.
It is called automatically upon inclusion just before closing the body but you can manually parse the page by calling `LazyImage.Parse();`

##Usage
To parse the elements you have to add the `data-lazy` attribute to the object.
Inside this attribute you define all the images you want to load for this specific element in ascending order by their filesize.
You seperate each url by a semicolon (;).

##Keep in mind
When applying the attribute to `img` elements it will automatically replace it's `src` accordingly, when used on other elements the script will replace the `background-image` style.
