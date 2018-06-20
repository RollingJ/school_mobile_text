var checkbox1=document.getElementsByName("q4");
var checkbox2=document.getElementsByName("q5");
var tel=document.getElementsByName("tel")[0];

console.log(checkbox1);
function check(ev) {
    var telnum=tel.value;
    var j=0;
    var k=0;
    console.log(telnum);
    for(var i=0;i<checkbox1.length;i++)
    {
        if(checkbox1[i].checked)
        {
            j++;
        }
    }
    for(i=0;i<checkbox2.length;i++)
    {
        if(checkbox2[i].checked)
        {
            k++;
        }
    }
    if(j==0)
    {
        alert("第四题至少选择一个选项");
       return false;
    }
    else if(k==0)
    {
        alert("第五题至少选择一个选项");
        return false;
    }
    else if(/^1\d{10}$/.test(telnum)==false)
    {
        alert("请输入11位电话号码");
        return false;
    }
}
