
	var memory="";
	 $(document).ready(function(){
   
	   $(".calculator button").on("click",function(){
			if(this.value == "ce"){
				$(".screen .current").text("");				
			}
			else if(this.value == "c"){
				$(".screen .current").text("");				
				$(".screen .history").text("");				
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
			else if(this.value == "+/-"){
				if( $(".screen .current").text().trim().charAt(0) == '-' )
				$(".screen .current").text( $(".screen .current").text().substr(1));									
				else
				$(".screen .current").text( "-" + $(".screen .current").text());									

			}
			else if(this.value == "inverse"){
				$(".screen .current").text( "1/(" + $(".screen .current").text() + ")");									
			}
			else if(this.value == "mc"){
				memory="";
			}else if(this.value == "ms"){
				memory = $(".screen .current").text();
			}else if(this.value == "m+"){					 					 
				$(".screen .history").text( $(".screen .current").text() );	
				$(".screen .current").text( eval(  memory +"+"+ $(".screen .current").text())  );															 
			}else if(this.value == "m-"){					 					 										
				$(".screen .current").text( eval( $(".screen .current").text() + "-" + memory )  );															 
			}else if(this.value == "mr"){					 					 										
				$(".screen .current").text( memory );															 
			}

			else{
				$(".screen .current").append(this.value);
			}

	   });
	 });
