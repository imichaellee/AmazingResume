
window.onload = function align(){
	var client_width = document.body.clientWidth;
	var client_height =document.body.clientHeight;
	
	var obj_mypic = document.getElementById("mypic_0");
	var obj_lifeline = document.getElementById("lifeline_0");
	var obj_lifepoint = new Array();
	var lifepoint_width = new Array();
	var lifepoint_height = new Array();
	var number_of_point = 4;
	
	for(var i = 0; i<number_of_point; i++){
		obj_lifepoint[i] = document.getElementById("lifepoint_"+i);
		lifepoint_width[i] = obj_lifepoint[i].offsetWidth;
		lifepoint_height[i] = obj_lifepoint[i].offsetHeight;
	}
	
	var mypic_width = obj_mypic.offsetWidth;
	var mypic_height = obj_mypic.offsetHeight;
		
	var lifeline_width = obj_lifeline.offsetWidth;
	var lifeline_height = obj_lifeline.offsetHeight;
	
	//align lifeline
	obj_lifeline.style.left = (client_width - lifeline_width) / 2 + "px";
	obj_lifeline.style.top = (client_height - lifeline_height) / 2 + "px";
	
	//aligh mypic ,,should be based on the lifeline  style.left according to client
	obj_mypic.style.left = (client_width - lifeline_width) / 2 + (lifeline_width - mypic_width) / 2 + "px";
	obj_mypic.style.top = (client_height - lifeline_height) / 2 + (lifeline_height - mypic_height) / 2 + "px";	
	
	
	for(var i = 0; i<number_of_point; i++){
		
		var lifepoint_height_gap = ( lifeline_height - number_of_point*lifepoint_height[0] ) / (number_of_point + 1);
		//obj_lifepoint[i].style.left = (lifeline_width - lifepoint_width[i]) / 2 + "px"; /*to center align the liftpoint*/
		//if(i%2 == 0)
		//	obj_lifepoint[i].style.left = 0;
		//else
			obj_lifepoint[i].style.right = 0; 
		obj_lifepoint[i].style.top = (lifepoint_height_gap*(i+1) + lifepoint_height[0]*i)  + "px";	

	}	
	
}