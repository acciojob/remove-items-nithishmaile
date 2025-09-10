//your JS code here. If required.
const selectElement=document.getElementById("colorSelect");
const removeButton=document.getElementById("removeButton");

removeButton.addEventListener("click",()=>{
	const selectedOption=selectElement.options[selectElement.selectedIndex]
	if(selectedOption){
		selectedOption.remove()
	}else{
		console.log("NO OPTION IS SELECTED");
	}
})
