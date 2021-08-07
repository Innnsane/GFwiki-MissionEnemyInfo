var loadstate = 0;

var Enemy_team;
var Enemy_in_team;
var Enemy_standard_attribute;
var Spot;
var Theater_area;

var Mission;
var Enemy_charater_type;
var Ally_team;
var Building;
var Team_ai;
var Mission_targettrain_enemy;

var Mission_txt;
var Enemy_charater_type_txt;
var Ally_team_txt;
var Building_txt;
var Team_ai_txt;
var Mission_targettrain_enemy_txt;

var Special_spot_config_txt;

var xmlhttp_Spot = new XMLHttpRequest();
xmlhttp_Spot.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Spot = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Spot.open("GET", "/images/0/06/StcSpot.txt", true);
xmlhttp_Spot.send();

var xmlhttp_in_team = new XMLHttpRequest();
xmlhttp_in_team.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Enemy_in_team = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_in_team.open("GET", "/images/4/48/StcEnemy_in_team.txt", true);
xmlhttp_in_team.send();

var xmlhttp_standard_attribute = new XMLHttpRequest();
xmlhttp_standard_attribute.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Enemy_standard_attribute = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_standard_attribute.open("GET", "/images/1/13/StcEnemy_standard_attribute.txt", true);
xmlhttp_standard_attribute.send();

var xmlhttp_team = new XMLHttpRequest();
xmlhttp_team.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Enemy_team = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_team.open("GET", "/images/c/c8/StcEnemy_team.txt", true);
xmlhttp_team.send();

var xmlhttp_Theater_area = new XMLHttpRequest();
xmlhttp_Theater_area.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Theater_area = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Theater_area.open("GET", "/images/8/81/StcTheater_area.txt", true);
xmlhttp_Theater_area.send();

var xmlhttp_Building = new XMLHttpRequest();
xmlhttp_Building.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Building = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Building.open("GET", "/images/6/69/StcBuilding.txt", true);
xmlhttp_Building.send();

var xmlhttp_Mission = new XMLHttpRequest();
xmlhttp_Mission.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Mission = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Mission.open("GET", "/images/4/40/StcMission.txt", true);
xmlhttp_Mission.send();

var xmlhttp_charater_type = new XMLHttpRequest();
xmlhttp_charater_type.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Enemy_charater_type = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_charater_type.open("GET", "/images/6/66/StcEnemy_character_type.txt", true);
xmlhttp_charater_type.send();

var xmlhttp_Ally_team = new XMLHttpRequest();
xmlhttp_Ally_team.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Ally_team = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Ally_team.open("GET", "/images/e/e4/StcAlly_team.txt", true);
xmlhttp_Ally_team.send();

var xmlhttp_Team_ai = new XMLHttpRequest();
xmlhttp_Team_ai.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Team_ai = JSON.parse(this.responseText); 
    loadstate ++; }
};
xmlhttp_Team_ai.open("GET", "/images/b/b7/StcTeam_ai.txt", true);
xmlhttp_Team_ai.send();

var xmlhttp_Mission_targettrain_enemy = new XMLHttpRequest();
xmlhttp_Mission_targettrain_enemy.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
    Mission_targettrain_enemy = JSON.parse(this.responseText);
    loadstate ++; }
};
xmlhttp_Mission_targettrain_enemy.open("GET", "/images/c/c6/StcMission_targettrain_enemy.txt", true);
xmlhttp_Mission_targettrain_enemy.send();



var xmlhttp_Building_txt = new XMLHttpRequest();
xmlhttp_Building_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Building_txt = this.responseText; loadstate ++; }
};
xmlhttp_Building_txt.open("GET", "/images/8/8f/Building.txt", true);
xmlhttp_Building_txt.send();

var xmlhttp_Mission_txt = new XMLHttpRequest();
xmlhttp_Mission_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Mission_txt = this.responseText; loadstate ++; }
};
xmlhttp_Mission_txt.open("GET", "/images/c/c7/Mission.txt", true);
xmlhttp_Mission_txt.send();

var xmlhttp_Enemy_charater_type_txt = new XMLHttpRequest();
xmlhttp_Enemy_charater_type_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Enemy_charater_type_txt = this.responseText; loadstate ++; }
};
xmlhttp_Enemy_charater_type_txt.open("GET", "/images/4/49/Enemy_character_type.txt", true);
xmlhttp_Enemy_charater_type_txt.send();

var xmlhttp_Ally_team_txt = new XMLHttpRequest();
xmlhttp_Ally_team_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Ally_team_txt = this.responseText; loadstate ++; }
};
xmlhttp_Ally_team_txt.open("GET", "/images/0/00/Ally_team.txt", true);
xmlhttp_Ally_team_txt.send();

var xmlhttp_Team_ai_txt = new XMLHttpRequest();
xmlhttp_Team_ai_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Team_ai_txt = this.responseText; loadstate ++; }
};
xmlhttp_Team_ai_txt.open("GET", "/images/f/f5/Team_ai.txt", true);
xmlhttp_Team_ai_txt.send();

var xmlhttp_Mission_targettrain_enemy_txt = new XMLHttpRequest();
xmlhttp_Mission_targettrain_enemy_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Mission_targettrain_enemy_txt = this.responseText; loadstate ++; }
};
xmlhttp_Mission_targettrain_enemy_txt.open("GET", "/images/5/59/Mission_targettrain_enemy.txt", true);
xmlhttp_Mission_targettrain_enemy_txt.send();

var xmlhttp_Special_spot_config_txt = new XMLHttpRequest();
xmlhttp_Special_spot_config_txt.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { Special_spot_config_txt = this.responseText; loadstate ++; }
};
xmlhttp_Special_spot_config_txt.open("GET", "/images/e/ec/Special_spot_config.txt", true);
xmlhttp_Special_spot_config_txt.send();

function trans(){
    for(i in Building){
        var namepos = Building_txt.indexOf(Building[i].name);
        var namestr = Building_txt.slice(namepos + Building[i].name.length + 1, Building_txt.indexOf("\n", namepos) - 1);
        Building[i].name = namestr;
    }

    for(i in Mission){
        var namepos = Mission_txt.indexOf(Mission[i].name);
        var namestr = Mission_txt.slice(namepos + Mission[i].name.length + 1, Mission_txt.indexOf("\n", namepos));
        Mission[i].name = namestr.replace("//n", " ");
    }

    for(i in Enemy_charater_type){
        var namepos = Enemy_charater_type_txt.indexOf(Enemy_charater_type[i].name);
        var namestr = Enemy_charater_type_txt.slice(namepos + Enemy_charater_type[i].name.length + 1, Enemy_charater_type_txt.indexOf("\n", namepos) - 1);
        Enemy_charater_type[i].name = namestr;
    }

    for(i in Ally_team){
        var namepos = Ally_team_txt.indexOf(Ally_team[i].name);
        var namestr = Ally_team_txt.slice(namepos + Ally_team[i].name.length + 1, Ally_team_txt.indexOf("\n", namepos) - 1);
        Ally_team[i].name = namestr;
    }
    
    for(i in Team_ai){
        var namepos = Team_ai_txt.indexOf(Team_ai[i].name);
        var namestr = Team_ai_txt.slice(namepos + Team_ai[i].name.length + 1, Team_ai_txt.indexOf("\n", namepos) - 1);
        Team_ai[i].name = namestr;
    }

    for(i in Mission_targettrain_enemy){
        var namepos = Mission_targettrain_enemy_txt.indexOf(Mission_targettrain_enemy[i].name);
        var namestr = Mission_targettrain_enemy_txt.slice(namepos + Mission_targettrain_enemy[i].name.length + 1, Mission_targettrain_enemy_txt.indexOf("\n", namepos) - 1);
        Mission_targettrain_enemy[i].name = namestr;
        
        var despos = Mission_targettrain_enemy_txt.indexOf(Mission_targettrain_enemy[i].des);
        var desstr = Mission_targettrain_enemy_txt.slice(despos + Mission_targettrain_enemy[i].des.length + 1, Mission_targettrain_enemy_txt.indexOf("\n", despos) - 1);
        Mission_targettrain_enemy[i].des = desstr.replace("//c", "��");
    } 
    
}

firstcreat();
loadjudge();
function loadjudge(){
    $("#loadtips").html("�ļ����ؽ���:" + loadstate + " / 18");
    if(loadstate < 18) setTimeout(function(){loadjudge();}, 100);
    else {
        trans();
        $("#loadtips").hide();

        missioncreat();
        mapsetcreat();
        examplecreate();
        spotsigncreat();
        enemyselectcreat();

        mspot = [];
        for(i in Spot) if(Spot[i].mission_id == $("#missionselect").val()) mspot.push(Spot[i]);
        lspotcreat();
        dspotcreat();
        teleportdisplay();
        missiondisplay(1);
        enemydisplay(221);
    }
}

/*-- ��ͼ�����¼���ȫ�ֱ��� --*/
var mapwidth = 1200, mapheight = 675;
var xmove = 0, ymove = 0;
var posa={}, posb={};
var coparameter = 1;
var dragging = false;
var scale = 1;

var mspot = [];
var lspot = [];
var dspot = [];
var spotinfo = [];
var theaicontent = 0;

var eteamspot = [];
var enemyteaminfo = [];

/*-- ���� sdownload  ���� sredraw  ���� smaphide  ͼ�� sexample  
    ���� smapenemy  ���� smapbuild  ���� smaptype  ��ɫ smapcolor  ��� smapspotn  �߼� smapenemyai
    ������� sbuildtable  ���ͱ�� sporttable  ��λ��� sspotsign  ͬ��ѵ� senemypile  --*/
var setmessage = {sdownload:0, sredraw:0, smaphide:0, sexample:0, smapenemy:1, smapbuild:1, smaptype:1, smapcolor:1, smapspotn:1, smapenemyai:1, sbuildtable:1, sporttable:1, sspotsign:0, senemypile:0, steamconsult:0, sexistspot:0};

function missioncreat(){
    /*-- ս�۵�ѡ�񴴽� --*/
    var output = `<div style="display:inline-block; padding:6.5px; background:#E0E0E0; color:black; position:relative; top:1px; cursor:default;">ս��ѡ�� ?<\/div>
            <div class="eselect"><select id="campaignselect" name="campaignselect">
            <option value="1000">[����] ����ս��<\/option>
            <option value="1001">[����] ��һս��<\/option>
            <option value="1002">[����] �ڶ�ս��<\/option>
            <option value="1003">[����] ����ս��<\/option>
            <option value="1004">[����] ����ս��<\/option>
            <option value="1005">[����] ����ս��<\/option>
            <option value="1006">[����] ����ս��<\/option>
            <option value="1007">[����] ����ս��<\/option>
            <option value="1008">[����] �ڰ�ս��<\/option>
            <option value="1009">[����] �ھ�ս��<\/option>
            <option value="1010">[����] ��ʮս��<\/option>
            <option value="1011">[����] ��ʮһս��<\/option>
            <option value="1012">[����] ��ʮ��ս��<\/option>
            <option value="1013">[����] ��ʮ��ս��<\/option>
            
            <option value="2001">[ģ��] ������ѵ<\/option>
            <option value="2002">[ģ��] ǿ����ϰ<\/option>
            <option value="2003">[ģ��] ���ϲ���<\/option>
            <option value="2005">[ģ��] ��ͼ����<\/option>
            <option value="2007">[ģ��] �ں���ϰ<\/option>
            <option value="2008">[ģ��] �л�רѵ<\/option>
            
            <option value="3001">[����] ħ���ж�<\/option>
            <option value="3002">[����] ʧ��֢<\/option>
            <option value="3006">[����] ħ���ж�+<\/option>
            <option value="3010">[����] ���ӳ��<\/option>
            <option value="3016">[����] ������<\/option>?
            <option value="3024">[����] ��������<\/option>
            <option value="3031">[����] �칹��<\/option>
            <option value="3033">[����] �ѱ�����<\/option>
            <option value="3036">[����] ƫ���<\/option>
            <option value="3041">[����] ˫������<\/option>
            <option value="3044">[����] ������<\/option>

            <option value="4008">[����] �����ж�<\/option>
            <option value="4014">[����] ����ʦ<\/option>
            <option value="4019">[����] ��ҫ��<\/option>
            <option value="4032">[����] �߶�����<\/option>
            <option value="4038">[����] �μ��<\/option>
            <option value="4043">[����] ����<\/option>
 ? ? ? ? ?  <option value="4046">[����] Са��ǰ��<\/option>
            
            <option value="5034">[֧��] �����<\/option>
            <option value="5035">[֧��] ѩҹɱ��������<\/option>
            <option value="5037">[֧��] ���������<\/option>
            <option value="5040">[֧��] �̺�����<\/option>
            <option value="5042">[֧��] ���е�Ӱ<\/option>
            <option value="5047">[֧��] ������<\/option>
            
            <option value="6004">[ս��] ��һ��<\/option>
            <option value="6005">[ս��] �ڶ���<\/option>
            <option value="6006">[ս��] ������<\/option>

            <\/select><\/div>
            <div class="eselect"><select id="missionselect" name="missionselect">
            <option value="1">0-1 �����˶�<\/option>
            <option value="2">0-2 ��ɫ�鱨<\/option>
            <option value="3">0-3 �ػ��ݵ�<\/option>
            <option value="4">0-4 ������ս<\/option>
            <\/select><\/div>
            
            <div class="eselect" style="width:85px;"><select id="layerselect" name="layerselect" style="display:block;"><\/select><\/div>
            <div id="packselect" style="inline-block; user-select:none; cursor:default; margin:"><\/div>`;

    $("#campaignchose").html(output); 

    /*-- ս�۵���ʾ --*/
    $("#campaignselect").change(function(){
        $("#missionselect").children().remove();
        var thevalue = Number(this.value);

        /*-- ��� --*/
        if(Number(thevalue) == 2008){
            var logarray = [{name:"���Ʊ��", filter:"0"}];
            for (i in Mission_targettrain_enemy) {
                var sign = 1;
                for(j in logarray) if(Mission_targettrain_enemy[i].log_fitter_id == logarray[j].filter) sign = 0;
                if(sign) logarray.push({name:Mission_targettrain_enemy[i].name, filter:Mission_targettrain_enemy[i].log_fitter_id});
            }
            for(i in logarray){
                var op = document.createElement("OPTION");
                op.value = logarray[i].filter;
                op.innerHTML = logarray[i].name;
                $("#missionselect").append(op);
            }
            traindisplay();
            return;
        }

        else if(Number(thevalue) > 6000 && Number(thevalue) < 7000){
            var area = [0, "�ҽ�ɽ��", "����ƽԭ", "��������", "����ɽ��"];
            var place = [0, "��ͨ", "��ͨ", "Ҫ��", "��ͨ", "��ͨ", "Ҫ��", "��ͨ", "Ҫ��"];
            for(var i = 1; i < 5; i++){
                for(var j = 1; j < 9; j++){
                    var op = document.createElement("OPTION");
                    op.value = (Number(thevalue) - 6000)*100 + i*10 + j;
                    op.innerHTML = area[i] + " " + j + " " + place[j];
                    $("#missionselect").append(op);
                }
            }
            theaterdisplay();
            return;
        }

        /*-- ���߹ؿ� --*/
        else if(Number(thevalue) >= 1000 && Number(thevalue) < 2000){
            for (i in Mission) {
                if ((Mission[i].campaign == thevalue - 1000) && (Mission[i].if_emergency != 2)) {
                    var op = document.createElement("OPTION");
                    op.value = Number(Mission[i].id);
                    op.innerHTML = String(thevalue - 1000) + "-" + Mission[i].sub;
                    op.innerHTML += (Mission[i].if_emergency == 1) ? "E " : (Mission[i].if_emergency == 3) ? "N " : " ";
                    op.innerHTML += Mission[i].name;
                    $("#missionselect").append(op);
                }
            }
        }

        /*-- ģ����ս --*/
        else if(Number(thevalue) > 2000 && Number(thevalue) < 3000){
            for (i in Mission) {
                if ((Mission[i].duplicate_type == thevalue - 2000) && (Mission[i].if_emergency == 2)) {
                    var op = document.createElement("OPTION");
                    op.value = Number(Mission[i].id);
                    op.innerHTML = Mission[i].sub + Mission[i].name;
                    $("#missionselect").append(op);
                }
            }
        }

/*-- �ж���½ڵĻ --*/
        else if(Number(thevalue) > 3000 && Number(thevalue) < 5000){
            for (i in Mission) {
                /*-- ȥ������ؿ� --*/
                if(Mission[i].special_type == 8 || Mission[i].special_type == 9) continue;
                var camp = Number(Mission[i].campaign);
                /*-- ���߻ --*/
                if(thevalue == 3001 && camp != -1) continue;
                else if(thevalue == 3002 && camp != -2  && camp != -3  && camp != -4  && camp != -5  && camp != -23) continue;
                else if(thevalue == 3006 && camp != -6  && camp != -7) continue;
                else if(thevalue == 3010 && camp != -10 && camp != -11 && camp != -12 && camp != -13 && camp != -29) continue;
                else if(thevalue == 3016 && camp != -16 && camp != -17 && camp != -18 && camp != -39) continue;
                else if(thevalue == 3024 && camp != -24 && camp != -25 && camp != -26 && camp != -27 && camp != -28 && camp != -45) continue;
                else if(thevalue == 3031 && camp != -31) continue;
                else if(thevalue == 3033 && camp != -33) continue;
                else if(thevalue == 3036 && camp != -36) continue;
                else if(thevalue == 3041 && camp != -41) continue;
                else if(thevalue == 3044 && camp != -44) continue;
                /*-- ����� --*/
                else if(thevalue == 4008 && camp != -8  && camp != -30) continue;
                else if(thevalue == 4014 && camp != -14 && camp != -15) continue;
                else if(thevalue == 4019 && camp != -19 && camp != -20 && camp != -21 && camp != -22) continue;
                else if(thevalue == 4032 && camp != -32) continue;
                else if(thevalue == 4038 && camp != -38) continue;
                else if(thevalue == 4043 && camp != -43) continue;
                else if(thevalue == 4046 && camp != -46) continue;

                var op = document.createElement("OPTION");
                op.value = Number(Mission[i].id);
                /*-- ͺ�����̵�ʶ��  ���������������ߵĻ������ --*/
                if(Number(thevalue) < 4000 && ((- Number(camp) - (thevalue - 3000 - 1)) > 6)) op.innerHTML = "";
                else if(Number(thevalue) > 4000 && ((- Number(camp) - (thevalue - 4000 - 1)) > 6)) op.innerHTML = "���� " + Mission[i].sub + " ";
                else op.innerHTML = String(- Number(camp) - (thevalue - ((thevalue > 4000) ? 4000 : 3000) - 1)) + "-" + Mission[i].sub + " ";
                /*-- ͺ����ʶ�� �޾�ģʽ --*/
                if (Mission[i].endless_mode == 1 || Mission[i].endless_mode == 2) op.innerHTML += "[�޾�ģʽ] ";
                op.innerHTML += Mission[i].name.replace("//n", " ");
                $("#missionselect").append(op);
            }
        }

        /*-- ֧�߻ --*/
        else if(Number(thevalue) > 5000 && Number(thevalue) < 6000){
            for (i in Mission) {
                /*-- ȥ������ؿ� --*/
                if(Mission[i].special_type == 8 || Mission[i].special_type == 9) continue;
                if ((Mission[i].campaign == - (thevalue - 5000)) && (Mission[i].if_emergency != 2)) {
                    var op = document.createElement("OPTION");
                    op.value = Number(Mission[i].id);
                    op.innerHTML = Mission[i].sub + Mission[i].name;
                    $("#missionselect").append(op);
                }
            }
        }

        /*-- ִ�к�����ʾ��һ�ŵ�ͼ --*/
        mspot = [];
        for(i in Spot) if(Spot[i].mission_id == $("#missionselect").val()) mspot.push(Spot[i]);
        lspotcreat();
        dspotcreat();
        missiondisplay();
    });

    /*-- ��ͼ����ʾ --*/
    $("#missionselect").change(function(){
        if($("#campaignselect").val() == 2008){ traindisplay(); return;}
        else if($("#campaignselect").val() >= 6000 && $("#campaignselect").val() < 7000){ theaterdisplay(); return;}

        mspot = [];
        for(i in Spot) if(Spot[i].mission_id == $("#missionselect").val()) mspot.push(Spot[i]);
        lspotcreat();
        dspotcreat();
        missiondisplay();
    });

    /*-- �������ʾ --*/
    $("#layerselect").change(function(){
        lspot = [];
        for(i in mspot) if(mspot[i].map_num == $("#layerselect").val()) lspot.push(mspot[i]); 
        dspotcreat();
        missiondisplay();
    });

    /*-- ���Ƶ�ͼ���� --*/
    var drawingoutput = `<canvas id="missiondrawing" width="1200px" height="675px" style="cursor:crosshair;">Your browser does not support the HTML5 canvas tag.<\/canvas>`;
    $("#missionmap").html(drawingoutput);

    /*-- canvas�������ק���� --*/
    var missiondraw = document.querySelector("#missiondrawing");
    missiondraw.onmousedown = function (event) {
        dragging = true;
        posa = windowToCanvas(event.clientX, event.clientY);
    };
    missiondraw.onmousemove = function (event) {
        if(dragging){
            posb = windowToCanvas(event.clientX, event.clientY);
            var x = posb.x - posa.x, y = posb.y - posa.y;
            xmove += x;
            ymove += y;
            posa = JSON.parse(JSON.stringify(posb));
            drawmap();
        }
    };
    missiondraw.onmouseup = function () {
        dragging = false;
    };

    /*-- canvas��������Ź��� --*/
    missiondraw.onmousewheel = $("#missionmap").onwheel = function (event) {
        var pos = windowToCanvas(event.clientX, event.clientY);
        var newPos = {x:((pos.x - xmove)/scale).toFixed(2) , y:((pos.y - ymove)/scale).toFixed(2)};
        /*-- ��ȡ��ǰ���Ĺ������ --*/
        event.wheelDelta = event.wheelDelta ? event.wheelDelta : (event.deltalY * (-40)); 
        if (event.wheelDelta > 0) {// �Ŵ�
            scale += 0.1;
            xmove = (1-scale)*newPos.x + (pos.x - newPos.x);
            ymove = (1-scale)*newPos.y + (pos.y - newPos.y);
        } else {//  ��С
            scale -= 0.1;
            xmove = (1-scale)*newPos.x + (pos.x - newPos.x);
            ymove = (1-scale)*newPos.y + (pos.y  -newPos.y);
        }
        drawmap();
    };
}

function lspotcreat(){
    var layernum = [];
    for(i in mspot){
        var sign = 1;
        for(j in layernum) if(mspot[i].map_num == layernum[j]){ sign = 0; break;}
        if(sign) layernum.push(mspot[i].map_num);
    }
    
    /*-- �Ż��Ű����� �Զ����� --*/
    if(layernum.length <= 1){ $("#layerselect").parent().css("display","none");}
    else { $("#layerselect").parent().css("display","inline-block");}

    $("#layerselect").children().remove();
    /*-- ��������option --*/
    for(var i = 0; i < layernum.length; i++){
        var op = document.createElement("OPTION");
        op.value = i;
        op.innerHTML = "��ͼ " + String(i);
        $("#layerselect").append(op);
    }

    /*-- lspot�ĳ�ʼ�� --*/
    lspot = [];  
    for(i in mspot){
        if(mspot[i].map_num == $("#layerselect").val() || mspot[i].map_num == 0) lspot.push(mspot[i]);
    }
}

function dspotcreat(){
    /*-- dspot�ĳ�ʼ�� --*/
    dspot = lspot;

    var packagenum = [];
    for(i in lspot){
        var sign = 1;
        for(j in packagenum) if(lspot[i].package == packagenum[j]) { sign = 0; break;}
        if(sign) packagenum.push(lspot[i].package);
    }

    /*-- �Ż��Ű����� �Զ����� --*/
    if(packagenum.length <= 1){ $("#packselect").css("display","none");}
    else { $("#packselect").css("display","inline-block");}

    /*-- ����ѡ��Ĵ��� --*/
    var output = `<div style="display:inline-block; padding:6.5px; background:#E0E0E0; color:black; position:relative; top:1px; cursor:auto;">����ѡ�� ?<\/div>
        <div id="packall" class="packcheck" style="display:inline-block; padding:5.5px; background:black; color:#E0E0E0; position:relative; top:1px; cursor:pointer; border:1px #e0e0e0 solid;">ȫѡ<\/div>
        <div id="packclear" class="packcheck" style="display:inline-block; padding:5.5px; background:black; color:#E0E0E0; position:relative; top:1px; cursor:pointer; border:1px #e0e0e0 solid;">���<\/div>`;
    for(var i = 0; i < packagenum.length; i++){
        output += `<input class="packcheck" type="checkbox" id="package_` +  packagenum[i] + `" value="` +  packagenum[i] + `" checked="checked" /><label for="package_` +  packagenum[i] + `">` +  packagenum[i] + `<\/label>`;
    }
    $("#packselect").html(output);

    /*-- ����ѡ���¼� --*/
    $(".packcheck").click(function(){
        if($(this).attr("id") == "packall") $("#packselect").children("input").each(function(){ $(this).parent().children("input[type=checkbox]").prop("checked","checked"); });
        if($(this).attr("id") == "packclear") $("#packselect").children("input").each(function(){ $(this).parent().children("input[type=checkbox]").removeAttr("checked"); });

        var packnum = [];
        $("#packselect").children("input:checked").each(function(){ packnum.push(this.value); });
        
        dspot = [];
        for(i in lspot){ 
            var sign = 0;
            for(j in packnum) if(lspot[i].package == packnum[j]){ sign = 1; break;}
            if(sign) dspot.push(lspot[i]);
        }

        missiondisplay();
    });
}

/*-- ��ͼ���ƺ����ĸ������� --*/
function windowToCanvas(x,y) {
    var missiondraw = document.querySelector("#missiondrawing");
    var box = missiondraw.getBoundingClientRect();  //�����������һ�����ζ��󣬰����ĸ����ԣ�left��top��right��bottom���ֱ��ʾԪ�ظ�����ҳ���ϱߺ���ߵľ���
    return {
        x: x - box.left - (box.width - missiondraw.width) / 2,
        y: y - box.top - (box.height - missiondraw.height) / 2
    };
}

function buildingdisplay(){
    var output = `<table id="buildingtable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:120px;">��λ<\/th>
        <th style="width:160px;">����<\/th>
        <th style="width:80px;">����ֵ<\/th>
        <th style="width:140px;">�ƻ���ʽ<\/th>
        <th style="width:60px;">��ʼ״̬<\/th>
        <th style="width:80px;">֧Ԯ��Χ<\/th>
        <th style="width:560px;">���ñ��<\/th>
        <\/tr><\/thead><tbody id="Buildingbody" style="height:200px; overflow-y:scroll; display:block;">`;

    for(i in dspot){
        if(dspot[i].building_id == 0) continue;

        var buildnum = 1;
        for(j in Building) if(dspot[i].building_id == Building[j].id) buildnum = j;

        /*-- ����/��ͼ��Ŀ��ñ�� --*/
        var buildsigndes = "";
        if(Building[buildnum].working_special_spot){
            var buildsignstr = Building[buildnum].working_special_spot.replace(/\|/g, ";");
            while(buildsignstr){
                var thenum = "";
                if(buildsignstr.indexOf(";") == -1){ 
                    thenum = buildsignstr;
                    buildsignstr = "";
                }
                else if(buildsignstr.indexOf(";") != -1){
                    thenum = buildsignstr.slice(0, buildsignstr.indexOf(";"));
                    buildsignstr = buildsignstr.slice(thenum.length + 1, buildsignstr.length);
                }

                thenum = ("0000000").slice(0, ("0000000").length - thenum.length) + thenum;
                var despos = Special_spot_config_txt.indexOf("special_spot_config-1" + thenum) + ("special_spot_config-1" + thenum).length + 1;
                var newdes = Special_spot_config_txt.slice(despos, Special_spot_config_txt.indexOf("\n", despos));
                var des2pos = Special_spot_config_txt.indexOf("\n", despos) + 1 + ("special_spot_config-2" + thenum).length + 1;
                var new2des = Special_spot_config_txt.slice(des2pos, Special_spot_config_txt.indexOf("\n", des2pos));
                buildsigndes += newdes + ((new2des == newdes || new2des.length <= 1) ? "" : ("(" + new2des + ")")) + ";";
            }
            buildsigndes = buildsigndes.slice(0, buildsigndes.length - 1);
        }

        var thisline = `<tr class="buildingline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="120px">`;
        thisline += dspot[i].id + `<\/td><td width="160px">`;
        thisline += Building[buildnum].name + `<\/td><td width="80px">`;
        thisline += Building[buildnum].defender + `<\/td><td width="140px">`;
        thisline += Building[buildnum].is_destroy.replace("0", "�����ƻ�").replace("1", "��װ���").replace("2", "�ȵ��ƻ�") + `<\/td><td width="60px">`;
        thisline += Building[buildnum].initial_state.replace("0", "����").replace("-1", "�ر�") + `<\/td><td width="80px">`;
        thisline += Building[buildnum].battle_assist_range + `<\/td><td width="544px">`;
        thisline += ((buildsigndes) ? buildsigndes : "����") + "<\/td><\/tr>";

        spotinfo[i].sbuild = Building[buildnum].name;
        output += thisline;
    }
    
    $("#buildingshow").css("display", "none");
    if(setmessage.sbuildtable == 1) for(i in spotinfo) if(spotinfo[i].sbuild != 0){ $("#buildingshow").css("display", "block"); break;}
    
    $("#buildingshow").html(output);    
    
    $(".buildingline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".buildingline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".buildingline").click(function(){
        if(setmessage.sspotsign == 0) $("#sspotsign").click();
        $("#spotsign1").val(Number($($(this).children("td")[0]).html()));
        drawmap();
    });
}

function teleportdisplay(){
    var output = `<table id="teleporttable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
                <thead style="display:block; background-color:#f4c430; color:black;"><tr>
                <th style="width:100px;">A ��ͼ<\/th>
                <th style="width:100px;">A ����<\/th>
                <th style="width:100px;">A ��λ<\/th>
                <th style="width:100px;">TO<\/th>
                <th style="width:100px;">B ��ͼ<\/th>
                <th style="width:100px;">B ����<\/th>
                <th style="width:100px;">B ��λ<\/th>
                <th style="width:520px;"><\/th><\/tr><\/thead><tbody id="teleportbody" style="height:200px; overflow-y:scroll; display:block;">`;

    telespot = [{}];
    for(i in mspot){
        if(!(mspot[i].auto_teleport)) continue;

        var thisline = `<tr class="teleportline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="100px">`;

        /*-- from this to ���� --*/
        if(mspot[i].auto_teleport.indexOf("0:") == 0){
            var nextmap, nextpack;
            var nextid = Number(mspot[i].auto_teleport.replace("0:", ""));
            for(j in mspot) if(mspot[j].id == nextid){
                nextmap = mspot[j].map_num;
                nextpack = mspot[j].package;
            }

            thisline += "��ͼ " + mspot[i].map_num + `<\/td><td width="100px">`;
            thisline += mspot[i].package + `<\/td><td width="100px">`;
            thisline += mspot[i].id + `<\/td><td width="100px">TO<\/td><td width="100px">`;

            thisline += "��ͼ " + nextmap + `<\/td><td width="100px">`;
            thisline += nextpack + `<\/td><td width="100px">`;
            thisline += nextid + `<\/td><td width="500px"><\/td><\/tr>`;

            var existsign = 0;
            for(j in telespot) if(Number(mspot[i].id) == telespot[j].a && nextid == telespot[j].b){ existsign = 1; break;}
            if(existsign) continue;
            telespot.push({a:Number(mspot[i].id), b:nextid});
        }

        /*-- from ���� to this --*/
        else if(mspot[i].auto_teleport.indexOf(":0") != -1){
            var nextmap, nextpack;
            var nextid = Number(mspot[i].auto_teleport.replace(":0", ""));
            for(j in mspot) if(mspot[j].id == nextid){
                nextmap = mspot[j].map_num;
                nextpack = mspot[j].package;
            }

            thisline += "��ͼ " + nextmap + `<\/td><td width="100px">`;
            thisline += nextpack + `<\/td><td width="100px">`;
            thisline += nextid + `<\/td><td width="100px">TO<\/td><td width="100px">`;
        
            thisline += "��ͼ " + mspot[i].map_num + `<\/td><td width="100px">`;
            thisline += mspot[i].package + `<\/td><td width="100px">`;
            thisline += mspot[i].id + `<\/td><td width="500px"><\/td><\/tr>`;
    
            var existsign = 0;
            for(j in telespot) if(nextid == telespot[j].a && Number(mspot[i].id) == telespot[j].b){ existsign = 1; break;}
            if(existsign) continue;
            telespot.push({a:nextid, b:Number(mspot[i].id)});
        }

        output += thisline;
    }
    
    $("#teleportshow").css("display", "none");
    if(setmessage.sporttable == 1 && telespot.length > 1) $("#teleportshow").css("display", "block");
    $("#teleportshow").html(output);

    $(".teleportline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".teleportline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".teleportline").click(function(){
        if(setmessage.sspotsign == 0) $("#sspotsign").click();
        $("#spotsign2").val(Number($($(this).children("td")[2]).html()));
        $("#spotsign3").val(Number($($(this).children("td")[6]).html()));
        drawmap();
    });
}

function missiondisplay(){
    /*-- ȫ�ֱ������� --*/
    xmove = 0; ymove = 0;
    xcen = 0; ycen = 0;
    scale = 1;
    posa={}; posb={};
    dragging = false;

    spotinfo = [];
    eteamspot = [];

    var output = `<table id="Missiontable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:100px;">���<\/th>
        <th style="width:160px;">�ӳ�<\/th>
        <th style="width:100px;">����/����<\/th>
        <th style="width:80px;">AI<\/th>
        <th style="width:100px;">Ч��<\/th>
        <th style="width:490px;">���<\/th>
        <th class="cellacap" style="width:120px; display:table-cell;">վλ<\/th>
        <th class="cellbcap" style="width:120px; display:none;">����<\/th>
        <th style="width:50px;">����<\/th>
        <\/tr><\/thead><tbody id="Missionbody" style="height:300px; overflow-y:scroll; display:block;">`;
    
    /*-- ·����ĵ���վλ --*/
    for(var i = 0; i < dspot.length; i++){
        var enemy_team_id;
        var ally_name = "";
        /*-- �����ally��Ҫ����һ��Ѱ��enemyid --*/
        if(Number(dspot[i]["enemy_team_id"])) enemy_team_id = Number(dspot[i]["enemy_team_id"]);
        else if(Number(dspot[i]["ally_team_id"])){
            var ally_tar;
            for(j in Ally_team){
                if(Ally_team[j].id == Number(dspot[i]["ally_team_id"])){
                    ally_tar = j; break;}
            }
            if(Ally_team[ally_tar].enemy_team_id){
                enemy_team_id = Ally_team[ally_tar].enemy_team_id;
                ally_name = Ally_team[ally_tar].name;
            } else{ 
                spotinfo.push({sename:0, sally:0, sefect:0, seai:0, sbuild:0});
                continue;}
        } else{ 
            spotinfo.push({sename:0, sally:0, sefect:0, seai:0, sbuild:0});
            continue;}

        var enemy_leader;
        var enemy_ai_num;
        var enemy_ai_con;
        var efect = 0;
        for(j in Enemy_team){
            if(Enemy_team[j]["id"] != enemy_team_id) continue;
            /*-- Ч����թ --*/
            if(Enemy_team[j].effect_ext != 0) efect = Enemy_team[j].effect_ext;
            enemy_leader = Enemy_team[j]["enemy_leader"];
            enemy_ai_num = Enemy_team[j]["ai"];
            enemy_ai_con = Enemy_team[j]["ai_content"];
        }

        var leader_name;
        for(j in Enemy_charater_type){
            if(Enemy_charater_type[j]["id"] != enemy_leader) continue;
            leader_name = Enemy_charater_type[j]["name"];
        }

        /*-- enemyai �з��ж��߼� --*/
        var enemy_ai;
        if(enemy_ai_num == 0) for(j in Mission) if(Mission[j].id == $("#missionselect").val()) {enemy_ai_num = Mission[j].enemy_ai_type; break;}
        for(j in Team_ai) if(enemy_ai_num == Team_ai[j].ai_type) {enemy_ai = Team_ai[j].name; break;}

        /*-- ��������洢Ч���������Ż����� --*/
        spotinfo.push({sename:leader_name, sally:((ally_name) ? ally_name : 0), sefect:((efect == 0) ? efectcal(enemy_team_id) : efect), seai:enemy_ai, sbuild:0});
        eteamspot.push(enemy_team_id);

        var aioutput = enemy_ai + ((enemy_ai == "����") ? ("[" + enemy_ai_con + "]") : "");

        var thisline = `<tr class="missionline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="100px">`;
        thisline += enemy_team_id + `<\/td><td width="160px">`;
        thisline += leader_name + `<\/td><td width="100px">`;
        thisline += ((ally_name) ? ally_name : "����") + `<\/td><td width="80px">`;
        thisline += aioutput + `<\/td><td width="100px">`;
        thisline += ((efect == 0) ? efectcal(enemy_team_id) : efect) + `<\/td><td width="490px">`;
        thisline += enemyoutcal(enemy_team_id) + `<\/td><td class="cella" width="120px" style="display:table-cell;">`;
        thisline += Number(dspot[i]["id"]) + `<\/td><td class="cellb" width="120px" style="display:none;">`;
        thisline += "team_num" + `<\/td><td width="34px">`;
        thisline += "<\/td><\/tr>";

        output += thisline;
    }

    $("#missionshow").html(output);
    $(".missionline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".missionline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".missionline").click(function(){
        $(this).parent().children("tr").css({"background-color":"", "color":""});
        $(this).css({"background-color":"#f4c430cc", "color":"black"});
        enemydisplay($(this).children("td").eq(0).html());
        if(setmessage.sspotsign == 1) $("#spotsign1").val(Number($($(this).children("td")[6]).html()));
        if($($(this).children("td")[3]).html() == "Ѳ��"){
            for(i in Enemy_team) if(Enemy_team[i].id == $($(this).children("td")[0]).html()) theaicontent = "Ѳ��" + Enemy_team[i].ai_content;
        } else if($($(this).children("td")[3]).html().indexOf("����") != -1){
            for(i in Enemy_team) if(Enemy_team[i].id == $($(this).children("td")[0]).html()) theaicontent = "����" + Enemy_team[i].ai_content;
        } else theaicontent = 0;
        drawmap();
    });

    /*-- ͬ����˵��������� �ѵ� --*/
    var cellbs = document.querySelectorAll(".cellb");
    for(j in cellbs){
        var team_num = 0;
        for(k in eteamspot){ if(eteamspot[j] == eteamspot[k]) team_num ++;}
        cellbs[j].innerText = team_num;
    }

    buildingdisplay();
    teleportdisplay();
    enemypile();
    drawmap();
}

/*-- ��ͼ���� --*/
function drawmap(func){
    /*-- ���ֵĵ�ͼ���� 1200px --*/
    var con = $("#missiondrawing")[0].getContext("2d");
    /*-- ���صĵ�ͼ���� 4800px --*/
    if(func == 2) con = $("#downloaddrawing")[0].getContext("2d");
    con.clearRect(0, 0, mapwidth, mapheight);
    con.lineWidth="1";
    con.strokeStyle="#444444";
    con.fillStyle = "#111111";
    con.beginPath();
    con.fillRect(0, 0, mapwidth, mapheight);
    con.stroke();

    /*-- mapcanvas��Ԥ����� --*/
    var x_min = Number(lspot[0].coordinator_x);
    var x_max = Number(lspot[0].coordinator_x);
    var y_min = Number(lspot[0].coordinator_y);
    var y_max = Number(lspot[0].coordinator_y);
    for(i in lspot){
        if(Number(lspot[i].coordinator_x) > x_max) x_max = Number(lspot[i].coordinator_x);
        if(Number(lspot[i].coordinator_x) < x_min) x_min = Number(lspot[i].coordinator_x);
        if(Number(lspot[i].coordinator_y) > y_max) y_max = Number(lspot[i].coordinator_y);
        if(Number(lspot[i].coordinator_y) < y_min) y_min = Number(lspot[i].coordinator_y);
    }
    var x_radio = (x_max - x_min + 200)/(mapwidth - mapwidth / 12);
    var y_radio = (y_max - y_min + 200)/(mapheight - mapheight / 12);
    coparameter = (x_radio > y_radio) ? x_radio : y_radio;

/*--  ·����Ļ���  --*/
var singlespot = [];
con.lineWidth = String(30 / coparameter);
con.strokeStyle = "#cecece";
for(i in dspot){
    /*--  ·���������  --*/
    var routestr = dspot[i].map_route;
    while(routestr){
        var i2n = Number(routestr.slice(0, (routestr.indexOf(",") == -1) ? (routestr.length) : routestr.indexOf(",")));
        var i2 = -1;
        
        for(k in dspot){ if(dspot[k].id == i2n){ i2 = k; break;}}
        if(dspot[i].route.indexOf(i2n) == -1){ singlespot.push({a1:i, a2:i2}); break;}
        if(i2 == -1) break;

        /*--  ����·�����ԭʼ����  --*/
        var x1 = Number(dspot[i].coordinator_x);
        var x2 = Number(dspot[i2].coordinator_x);
        var y1 = Number(dspot[i].coordinator_y);
        var y2 = Number(dspot[i2].coordinator_y);

        /*--  ˫��·���Ļ���  --*/
        con.lineWidth = String(coorchange(3, 30));
        con.beginPath();
        con.moveTo(coorchange(1, x1, x_min), coorchange(2, y1, y_min));
        con.lineTo(coorchange(1, x2, x_min), coorchange(2, y2, y_min));
        con.stroke();

        routestr = (routestr.indexOf(",", j) == -1) ? "" : routestr.slice(routestr.indexOf(",", j) + 1, routestr.length);
    }
}

for(i in singlespot){
    var x1 = Number(dspot[singlespot[i].a1].coordinator_x);
    var x2 = Number(dspot[singlespot[i].a2].coordinator_x);
    var y1 = Number(dspot[singlespot[i].a1].coordinator_y);
    var y2 = Number(dspot[singlespot[i].a2].coordinator_y);

    con.lineWidth = String(coorchange(3, 32));
    con.strokeStyle = "#111111";
    con.beginPath();
    con.moveTo(coorchange(1, x1, x_min), coorchange(2, y1, y_min));
    con.lineTo(coorchange(1, (x1 + x2)/2, x_min), coorchange(2, (y1 + y2)/2, y_min));
    con.stroke();
    con.lineWidth = String(coorchange(3, 10));
    con.strokeStyle = "#cecece";
    con.beginPath();
    con.moveTo(coorchange(1, x1, x_min), coorchange(2, y1, y_min));
    con.lineTo(coorchange(1, (x1 + x2)/2, x_min), coorchange(2, (y1 + y2)/2, y_min));
    con.stroke();
}


    for(i in dspot){
        /*-- ·����Ĺ�����ɫ --*/
        con.lineWidth= "1";
        con.strokeStyle = "#111111";
        var spotcolor = "#eaeaea";
        /*-- ·����Ĺ�����ɫ:��ʾ --*/
        if(setmessage.smapcolor == 1){
            switch(Number(dspot[i].belong)){
                case 1: spotcolor = "#03a9f4";break;
                case 2: spotcolor = "#f44336";break;
                case 3: spotcolor = "#f5f5f5";break;
                case 0: spotcolor = "#ffc107";break;
                default: break;
            }
        }
        /*-- ������ 12ff00 d800ff 00ffea ccff00 --*/
        if(setmessage.sspotsign == 1){
            if($("#spotsign1").val() && dspot[i].id == $("#spotsign1").val()) spotcolor = "#12ff00";
            else if($("#spotsign2").val() && dspot[i].id == $("#spotsign2").val()) spotcolor = "#d800ff";
            else if($("#spotsign3").val() && dspot[i].id == $("#spotsign3").val()) spotcolor = "#00ffea";
            else if($("#spotsign4").val() && dspot[i].id == $("#spotsign4").val()) spotcolor = "#ccff00";
        }
        con.fillStyle = spotcolor;
        /*-- ������ ��������ʾ --*/
        if(setmessage.sspotsign == 1 && (dspot[i].id == $("#spotsign1").val() || dspot[i].id == $("#spotsign2").val() || dspot[i].id == $("#spotsign3").val() || dspot[i].id == $("#spotsign4").val())){
            con.beginPath();
            con.rect(coorchange(1, Number(dspot[i].coordinator_x), x_min) - coorchange(3, 140), coorchange(2, Number(dspot[i].coordinator_y), y_min) - coorchange(3, 15), coorchange(3, 280), coorchange(3, 30));
            con.fill();
            con.stroke();
            con.beginPath();
            con.rect(coorchange(1, Number(dspot[i].coordinator_x), x_min) - coorchange(3, 15), coorchange(2, Number(dspot[i].coordinator_y), y_min) - coorchange(3, 140), coorchange(3, 30), coorchange(3, 280));
            con.fill();
            con.stroke();
        }
        con.beginPath();
        con.arc(coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min), coorchange(3, 100), 0, 2*Math.PI);
        con.fill();
        con.stroke();

        /*-- ·��������� --*/
        var spottype = 2;
        if(setmessage.smaptype == 1){
            if(Number(dspot[i].special_eft))spottype = 22;
            else if(Number(dspot[i].random_get))spottype = 23;
            else if(dspot[i].active_cycle)spottype = 21;
            else spottype = Number(dspot[i]["type"]);
            if(dspot[i].active_cycle){ 
                con.lineWidth= String(coorchange(3, 3));
                con.fillStyle = "#111111";
                con.strokeStyle = "#111111";
                con.textAlign = "left";
                con.font = String(coorchange(3, 30)) + "px bold Arial";
                con.beginPath();
                con.strokeText(dspot[i].active_cycle.replace(",", "/").replace("99/1", "-/-"), coorchange(1, Number(dspot[i].coordinator_x), x_min) - coorchange(3, 75), coorchange(2, Number(dspot[i].coordinator_y) , y_min) - coorchange(3, 30));
                con.fillText(dspot[i].active_cycle.replace(",", "/").replace("99/1", "-/-"), coorchange(1, Number(dspot[i].coordinator_x), x_min) - coorchange(3, 75), coorchange(2, Number(dspot[i].coordinator_y), y_min) - coorchange(3, 30));
                con.stroke();
            }
        }
        spotTypeDraw(spottype, coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min), func);
    }

    for(i in dspot){
        /*-- �з����ƺ�Ч�ܵ�չʾ --*/
        con.fillStyle = "#eaeaea";
        if((Number(dspot[i]["enemy_team_id"]) || Number(dspot[i]["ally_team_id"])) && (setmessage.smapenemy == 1)){
            con.lineWidth= String(coorchange(3, 12));
            con.font = String(coorchange(3, 50)) + "px bold Arial";
            con.textAlign = "center";
            con.beginPath();
            con.strokeText(((spotinfo[i]["sally"]) ? ("[" + spotinfo[i]["sally"] + "] ") : "") + spotinfo[i]["sename"], coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 125));
            con.fillText(((spotinfo[i]["sally"]) ? ("[" + spotinfo[i]["sally"] + "] ") : "") + spotinfo[i]["sename"], coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 125));
            con.stroke();

            con.lineWidth= String(coorchange(3, 8));
            con.font = String(coorchange(3, 30)) + "px bold Arial";
            con.textAlign = "center";
            con.beginPath();
            con.strokeText("[" + spotinfo[i]["seai"] + "] " + spotinfo[i]["sefect"], coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 165));
            con.fillText("[" + spotinfo[i]["seai"] + "] " + spotinfo[i]["sefect"], coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 165));
            con.stroke();
        }

        /*-- �������Ƶ�չʾ --*/
        if((Number(dspot[i]["building_id"])) && (setmessage.smapbuild == 1)){
            con.lineWidth= String(coorchange(3, 12));
            con.font = String(coorchange(3, 50)) + "px bold Arial";
            con.textAlign = "center";
            con.beginPath();
            con.strokeText(spotinfo[i].sbuild, coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) - coorchange(3, 90));
            con.fillText(spotinfo[i].sbuild, coorchange(1, Number(dspot[i].coordinator_x), x_min), coorchange(2, Number(dspot[i].coordinator_y), y_min) - coorchange(3, 90));
            con.stroke();
        }

        /*-- ·����ı�� --*/
        con.textAlign="left";
        if(setmessage.smapspotn == 1){
            con.lineWidth= String(coorchange(3, 8));
            con.font = String(coorchange(3, 30)) + "px bold Arial";
            con.beginPath();
            con.strokeText(dspot[i].id, coorchange(1, Number(dspot[i].coordinator_x), x_min) + coorchange(3, 55), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 70));
            con.fillText(dspot[i].id, coorchange(1, Number(dspot[i].coordinator_x), x_min) + coorchange(3, 55), coorchange(2, Number(dspot[i].coordinator_y), y_min) + coorchange(3, 70));
            con.stroke();
        }
    }

    /*-- Ѳ��·�� --*/
    if(setmessage.sspotsign == 1 && setmessage.smapenemyai == 1 && theaicontent != 0 && theaicontent.indexOf("Ѳ��") != -1){
        var content_copy = theaicontent.slice(2,theaicontent.length);
        for(var j = 1; content_copy; j++){
            var thisspotid;
            if(content_copy.indexOf(",") != -1){
                thisspotid = content_copy.slice(0, content_copy.indexOf(","));
                content_copy = content_copy.slice(content_copy.indexOf(",") + 1, content_copy.length);
            }
            else {
                thisspotid = content_copy.slice(0, content_copy.length);
                content_copy = "";
                if((thisspotid == theaicontent.slice(2, theaicontent.indexOf(",")))) break;
            }

            var thisspot;
            for(k in dspot) if(dspot[k].id == thisspotid) {thisspot = dspot[k]; break;}

            con.lineWidth= "1";
            con.strokeStyle = "#111111";
            con.fillStyle = "#12ff00";
            con.beginPath();
            con.arc(coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min), coorchange(3, 100), 0, 2*Math.PI);
            con.fill();
            con.stroke();

            con.fillStyle = "#111111";
            con.textAlign="center";
            con.textBaseline="middle";
            con.lineWidth= String(coorchange(3, 20));
            con.font = String(coorchange(3, 150)) + "px bold Arial";
            con.beginPath();
            con.strokeText(j, coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min));
            con.fillText(j, coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min));
            con.stroke();
        }
    }

    /*-- ���䷶Χ --*/
    if(setmessage.sspotsign == 1 && setmessage.smapenemyai == 1 && theaicontent != 0 && theaicontent.indexOf("����") != -1){
        var spotid = $("#spotsign1").val();
        var rangearray = [];
        for(i in dspot) if(dspot[i].id == spotid){ rangearray.push({id:spotid, num:i, range:0}); break;}

        var rangenum = 1;
        while(rangenum <= theaicontent.slice(2,theaicontent.length)){
            for(i in dspot){
                var esign = 0;
                for(j in rangearray) if(dspot[i].id == rangearray[j].id){ esign = 1; break;}
                if(esign) continue;

                var jsign = 0;
                for(j in rangearray) if(rangearray[j].range == (rangenum - 1) && dspot[i].map_route.indexOf(rangearray[j].id) != -1){ jsign = 1; break;}
                if(jsign) rangearray.push({id:dspot[i].id, num:i, range:rangenum});
            }
            rangenum ++;
        }

        for(i in rangearray){
            var thisspot = dspot[rangearray[i].num];

            con.lineWidth= "1";
            con.strokeStyle = "#111111";
            con.fillStyle = "#12ff00";
            con.beginPath();
            con.arc(coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min), coorchange(3, 100), 0, 2*Math.PI);
            con.fill();
            con.stroke();

            con.fillStyle = "#111111";
            con.textAlign="center";
            con.textBaseline="middle";
            con.lineWidth= String(coorchange(3, 20));
            con.font = String(coorchange(3, 150)) + "px bold Arial";
            con.beginPath();
            con.strokeText(rangearray[i].range, coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min));
            con.fillText(rangearray[i].range, coorchange(1, Number(thisspot.coordinator_x), x_min), coorchange(2, Number(thisspot.coordinator_y), y_min));
            con.stroke();
        }
    }

}

/*-- ��ͼ�ڵ�����ת��Ϊcanvas���� --*/
function coorchange(xy, a, a_min){
    if(xy == "x" || xy == 1){
        return ((a - a_min + 100) / coparameter + mapwidth/24)*scale + xmove;
    }else if(xy == "y" || xy == 2){
        return (mapheight -(a - a_min + 100) / coparameter - mapheight/24)*scale + ymove;
    }else if(xy == "xy" || xy == 3){
        return (a / coparameter)*scale;
    }
}

function traindisplay(){
    /*-- ��յ�ͼ --*/
    $("#missiondrawing")[0].getContext("2d").clearRect(0, 0, mapwidth, mapheight);
    if(setmessage.smaphide == 0) $("#smaphide").click();
    if(setmessage.sbuildtable == 1) $("#smaphide").click();
    if(setmessage.sporttable == 1) $("#smaphide").click();
    if(setmessage.sspotsign == 1) $("#smaphide").click();
    if(setmessage.senemypile == 1) $("#smaphide").click();

    var output = `<table id="Missiontable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:100px;">���<\/th>
        <th style="width:160px;">����<\/th>
        <th style="width:450px;">���<\/th>
        <th style="width:490px;">����<\/th>
        <\/tr><\/thead><tbody id="Missionbody" style="height:300px; overflow-y:scroll; display:block;">`;
    
    for(i in Mission_targettrain_enemy){
        if(Mission_targettrain_enemy[i].log_fitter_id != $("#missionselect").val()) continue;
        var enemy_team_id = Mission_targettrain_enemy[i].enemy_team_id;

        var thisline = `<tr class="missionline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="100px">`;
        thisline += enemy_team_id + `<\/td><td width="160px">`;
        thisline += Mission_targettrain_enemy[i].name + `<\/td><td width="450px">`;
        thisline += enemyoutcal(enemy_team_id) + `<\/td><td width="480px">`;
        thisline += Mission_targettrain_enemy[i].des + "<\/td><\/tr>";

        output += thisline;
    }

    $("#missionshow").html(output);
    $(".missionline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".missionline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".missionline").click(function(){
        $(this).parent().children("tr").css({"background-color":"", "color":""});
        $(this).css({"background-color":"#f4c430cc", "color":"black"});
        enemydisplay($(this).children("td").eq(0).html());
    });
}

function theaterdisplay(){
    /*-- ��յ�ͼ --*/
    $("#missiondrawing")[0].getContext("2d").clearRect(0, 0, mapwidth, mapheight);
    if(setmessage.smaphide == 0) $("#smaphide").click();
    if(setmessage.sbuildtable == 1) $("#smaphide").click();
    if(setmessage.sporttable == 1) $("#smaphide").click();
    if(setmessage.sspotsign == 1) $("#smaphide").click();
    if(setmessage.senemypile == 1) $("#smaphide").click();

    var output = `<table id="Missiontable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:100px;">���<\/th>
        <th style="width:160px;">�ӳ�<\/th>
        <th style="width:100px;">Ч��<\/th>
        <th style="width:490px;">���<\/th>
        <th style="width:60px;">����<\/th>
        <th style="width:100px;">����<\/th>
        <th style="width:200px;">����<\/th>
        <\/tr><\/thead><tbody id="Missionbody" style="height:300px; overflow-y:scroll; display:block;">`;
    
    /*-- ·����ĵ���վλ --*/
    for(i in Theater_area){
        if(Theater_area[i].id != $("#missionselect").val()) continue;
        var enemystr = Theater_area[i].enemy_group + ",";

        while(enemystr){
            var enemy_team_id = enemystr.slice(0, enemystr.indexOf("-"));
            var enemy_num = enemystr.slice(enemystr.indexOf("-") + 1, enemystr.indexOf(","));
            var enemy_odd = (enemy_num.indexOf("-", 3) == -1) ? ("0~" + enemy_num[2]) : (enemy_num[4] + "~" + (Number(enemy_num[2]) + Number(enemy_num[4])));

            var enemy_leader;
            var leader_name;
            for(j in Enemy_team) if(Enemy_team[j]["id"] == enemy_team_id){ enemy_leader = Enemy_team[j]["enemy_leader"]; break;}
            for(j in Enemy_charater_type) if(Enemy_charater_type[j]["id"] == enemy_leader){ leader_name = Enemy_charater_type[j]["name"]; break;}
        
            var thisline = `<tr class="missionline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="100px">`;
            thisline += enemy_team_id + `<\/td><td width="160px">`;
            thisline += leader_name + `<\/td><td width="100px">`;
            thisline += efectcal(enemy_team_id) + `<\/td><td width="490px">`;
            thisline += enemyoutcal(enemy_team_id) + `<\/td><td width="60px">`;
            thisline += ((enemy_num[0] == 0) ? "��ս" : "ҹս") + `<\/td><td width="100px">`;
            thisline += enemy_odd + `<\/td><td width="180px">`;
            thisline += "<\/td><\/tr>";
    
            output += thisline;

            enemystr = enemystr.slice(enemystr.indexOf(",") + 1, enemystr.length);
        }
        break;
    }

    $("#missionshow").html(output);
    $(".missionline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".missionline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".missionline").click(function(){
        $(this).parent().children("tr").css({"background-color":"", "color":""});
        $(this).css({"background-color":"#f4c430cc", "color":"black"});
        enemydisplay($(this).children("td").eq(0).html());
    });
}

function efectcal(enemy_team_id){
    var efect = 0;
    for(j in Enemy_in_team){
        if(Enemy_in_team[j]["enemy_team_id"] != enemy_team_id) continue;
        var enemy_character_type_id = Number(Enemy_in_team[j].enemy_character_type_id);
        var level = Number(Enemy_in_team[j].level);

        var charatype;
        for(var k = 0; k < Enemy_charater_type.length; k++){
            if(Enemy_charater_type[k]["id"] != enemy_character_type_id) continue;
            charatype = Enemy_charater_type[k]; break;}

        var attr_number = Number(Enemy_in_team[j].number);
        var attr_pow = enemyattribute(charatype , "pow" , level);
        var attr_def_break = enemyattribute(charatype , "def_break" , level);
        var attr_rate = enemyattribute(charatype , "rate" , level);
        var attr_hit = enemyattribute(charatype , "hit" , level);
        var attr_maxlife = enemyattribute(charatype , "maxlife" , level);
        var attr_dodge = enemyattribute(charatype , "dodge" , level);
        var attr_armor = enemyattribute(charatype , "armor" , level);
        var attr_def = enemyattribute(charatype , "def" , level);
        var attr_def_percent = Number(Enemy_in_team[j].def_percent);
        /*-- ������ceiling��22*������*((pow + def_break*0.85) * rate/50 * hit/(hit+35) +2) --*/
        var efect_att = ceiling(22*attr_number*((attr_pow + attr_def_break*0.85) * attr_rate/50 * attr_hit/(attr_hit+35) +2));
        /*-- ������ceiling��0.25*(maxlife * (35+dodge)/35 * 300/(300-armor) + 100) * (def_max*2-def+1200*2)/(def_max-def+1200) /2 --*/
        var efect_def = ceiling(0.25*(bround(attr_number * attr_maxlife) * (35+attr_dodge)/35 * 300/(300-attr_armor) + 100) * (attr_def*2 - attr_def*attr_def_percent/100 + 1200*2)/(attr_def - attr_def*attr_def_percent/100 + 1200) /2);
        efect += ceiling(Number(charatype.effect_ratio) * (efect_att + efect_def));
    }
    return efect;
}

function enemyoutcal(enemy_team_id){
    var enemyout = "";
    for(j in Enemy_in_team){
        if(Enemy_in_team[j]["enemy_team_id"] != enemy_team_id) continue;
        var enemy_character_type_id = Number(Enemy_in_team[j]["enemy_character_type_id"]);
        var name;

        for(var k = 0; k < Enemy_charater_type.length; k++){
            if(Enemy_charater_type[k]["id"] != enemy_character_type_id) continue;
            name = Enemy_charater_type[k]["name"];
        }

        if(enemyout.indexOf(name) == -1) enemyout += name + "��" + Enemy_in_team[j]["number"] + " ";
        else{
            var namepos = enemyout.indexOf(name);
            var oldnum = enemyout.slice(namepos + name.length + 1, enemyout.indexOf(" ", namepos));
            var newnum = Number(oldnum) + Number(Enemy_in_team[j]["number"]);
            enemyout = enemyout.replace(name + "��" + oldnum + " ", name + "��" + newnum + " ");
        }
    }
    return enemyout;
}

function enemyselectcreat(){
    var output = `<div style="display:inline-block; padding:6.5px; background:#E0E0E0; color:black; position:relative; top:1px;">���˱��<\/div>
        <div class="eselect"><select id="enemyselect" name="enemyselect">`;

    for(var i = 0; i < Enemy_team.length; i++) output += "<option value=\"" + Enemy_team[i].id + "\">" + Enemy_team[i].id + "<\/option>";
 ?  output += `<\/select><\/div> <input type="text" id="enemytext" name="enemytext" style="border:none; padding:10px; background-color:#e0e0e0; top:1px;"/>`;

    output += `<div class="eteambtn" id="sexistspot" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5.5px 10px; cursor:pointer; vertical-align:middle; margin-left:50px;">���ڵص�<\/div>
    <div class="eteambtn" id="steamconsult" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5.5px 10px; cursor:pointer; vertical-align:middle;">��ɲ�ѯ<\/div>`;

    $("#enemychose").html(output);

    /*-- ���ƻ��� --*/
    var drawingoutput = `<canvas id="enemydrawing" width="4800px" height="300px" style="border:1px #ffffff99 solid;">Your browser does not support the HTML5 canvas tag.<\/canvas>`;
    $("#enemyposition").html(drawingoutput);

    $(".eteambtn").mouseover(function(){
        $(this).css({"border":"1px #f4c430 solid","padding":"5px 10px"});
    });
    $(".eteambtn").mouseout(function(){
        $(this).css({"border":"1px #eaeaea solid","padding":"5px 10px"});
    });

    $("#teammadediv").hide();
    $("#teamexistdiv").hide();
    $("#steamconsult").click(function(){
        if(setmessage["steamconsult"] == 0){
            setmessage["steamconsult"] = 1;
            $(this).css({"background-color":"#f4c430","color":"black"});
            $("#teammadediv").show();
        }else{
            setmessage["steamconsult"] = 0;
            $(this).css({"background-color":"#111111","color":"#eaeaea"});
            $("#teammadediv").hide();
        }
    });

    $("#sexistspot").click(function(){
        if(enemyteaminfo.length == 0)enemymadecal();
        if(setmessage["sexistspot"] == 0){
            setmessage["sexistspot"] = 1;
            $(this).css({"background-color":"#f4c430","color":"black"});
            $("#teamexistdiv").show();
        }else{
            setmessage["sexistspot"] = 0;
            $(this).css({"background-color":"#111111","color":"#eaeaea"});
            $("#teamexistdiv").hide();
        }
    });

    $("#enemyselect").change(function(){
        enemydisplay(Number(this.value));
        if(setmessage.sexistspot == 1) existdisplay(Number(this.value));
    });
    $("#enemytext").change(function(){ 
        for(var i = 0; i < Enemy_team.length; i++){
            if(Enemy_team[i].id == Number(this.value)){
                enemydisplay(Number(this.value));
                if(setmessage.sexistspot == 1) existdisplay(Number(this.value));
                return;
            }
        }
        alert("�õ��˲�����");
    });

    let teamoutput = `<div class="enemyname" id="enemyname1">NONE<\/div><input type="number" name="enemynumber1" id="enemynumber1" class="enemynumber" value="0" min="0"/>
    <div class="enemyname" id="enemyname2">NONE<\/div><input type="number" name="enemynumber2" id="enemynumber2" class="enemynumber" value="0" min="0"/>
    <div class="enemyname" id="enemyname3">NONE<\/div><input type="number" name="enemynumber3" id="enemynumber3" class="enemynumber" value="0" min="0"/>
    <div id="teamconfirm" style="border:1px solid #e0e0e0; padding:6px; margin-left:10px; cursor:pointer; display:inline-block;">��ѯ<\/div><br/><br/>`;

    for(i in Enemy_charater_type){
        let sign = 1;
        for(let j = 0; j < i; j++) if(Enemy_charater_type[j].name == Enemy_charater_type[i].name){ sign = 0; break;}
        if(sign && Enemy_charater_type[i].name && (Enemy_charater_type[i].name != ",")) teamoutput += `<div class="enemytypename" state="off">` + Enemy_charater_type[i].name + `<\/div>`;
    }
    $("#teammadediv").html(teamoutput);
    $("div.enemyname").css({"width":"160px", "display":"inline-block", "padding":"5px", "background-color":"#e0e0e0", "color":"black", "margin-left":"6px", "cursor":"pointer", "border":"double"});
    $("input.enemynumber").css({"width":"50px", "padding":"9.5px", "background-color":"#e0e0e0", "border":"none", "margin-left":"2px"});
    $("div.enemytypename").css({"background-color":"#e0e0e0", "color":"black", "display":"inline-block", "margin":"4px 4px", "padding":"4px", "cursor":"pointer", "border-style":"double"});
    $("div#teamconfirm").mouseover(function(){$(this).css({"border-color":"#f4c430", "color":"#f4c430"})});
    $("div#teamconfirm").mouseout(function(){$(this).css({"border-color":"#e0e0e0", "color":"#eaeaea"})});

    $("div.enemyname").click(function(){ 
        if($(this).html() == "NONE") return;
        var namedivs = document.querySelectorAll("div.enemytypename");
        for(i in namedivs) if($(namedivs[i]).html() == $(this).html()){ $(namedivs[i]).css({"background-color":"#e0e0e0"}); break;}
        $(this).html("NONE");
        $(this).css("background-color", "#e0e0e0");
        $(this).next().val(0);
    });
    $("div.enemytypename").click(function(){ 
        if($(this).attr("state") == "off"){
            if($("#enemyname1").html() == "NONE"){
                $("#enemyname1").html($(this).html());
                $("#enemyname1").css("background-color", "#f4c430");
            } 
            else if($("#enemyname2").html() == "NONE"){
                $("#enemyname2").html($(this).html());
                $("#enemyname2").css("background-color", "#f4c430");
            } 
            else if($("#enemyname3").html() == "NONE"){
                $("#enemyname3").html($(this).html());
                $("#enemyname3").css("background-color", "#f4c430");
            }
            else return;
            $(this).attr("state", "on");
            $(this).css({"background-color":"#f4c430"});
        } else {
            if($("#enemyname1").html() == $(this).html()) $("#enemyname1").click();
            else if($("#enemyname2").html() == $(this).html()) $("#enemyname2").click();
            else if($("#enemyname3").html() == $(this).html()) $("#enemyname3").click();
            $(this).attr("state", "off");
        }
    });
    $("div#teamconfirm").click(function(){
        if(setmessage.sexistspot == 1) existdisplay();
    });

}

function enemymadecal(){
    /*-- �з����ڵĹؿ��Լ���λ������ --*/
    for(i in Enemy_team){
        enemyteaminfo.push({id:Enemy_team[i].id, enemy:[]});
        let thisteam = enemyteaminfo.length - 1;

        for(j in Enemy_in_team){
            if(Enemy_in_team[j]["enemy_team_id"] != Enemy_team[i].id) continue;
            let enemyname;
    
            for(k in Enemy_charater_type) if(Enemy_charater_type[k]["id"] == Enemy_in_team[j]["enemy_character_type_id"]){ enemyname = Enemy_charater_type[k]["name"]; break;}

            let sign = 1;
            for(k in enemyteaminfo[thisteam].enemy){
                if(enemyteaminfo[thisteam].enemy[k].name == enemyname){ enemyteaminfo[thisteam].enemy[k].number += Number(Enemy_in_team[j]["number"]); sign = 0;}
            }
            if(enemyteaminfo[thisteam].enemy.length == 0) enemyteaminfo[thisteam].enemy.push({name:enemyname, number:Number(Enemy_in_team[j]["number"])});
            else if(sign) enemyteaminfo[thisteam].enemy.push({name:enemyname, number:Number(Enemy_in_team[j]["number"])});
        }
    }
}

function existdisplay(define_team){
    var output = `<table id="existancetable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:100px;">���<\/th>
        <th style="width:540px;">���<\/th>
        <th style="width:140px;">ս��<\/th>
        <th style="width:140px;">�ؿ�<\/th>
        <th style="width:100px;">Ч��<\/th>
        <th style="width:100px;">��λ<\/th>
        <th style="width:80px;">����<\/th>
        <\/tr><\/thead><tbody id="Buildingbody" style="height:300px; overflow-y:scroll; display:block;">`;

    if(define_team) output += existcalculation(define_team) + `<\/tbody><\/table>`; 
    else{
        for(list in enemyteaminfo){
            let sign = 0;
            if($("#enemyname1").html() != "NONE"){
                for(i in enemyteaminfo[list].enemy){
                    if(enemyteaminfo[list].enemy[i].name == $("#enemyname1").html() && enemyteaminfo[list].enemy[i].number >= Number($("#enemynumber1").val())) {sign = 1; break;}
                }
                if(sign == 0) continue;
                else sign = 1;
            }
            if($("#enemyname2").html() != "NONE"){
                for(i in enemyteaminfo[list].enemy){
                    if(enemyteaminfo[list].enemy[i].name == $("#enemyname2").html() && enemyteaminfo[list].enemy[i].number >= Number($("#enemynumber2").val())) {sign = 1; break;}
                }
                if(sign == 0) continue;
                else sign = 1;
            }
            if($("#enemyname3").html() != "NONE"){
                for(i in enemyteaminfo[list].enemy){
                    if(enemyteaminfo[list].enemy[i].name == $("#enemyname3").html() && enemyteaminfo[list].enemy[i].number >= Number($("#enemynumber3").val())) {sign = 1; break;}
                }
                if(sign == 0) continue;
            }
    
            output += existcalculation(enemyteaminfo[list].id) ;
        }
    }
    
    $("#teamexistdiv").html(output + `<\/tbody><\/table>`);    
    
    $(".existanceline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".existanceline").mouseout(function(){
        $(this).children("td").css("background-color", "");
    });
    $(".existanceline").click(function(){
        if(setmessage.sspotsign == 0) return;
        $("#spotsign1").val(Number($($(this).children("td")[0]).html()));
        drawmap();
    });
}

function existcalculation(enemy_team_id){
    var thisput = ``;
    for(i in Spot){
        if(Spot[i]["enemy_team_id"] != enemy_team_id && !(Spot[i]["ally_team_id"])) continue;
        else if(Spot[i]["enemy_team_id"] != enemy_team_id && Spot[i]["ally_team_id"]){
            var ally_tar;
            for(j in Ally_team) if(Ally_team[j].id == Number(Spot[i]["ally_team_id"])){ ally_tar = j; break;}
            if(!(Ally_team[ally_tar]) || Ally_team[ally_tar]["enemy_team_id"] != enemy_team_id) continue;
        }

        var enemymadestr = "";
        for(j in enemyteaminfo) if(enemyteaminfo[j].id == enemy_team_id) for(k in enemyteaminfo[j].enemy) enemymadestr += enemyteaminfo[j].enemy[k].name + "��" + enemyteaminfo[j].enemy[k].number + " ";

        var mapname = "", campaignname = "";
        for(j in Mission) if(Mission[j].id == Spot[i].mission_id){
            mapname = Mission[j].name;
            campaignname = Mission[j].campaign;
        } 

        let thisline = `<tr class="existanceline" style="border-bottom:2px #f4c43033 solid; display:block; cursor:pointer;"><td width="100px">`;
        thisline += enemy_team_id + `<\/td><td width="540px">`;
        thisline += enemymadestr.slice(0, enemymadestr.length - 1) + `<\/td><td width="140px">`;
        thisline += campaignname + `<\/td><td width="140px">`;
        thisline += mapname + `<\/td><td width="100px">`;
        thisline += efectcal(enemy_team_id) + `<\/td><td width="100px">`;
        thisline += Spot[i].id + `<\/td><td width="60px">`;
        thisline += "����" + "<\/td><\/tr>";

        thisput += thisline;
    }
    return thisput;
}

function enemydisplay(enemy_team_id){
    /*-- enemyselectѡ��ѡ���option --*/
    $("#enemyselect").val(enemy_team_id);

    /*-- canvas��ͼ�������/�������Լ��ο��� --*/
    var con = $("#enemydrawing")[0].getContext("2d");
    con.clearRect(0, 0, 4800, 300);
    con.lineWidth="1";
    con.strokeStyle="#444444";
    con.fillStyle = "#111111";
    con.font="10px bolder Arial";
    con.beginPath();
    con.fillRect(0, 0, 4800, 300);
    con.stroke();

    /*-- �ο��ߺ���/�������� --*/
    for(var i = 0; i <= 300 / 25; i++){ dcoordinator(3, "#444444", 0, i);}
    for(var i = 0; i <= 3600/100; i++){ 
        dcoordinator(2, "#444444", i*4, 0);
        dcoordinator(6, "#444444", i*4, -1, i*4-3);}
    /*-- �ҷ�λ�� --*/
    dcoordinator(1, "#f4c430", -1.7, -0.09);
    dcoordinator(1, "#f4c430", -1.7, 8.31);
    dcoordinator(1, "#f4c430", -1.7, 4.11);
    dcoordinator(1, "#f4c430", 0.7, -0.09);
    dcoordinator(1, "#f4c430", 0.7, 8.31);
    dcoordinator(1, "#f4c430", 0.7, 4.11);
    dcoordinator(1, "#f4c430", 3.1, -0.09);
    dcoordinator(1, "#f4c430", 3.1, 8.31);
    dcoordinator(1, "#f4c430", 3.1, 4.11);
    /*-- ���� --*/
    dcoordinator(1, "#3366cc", 4, 3.91);
    dcoordinator(5, "#3366cc", 4, 3.91, "����");
    /*-- ˫�� --*/
    dcoordinator(1, "#3366cc", 4, 6.91);
    dcoordinator(1, "#3366cc", 4, 1.91);
    con.textAlign = "center";
    dcoordinator(5, "#3366cc", 4, 6.91, "˫��");
    dcoordinator(5, "#3366cc", 4, 1.91, "˫��");
    /*-- ������ --*/
    dcoordinator(1, "#3366cc", 4.3, 6.91);
    dcoordinator(1, "#3366cc", 4.3, 2.21);
    con.textAlign = "left";
    dcoordinator(5, "#3366cc", 4.3, 6.91, "������");
    dcoordinator(5, "#3366cc", 4.3, 2.21, "������");
    /*-- ����� --*/
    dcoordinator(4, "#4caf50", 8.76, 0);
    dcoordinator(4, "#4caf50", 9.76, 0);
    dcoordinator(4, "#4caf50", 10.76, 0);
    dcoordinator(4, "#4caf50", 11.76, 0);
    con.textBaseline = "top";
    dcoordinator(5, "#4caf50", 8.76, 10.5, "2����-�ƶ�");
    dcoordinator(5, "#4caf50", 9.76, 10, "2����-վ��");
    dcoordinator(5, "#4caf50", 10.76, 10.5, "3����-�ƶ�");
    dcoordinator(5, "#4caf50", 11.76, 10, "3����-վ��");
    con.textBaseline = "middle";
    con.font = "16px bolder Arial";

    /*-- ����ı�ͷ --*/
    var output = `<table id="Eenmytable" class="enemydata" style="text-align:center; border:1px #f4c430cc solid; background-color:#111111; margin:4px 0px 14px 0px;" cellspacing="1">
        <thead style="display:block; background-color:#f4c430; color:black;"><tr>
        <th style="width:160px;">����<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">�ȼ�<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">�˺�<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">�ر�<\/th>
        <th style="width:59px;">���<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">����<\/th>
        <th style="width:59px;">�Ʒ�<\/th>
        <th style="width:79px;">�������<\/th>
        <th style="width:79px;">��ʼ����<\/th>
        <th style="width:100px;">����<\/th>
        <\/tr><\/thead><tbody id="Eenmybody" style="height:300px; overflow-y:scroll; display:block;">`;

    for(var i = 0; i < Enemy_in_team.length; i++){
        if(Enemy_in_team[i]["enemy_team_id"] != enemy_team_id) continue;
        var enemy_character_type_id = Number(Enemy_in_team[i].enemy_character_type_id);
        var level = Number(Enemy_in_team[i].level);

        /*-- ����type ��������/��ǰ���� --*/
        var charatype;
        for(var j = 0; j < Enemy_charater_type.length; j++){
            if(Number(Enemy_charater_type[j]["id"]) != enemy_character_type_id) continue;
            charatype = Enemy_charater_type[j];
        }
        
        var thisline = `<tr class="enemyline" style="border-bottom:2px #f4c43033 solid; display:block;"><td class="enemycell" index="1" width="160px">`;
        thisline += charatype["name"] + `<\/td><td class="enemycell" index="2" width="59px">`;
        thisline += Number(Enemy_in_team[i].number) + `<\/td><td class="enemycell" index="3" width="59px">`;
        thisline += level % 1000 + `<\/td><td class="enemycell" index="4" width="59px">`;
        thisline += bround(enemyattribute(charatype , "maxlife" , level)) + `<\/td><td class="enemycell" index="5" width="59px">`;
        thisline += enemyattribute(charatype , "pow" , level) + `<\/td><td class="enemycell" index="6" width="59px">`;
        thisline += enemyattribute(charatype , "rate" , level) + `<\/td><td class="enemycell" index="7" width="59px">`;
        thisline += enemyattribute(charatype , "hit" , level) + `<\/td><td class="enemycell" index="8" width="59px">`;
        thisline += enemyattribute(charatype , "dodge" , level) + `<\/td><td class="enemycell" index="9" width="59px">`;
        thisline += enemyattribute(charatype , "range" , level) + `<\/td><td class="enemycell" index="10" width="59px">`;
        thisline += enemyattribute(charatype , "speed" , level) + `<\/td><td class="enemycell" index="11" width="59px">`;
        thisline += enemyattribute(charatype , "armor_piercing" , level) + `<\/td><td class="enemycell" index="12" width="59px">`;
        thisline += enemyattribute(charatype , "armor" , level) + `<\/td><td class="enemycell" index="13" width="59px">`;
        thisline += enemyattribute(charatype , "shield" , level) + `<\/td><td class="enemycell" index="14" width="59px">`;
        thisline += enemyattribute(charatype , "def_break" , level) + `<\/td><td class="enemycell" index="15" width="79px">`;
        thisline += enemyattribute(charatype , "def" , level) + `<\/td><td class="enemycell" index="16" width="79px">`;
        thisline += Number(Enemy_in_team[i].def_percent) + `%<\/td><td class="enemycell" index="17" width="80px">`;
        thisline += "(" + Enemy_in_team[i].coordinator_x + "," + Enemy_in_team[i].coordinator_y + `)<\/td><\/tr>`;

        output += thisline;

        dcoordinator(1, "#e91e63", Number(Enemy_in_team[i].coordinator_x), Number(Enemy_in_team[i].coordinator_y));
        dcoordinator(5, "#e91e63", Number(Enemy_in_team[i].coordinator_x), Number(Enemy_in_team[i].coordinator_y), charatype["name"]);
    }

    $("#enemyshow").html(output);

    /*-- ������Ϣ�еĲ鿴Ч�� --*/
    $("#Eenmybody").mouseout(function(){
        $(this).children("tr").children("td").css("background-color", "");
    });
    $(".enemyline").mouseover(function(){
        $(this).children("td").css("background-color", "#f4c43033");
    });
    $(".enemyline").mouseout(function(){
        $(this).children("td").css("background-color", ""); 
    });
    $(".enemycell").mouseover(function(){
        $(this).parent("tr").parent("tbody").children("tr").children("td").css("background-color", "");
        var trs = $(this).parent().parent().children("tr");
        for(var i = 0; i < trs.length; i++){
            $(trs[i]).children("td")[Number($(this).attr("index")) - 1].style.backgroundColor = "#f4c43033";
        }
    });
}

function enemyattribute(charatype , attr , level){
    var normalattr = Number(charatype[attr]);
    var normallevel = Number(charatype["level"]);
    if(!Enemy_standard_attribute[0][attr]) return bround(normalattr);
    else if(attr == "def" && normalattr == 99999) return 0;

    var thislevelfactor;
    for(var i = 0; i < Enemy_standard_attribute.length; i++){
        if(Enemy_standard_attribute[i]["level"] != level) continue;
        thislevelfactor = Number(Enemy_standard_attribute[i][attr]);
        break;
    }

    var normallevelfactor;
    for(var i = 0; i < Enemy_standard_attribute.length; i++){
        if(Number(Enemy_standard_attribute[i]["level"]) != normallevel) continue;
        normallevelfactor = Number(Enemy_standard_attribute[i][attr]);
        break;
    }
    
    return (attr == "maxlife") ? normalattr*thislevelfactor/normallevelfactor : bround(normalattr*thislevelfactor/normallevelfactor);
}

function dcoordinator(type, color, x, y, z){
    var con = $("#enemydrawing")[0].getContext("2d");
    con.lineWidth="1";
    con.strokeStyle = color;
    con.fillStyle = color;

    con.beginPath();
    switch(type){
        case 1: {
            con.arc((3 + x)*50, (11 - y)*25, 3, 0, 2*Math.PI);
            con.fill();
        }break;
        case 2: {
            con.moveTo(x*50, 0);
            con.lineTo(x*50, 300);
        }break;
        case 3: {
            con.moveTo(0, y*25);
            con.lineTo(4800, y*25);
        }break;
        case 4: {
            con.moveTo((3 + x)*50, 0);
            con.lineTo((3 + x)*50, 300);
        }break;
        case 5: {
            con.lineWidth="0.5";
            con.strokeText(z, (3 + x)*50, (11 - y)*25 - 5);
            con.fillText(z, (3 + x)*50, (11 - y)*25 - 5);
        }break;
        case 6: {
            con.lineWidth="0.5";
            con.strokeText(z, x*50, 298);
            con.fillText(z, x*50, 298);
        }break;
        default: break;
    }
    con.stroke();
}

function ceiling(a){
    return (a%1) ? (a-a%1 + 1) : a;
}

function bround(a){
    if(a%1 == 0.5 && (a - 0.5)%2 == 1) return a+0.5 ;
    else if(a%1 == 0.5 && (a - 0.5)%2 == 0) return a-0.5 ;
    else return Number(a.toFixed(0));
}

function spotTypeDraw(type, xcen, ycen, func){
    var con = $("#exampledrawing")[0].getContext("2d");
    if(func == 1) con = $("#exampledrawing")[0].getContext("2d");
    else if(func == 2) con = $("#downloaddrawing")[0].getContext("2d");
    else con = $("#missiondrawing")[0].getContext("2d");
    con.lineWidth = String(coorchange(3, 20));
    con.lineJoin="round";
    con.strokeStyle = "#111111";
    switch(type){
        /* type 1 ָ�Ӳ� */
        case 1: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  40), ycen + coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  40), ycen - coorchange(3,  10));
            con.lineTo(xcen - coorchange(3,  50), ycen - coorchange(3,  10));
            con.lineTo(xcen                     , ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  40), ycen - coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  40), ycen + coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  40), ycen + coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  40), ycen - coorchange(3,  10));
            con.moveTo(xcen - coorchange(3,  40), ycen - coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  40), ycen - coorchange(3,  10));
            con.stroke();
        }break;

        /* type 2 ·���� */
        case 2: {
        }break;

        /* active_cycle ��ʱ���� */
        case 21: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,   50), ycen );
            con.lineTo(xcen - coorchange(3,   50), ycen + coorchange(3,   50));
            con.lineTo(xcen + coorchange(3,   50), ycen + coorchange(3,   50));
            con.lineTo(xcen + coorchange(3,   50), ycen );
            con.lineTo(xcen - coorchange(3,   10), ycen );
            con.lineTo(xcen - coorchange(3,   10), ycen + coorchange(3,   50));
            con.moveTo(xcen + coorchange(3,   20), ycen );
            con.lineTo(xcen + coorchange(3,   20), ycen - coorchange(3,   50));
            con.moveTo(xcen - coorchange(3,   10), ycen - coorchange(3,   50));
            con.lineTo(xcen + coorchange(3,   50), ycen - coorchange(3,   50));
            con.moveTo(xcen + coorchange(3, 70.7), ycen - coorchange(3, 70.7));
            con.lineTo(xcen - coorchange(3, 70.7), ycen + coorchange(3, 70.7));
            con.stroke();
        }break;
        
        /* special_eft �״� */
        case 22: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  50), ycen - coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  50), ycen + coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  50), ycen - coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  10));
            con.moveTo(xcen - coorchange(3,  50), ycen - coorchange(3,  20));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  20));
            con.moveTo(xcen - coorchange(3,  20), ycen - coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  20), ycen + coorchange(3,  10));
            con.moveTo(xcen + coorchange(3,  20), ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  20), ycen + coorchange(3,  10));
            con.moveTo(xcen                     , ycen + coorchange(3,  50));
            con.lineTo(xcen                     , ycen + coorchange(3,  10));
            con.stroke();
        }break;

        /* random_get  �����  */
        case 23: {
            con.beginPath();
            con.arc(xcen, ycen, coorchange(3,  50), Math.PI, 2*Math.PI);
            con.stroke();
            con.beginPath();
            con.moveTo(xcen                     , ycen + coorchange(3,  55));
            con.lineTo(xcen                     , ycen + coorchange(3,  45));
            con.moveTo(xcen                     , ycen + coorchange(3,  40));
            con.lineTo(xcen                     , ycen );
            con.lineTo(xcen + coorchange(3,  50), ycen );
            con.lineTo(xcen                     , ycen );
            con.stroke();
        }break;

        /* type 3 ���� */
        case 3: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  50), ycen );
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen + coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen );
            con.lineTo(xcen - coorchange(3,  10), ycen );
            con.lineTo(xcen - coorchange(3,  10), ycen + coorchange(3,  50));
            con.moveTo(xcen + coorchange(3,  20), ycen );
            con.lineTo(xcen + coorchange(3,  20), ycen - coorchange(3,  50));
            con.moveTo(xcen - coorchange(3,  10), ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  50));
            con.stroke();
        }break;

        /* type 5 ������ */
        case 5: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  50), ycen - coorchange(3,  30));
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  30));
            con.lineTo(xcen                     , ycen + coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen + coorchange(3,  30));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  30));
            con.lineTo(xcen                     , ycen - coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  50), ycen - coorchange(3,  30));
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  30));
            con.moveTo(xcen - coorchange(3,  50), ycen - coorchange(3,  30));
            con.lineTo(xcen                     , ycen - coorchange(3,  10));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  30));
            con.moveTo(xcen                     , ycen - coorchange(3,  10));
            con.lineTo(xcen                     , ycen + coorchange(3,  50));
            con.stroke();
        }break;
        
        /* type 6 ����� */
        case 6: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  50), ycen + coorchange(3,  50));
            con.lineTo(xcen - coorchange(3,  50), ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen + coorchange(3,  10));
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  10));
            con.stroke();
        }break;
        
        /* type 7 ��װ���� */
        case 7: {
            con.beginPath();
            con.moveTo(xcen - coorchange(3,  50), ycen );
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen + coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen );
            con.lineTo(xcen - coorchange(3,  50), ycen );
            con.lineTo(xcen - coorchange(3,  50), ycen + coorchange(3,  50));
            con.moveTo(xcen + coorchange(3,  20), ycen );
            con.lineTo(xcen + coorchange(3,  20), ycen - coorchange(3,  50));
            con.moveTo(xcen - coorchange(3,  10), ycen - coorchange(3,  50));
            con.lineTo(xcen + coorchange(3,  50), ycen - coorchange(3,  50));
            con.stroke();
        }break;

        default: break;
    }
}

function mapsetcreat(){
    /*���� sdownload  ���� sredraw  ���� smaphide  ͼ�� sexample  
    ���� smapenemy  ���� smapbuild  ���� smaptype  ��ɫ smapcolor  ��� smapspotn  �߼� smapenemyai
    ������� sbuildtable  ���ͱ�� sporttable  ��λ��� sspotsign  ͬ��ѵ� senemypile  --*/
    var mapsetoutput = `<div class="mapsetbtn" id="sdownload" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px;"><a style="color:#eaeaea; text-decoration:auto;">���ش�ͼ<\/a><\/div>
    <div class="mapsetbtn" id="sredraw" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">��ԭ��ͼ<\/div>
    <div class="mapsetbtn" id="smaphide" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">���ص�ͼ<\/div>
    <div class="mapsetbtn" id="sexample" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">��ʾͼ��<\/div>
    <span style="padding:0px 5px;"><\/span>
    <div class="mapsetbtn" id="smapenemy" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">����<\/div>
    <div class="mapsetbtn" id="smapbuild" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">����<\/div>
    <div class="mapsetbtn" id="smaptype" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">����<\/div>
    <div class="mapsetbtn" id="smapcolor" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">��ɫ<\/div>
    <div class="mapsetbtn" id="smapspotn" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">���<\/div>
    <div class="mapsetbtn" id="smapenemyai" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">�߼�<\/div>
    <span style="padding:0px 5px;"><\/span>
    <div class="mapsetbtn" id="sbuildtable" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">�������<\/div>
    <div class="mapsetbtn" id="sporttable" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; background-color:#f4c430; color:black; cursor:pointer;">���ͱ��<\/div>
    <div class="mapsetbtn" id="sspotsign" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">��λ���<\/div>
    <div class="mapsetbtn" id="senemypile" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">ͬ��ѵ�<\/div>`;

    $("#mapsetdiv").css({"user-select":"none", "margin":"5px 0px"});
    $("#mapsetdiv").html(mapsetoutput);

    $(".mapsetbtn").mouseover(function(){
        $(this).css({"border":"1px #f4c430 solid","padding":"5px 10px"});
    });
    $(".mapsetbtn").mouseout(function(){
        $(this).css({"border":"1px #eaeaea solid","padding":"5px 10px"});
    });
    $(".mapsetbtn").mousedown(function(){
        if($(this).attr("id") != "sdownload" && $(this).attr("id") != "sredraw") return;
        $(this).css({"background-color":"#f4c430aa","color":"black"});
    });
    $(".mapsetbtn").mouseup(function(){
        if($(this).attr("id") != "sdownload" && $(this).attr("id") != "sredraw") return;
        $(this).css({"background-color":"#111111","color":"#eaeaea"});
    });

    $(".mapsetbtn").click(function(){
        var setid = $(this).attr("id");
        /*-- ���ع��� --*/
        if(setid == "sdownload"){
            mapwidth = 4800; mapheight = 2700;
            /*-- ����������»��� --*/
            var drawingoutput = `<canvas id="downloaddrawing" width="4800px" height="2700px" style="display:none;">Your browser does not support the HTML5 canvas tag.<\/canvas>`;
            $("#downloaddraw").html(drawingoutput);
            /*-- ���»������л滭 --*/
            drawmap(2);
            $(this).children("a").attr("href", document.getElementById("downloaddrawing").toDataURL("image/png"));
            var campaignname = $("#campaignselect").find("option:selected").text().slice(5, $("#campaignselect").find("option:selected").text().length);
            var missionname = $("#missionselect").find("option:selected").text().slice(0, $("#missionselect").find("option:selected").text().length - 1).replace(/\[/g, "").replace(/\]/g, "");
            var othername = ($("#layerselect").css("display") != "none") ? (" " + $("#layerselect").find("option:selected").text().replace(" ", "") + " " + $("#packselect").find("option:selected").text().replace(" ", "")) : "";
            $(this).children("a").attr("download",campaignname + " " + missionname + othername + ".png");
            mapwidth = 1200; mapheight = 675;
            return;
        }
        /*-- ��ԭ���� --*/
        else if(setid == "sredraw"){
            xmove = 0; ymove = 0; scale = 1;
            drawmap(); return;
        }
        /*-- ����btn�Ļ������� --*/
        if(setmessage[setid] == 0){
            setmessage[setid] = 1;
            $(this).css({"background-color":"#f4c430","color":"black"});
        }else{
            setmessage[setid] = 0;
            $(this).css({"background-color":"#111111","color":"#eaeaea"});
        }
        
        /*-- ������Ҫ�߱��Ĳ�ͬ���� 0Ϊ��ǰ�ر� 1Ϊ��ǰ���� --*/
        switch(setid){
            case "smaphide": {
                if(setmessage.smaphide == 0) $("#missionmap").slideDown("fast");
                else{
                    $("#missionmap").slideUp("fast");
                    if(setmessage.sbuildtable == 1) $("#sbuildtable").click();
                    if(setmessage.sporttable == 1) $("#sporttable").click();
                    if(setmessage.sspotsign == 1) $("#sspotsign").click();
                    if(setmessage.sexample == 1) $("#sexample").click();
                }
            } break;
            case "sexample": {
                if(setmessage.sexample == 0) $("#mapexample").slideUp("fast");
                else $("#mapexample").slideDown("fast");
            } break;
            case "sbuildtable": {
                if(setmessage.sbuildtable == 0) $("#buildingshow").slideUp("fast");
                else $("#buildingshow").slideDown("fast");
            } break;
            case "sporttable": {
                if(setmessage.sporttable == 0) $("#teleportshow").slideUp("fast");
                else $("#teleportshow").slideDown("fast");
            } break;
            case "sspotsign": {
                if(setmessage.sspotsign == 0) $("#spotsign").slideUp("fast");
                else $("#spotsign").slideDown("fast");
            } break;
            case "senemypile": {
                enemypile();
            }
            default: break;
        }

        drawmap();
    });
}

/*-- ͬ����˵Ķѵ� --*/
function enemypile(){
    if(setmessage.senemypile == 0) {
        $(".cellacap").css("display", "table-cell");
        $(".cellbcap").css("display", "none");
        $(".cella").css("display", "table-cell");
        $(".cellb").css("display", "none");
        $(".missionline").css("display","block");
    }else {
        $(".cellacap").css("display", "none");
        $(".cellbcap").css("display", "table-cell"); 
        $(".cella").css("display", "none");
        $(".cellb").css("display", "table-cell");

        var teamnum = [];
        var missionlines = $(".missionline");
        for(var k = 0; k < missionlines.length; k++){
            teamnum.push($($(missionlines[k]).children("td")[0]).html());
        }
        for(k in missionlines){
            for(var z = 0; z < k; z++){
                if(teamnum[k] == teamnum[z]){
                    $(missionlines[k]).css("display", "none");
                }
            }
        } 
    }
}

/*-- ���Ƶ�ͼ��ͼ�� --*/
function examplecreate(){
    var exampleoutput = `<canvas id="exampledrawing" width="1220px" height="120px" style="border:1px #ffffff99 solid;">Your browser does not support the HTML5 canvas tag.<\/canvas>`;
    $("#mapexample").html(exampleoutput);
    $("#mapexample").css({"display":"none"});
    var con = $("#exampledrawing")[0].getContext("2d");

    /*-- ������ --*/
    con.strokeStyle = "#cecece";
    con.lineWidth = 30/8;
    con.beginPath();
    con.moveTo(850 - 30, 50 + 30);
    con.lineTo((850 + 30 + 850 - 30)/2, (50 + 30 + 50 - 30)/2);
    con.stroke();
    con.lineWidth = 10/8;
    con.beginPath();
    con.moveTo((850 + 30 + 850 - 30)/2, (50 + 30 + 50 - 30)/2);
    con.lineTo(850 + 30, 50 - 30);
    con.stroke();

    con.lineWidth = 4;
    con.strokeStyle = "#111111";
    con.fillStyle = "#03a9f4";
    /*-- ��ͼͼ����·���� --*/
    con.beginPath();
    con.arc(50, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(150, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(250, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(350, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(450, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(550, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(650, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(750, 50, 40, 0, 2*Math.PI);
    con.fill();
    con.stroke();

    con.lineWidth = 1;
    con.beginPath();
    con.arc(850 - 30, 50 + 30, 10, 0, 2*Math.PI);
    con.fill();
    con.stroke();
    con.beginPath();
    con.arc(850 + 30, 50 - 30, 10, 0, 2*Math.PI);
    con.fill();
    con.stroke();

    /*-- ��ͼͼ�������� --*/  
    con.lineWidth = 4;
    con.strokeStyle = "#eaeaea";
    con.fillStyle = "#eaeaea";
    con.font = "16px bold Arial";
    con.textAlign="center";

    con.beginPath();
    con.fillText("ָ�Ӳ�", 50, 110);
    con.stroke();
    con.beginPath();
    con.fillText("��ʱ����", 150, 110);
    con.stroke();
    con.beginPath();
    con.fillText("�״�", 250, 110);
    con.stroke();
    con.beginPath();
    con.fillText("�����", 350, 110);
    con.stroke();
    con.beginPath();
    con.fillText("����", 450, 110);
    con.stroke();
    con.beginPath();
    con.fillText("������", 550, 110);
    con.stroke();
    con.beginPath();
    con.fillText("�����",  650, 110);
    con.stroke();
    con.beginPath();
    con.fillText("��װ����", 750, 110);
    con.stroke();
    con.beginPath();
    con.fillText("���е�", 850, 110);
    con.stroke();

    /*-- ��ͼͼ����·�������� --*/ 
    var coparasave = coparameter;
    coparameter = 2.5
    spotTypeDraw(1, 50, 50, 1);
    spotTypeDraw(21, 150, 50, 1);
    spotTypeDraw(22, 250, 50, 1);
    spotTypeDraw(23, 350, 50, 1);
    spotTypeDraw(3, 450, 50, 1);
    spotTypeDraw(5, 550, 50, 1);
    spotTypeDraw(6, 650, 50, 1);
    spotTypeDraw(7, 750, 50, 1);
    coparameter = coparasave;

    /*-- ��ʱ�������� --*/
    con.lineWidth = "1";
    con.fillStyle = "#111111";
    con.textAlign = "left";
    con.font = "12px bold Arial";
    con.beginPath();
    con.strokeText("3/1", 150 - 30, 50 - 12);
    con.fillText("3/1", 150 - 30, 50 - 12);
    con.stroke();
}

function spotsigncreat(){
    /*-- ������ 12ff00 d800ff 00ffea ccff00 --*/
    var output = `<div id="mapredraw" class="mapsignbtn" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">�ػ�<\/div>
                <div id="mapclear" class="mapsignbtn" style="display:inline-block; user-select:none; border:1px #eaeaea solid; padding:5px 10px; cursor:pointer;">���<\/div>
                <input type="text" id="spotsign1" name="spotsign1" style="border:none; padding:10px; margin:3px 3px; background-color:#12ff00; color:#111111;"/>
                <input type="text" id="spotsign2" name="spotsign2" style="border:none; padding:10px; margin:3px 3px; background-color:#d800ff; color:#111111;"/>
                <input type="text" id="spotsign3" name="spotsign3" style="border:none; padding:10px; margin:3px 3px; background-color:#00ffea; color:#111111;"/>
                <input type="text" id="spotsign4" name="spotsign4" style="border:none; padding:10px; margin:3px 3px; background-color:#ccff00; color:#111111;"/>`;
    $("#spotsign").html(output);
    $("#spotsign").css("display", "none");

    $(".mapsignbtn").mouseover(function(){
        $(this).css({"border":"1px #f4c430 solid","padding":"5px 10px"});
    });
    $(".mapsignbtn").mouseout(function(){
        $(this).css({"border":"1px #eaeaea solid","padding":"5px 10px"});
    });
    $(".mapsignbtn").mousedown(function(){
        $(this).css({"background-color":"#f4c430aa","color":"black"});
    });
    $(".mapsignbtn").mouseup(function(){
        $(this).css({"background-color":"#111111","color":"#eaeaea"});
    });

    $("#mapredraw").click(function(){ drawmap();});
    $("#mapclear").click(function(){ 
        $("#spotsign1").val("");
        $("#spotsign2").val("");
        $("#spotsign3").val("");
        $("#spotsign4").val("");
        theaicontent = 0;
        drawmap();
    });
}

function firstcreat(){
    var output = `<div id="loadtips" style="padding:20px; font-size:130%; display:block; border:1px solid #eaeaea; width:1180px; margin:20px 0px;">�ļ����ؽ���:0/12<\/div>
                <div id="campaignchose" style="height:37px;"><\/div>
                <div id="mapsetdiv"><\/div>
                <div id="mapexample"><\/div>
                <div id="missionmap" style="max-width:1220px; overflow-y:scroll; overscroll-behavior-y:contain; border:1px #ffffff99 solid;"><\/div>
                <div id="spotsign"><\/div>
                <div id="teleportshow" style="max-width:1222px;"><\/div>
                <div id="buildingshow" style="max-width:1222px;"><\/div>
                <div id="missionshow" style="max-width:1222px;"><\/div>
                <div id="enemychose"><\/div>
                <div id="teammadediv" style="max-width:1220px; border:1px #e0e0e0 solid; padding:5px; margin:5px 0px;"><\/div>
                <div id="teamexistdiv" style="max-width:1222px;"><\/div>
                <div id="enemyshow" style="max-width:1222px;"><\/div>
                <div id="enemyposition" style="overflow-x:scroll; width:1222px;"><\/div>
                <div id="otherthing"><\/div>
                <div id="downloaddraw"><\/div>`;

    $("#thisdiv").html(output);

    var text = `<br><br><br><div style="padding:8px 10px; width:1212px; background-color:#222; font-weight:300;">
            <div style="margin:5px; font-size:120%; font-weight:800; position:relative; left:-8px;">ʹ��˵����<\/div>
            ��ս��ѡ�񡿣�ս��(�)���½�(�ؿ�)����ͼ(�ֲ�)������(�ֿ�)�����õ�ͼ���ڶ��ʱ����֡���ͼ���͡����򡱵�ѡ���<br><br>

            �����ش�ͼ�����Ե�ǰ���Ƶĵ�ͼΪ׼���ɱ����Ŵ�4800 x 2700�������ص������Ĭ�ϵ�ַ<br>
            ����ԭ��ͼ���������ק�����ŵĲ�����Ϣ����ԭ��ͼ�������״̬<br>
            �����ص�ͼ���������Ƶ�ͼ����<br>
            ����ʾͼ������չʾ��ͬ�����·����ICON������ĺ���<br><br>

            �����ˡ�����ʱ���ڻ��Ƶ�ͼ��չʾ��·������ڵĵ��˵Ķӳ����ƺ�Ч��<br>
            ������������ʱ���ڻ��Ƶ�ͼ��չʾ��·������ڵĽ���������<br>
            �����͡�����ʱ���ڻ��Ƶ�ͼ��չʾ��·���������<br>
            ����ɫ������ʱ���ڻ��Ƶ�ͼ��չʾ��·����Ĺ���<br>
            ����š�����ʱ���ڻ��Ƶ�ͼ��չʾ��·����ı��<br>
            ���߼������򿪣��ҡ���λ��ǡ��򿪣����ڵз��ݶӱ��������һ�е���ʱ���ڻ��Ƶ�ͼ��չʾ�����ж��߼�<br><br>

            ��������񡿣���ʱ������ͼ�ڴ��ڽ��������Ե���������ʽչʾ��������Ϣ���������һ�л��Զ��򿪡���λ��ǡ����б��<br>
            �����ͱ�񡿣���ʱ������ͼ�ڴ����Զ����͵㣬���Ե���������ʽչʾ���͵����Ϣ���������һ�л��Զ��򿪡���λ��ǡ����б��<br>
            ����λ��ǡ�����ʱ����פ��ʾ�ĸ�·�����ŵ�����������ź������ػ桿������Ӧ�Ļ��Ƶ�ͼ��·���������Ӧ����ɫ���ɹرա���ɫ������Ѱ�ұ�ǵ�·����<br>
            ��ͬ��ѵ�������ʱ��ȡ����ʾ�з��ݶӵ�վλ��Ϣ����ͬ��ĵз��ݶӽ��кϲ���ͬʱ��ʾ�����ڵ�����<br><br>

            ���з��ݶӡ���������λ��ǡ���ʱ�����ڵз��ݶӱ����һ�н��б�ǣ������˵��ж��߼�Ϊ��Ѳ�ߡ��򡰾��䡱�ҡ��߼�����ʱ���ڻ��Ƶ�ͼ��չʾ�����ж��߼�<br>
            ������ѡ�񡿣����ڵз��ݶӱ��ѡ���ݶ��⣬Ҳ���ڴ˴�ѡ����Ҫ�鿴���ݶӣ�����������������Ӧ�ı��<br><br>

            �����ڵص㡿���״�ʹ����Ҫ����һ�������ң���ʱ���ڡ�����ѡ���и��ĵ����ݶӱ�Ż����·��ı����չʾ���ڸñ�ŵ��˵Ĺؿ�<br>
            ����ɲ�ѯ������ʱ���ҡ����ڵص㡿�򿪣�ѡ�������ɲ��������ѯ��������һ��ʱ��󣬽����·��ı����չʾ���ڸ���ɵĵ��˼��������ؿ�<br><\/div>
            <div style="padding:8px 10px; margin:10px 0px; width:1212px; background-color:#222; font-weight:300;">
            <div style="margin:5px; font-size:120%; font-weight:800; position:relative; left:-8px;">�����ο���<\/div>
            1 . �����ղ��<a class="external text" style="color:#eaeaea;" href="https://bbs.nga.cn/read.php?tid=14769876">��Ѫ��̬�۲��ּ� V1.0<\/a>��2018��08��16�ո��¡�<br>
            2 . CCX_CX_D��<a class="external text" style="color:#eaeaea;" href="https://gf.hometehomete.com/zh/maps/">��Ůǰ��������վ<\/a>��2020��02��27�ո��¡�<br>
            3 . pohcy��<a class="external text" style="color:#eaeaea;" href="https://ngabbs.com/read.php?tid=19587014">������ս��ģ��<\/a>��2019��12��10�ո��¡�<br><\/div>`;

    $("#otherthing").html(text);
}
