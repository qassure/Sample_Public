// gentrack.js

// newFunction
function findTabLink(_actionName) {
	if(_actionName=='Summary')
	{
		document.forms[0].action="/gentrack/bodyframeSummary.do";
	}
	else if(_actionName=='BKGDetails')
	{
		document.forms[0].action="/gentrack/bodyframeBKGDetail.do";
	}
	else if(_actionName=='BLClearance')
	{
		document.forms[0].action="/gentrack/bodyframeClearance.do";
	}
	else if(_actionName=='Hazmat')	
	{
		document.forms[0].action="/gentrack/bodyframeHazmat.do";
	}
	else if(_actionName=='Routing')
	{
		document.forms[0].action="/gentrack/bodyframeRouting.do";
	}
	else if(_actionName=='BLDetails')
	{
		document.forms[0].action="/gentrack/bodyframeBLDetail.do";
	}			
	//START: Kintana#365614
	else if(_actionName=='ReeferContainerTemp')
	{
		document.forms[0].action="/gentrack/reeferTempSummary.do";
	}			
	//END: Kintana#365614

	document.forms[0].target="_self";
	document.forms[0].submit();	
}

function largeframespopup(mylink) {
	if (! window.focus)return true;
	window.open(mylink, 'largeframespopup', 'location=yes,resizable=yes,scrollbars=yes,width=650,height=450,top=50,left=50');
	//return true;
}

function findPreviewTabLink(_url,_actionName) {
	if(_actionName=='Summary')
	{
		largeframespopup(_url + '/tracking/html/preview_summary.html')
	}
	else if(_actionName=='BKGDetails')
	{
		largeframespopup(_url + '/tracking/html/preview_booking.html')
	}
	else if(_actionName=='BLClearance')
	{
		largeframespopup(_url + '/tracking/html/preview_clear.html')
	}
	else if(_actionName=='Hazmat')	
	{
		largeframespopup(_url + '/tracking/html/preview_hazmat.html')
	}
	else if(_actionName=='Routing')
	{
		largeframespopup(_url + '/tracking/html/preview_routing.html')
	}
	else if(_actionName=='BLDetails')
	{
		largeframespopup(_url + '/tracking/html/preview_bl.html')
	}			
}

function findpopupTabLink(_actionName) {

	if(_actionName=='Summary')
	{
		document.forms[2].action="/gentrack/blSummaryPopup.do";
	}
	else if(_actionName=='BKGDetails')
	{
		document.forms[2].action="/gentrack/blBKGDetailPopup.do";
	}
	else if(_actionName=='BLClearance')
	{
		document.forms[2].action="/gentrack/blClearancePopup.do";
	}
	else if(_actionName=='Hazmat')	
	{
		document.forms[2].action="/gentrack/blHazmatPopup.do";
	}
	else if(_actionName=='Routing')
	{
		document.forms[2].action="/gentrack/blRoutingPopup.do";
	}
	else if(_actionName=='BLDetails')
	{
		document.forms[2].action="/gentrack/blBLDetailPopup.do";
	}			
	//START: Kintana#365614
	else if(_actionName=='ReeferContainerTemp')
	{
		document.forms[2].action="/gentrack/reeferTempSummary.do";
	}			
	//END: Kintana#365614

	
	document.forms[2].target="_parent";
	document.forms[2].submit();	
}

function findCNTRLink(_cntrNbr) {
	document.forms[0].cntrNbr.value=_cntrNbr;
	document.forms[0].action="/gentrack/containerTracking.do";
	document.forms[0].target="_parent";
	document.forms[0].submit();	
}

function findBLLink(_blNbr) {
	document.forms[0].blNbr.value=_blNbr;
	document.forms[0].action="/gentrack/blSummary.do";
	document.forms[0].target="_parent";
	document.forms[0].submit();	
}

function findUnsecuredBLLink(_blNbr) {
	document.forms[0].blNbr.value=_blNbr;
	document.forms[0].action="/gentrack/blRouting.do";
	document.forms[0].target="_parent";
	document.forms[0].submit();	
}

function storeSelectedRowInfo(selectedCtrNbr){
	document.getElementById('cntrNumber').value = selectedCtrNbr;
	document.getElementById('selectedCntrNumber').value = selectedCtrNbr;
	

	//var formattedGMTDate = getGMTDate();
	
	var startDate = document.getElementById('blStartDate').value;
	var endDate = document.getElementById('blEndDate').value;
		
	document.getElementById('selectedFromDate').value = startDate;
	document.getElementById('selectedToDate').value = endDate;
	document.getElementById('fromDate').value = startDate;
	document.getElementById('toDate').value = endDate;
}

function getGMTDate(){
	var currentGMTDate = calcGMTTime(); 
	
	var dayComponent = currentGMTDate.getDate()+"";
	var monthComponent = currentGMTDate.getMonth()+1+"";
	//IEMigration Changes: STARTS
	//var yearComponent = currentGMTDate.getYear();
	var yearComponent = currentGMTDate.getFullYear();
	//IEMigration Changes: ENDS
	
	if(dayComponent.length < 2){
		dayComponent = "0" + dayComponent;
	}

	if(monthComponent.length < 2){
		monthComponent = "0" + monthComponent;
	}

	var formattedGMTDate = dayComponent + "/" + monthComponent + "/" + yearComponent;

	return formattedGMTDate;
}

function exportData(){
	var selectedBlNbr = document.getElementById('blNbr').value;
	var selectedCntrNumber = document.getElementById('selectedCntrNumber').value;
	var selectedFromDate = document.getElementById('selectedFromDate').value;
	var selectedToDate = document.getElementById('selectedToDate').value;
	var calculatedStartDate = document.getElementById('calculatedStartDate').value;
	var calculatedEndDate = document.getElementById('calculatedEndDate').value;
	
	var exportTypes = document.getElementsByName('exportType');
	var exportType = '';
	
	for(var i=0; i<exportTypes.length;i++){ if(exportTypes[i].checked){exportType = exportTypes[i].value}}
		
	if(exportType == ''){
		alert('Please select the option for download');
		return false;
	}else if(exportType == 'TEMPGRAPH'){
		if(!checkAllowedDateSpan(selectedFromDate, selectedToDate, calculatedStartDate, calculatedEndDate)){
			return false;
		}
	}
	
	//do url-encoding for the forward-slash present in the dates
	selectedFromDate = selectedFromDate.replace(/\//g, "x1x");
	selectedToDate = selectedToDate.replace(/\//g, "x1x");
	
	var popupUrl = "/gentrack/reeferTempTrackingExcel.do?blNbr="+selectedBlNbr+"&selectedCntrNumber="+selectedCntrNumber+"&selectedFromDate="+selectedFromDate+"&selectedToDate="+selectedToDate+"&exportType="+exportType;
//	var winHandle = window.open(popupUrl,'',"location=0,status=0,scrollbars=0,width=0,height=0");
	var reportForm = document.getElementById('reeferTempTrackForm');
	reportForm.target="_self";
	reportForm.action=popupUrl;
	reportForm.submit();
}

function checkAllowedDateSpan(selectedFromDate, selectedToDate, calculatedStartDate, calculatedEndDate){

	var selFromDate = selectedFromDate.substring(3,5)+'/'+selectedFromDate.substring(0,2)+'/'+selectedFromDate.substring(6)+' 00:00 GMT';
	var selToDate = selectedToDate.substring(3,5)+'/'+selectedToDate.substring(0,2)+'/'+selectedToDate.substring(6)+' 23:59 GMT';
	
	//alert('selFromDate='+selFromDate+"-->"+'selToDate='+selToDate+"-->"+'calcFromDate='+calculatedStartDate+"-->"+'calcToDate='+calculatedEndDate);
	
	selFromDate = Date.parse(selFromDate);
	selToDate = Date.parse(selToDate);
	var calcFromDate = Date.parse(calculatedStartDate);
	var calcToDate = Date.parse(calculatedEndDate);

	//alert('selFromDate='+selFromDate+"-->"+'selToDate='+selToDate+"-->"+'calcFromDate='+calcFromDate+"-->"+'calcToDate='+calcToDate);

	selFromDate = new Date(selFromDate);
	selToDate = new Date(selToDate);
	calcFromDate = new Date(calcFromDate);
	calcToDate = new Date(calcToDate);
	
	//alert('selFromDate='+selFromDate+"-->"+'selToDate='+selToDate+"-->"+'calcFromDate='+calcFromDate+"-->"+'calcToDate='+calcToDate);
	
	calcFromDate.setUTCMilliseconds(calcFromDate.getUTCMilliseconds()-2592000000);//2592000000=30*24*60*60*1000
	calcToDate.setUTCMilliseconds(calcToDate.getUTCMilliseconds()+2592000000);//2592000000=30*24*60*60*1000
	
	//alert('selFromDate='+selFromDate+"-->"+'selToDate='+selToDate+"-->"+'calcFromDate='+calcFromDate+"-->"+'calcToDate='+calcToDate);
		
	if((selFromDate.getTime() < calcFromDate.getTime()) || (selToDate.getTime() > calcToDate.getTime())){
		//var tempFromDate = calcFromDate.getUTCDate()+'/'+(calcFromDate.getUTCMonth()+1)+'/'+calcFromDate.getUTCFullYear();
		//var tempToDate = calcToDate.getUTCDate()+'/'+(calcToDate.getUTCMonth()+1)+'/'+calcToDate.getUTCFullYear();
		
		alert('The search dates for the temperature data has exceeded 30 days from the shipment routing dates. Please select another date, click on Search button and download the graph again.');
		
		return false;
	}else{
		return true;
	}
}
function paginate(linkClicked){
	document.getElementById('linkClicked').value = linkClicked;
	document.getElementById('cntrNumber').value = document.getElementById('selectedCntrNumber').value;
	document.getElementById('fromDate').value = document.getElementById('selectedFromDate').value;
	document.getElementById('toDate').value = document.getElementById('selectedToDate').value;

	var searchForm = document.getElementById('reeferTempTrackForm');
	searchForm.action = '/gentrack/reeferTempTracking.do';
	searchForm.submit();

}

function setSearchParams(){

	var cntrDropDown = document.getElementById('cntrNumber');
	if(cntrDropDown != null && (cntrDropDown.value == null || cntrDropDown.value == "") ){
		alert("Please select the Containers for Temperature details.");
		return false;
	}
	
	var fromDateObj = document.getElementById('fromDate');

	if(fromDateObj.value == null || fromDateObj.value == ""){
		alert("Please select a valid date range.");
		return false;
	}
	
	var toDateObj = document.getElementById('toDate');

	if(toDateObj.value == null || toDateObj.value == ""){
		alert("Please select a valid date range.");
		return false;
	}

    //check if the entered date is valid
    if(!isValidDate(fromDateObj.value,"Date From")||!isValidDate(toDateObj.value,"To"))   {
            return false;
    }

    // Check if ETA From Date is greater than the TO Date
    if(returnDate(fromDateObj.value, "dd/MM/yyyy") > returnDate(toDateObj.value, "dd/MM/yyyy")){
        alert("From Date cannot be greater than To Date.");
        return false;
    }

	document.getElementById('linkClicked').value = "";
	document.getElementById('pageNumber').value = "1";
	document.getElementById('totalRecordCount').value = "";

	document.getElementById('selectedCntrNumber').value = document.getElementById('cntrNumber').value;
	document.getElementById('selectedFromDate').value = document.getElementById('fromDate').value;
	document.getElementById('selectedToDate').value = document.getElementById('toDate').value;

	var searchForm = document.getElementById('reeferTempTrackForm');
	searchForm.action = '/gentrack/reeferTempTracking.do';
	searchForm.submit();
	
	return true;
}


function calcGMTTime() {

    // create Date object for current location
    var date = new Date();
   
    //get offset of local timezone
    var offset = date.getTimezoneOffset() * 60000;
    	
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = date.getTime() + offset;
   
    // create new Date object for different city
    // using supplied offset
    gmtdate = new Date(utc);
   
    // return time as a string
    return gmtdate;

}

function returnDate(strDate, dateFormat){

	if("dd/MM/yyyy" == dateFormat){
	    var strDay = strDate.substring(0,2);
	    var strMonth = strDate.substring(3,5);
	    strMonth=strMonth-1;
	    var strYear=strDate.substring(6,10);
	    return (new Date(strYear,strMonth,strDay));
	} else {
	    var endIndex=strDate.indexOf('/');
	    var strMonth=strDate.substring(0,endIndex);
	    strMonth=strMonth-1;
	    strDate=strDate.substring(endIndex+1);
	    endIndex=strDate.indexOf('/');
	    var strDay=strDate.substring(0,endIndex);
	    var strYear=strDate.substring(endIndex+1);
	    return (new Date(strYear,strMonth,strDay));
	}
}

/*****************************************************************************
 *FunctionName      :isValidDate()
 *Description       :Check if the user entered date is valid
 *Returns           :Valid or Invalid flag
 *****************************************************************************/
 function isValidDate(htmlValue, fieldName)
{

  if(htmlValue.length > 0)
  {
    var dateFormat = /^(\d{2})(\/{1})(\d{2})(\/{1})(\d{4})$/;
    var strArray = htmlValue.match(dateFormat);
    if(strArray == null)
    {alert("Please enter a valid "+fieldName+" date in DD/MM/YYYY format.");
    return false;}
    var straTemp = htmlValue.split("/");
    intDay=parseInt(straTemp[0],10);    // Get the day part from the date string.
    intMonth=parseInt(straTemp[1],10);  // Get the month part from the date string.
    intYear=parseInt(straTemp[2],10);   // Get the year part from the date string.
    // Check for invalid months
    if ((intMonth == 0) || (intMonth > 12) )
   {
    alert("Please enter a valid month for "+fieldName+" filter condition.");
        return false;
   }

    // Check for invalid number of days.

    if ((intDay == 0) || (intDay > 31) )
    {
    alert("Please enter a valid date for "+fieldName+" filter condition.");
        return false;
    }

    // Check for invalid year.

    if (intYear == 0 )
    {
    alert("Please enter valid year starting from 0001 in "+fieldName+" filter condition.");
        return false;
    }

    // Check for number of days in a month.

    switch(intMonth)
    {
        // Check for number of days in February.
        case 2:
        {
            // check for leap year
            if((( (intYear) % 4 == 0 ) && ((intYear) %100 != 0 )) || ((intYear) % 400 == 0 ))
            {
                if(intDay > 29)
                {
            alert("Please enter a valid date for "+fieldName+" filter condition.");
                    return false;
                }
            }
            else
            {
                if(intDay > 28)
                {
            alert("Please enter a valid date for "+fieldName+" filter condition.");
                    return false;
                }
            }
        break;
        }

        {
            if(intDay > 30)
            {
            alert("Please enter a valid date for "+fieldName+" filter condition.");
                    return false;
            }
        }
    }
  }
  return true;
}
