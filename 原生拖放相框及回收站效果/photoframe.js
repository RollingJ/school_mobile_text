var droparea=document.getElementById("droparea");
droparea.ondragover=function (ev) {
    ev.preventDefault();
};
droparea.ondrop=function (ev) {
    ev.preventDefault();
        /*if(url!=null|photoframe!=null|frame!=null)
        {
            url=null;
            frame=null;
            photoframe=null;
        }*/
    var photoframe=document.getElementById("photoframe");
          photoframe.innerHTML="";
    var files=ev.dataTransfer.files;
    for(var i=0;i<files.length;i++)
    {
        var url=window.URL.createObjectURL(files[i]);
        var img=document.createElement("img");
        img.setAttribute("src",url);
        img.setAttribute("width","380px");
        img.setAttribute("height","330px");
        img.setAttribute("id",i);
        var frame=document.createElement("div");
        frame.setAttribute("id",i);
        frame.setAttribute("class","photo");
        photoframe.appendChild(frame);
        frame.appendChild(img);
        var lastmodified=files[i].lastModifiedDate;
        var lastmodifiedstr=lastmodified.toLocaleDateString()+" "+lastmodified.toLocaleTimeString();
        var filestatus="";
        filestatus+="<ul><li>文件名称："+files[i].name+"<br>文件类型:"+files[i].type+"<br>文件大小:"+files[i].size+"字节<br>修改时间:"+lastmodifiedstr+"</li></ul>";
        //设置文件信息显示区域
        var status=document.createElement("div");
        status.setAttribute("class","status");
        status.innerHTML=filestatus;
        photoframe.appendChild(status);
        console.log(i);
    }
    console.log(frame);

}
