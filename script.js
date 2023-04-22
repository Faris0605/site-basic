// functionActiveSubMenu-desketop-feature
document.getElementById("active-features").addEventListener("click",function(){
    const featureHidden=document.getElementById("features");
    if(featureHidden.style.display=="none"){
        featureHidden.style.display="inline-table"
    }else{
        featureHidden.style.display="none"
    }
});
// functionActiveSubMenu-desketop-company
document.getElementById("active-company").addEventListener("click",function(){
    const companyHidden=document.getElementById("company");
    if(companyHidden.style.display=="none"){
        companyHidden.style.display="inline-table"
    }else{
        companyHidden.style.display="none"
    }
});