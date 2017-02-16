
	
	 $(document).ready(function(){
   
		   $(".calculator button").on("click",function(){
				if(this.value == "c"){
					$(".screen .current").text("");				
				}
				else if(this.value == "="){
					$(".screen .history").text( $(".screen .current").text() );				
					$(".screen .current").text( eval( $(".screen .current").text().replace("sqrt","Math.sqrt") ) );				
					
				}
				else if(this.value == "-x"){
					$(".screen .current").text( $(".screen .current").text().substr(0, $(".screen .current").text().length-1));				
				}
				else if(this.value == "root"){
					$(".screen .current").text( "sqrt(" + $(".screen .current").text() + ")");				
				}
				else{
					$(".screen .current").append(this.value);
				}
				
		   })
		 });
	
