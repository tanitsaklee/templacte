Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
    return this;
}

function AjaxWebService(webMethod, data) {
    var _tmp;
    $.ajax({
        async: false
        , type: "POST"
        , url: webMethod
        , contentType: "application/json; charset=utf-8"
        , dataType: "json"
        , data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}"
        , success: function (response) {
            _tmp = response.d
        }
        , error: function (xhr, status, msg) {
            var error = eval("(" + xhr.responseText + ")");
            console.log(error.Message);
            _tmp = null
        }
    });
    return _tmp;
}

function AjaxWebMVC(webMethod, data) {
    var _tmp;
    $.ajax({
        //        async: false
        //        , type: "POST"
        //        , url: webMethod
        //        , contentType: "application/json; charset=utf-8"
        //        , data: "{data:'" + JSON.stringify(data).replace(/'/g, "\\'\\'") + "'}"
        async: false
        , type: "POST"
        , data: "{data:" + data + "}"
        , url: webMethod
        , contentType: 'application/json; charset=utf-8'
        , dataType: 'json'
        , success: function (response) {
            _tmp = response.d
        }
        , error: function (xhr, status, msg) {
            var error = eval("(" + xhr.responseText + ")");
            console.log(error.Message);
            _tmp = null
        }
    });
    return _tmp;
}

function GetQueryStringParams(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0].toLowerCase() == sParam.toLowerCase()) {
            return sParameterName[1];
        }
    }
}


function FileExists(url) {
    if (url) {
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status == 200;
    } else {
        return false;
    }
}


function DateFormat(cvtValue) {

    var date = "";
    if (typeof (cvtValue) === "undefined" || cvtValue === null) {
        date = "-";
    }
    else {
        var dateString = cvtValue.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var date = day + "/" + month + "/" + year;
    }
    return date
        ;
}

function DateFormatSYear(cvtValue) {
    var date = "";
    if (typeof (cvtValue) === "undefined" || cvtValue === null) {
        date = "-";
    }
    else {
        var dateString = cvtValue.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var stryear = year.toString();
        var date = day + "/" + month + "/" + stryear.substr(2);
    }
    return date
        ;
}

function DateFormatYMD(cvtValue) {
    var date = "";
    if (typeof (cvtValue) === "undefined" || cvtValue === null) {
        date = "-";
    }
    else {
        var dateString = cvtValue.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var stryear = year.toString();
        var date = stryear + "-" + month + "-" + day;
    }
    return date
        ;
}

function DateFormatDashDate(cvtValue) {
    var date = "";
    if (typeof (cvtValue) === "undefined" || cvtValue === null) {
        date = "-";
    }
    else {
        var dateString = cvtValue.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var stryear = year.toString();
        var date = day + "-" + month + "-" + stryear.substr(2);
    }
    return date
        ;
}

function DateFormatDash2Date(cvtValue) {
    var date = "";
    if (typeof (cvtValue) === "undefined" || cvtValue === null) {
        date = "-";
    }
    else {
        var dateString = cvtValue.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var stryear = year.toString();
        var date = (day < 10 ? ("0" + day) : day) + "-" + (month < 10 ? ("0" + month) : month) + "-" + stryear.substr(2);
    }
    return date
        ;
}

function DayFormat(cvtValue) {
    var dateString = cvtValue.substr(6);
    var currentTime = new Date(parseInt(dateString));
    var day = currentTime.getDate();
    return day;
}

function MonthFormat(cvtValue) {
    var dateString = cvtValue.substr(6);
    var currentTime = new Date(parseInt(dateString));
    var month = currentTime.getMonth() + 1;
    return month;
}

function YearFormat(cvtValue) {
    var dateString = cvtValue.substr(6);
    var currentTime = new Date(parseInt(dateString));
    var year = currentTime.getFullYear();
    return year;
}

function DateTimeNow() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var output =
    (('' + day).length < 2 ? '0' : '') + day + '-' +
    (('' + month).length < 2 ? '0' : '') + month + '-' +
    d.getFullYear() + ' ' +
    (('' + hour).length < 2 ? '0' : '') + hour + ':' +
    (('' + minute).length < 2 ? '0' : '') + minute + ':' +
    (('' + second).length < 2 ? '0' : '') + second;
    return output;
}

function DrawChart(chartName, chartType, data) {

    var title = data.title;
    var xaxisLabel = data.xaxisLabel;
    var yaxisLabel = data.yaxisLabel;
    var seriesLabels = data.seriesLabels;
    var seriesValues = data.seriesValues;

    for (var i = 0; i < seriesValues.length; i++) {
        for (var j = 0; j < seriesValues[i].length; j++) {
            seriesValues[i][j][0] = seriesValues[i][j][0];
            seriesValues[i][j][1] = parseFloat(seriesValues[i][j][1]);
        }
    }

    var defultOptions = {
        title: title,
        stackSeries: false,
        animate: true,
        animateReplot: true,
        animation: {
            duration: 1
        },
        axesDefaults: {
            labelRenderer: $jq164.jqplot.CanvasAxisLabelRenderer,
            tickRenderer: $jq164.jqplot.CanvasAxisTickRenderer,
            tickOptions: {
                angle: 0
            }
        },
        axes: {
            xaxis: {
                label: xaxisLabel,
                tickOptions: {
                    angle: 0,
                    formatString: "%'d"
                }
            },
            yaxis: {
                label: yaxisLabel,
                labelRenderer: $jq164.jqplot.CanvasAxisLabelRenderer,
                tickRenderer: $jq164.jqplot.CanvasAxisTickRenderer,
                tickOptions: {
                    angle: 0,
                    formatString: "%'d"
                }
            },
            x2axis: {},
            y2axis: {}
        },
        cursor: {},
        dragable: {},
        highlighter: {},
        grid: {
            drawBorder: false,
            drawGridLines: true,
            gridLineColor: '#F3F3F3',
            background: '#FCFCFC',
            borderColor: '#DDDDDD',
            borderWidth: 1,
            shadow: false
        },
        legend: {
            show: true,
            location: 's',
            placement: 'outsideGrid',
            renderer: $jq164.jqplot.EnhancedLegendRenderer,
            rendererOptions: {
                numberRows: 1
            }
        },
        series: [{
            lineWidth: 0.5
        }],
        series: seriesLabels,
        seriesColors: ["#6BCCB4", "#63D3E9", "#FFD66A", "#ED5466", "#AC92ED", "#CCCCCC", "#7CA951", "#446CB3", "#FCBF1A", "#DD1E32", "#8F44AD", "#666666"],
        seriesDefaults: {
            lineWidth: 2,
            pointLabels: {
                show: false
            },
            markerOptions: {
                size: 6,
                style: 'circle'
            },
            rendererOptions: {
                animation: {
                    speed: 1400
                }
            },
            showDataLabels: true
        }
    };
    var myOptions = $.extend(true, {}, defultOptions);
    var type = "bar,filled,line,stack";
    if (type.indexOf(chartType) > -1) {
        //seriesValues = [
        //    [["a", 9], ["b", 1], ["c", 26], ["d", 62]]
        //    ,
        //    [["a", 28], ["b", 72], ["c", 42], ["d", 72]]
        //];
        myOptions.axes.xaxis.labelRenderer = $jq164.jqplot.CanvasAxisLabelRenderer;
        myOptions.axes.xaxis.renderer = $jq164.jqplot.CategoryAxisRenderer;
        myOptions.axes.xaxis.tickRenderer = $jq164.jqplot.CanvasAxisTickRenderer;
        myOptions.axes.xaxis.tickOptions.formatString = "%'d";
        myOptions.axes.yaxis.labelRenderer = $jq164.jqplot.CanvasAxisLabelRenderer;
        myOptions.axes.yaxis.tickRenderer = $jq164.jqplot.CanvasAxisTickRenderer;
        myOptions.axes.yaxis.tickOptions.formatString = "%'d";
        myOptions.cursor.show = true;
        myOptions.cursor.followMouse = false;
        myOptions.highlighter.tooltipContentEditor = DrawChartCustomTooltip;
        myOptions.highlighter.sizeAdjust = 10
        switch (chartType) {
            case 'bar':
                {
                    myOptions.highlighter.show = false;
                    myOptions.seriesDefaults.renderer = $jq164.jqplot.BarRenderer;
                } break;
            case 'filled':
                {
                    //seriesValues = [
                    //    [[1, 9], [2, 1], [3, 26], [4, 62]]
                    //    ,
                    //    [[1, 28], [2, 72], [3, 42], [4, 72]]
                    //];
                    myOptions.stackSeries = true;
                    myOptions.seriesDefaults.fill = true;
                } break;
            case 'line':
                {
                    myOptions.highlighter.show = true;
                } break;
            case 'stack':
                {
                    myOptions.stackSeries = true;
                    myOptions.highlighter.show = false;
                    myOptions.seriesDefaults.renderer = $jq164.jqplot.BarRenderer;
                } break;
        }
    }
    else {
        if (chartType == "bubble") {
            //seriesValues = [[
            //    [11, 123, 1236, "a"], [45, 92, 1067, "b"], [24, 104, 1176, "c"], [50, 23, 610, "d"]
            //]];
            myOptions.seriesDefaults.renderer = $jq164.jqplot.BubbleRenderer;
            myOptions.seriesDefaults.rendererOptions.bubbleAlpha = 0.8;
            myOptions.seriesDefaults.rendererOptions.highlightAlpha = 0.8;
            myOptions.seriesDefaults.shadow = true;
            myOptions.seriesDefaults.shadowAlpha = 0.05;
        }
        else if (chartType == "donut") {
            //seriesValues = [
            //    [['a', 6], ['b', 8], ['c', 14], ['d', 20]]
            //    ,
            //    [['a', 8], ['b', 12], ['c', 6], ['d', 9]]
            //];
            myOptions.seriesDefaults.renderer = $jq164.jqplot.DonutRenderer;
            myOptions.seriesDefaults.rendererOptions.sliceMargin = 3;
            myOptions.seriesDefaults.rendererOptions.showDataLabels = true;
        }
        else if (chartType == "pie") {
            //var seriesValues = [[
            //    ['a', 12], ['b', 9], ['c', 14], ['d', 16]
            //    ,
            //    ['a', 4], ['b', 13], ['c', 16], ['d', 7]
            //]];
            myOptions.seriesDefaults.renderer = $jq164.jqplot.PieRenderer;
            myOptions.seriesDefaults.rendererOptions.sliceMargin = 3;
            myOptions.seriesDefaults.rendererOptions.showDataLabels = true;
        }
        else if (chartType == "meter") {
            //var seriesValues = [[4554]];
            //var ticks = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
            //var intervals = [3000, 6000, 7000];
            myOptions.seriesDefaults.renderer = $jq164.jqplot.MeterGaugeRenderer;
            myOptions.seriesDefaults.rendererOptions.label = "Metric Tons per Year";
            myOptions.seriesDefaults.rendererOptions.labelPosition = "bottom";
            myOptions.seriesDefaults.rendererOptions.labelHeightAdjust = -5;
            myOptions.seriesDefaults.rendererOptions.intervalOuterRadius = 85;
            myOptions.seriesDefaults.rendererOptions.ticks = ticks;
            myOptions.seriesDefaults.rendererOptions.intervals = intervals;
            myOptions.seriesDefaults.rendererOptions.intervalColors = ["#6BCCB4", "#FFD66A", "#ED5466"];
            myOptions.seriesDefaults.rendererOptions.background = "#FFFFFF";
            myOptions.seriesDefaults.rendererOptions.smooth = true;
            myOptions.seriesDefaults.rendererOptions.animation.show = true;
        }
        else {
            alert("Chart Type Not Supported: " + chartType);
        }
    }

    var plot = $jq164.jqplot(chartName, seriesValues, myOptions);
}

function DrawChartCustomTooltip(str, seriesIndex, pointIndex, plot) {
    return plot.series[seriesIndex]["label"] + " of " + plot.data[seriesIndex][pointIndex];
}

function MergeTableCells(table, column) {

    var dimension_cells = new Array();
    var dimension_col = column + 1;

    var i = 1;
    $(table).find('th').each(function () {
        i++;
    });
    var first_instance = null;
    var rowspan = 1;
    $(table).find('tbody > tr').each(function () {
        var dimension_td = $(this).find('td:eq(' + column + '):nth-child(' + dimension_col + ')');
        if (first_instance == null) {
            first_instance = dimension_td;
        } else if (dimension_td.text() == first_instance.text()) {
            dimension_td.remove();
            ++rowspan;
            first_instance.attr('rowspan', rowspan);
        } else {
            first_instance = dimension_td;
            rowspan = 1;
        }
    });
}

function ScrollToElement(elem) {
    $('html, body').animate({ scrollTop: elem.offset().top - 40 }, 1200);
}

function UniqueList(data) {
    var UniqueList = [];
    $.each(data, function (i, el) {
        if ($.inArray(el, UniqueList) === -1) UniqueList.push(el);
    });
    return UniqueList.sort();
}

function AddCommas(text) {
    return text.value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function AddCommasToDecimal(text) {
    var val = text.value.replace(/,/g, '');
    if (val.indexOf('.') != -1) {
        var valBeforeDecimalPoint = GetValueBeforeDecimalPoint(val);
        var valAfterDecimalPoint = GetValueAfterDecimalPoint(val);
        val = valBeforeDecimalPoint.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + valAfterDecimalPoint;
    }
    else {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return val;
}

function RemoveCommas(text) {
    return val.value.replace(/,/g, '');
}

function GetValueBeforeDecimalPoint(text) {
    return text.split(".")[0];
}

function GetValueAfterDecimalPoint(text) {
    return text.split(".")[1];
}

function UrlParam(name) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0].toLowerCase() == name.toLowerCase()) {
            return sParameterName[1];
        }
    }
}

function ValidateColorRGB(text) {
    var data = $.trim(text);
    var regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;

    return regex.test(data);
}

function ValidateColorHex(text) {
    var data = $.trim(text);
    var regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;

    return regex.test(data);
}

function ValidateColorHexaDecimal(text) {
    var data = $.trim(text);
    var regex = /(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/gm;

    return regex.test(data);
}

function ValidateDomain(text, type) {
    var data = $.trim(text);
    var regex = /\S+/; // non-empty
    switch (type) {
        case "http": // match domain name (with HTTP)
            regex = /(.*?)[^w{3}\.]([a-zA-Z0-9]([a-zA-Z0-9\-]{0,65}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/igm;
        case "www": // match domain name (www. only)
            regex = /[^w{3}\.]([a-zA-Z0-9]([a-zA-Z0-9\-]{0,65}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/igm;
        case "alternative": // match domain name (alternative)
            regex = /(.*?)\.(com|net|org|info|coop|int|com\.au|co\.uk|org\.uk|ac\.uk|)/igm;
        case "sub": // match sub domains: www, dev, int, stage, int.travel, stage.travel
            regex = /(http:\/\/|https:\/\/)?(www\.|dev\.)?(int\.|stage\.)?(travel\.)?(.*)+?/igm;
    }

    return regex.test(text);
}

function ValidateEmpty(text) {
    var data = $.trim(text);
    var rex = /\S+/;

    return regex.test(data);
}

function ValidateEmail(text) {
    var data = $.trim(text);
    var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return regex.test(data);
}

function ValidateIDCard(text) {
    var data = $.trim(text);
    if (data.length != 13) {
        return false;
    }
    else {
        for (i = 0, sum = 0; i < 12; i++) {
            sum += parseFloat(data.charAt(i)) * (13 - i);
        }
        if ((11 - sum % 11) % 10 != parseFloat(data.charAt(12))) {
            return false;
        }
        else {
            return true;
        }
    }
}

function ValidateImages(text) {
    var data = $.trim(text);
    var regex = /([^\s]+(?=\.(jpg|gif|png))\.\2)/gm;

    return regex.test(data);
}

function ValidateLength(text, minLength, maxLength) {
    var data = $.trim(text).length;
    return ((data >= minLength) && (data <= maxLength)) ? true : false;
}

function ValidateMobile(text) {
    var data = $.trim(text);
    var regex = /^(08|09)[0-9]{8}$/;
    return regex.test(data);
}

function ValidateVehicleNumber(text) {
    var data = $.trim(text);
    var regex = (/^[1-9]{1}[ก-ฮ]{2}(([1-9]{1}[0-9]{0,3})|([1-9]{1}[0-9]{0,3})|( {1}[1-9]{1}[0-9]{0,3}))$/) | (/^[ก-ฮ]{2}(([1-9]{1}[0-9]{0,3})|([1-9]{1}[0-9]{0,3})|( {1}[1-9]{1}[0-9]{0,3}))$/);
    return regex.test(data);
}

function AllowKeyNum(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!(key >= 48 && key < 58 || key == 8 || key == 9 || key == 0 || key == undefined))
        event.preventDefault();
}

function AllowKeyEn(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!((key > 64 && key < 91) || (key > 96 && key < 123) || key == 32 || key == 8 || key == 9 || key == 46 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined))
        event.preventDefault();
}

function AllowKeyEnAndNum(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!(((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 45 || key == 46 || key == 64 || key == 95 || key == 32 || key == 8 || key == 9 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined))
        event.preventDefault();
}

function AllowKeyEnAndNumAndSing(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!(((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 45 || key == 46 || key == 47 || key == 64 || key == 95 || key == 32 || key == 8 || key == 9 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined))
        event.preventDefault();
}

function AllowKeyTh(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!((key >= 3585) || (key == 32) || key == 8 || key == 9 || key == 0 || key == undefined))
        event.preventDefault();
}

function AllowKeyThAndNum(elem, event) {

    if (!event) var event = window.event;
    var key = event.keyCode ? event.keyCode : event.which;

    if (!((key >= 3585) || (key == 32) || (key >= 48 && key < 58) || (key == 32) || key == 8 || key == 9 || key == 0 || key == undefined))
        event.preventDefault();
}

function AllowInt(elem, event) {
    var val = elem.value.replace(/[^\d].+/, "");
    if ((event.which != 45)
            && (event.which < 48 || event.which > 57)
            && (event.ctrlKey != true && event.which != 99)
            && (event.ctrlKey != true && event.which != 118)
            && (event.ctrlKey != true && event.which != 120)) {
        if (($.inArray(event.keyCode, [46, 8, 9, 27, 13]) !== -1
            || (event.keyCode >= 35 && event.keyCode <= 39)) != true) {
            event.preventDefault();
        }
    }
    else {
        if (event.which == 45 && elem.value.length != 0) {
            event.preventDefault();
        }
    }
}

function AllowDecimal(elem, event) {
    var val = elem.value.replace(/^\s*(\+|-)?[^0-9]/g, "");
    if (((event.which != 45 && event.which != 46) || val.indexOf('.') != -1)
        && (event.which < 48 || event.which > 57)
        && (event.ctrlKey != true && event.which != 99)
        && (event.ctrlKey != true && event.which != 118)
        && (event.ctrlKey != true && event.which != 120)) {
        if (($.inArray(event.keyCode, [46, 8, 9, 27, 13]) !== -1 || (event.keyCode >= 35 && event.keyCode <= 39)) != true) {
            event.preventDefault();
        }
    }
    else {
        if (event.which == 45 && elem.value.length != 0) {
            event.preventDefault();
        }
        if (val.indexOf('.') != -1 && GetValueAfterDecimalPoint(val).length > 1) {
            event.preventDefault();
        }
    }
}

function AddMonth(date, number) {
    var tmpDate = date.setMonth(date.getMonth() + number);
    var resultDateAddMonth = new Date(tmpDate);
    return resultDateAddMonth;
}

function LastDayOfMonth(date) {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var tmpDate = firstDay.setDate(firstDay.getDate() - 1);
    var resultLastDayOfMonth = new Date(tmpDate);
    return resultLastDayOfMonth;
}

function IsnullEmpty(str) {
    if (str === "" || str === '' || str === 0 || str === null || str === undefined) {
        return true;
    }
    else {
        return false;
    }
}

function Chknull(str) {
    if (str === "" || str === '' || str === 0 || str === null || str === undefined) {
        return "";
    }
    else {
        return str;
    }
}

function Chknull2(str, rstr) {
    if (str === "" || str === '' || str === 0 || str === null || str === undefined) {
        return rstr;
    }
    else {
        return str;
    }
}

function CallDateZ(startdate, enddate) {
    var days = 0;
    if (startdate != "" && enddate != "") {
        days = (enddate - startdate) / 1000 / 60 / 60 / 24;
    }
    //return days + 1;
    return days;
}

function CallMonthZ(fromDate, toDate) {
    var fromDate = fromDate;
    var toDate = toDate;
    toDate = addDays(toDate, 30);
    var d1Y = fromDate.getFullYear();
    var d2Y = toDate.getFullYear();
    var d1M = fromDate.getMonth();
    var d2M = toDate.getMonth();

    return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
}

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function DMYToDate(DMY, Sign) {
    arrDMY = DMY.split(Sign);
    return new Date(arrDMY[2], arrDMY[1] - 1, arrDMY[0]);
}

function convertToJSONDate(date) {
    var dt = date;
    var newDate = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()));
    return '/Date(' + newDate.getTime() + ')/';
}

function remcomma(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num) || num == "") {
        num = "0";
    }
    return (num);
}

function incommaJ(value) {
    var num;
    value = remcomma(value);
    num = parseInt(value).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    if (num == 0) {
        num = "";
    }
    return (num);
}

function incommaSumFloat(value) {
    var num;
    value = remcomma(value);
    num = parseFloat(value).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    if (num == 0) {
        num = "";
    }
    return (num);
}
//#region key_event
function num_key(e) {
    if (!e) var e = window.event;
    var key = e.keyCode ? e.keyCode : e.which;

    if (key >= 48 && key < 58 || key == 8 || key == 9 || key == 0 || key == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}

function en_key(e, o) {
    if (!e) var e = window.event;
    var key = e.keyCode ? e.keyCode : e.which;

    if ((key > 64 && key < 91) || (key > 96 && key < 123) || key == 32 || key == 8 || key == 9 || key == 46 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined) {
        $('span.change-lang ').remove(); return (true);
    }
    else {
        $('span.change-lang ').remove(); $('#' + o).after("<span class='change-lang '>กรุณากรอกภาษาอังกฤษ</span"); return (false);
    }
}

function en_num_key(e) {
    if (!e) var e = window.event;
    var key = e.keyCode ? e.keyCode : e.which;

    if (((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 45 || key == 46 || key == 64 || key == 95 || key == 32 || key == 8 || key == 9 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}

function en_num_sign_key(e) {
    if (!e) var e = window.event;
    var key = e.keyCode ? e.keyCode : e.which;
    if (((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 45 || key == 46 || key == 47 || key == 64 || key == 95 || key == 32 || key == 8 || key == 9 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}

function email_key(e) {
    if (!e) var e = window.event;
    var key = e.keyCode ? e.keyCode : e.which;

    if (((key > 64 && key < 91) || (key > 96 && key < 123)) || (key > 47 && key < 58) || key == 64 || key == 95 || key == 13 || key == 45 || key == 46 || key == 8 || key == 9 || (key >= 35 && key <= 40) || (key >= 112 && key <= 123) || key == 3653 || key == undefined) {
        return (true);
    }
    else {
        return (false);
    }
}

function th_key(e, o) {
    if (!e) var e = windows.event;

    var key = e.keyCode ? e.keyCode : e.which;
    if ((key >= 3585) || (key == 32) || key == 8 || key == 9 || key == 0 || key == undefined)
    { $('span.change-lang ').remove(); return true; }
    else
    { $('span.change-lang ').remove(); $('#' + o).after("<span class='change-lang '>กรุณากรอกภาษาไทย</span"); return false; }
}

function num_key_and_th_key(e, o) {
    if (!e) var e = windows.event;

    var key = e.keyCode ? e.keyCode : e.which;
    if ((key >= 3585) || (key == 32) || (key >= 48 && key < 58) || (key == 32) || key == 8 || key == 9 || key == 0 || key == undefined)
    { $('span.change-lang ').remove(); return true; }
    else
    { $('span.change-lang ').remove(); $('#' + o).after("<span class='change-lang '>กรุณากรอกภาษาไทย</span"); return false; }
}
//#endregion key_event

function formatJsonDateTime(jsonDate) {
    if (jsonDate == null) {
        return "";
    }
    else {
        var x = [{ "id": 1, "start": jsonDate }, { "id": 2, "start": jsonDate}];

        var currentDateTime = new Date(parseInt(x[0].start.match(/\d+/)[0]));

        var month = "0" + (currentDateTime.getMonth() + 1);
        var day = "0" + currentDateTime.getDate();
        var year = currentDateTime.getFullYear();
        var hour = "0" + currentDateTime.getHours();
        var minute = "0" + currentDateTime.getMinutes();

        var datetime = day.substr(day.length - 2) + "/" + month.substr(month.length - 2) + "/" + year + " " + hour.substr(hour.length - 2) + ":" + minute.substr(minute.length - 2);

        return datetime;
    }
};

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
};

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function DateDiffByJS(strDate1, strDate2) {
    var date1 = new Date(strDate1);
    var date2 = new Date(strDate2);

    var one_day = 1000 * 60 * 60 * 24;
    var defDate = (date2.getTime() - date1.getTime()) / one_day

    return defDate;
}


function changeFormateDate(str1) {
    var cutstr = "";
    var formateDate = "";
    cutstr = str1.split("/");
    formateDate = cutstr[1] + "/" + cutstr[0] + "/" + cutstr[2];
    return formateDate;
}