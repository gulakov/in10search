window.addEventListener("keydown", onKeyDown, false);

window.addEventListener("mouseup", function(e){


    var s = getSelection()+"";

    if (s.length < 50 && s.length > 2)


            chrome.runtime.sendMessage({    action: 'word-key', selectionText: s}, function(res) { })





}, false);

function onKeyDown(e) {


    if (e.keyCode == 82 && e.altKey && e.ctrlKey  ){


            chrome.runtime.sendMessage({    action: 'read' }, function(res) { })


    }

 if (e.keyCode == 191 ){



            chrome.runtime.sendMessage({    action: 'word-key', selectionText: getSelection()+"" }, function(res) { })


    }


    //tab = search text shortcut
    if (e.keyCode == 9 && !e.altKey && !e.ctrlKey  ){







        /*
        //quit if pressing tab in input box
        var i = e.target;
        if (i instanceof HTMLImageElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i.textbox ||
            (i.textContent && i.textContent=='') || (i.ownerDocument && i.ownerDocument.designMode && i.ownerDocument.designMode.match(/on/i)) )
            return;

        var t = window.getSelection().toString();

        if (t.length > 0) {
            chrome.extension.sendMessage({
                type: "openTab",
                url: "http://www.google.com/search?q="+t
            });

        } else {
            //if already on google results page, then load first result
            if (document.location.host.match(/google/gi) && document.getElementsByClassName("g").length>0)
                document.location = document.getElementsByClassName("r")[0].getElementsByTagName("a")[0].href;
        }

        */
    }
}
