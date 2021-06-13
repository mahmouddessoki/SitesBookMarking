var siteName= document.getElementById("sName");
var siteURL=document.getElementById("sURL");

var myStore;
if(localStorage.getItem("siteInfo")==null)
{
    myStore=[]
}
else
{
    myStore=JSON.parse(localStorage.getItem("siteInfo"));
}
//to show after refresh
displaySiteInfo()

function addSite()
{
    if(ValidateInput()==true)
    {
        var site=
        {
            sName:siteName.value,
            sURL:siteURL.value
        }

        myStore.push(site);
        localStorage.setItem("siteInfo",JSON.stringify(myStore))
        displaySiteInfo();
        clearInputInfo();
    }

}

function displaySiteInfo()
{
    var haSalah=``
    var i
    for(i=0 ; i<myStore.length ; i++)
    {
        haSalah += 
        `  
        <div class="forEvent py-5 mt-4 px-2 " >
            <div class="inner d-flex justify-content-between mb-3">
            
            
            <div class="link_btn d-flex">
            <p class="px-3">`+myStore[i].sName+`</p>
            <a href="https://www.`+myStore[i].sURL+`.com" target="_blank" class="btn btn-primary mr-3">Visit</a>
            <button class="btn btn-danger" onclick="deleteSite(`+i+`)">Delete</button>
            </div>
            
            </div>
        </div>`
    }

    document.getElementById("mySite").innerHTML=haSalah;
}


function clearInputInfo()
{
    siteName.value="";
    siteURL.value="";
}

function ValidateInput()
{
    var flag1=true , flag2=true;
    if(siteName.value=="")
    {
        document.getElementById("validate1").style.display="block"
        flag1=false;
    }
    else
    {
        document.getElementById("validate1").style.display="none"

    }

    if(siteURL.value=="")
    {
        document.getElementById("validate2").style.display="block"
        flag2=false;
    }
    else
    {
        document.getElementById("validate2").style.display="none"

    }

    return flag1&&flag2;
}

function deleteSite(index)
{
    var i
    myStore.splice(index,1);
    displaySiteInfo()
    localStorage.setItem("siteInfo",JSON.stringify(myStore))
}


