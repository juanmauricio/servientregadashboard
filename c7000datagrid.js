
var customStoreSQLMEM = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/c7000').done(function (data) {
            d.resolve(data, { totalCount: data.length });
            var enclosureName = data.EnclosureName;
            var c7000status = data.Status.Status;
            var c7000IDstatus = data.Status.InternalData;
            var c7000REDstatus = data.Status.Redundancy;
            var c7000OAstatus = data.Status.OnboardAdministrator;
            var c7000CSstatus = data.Status.CoolingSubsystem;

            document.getElementById("enclosureName").innerHTML = enclosureName;

            document.getElementById("statusC7000").innerHTML = c7000status;
            if (c7000status == "OK")
            {
              document.getElementById("iconC7000Class").className = "fa fa-thumbs-up fa-3x";
            }else {
              document.getElementById("iconC7000Class").className = "fa fa-thumbs-down fa-3x";
            };


            document.getElementById("c7000IDstatus").innerHTML = "Internal Data: " + c7000IDstatus;
            document.getElementById("c7000REDstatus").innerHTML = "Redundancy: " + c7000REDstatus;
            document.getElementById("c7000OAstatus").innerHTML = "Onboard Administrator: " + c7000OAstatus;
            document.getElementById("c7000CSstatus").innerHTML = "Cooling Subsystem: " + c7000CSstatus;
        });
        return d.promise();
    }
});



var c7000Servers = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/servers').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});

var gdsc7000Servers = {
    store: c7000Servers
};


$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: gdsc7000Servers,
        columns: [
			{ dataField: 'Name', width: 125 },
			{ dataField: 'model', visible: true, width: 200  },
			{ dataField: 'Temp', visible: true },
			{ dataField: 'TempStatus', visible: true, width: 100  },
			{ dataField: 'Power', visible: true },
			{ dataField: 'Cooling', visible: true, width: 100  },
			{ dataField: 'ILONetwork', visible: true, width: 100  },
			{ dataField: 'DeviceDegraded', visible: true, width: 150  }
        ],
        columnChooser: { enabled: false },
        allowColumnReordering: false,
        editing: {
            allowUpdating: false,
            mode: 'row',
            allowAdding: false,
            allowDeleting: false
        },
        filterRow: { visible: false },
        searchPanel: { visible: false },
        selection: { mode: 'none' }
    });
});
