/** Controls and all functionalities of experiments defined here*/
/** */
function changeEnvironment(scope){
    gravity =environment[scope.environment];
    calculations(scope);
    if(scope.reset_disabled){scope.reset_disabled = false}
}
/** Function to change the mass of steel weight */
function changeSteelMass(scope){
    var _mass = (scope.steel_mass - 0.5) / 10; /** Local variable used to save mass variation */
    if(scope.invert){
       getChild("steel_cylinder").scaleX = 1 + _mass; /** x-axix scaling of steel weight image */ 
    }else{
       getChild("wooden_cylinder").scaleX = 1 + _mass; /** x-axix scaling of steel weight image */ 
    }
    if(scope.reset_disabled){scope.reset_disabled = false}
    stage.update();
}

/** Function to change the mass of wooden weight */
function changeWoodenMass(scope){

    var _mass = (scope.wood_mass - 0.05); /** Local variable used to save mass variation */
    if(scope.invert){
        getChild("wooden_cylinder").scaleX = 1 + _mass; /** x-axix scaling of wooden weight image */
    }else{
        getChild("steel_cylinder").scaleX = 1 + _mass; /** x-axix scaling of steel weight image */ 
    }
    if(scope.reset_disabled){scope.reset_disabled = false}
    stage.update();
}

/** Function to change the position of knifes */
function changeKnifePosition(scope){
    var _cylinder_val = scope.cylinder_position - 60 > 0 ? 60 - scope.cylinder_position : scope.cylinder_position - 60; /** Local variable used to save distance of cylinder */
    if(scope.knife_position >= 10 && scope.knife_position <= (51 + _cylinder_val)){
        scope.knife_position = scope.knife_position < (scope.steel_wood_position + 5) ? (scope.steel_wood_position + 5) : scope.knife_position;
        var _distance = (scope.knife_position - 10); /** Local variable used to save distance of knifes */
        var _distance_steel_woos = scope.steel_wood_position - 5; /** Local variable used to save distance of knifes */
        getChild("pendulum_rod").y = _distance * ONE_CM * -1; /** To set the y position of pendulum rod */
        getChild("cylinder").y = (60 * ONE_CM) - (_distance * ONE_CM) + ((scope.cylinder_position - 60) * ONE_CM); /** To set the y position of cylinder */
        getChild("steel_cylinder").y = (18 + 5 * ONE_CM) - (_distance * ONE_CM) + (_distance_steel_woos * ONE_CM); /** To set the y position of steel cylinder */
        getChild("wooden_cylinder").y = (115 * ONE_CM - 18) - (_distance * ONE_CM) - (_distance_steel_woos * ONE_CM); /** To set the y position of wooden cylinder */
        getChild("knife_bottom").y = (110 * ONE_CM - 22.5) + 2 * (_distance * ONE_CM * -1); /** To set the y position of wooden cylinder */
    }else{
        scope.knife_position = scope.knife_position > (51+_cylinder_val) ? (51+_cylinder_val) : 10;
        var _distance = (scope.knife_position - 10); /** Local variable used to save distance of knifes */
        var _distance_steel_woos = scope.steel_wood_position - 5; /** Local variable used to save distance of knifes */
        if(scope.knife_position == 10){
            
        }
        getChild("pendulum_rod").y = (_distance * ONE_CM * -1); /** To set the y position of pendulum rod */
        getChild("cylinder").y = (60 * ONE_CM) - (_distance * ONE_CM) + ((scope.cylinder_position - 60) * ONE_CM); /** To set the y position of cylinder */
        getChild("steel_cylinder").y = ((18 + 5 * ONE_CM) - (_distance * ONE_CM)) + (_distance_steel_woos * ONE_CM); /** To set the y position of steel cylinder */
        getChild("wooden_cylinder").y = ((115 * ONE_CM - 18) - (_distance * ONE_CM)) - (_distance_steel_woos * ONE_CM); /** To set the y position of wooden cylinder */
        getChild("knife_bottom").y = (110 * ONE_CM - 22.5) - 2 * (_distance * ONE_CM); /** To set the y position of wooden cylinder */
    }
    if(scope.reset_disabled){scope.reset_disabled = false}
    calculations(scope);
    measurement_container.y = 162 + 10 * ONE_CM - (_distance * ONE_CM);
    if(scope.invert){
        drawMeasurementLines(getChild("knife_top").y,lowerKnifeDistance,getChild("knife_bottom").y,upperKnifeDistance);
        
    }else{
        drawMeasurementLinesInvert(getChild("knife_top").y,upperKnifeDistance,getChild("knife_bottom").y,lowerKnifeDistance);
    }
    
    stage.update();
}
/** Function to change the position of steel weight and wooden weight */
function changeSteelWoodPosition(scope){
    if(scope.steel_wood_position <= (scope.knife_position -10) + 5){
        var _distance = scope.steel_wood_position - 5; /** Local variable used to save distance of steel weight and wood weight */
        var _knife_val = (scope.knife_position - 10);
        getChild("steel_cylinder").y = (18 + 5 * ONE_CM) - (_knife_val * ONE_CM) + (_distance * ONE_CM); /** To set the y position of steel cylinder */
        getChild("wooden_cylinder").y = (115 * ONE_CM - 18) - (_knife_val * ONE_CM) + (_distance * ONE_CM * -1);/** To set the y position of wooden cylinder */
    }else{
        scope.steel_wood_position = (scope.knife_position -10) + 5;
        var _distance = scope.steel_wood_position - 5; /** Local variable used to save distance of steel weight and wood weight */
        var _knife_val = (scope.knife_position - 10);
        getChild("steel_cylinder").y = (18 + 5 * ONE_CM) - (_knife_val * ONE_CM) + (_distance * ONE_CM); /** To set the y position of steel cylinder */
        getChild("wooden_cylinder").y = (115 * ONE_CM - 18) - (_knife_val * ONE_CM) + (_distance * ONE_CM * -1);/** To set the y position of wooden cylinder */
    }
    if(scope.reset_disabled && scope.steel_wood_position != 5){scope.reset_disabled = false}
    stage.update();
}


function changeCylinderPosition(scope){
    var _distance = scope.cylinder_position - 60; /** Local variable used to save distance of cylinder */
    var _knife_val = (scope.knife_position - 10);
  
    if(5 - (51 - scope.knife_position) < 0){
         getChild("cylinder").y = (60 * ONE_CM) - (_knife_val * ONE_CM) + (_distance * ONE_CM); /** To set the y position of cylinder */
    }else{
       
        var _interval = 51 - scope.knife_position;
        if(scope.cylinder_position >= 60 - _interval && scope.cylinder_position <= 60 + _interval){
            getChild("cylinder").y = (60 * ONE_CM) - (_knife_val * ONE_CM) + (_distance * ONE_CM); /** To set the y position of cylinder */   
        }else{
            scope.cylinder_position = 60 + (_distance < 0 ? (-1 *_interval) : _interval); 
            var _distance = scope.cylinder_position - 60; /** Local variable used to save distance of cylinder */
            getChild("cylinder").y = (60 * ONE_CM) - (_knife_val * ONE_CM) + (_distance * ONE_CM); /** To set the y position of cylinder */
        }
    } 
    if(scope.reset_disabled){scope.reset_disabled = false}
    stage.update();
}

function invertPendulum(scope){
    calculations(scope);
    if(scope.invert){
        scope.revert_txt = labelArray[3];
        getChild("steel_cylinder").image = queue.getResult("wooden_cylinder");
        getChild("wooden_cylinder").image = queue.getResult("steel_cylinder");
        getChild("knife_top").image = queue.getResult("knife_bottom");
        getChild("knife_bottom").image = queue.getResult("knife_top");
        getChild("wooden_cylinder").rotation = 180;
        getChild("knife_top").rotation = 180;
        getChild("knife_bottom").rotation = 180;
        getChild("cylinder").rotation = 180;
        getChild("knife_top").x = 5;
        getChild("knife_bottom").x = 7;
        getChild("cylinder").x = 6;
        drawMeasurementLinesInvert(getChild("knife_top").y,lowerKnifeDistance,getChild("knife_bottom").y,upperKnifeDistance);
        alertMessage = alertArray[1];
    }else{
        scope.revert_txt = labelArray[2];
        getChild("steel_cylinder").image = queue.getResult("steel_cylinder");
        getChild("wooden_cylinder").image = queue.getResult("wooden_cylinder");
        getChild("knife_top").image = queue.getResult("knife_top");
        getChild("knife_bottom").image = queue.getResult("knife_bottom");
        getChild("wooden_cylinder").rotation = 0;
        getChild("knife_top").rotation = 0;
        getChild("knife_bottom").rotation = 0;
        getChild("cylinder").rotation = 0;
        getChild("knife_top").x = 12;
        getChild("knife_bottom").x = 11;
        getChild("cylinder").x = 11;
        drawMeasurementLines(getChild("knife_top").y,upperKnifeDistance,getChild("knife_bottom").y,lowerKnifeDistance);
        alertMessage = alertArray[0];
    }
    if(scope.reset_disabled){scope.reset_disabled = false}
    scope.invert = !scope.invert;
    stage.update();
    
   
   // drawMeasurementLines(getChild("knife_top").y,upperKnifeDistance,getChild("knife_bottom").y)
                               
}

function dragPendulum(scope){
    getChild("wooden_cylinder").on("pressmove", function(evt) {
        var _adj = evt.stageY - rotationPoint.y;
        var _opp = evt.stageX - rotationPoint.x;
        _angle = Math.atan2(_opp, _adj);
        _angle = _angle * (180/Math.PI);
        _angle=Math.round(_angle*10)/10;
        if((upperKnifeDistance == 0 || lowerKnifeDistance == 0) && !alertFlag){
           scope.showAlert();
           alertFlag = true;                                                                    
        }else if(upperKnifeDistance != 0 && lowerKnifeDistance != 0){
            
            if(_angle <= 20 && _angle >= -20){
                pendulumContainer.rotation = _angle * -1;//_current_magnet_x + evt.stageX - _current_x;
                stage.getChildByName("measurement_container").rotation = _angle * -1;
                stage.getChildByName("measurement_container_h").rotation = _angle * -1;
            }else{
                pendulumContainer.rotation = _angle < 0 ? 20 :-20;//_current_magnet_x + evt.stageX - _current_x;
                stage.getChildByName("measurement_container").rotation = _angle < 0 ? 20 :-20;
                stage.getChildByName("measurement_container_h").rotation = _angle < 0 ? 20 :-20;
            }
        }                                                       
        
        
       
        stage.update();
    }); 
    getChild("wooden_cylinder").on("pressup", function (evt) {
        
        calculations(scope);
        tick_clr = setInterval(updateTimer, 5); /** Stage update function in a timer */
        var _angle = pendulumContainer.rotation;
        oscilationAngle = _angle < 0 ? -1 * _angle : _angle;
        if(upperKnifeDistance != 0 && lowerKnifeDistance != 0){
            oscilation(_angle);
            scope.knife_disabled = true;
            if(scope.reset_disabled){scope.reset_disabled = false}
            scope.playPause_disabled = false;
            scope.stop_disabled = false;
            scope.$apply();
        }
    });
}

function oscilation(_angle){
    clr_oscilation = createjs.Tween.get(pendulumContainer,{override:true}).to({rotation:_angle * -1},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR).to({rotation:(_angle)},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR).call(function(){
        
        
        if(oscilationAngle <= 0){
            createjs.Tween.removeAllTweens ();
            clearInterval(tick_clr);
        }else{
            _angle = _angle < 0 ?  _angle += 0.1 :  _angle -= 0.1;
            oscilation(_angle);
        }
        oscilationAngle = oscilationAngle - 0.1;
        
    });
    
    clr_oscilation_120 = createjs.Tween.get(measurement_container,{override:true}).to({rotation:_angle * -1},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR).to({rotation:(_angle)},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR);
    clr_oscilation_h = createjs.Tween.get(measurement_container_h,{override:true}).to({rotation:_angle * -1},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR).to({rotation:(_angle)},(T2 / 2) * 1000 - OSCILATION_STOP_FACTOR).wait(OSCILATION_STOP_FACTOR);
}

function playPause(scope){
    scope.palay_pause_txt = scope.pause ? labelArray[0] : labelArray[1];
    
    scope.pause ? clr_oscilation.setPaused(true) : clr_oscilation.setPaused(false);
    scope.pause = !scope.pause;
    stage.update();
}
function stopMotion(scope){
    if(scope.stopMotion){
        createjs.Tween.removeAllTweens ();
        pendulumContainer.rotation = 0;
        clearInterval(tick_clr);
        scope.playPause_disabled = true;
        scope.stop_disabled = true;
        scope.palay_pause_txt = labelArray[1];
        scope.pause = true;
        stage.getChildByName("measurement_container").rotation = 0;
        stage.getChildByName("measurement_container_h").rotation = 0;
    }
    stage.update();
}

function showMeasurement(scope){
    
    measurement_container.alpha = measurement_container_h.alpha = scope.showMeasurements ? 1 :0;
    if(scope.reset_disabled){scope.reset_disabled = false}
    stage.update();
}

function drawMeasurementRevers(centerOfMass,top_knife_y,bottom_knife_y){
    line_h1.graphics.clear();
    line_h1.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(76,top_knife_y).lineTo(210,top_knife_y).lineTo(210, ((centerOfMass-10)  * ONE_CM)/2+top_knife_y).lineTo(220,((centerOfMass-10) * ONE_CM)/2+top_knife_y).lineTo(210,((centerOfMass-10)  * ONE_CM)/2+top_knife_y).lineTo(210, 22.5+centerOfMass * ONE_CM).lineTo(76,22.5+centerOfMass * ONE_CM);
    measurement_container_h.getChildByName("h1_label").text = (centerOfMass - 10).toFixed(2)+cm;
    measurement_container_h.getChildByName("h1_label").y = ((centerOfMass-10) * ONE_CM)/2+top_knife_y + 5;
    
    line_h2.graphics.clear();
    var _h2_half = bottom_knife_y - (22.5+centerOfMass * ONE_CM);
    _h2_half = (22.5+centerOfMass * ONE_CM) + _h2_half/2;
    line_h2.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(130,22.5+centerOfMass * ONE_CM).lineTo(130,_h2_half).lineTo(140,_h2_half).lineTo(130,_h2_half).lineTo(130,bottom_knife_y).lineTo(76,bottom_knife_y);
    measurement_container_h.getChildByName("h2_label").text = lowerKnifeDistance.toFixed(2)+cm;
    measurement_container_h.getChildByName("h2_label").y = _h2_half + 5;
    stage.update();

    
}

function drawMeasurementLinesInvert(top_knife_y,top_knife_dist,bottom_knife_y,bottom_knife_dist){
   
    line_h1.graphics.clear();
    line_h1.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(76,bottom_knife_y).lineTo(210,bottom_knife_y).lineTo(210, bottom_knife_y - ((top_knife_dist/2)  * ONE_CM)).lineTo(220,bottom_knife_y - ((top_knife_dist/2)  * ONE_CM)).lineTo(210,bottom_knife_y - ((top_knife_dist/2)  * ONE_CM)).lineTo(210, bottom_knife_y - (top_knife_dist  * ONE_CM)).lineTo(76,bottom_knife_y - (top_knife_dist  * ONE_CM));
    measurement_container_h.getChildByName("h1_label").text = (top_knife_dist).toFixed(2)+cm;
    measurement_container_h.getChildByName("h1_label").y = bottom_knife_y - ((top_knife_dist/2)  * ONE_CM) + 5;
    line_h2.graphics.clear();
    _cm = bottom_knife_y - (top_knife_dist  * ONE_CM);
    _upper_knife_dist = _cm - top_knife_y;
    _h2_half = _upper_knife_dist/2;
    line_h2.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(130,_cm).lineTo(130,_cm - _h2_half).lineTo(140,_cm - _h2_half).lineTo(130,_cm - _h2_half).lineTo(130,top_knife_y).lineTo(76,top_knife_y);
    measurement_container_h.getChildByName("h2_label").text = (bottom_knife_dist).toFixed(2)+cm;
    measurement_container_h.getChildByName("h2_label").y = _cm - _h2_half + 5;
    stage.update();
    
}

function drawMeasurementLines(top_knife_y,top_knife_dist,bottom_knife_y,bottom_knife_dist){
    line_h1.graphics.clear();
    line_h1.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(76,top_knife_y).lineTo(210,top_knife_y).lineTo(210, top_knife_y + ((top_knife_dist/2)  * ONE_CM)).lineTo(220,top_knife_y + ((top_knife_dist/2)  * ONE_CM)).lineTo(210,top_knife_y + ((top_knife_dist/2)  * ONE_CM)).lineTo(210, top_knife_y + (top_knife_dist  * ONE_CM)).lineTo(76,top_knife_y + (top_knife_dist  * ONE_CM));
    measurement_container_h.getChildByName("h1_label").text = (top_knife_dist).toFixed(2)+cm;
    measurement_container_h.getChildByName("h1_label").y = top_knife_y + ((top_knife_dist/2)  * ONE_CM) + 5;
    line_h2.graphics.clear();
    _cm = top_knife_y + ((top_knife_dist)  * ONE_CM);
    _lower_knife_dist = bottom_knife_y - _cm;
    _h2_half = _lower_knife_dist/2;
    line_h2.graphics.setStrokeStyle(1.5).beginStroke("white").moveTo(130,_cm).lineTo(130,_cm + _h2_half).lineTo(140,_cm + _h2_half).lineTo(130,_cm + _h2_half).lineTo(130,bottom_knife_y).lineTo(76,bottom_knife_y);
    measurement_container_h.getChildByName("h2_label").text = (bottom_knife_dist).toFixed(2)+cm;
    measurement_container_h.getChildByName("h2_label").y = _cm + _h2_half + 5;
    stage.update()
    
}

function calculations(scope){
    var _a,_b,_c;
    centreOfMass = ((LENGTH_OF_SCALE * (scope.wood_mass + MASS_OF_KNIFE_EDGE)) + (scope.cylinder_position * MASS_OF_CYLINDER) - (2 * MASS_OF_KNIFE_EDGE * scope.knife_position) - ((scope.steel_mass + scope.wood_mass) * scope.steel_wood_position)) / (2 * (MASS_OF_CYLINDER + MASS_OF_KNIFE_EDGE + scope.wood_mass));
    /*upperKnifeDistance = centreOfMass - scope.knife_position <= 0 ? 0 : centreOfMass - scope.knife_position;
    lowerKnifeDistance = (LENGTH_OF_SCALE - centreOfMass - scope.knife_position) <= 0 ? 0 : (LENGTH_OF_SCALE - centreOfMass - scope.knife_position);*/
   
    if(scope.invert){
        upperKnifeDistance = (LENGTH_OF_SCALE - centreOfMass - scope.knife_position) <= 0 ? 0 : (LENGTH_OF_SCALE - centreOfMass - scope.knife_position);
        lowerKnifeDistance = centreOfMass - scope.knife_position <= 0 ? 0 : centreOfMass - scope.knife_position;
    }else{
        upperKnifeDistance = centreOfMass - scope.knife_position <= 0 ? 0 : centreOfMass - scope.knife_position;
        lowerKnifeDistance = (LENGTH_OF_SCALE - centreOfMass - scope.knife_position) <= 0 ? 0 : (LENGTH_OF_SCALE - centreOfMass - scope.knife_position);
    }
    
    
    _a = 2 * (upperKnifeDistance - lowerKnifeDistance) * 0.01;
    _b = 0.04 * upperKnifeDistance * 0.01;
    _c = 0.0002 * upperKnifeDistance * 0.01 - ((8 * Math.pow(22/7,2)) / gravity) * ((upperKnifeDistance + lowerKnifeDistance) * (upperKnifeDistance - lowerKnifeDistance) * 0.0001);
    T2 = (-1 * _b - Math.sqrt((_b * _b) - (4 * _a * _c))) / (2 * _a);
    T1 = T2 + 0.01;
    T2 = T2 < 0 ? -1 * T2 : T2;
    T1 = T1 < 0 ? -1 * T1 : T1;

    
}

function resetExperiment(scope){
    initialisationOfVariables(); /** Initializing the variables */	
    initialisationOfControls(scope); /** Function call for initialisation of control side variables */
    initialisationOfImages(); /** Function call for images used in the apparatus visibility */
    scope.environment = 0;
    measurement_container_h.alpha = 0;
    measurement_container.alpha = 0;
    scope.showMeasurements = false;
    alertMessage = alertArray[0];
    stopMotion(scope);
    resetWatch();
    stage.update();
}