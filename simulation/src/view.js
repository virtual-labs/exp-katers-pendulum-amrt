(function(){
  angular
       .module('users')
	   .directive("experiment",directiveFunction)
})();

var stage, exp_canvas, stage_width, stage_height;

var labelArray,alertArray,alertMessage;

var pendulumContainer,hook_container,measurement_container,measurement_container_h;

var ONE_CM,MASS_OF_CYLINDER,MASS_OF_KNIFE_EDGE,LENGTH_OF_SCALE,OSCILATION_STOP_FACTOR;

var rotationPoint,environment,gravity;

var tick_clr,clr_oscilation,T2,T1;

var oscilationAngle,cm,alertFlag;

var line_120,line_h1,line_h2;

var centreOfMass,upperKnifeDistance,lowerKnifeDistance;



function directiveFunction(){
	return {
		restrict: "A",
		link: function(scope, element,attrs){
			/** Variable that decides if something should be drawn on mouse move */
			var experiment = true;
			if ( element[0].width > element[0].height ) {
				element[0].width = element[0].height;
				element[0].height = element[0].height;
			} else {
				element[0].width = element[0].width;
				element[0].height = element[0].width;
			}  
			if ( element[0].offsetWidth > element[0].offsetHeight ) {
				element[0].offsetWidth = element[0].offsetHeight;			
			} else {
				element[0].offsetWidth = element[0].offsetWidth;
				element[0].offsetHeight = element[0].offsetWidth;
			}
			 /** Array to store all file name of images used in experiment and it used to create each image objects */
            images_array = ["background","pendulum_rod","steel_cylinder","knife_top","cylinder","knife_bottom","wooden_cylinder","hook_front"];
            exp_canvas=document.getElementById("demoCanvas");
			exp_canvas.width=element[0].width;
			exp_canvas.height=element[0].height;            
    		stage = new createjs.Stage("demoCanvas");
			queue = new createjs.LoadQueue(true);
			loadingProgress(queue, stage, exp_canvas.width);
			queue.on("complete", handleComplete, this);
			var queue_obj = [];/** Array to store object of each images */
            for ( i = 0; i < images_array.length; i++ ) {/** Creating object of each element */
                queue_obj[i] = {id: images_array[i],src: "././images/"+images_array[i]+".svg",type: createjs.LoadQueue.IMAGE};
            }
			queue.loadManifest(queue_obj);			
			stage.enableDOMEvents(true);
            stage.enableMouseOver();
            createjs.Touch.enable(stage);
        //    tick = setInterval(updateTimer, 100); /** Stage update function in a timer */
            rotationPoint = new createjs.Point(358.5, 197); /** Rotation of pendulum based on this point */
            container = new createjs.Container(); /** Creating the main container */
            container.name = "container";
            stage.addChild(container); /** Append it in the stage */
            
            pendulumContainer = new createjs.Container(); /** Creating the container for pendulum */
            pendulumContainer.name = "pendulumContainer";
            pendulumContainer.x = rotationPoint.x;//358.5;
            pendulumContainer.y = rotationPoint.y;//197;
            stage.addChild(pendulumContainer); /** Append it in the stage */
            pendulumContainer.rotation = 0;
            hook_container = new createjs.Container(); /** Creating the main container */
            hook_container.name = "hook_container";
            stage.addChild(hook_container); /** Append it in the stage */            
            measurement_container = new createjs.Container(); /** Container for measurements */
            measurement_container.name = "measurement_container";
            stage.addChild(measurement_container); /** Append it in the stage */
            measurement_container.x = 340;
            measurement_container.y = 162 + 10 * 3.567;
            measurement_container_h = new createjs.Container(); /** Container for measurements */
            measurement_container_h.name = "measurement_container_h";
            stage.addChild(measurement_container_h); /** Append it in the stage */
            measurement_container_h.x = 356;
            measurement_container_h.y = 134 +28 + 10 * 3.567;
            
           // container.getChildByName("pendulumContainer").rotation = 30;
			function handleComplete(){
                initialisationOfVariables(); /** Initializing the variables */			
                loadImages(queue.getResult("background"),"background",0,0,"",0,container,1);
                loadImages(queue.getResult("pendulum_rod"),"pendulum_rod",9,0,"",0,pendulumContainer,1);
                loadImages(queue.getResult("steel_cylinder"),"steel_cylinder",12,18 + 5 * ONE_CM,"",0,pendulumContainer,1);   
                loadImages(queue.getResult("knife_top"),"knife_top",12,22.5+10 * ONE_CM,"",0,pendulumContainer,1);  
                loadImages(queue.getResult("cylinder"),"cylinder",11,60 * ONE_CM,"",0,pendulumContainer,1);  
                loadImages(queue.getResult("knife_bottom"),"knife_bottom",11,110 * ONE_CM - 22.5,"",0,pendulumContainer,1);  
                loadImages(queue.getResult("wooden_cylinder"),"wooden_cylinder",8,115 * ONE_CM - 18,"",0,pendulumContainer,1); 
                loadImages(queue.getResult("hook_front"),"hook_front",324,195,"",0,hook_container,1);
                
                
                stage.getChildByName("pendulumContainer").regX = pendulumContainer.getBounds().width/2;
                stage.getChildByName("pendulumContainer").regY = 28 + 10 * ONE_CM;
                
                
                line_120 = new createjs.Shape();
                line_120.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(60,0).lineTo(10,0).lineTo(10,60 * 3.567).lineTo(0,60 * 3.567).lineTo(10,60 * 3.567).lineTo(10,120 * 3.567).lineTo(60,120 * 3.567);
                measurement_container.addChild(line_120);
                stage.getChildByName("measurement_container").regX = 60;
                stage.getChildByName("measurement_container").regY = 28 + 10 * ONE_CM;
                measurement_container.alpha = 0;
                line_h1 = new createjs.Shape();
                measurement_container_h.addChild(line_h1);
                line_h2 = new createjs.Shape();
                measurement_container_h.addChild(line_h2);                
                stage.getChildByName("measurement_container_h").regX = 76;
                stage.getChildByName("measurement_container_h").regY = 28 + 10 * ONE_CM;
                measurement_container_h.alpha = 0;
				initialisationOfControls(scope); /** Function call for initialisation of control side variables */
				initialisationOfImages(); /** Function call for images used in the apparatus visibility */
                calculations(scope);
                
			    translationLabels(); /** Translation of strings using gettext */
                setText("120cm",-5, 61 * ONE_CM,"120"+cm,"white",1,measurement_container);
                measurement_container.getChildByName("120cm").textAlign =  "right";
                setText("h1_label",223, 61 * ONE_CM,"120"+cm,"white",1,measurement_container_h);                
                measurement_container_h.getChildByName("h1_label").textAlign =  "left";
                setText("h2_label",145, 61 * ONE_CM,"120"+cm,"white",1,measurement_container_h);                
                measurement_container_h.getChildByName("h2_label").textAlign =  "left";
                alertMessage = alertArray[0];
              //  drawMeasurementRevers(41.48,getChild("knife_top").y,getChild("knife_bottom").y);
              //  drawMeasurementInvert(68.52,getChild("knife_top").y,getChild("knife_bottom").y);
                drawMeasurementLines(getChild("knife_top").y,31.48,getChild("knife_bottom").y,68.52)
				createStopwatch(stage, 445, 545, 1); /** To load and generate stop watch */
                tick_clr = setInterval(updateTimer, 10); /** Stage update function in a timer */
                setTimeout(function(){clearInterval(tick_clr)},1000);
                dragPendulum(scope);
			}
            
			/** Add all the strings used for the language translation here. '_' is the short cut for calling the gettext function defined in the gettext-definition.js */	
			function translationLabels(){
                /** This help array shows the hints for this experiment */
				helpArray=[_("help1"),_("help2"),_("help3"),_("help4"),_("help5"),_("help6"),_("help7"),_("help8"),_("help9"),_("help10"),_("Next"),_("Close")];
                labelArray = [_("Play"),_("Pause"),_("Inevert"),_("Reverse")];
                alertArray = [_("h1 is negative for these values. Please select another values"),_("h2 is negative for these values. Please select another values"),_("OK")];
                cm = _("cm");
                scope.heading=_("Kater's pendulum");
				scope.variables=_("Variables");                 
				scope.result=_("Result");  
				scope.copyright=_("copyright"); 
                scope.environment_txt = _("Environment");
                scope.steel_mass_txt = _("Mass of Steel Cylinder : ");
                scope.mass_unit = _("Kg");
                scope.wood_mass_txt = _("Mass of Wood Cylinder : ");
                scope.position_txt = _("Adjust Position");
                scope.knife_position_txt = _("Knife edge 1 & 2 : ");
                scope.cm_unit = cm;
                scope.steel_wood_txt = _("Steel and Wood Cylinder : ");
                scope.cylinder_txt = _("Cylinder : ");
                scope.measurementText = _("Show Measurements");
                scope.revert_txt = labelArray[2];
                scope.palay_pause_txt = labelArray[1];
                scope.stop_motion_txt =  _("Stop");                
                scope.start_txt = _("Start");
				scope.reset_txt = _("Reset");
                
                scope.environment_array = [{
                        environment:_("Earth"),
                        index:0
                    },{
                        environment:_("Moon"),
                        index:1
                    },{
                        environment:_("Uranus"),
                        index:2
                    },{
                        environment:_("Saturn"),
                        index:3
                    },{
                        environment:_("Jupiter"),
                        index:4
                    }];
                scope.$apply();				
			}
		}
	}
}
/** Createjs stage updation happens in every interval */
function updateTimer() {
    stage.update();
}

/** All the texts loading and added to the stage */
function setText(name, textX, textY, value, color, fontSize, container){
    var text = new createjs.Text(value, "bold " + fontSize + "em Tahoma, Geneva, sans-serif", color);
    text.x = textX;
    text.y = textY;
    text.textBaseline = "alphabetic";
    text.name = name;
    text.text = value;
    text.color = color;
    container.addChild(text); /** Adding text to the container */
    stage.update();
}

/** All the images loading and added to the stage */
function loadImages(image, name, xPos, yPos, cursor, rot, container,scale){
    var _bitmap = new createjs.Bitmap(image).set({});
    if ( name == 'steel_cylinder' || name == 'knife_top' || name == 'knife_bottom' || name == 'wooden_cylinder'|| name == 'cylinder') {
         _bitmap.regX = _bitmap.image.width/2;
        _bitmap.regY = _bitmap.image.height/2; 
    }else if(name == 'pendulum_rod'){
        _bitmap.regX = _bitmap.image.width/2;
    }
    _bitmap.x = xPos;
    _bitmap.y = yPos;
    _bitmap.scaleX=_bitmap.scaleY=scale;
    _bitmap.name = name;
    _bitmap.alpha = 1;
    _bitmap.rotation = rot;   
    _bitmap.cursor = cursor;    
    container.addChild(_bitmap); /** Adding bitmap to the container */ 
    stage.update();
}

/** function to return chiled element of container */
function getChild(chldName){
    return pendulumContainer.getChildByName(chldName);
}


function initialisationOfControls(scope){
    document.getElementById("site-sidenav").style.display = "block";
    scope.steel_mass = 0.5;
    scope.wood_mass = 0.05;
    scope.knife_position = 10;
    scope.steel_wood_position = 5;
    scope.cylinder_position = 60;
    scope.invert = true;
    scope.knife_disabled = false;
    scope.revert_disabled = false;
    scope.playPause_disabled = true;
    scope.stop_disabled = true;
    scope.reset_disabled = true;
    scope.pause = true;
    scope.showMeasurements  = false;
    
}
/** All variables initialising in this function */
function initialisationOfVariables() {
    environment = [9.8,1.63,10.5,11.08,25.95];
    gravity =environment[0];
    ONE_CM = 3.567; /** Length of rod(428+24px) / Length of rod(120cm), that is one cm = 4.6px */
    MASS_OF_CYLINDER = 0.05;
    MASS_OF_KNIFE_EDGE = 0.12;
    LENGTH_OF_SCALE = 120;
    OSCILATION_STOP_FACTOR = 80;
    alertFlag = false;
        
}
/** Set the initial status of the bitmap and text depends on its visibility and initial values */
function initialisationOfImages() {
    getChild("wooden_cylinder").cursor = 'pointer';
    //stage.getChildByName("pendulumContainer").rotation = 45;
}

/** Resetting the experiment */
function resetExperiment(scope){
    
}
