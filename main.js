var images = ["https://s3-projectsassets.whjr.online/Monkey_02.png","https://s3-projectsassets.whjr.online/Monkey_03.png","https://s3-projectsassets.whjr.online/Monkey_04.png","https://s3-projectsassets.whjr.online/Monkey_05.png","https://s3-projectsassets.whjr.online/Monkey_06.png","https://s3-projectsassets.whjr.online/Monkey_07.png","https://s3-projectsassets.whjr.online/Monkey_08.png","https://s3-projectsassets.whjr.online/Monkey_09.png","https://s3-projectsassets.whjr.online/Monkey_10.png" ];
var i = 0;
function move()
{
    i++;
    var number_array = 10
    if(i > number_array)
      {
          i = 0;
      }
        var updatedImage =images[i];
     
        document.getElementById("img").src = updatedImage;
}