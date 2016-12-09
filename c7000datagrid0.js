var books = [
   {
       BLADE: 'position 1', STATUS: 'OK', TEMPERATURE: 1951, genre: 'Bildungsroman',
       price: 4.56, language: 'EN', length: 220, format: 'paperback'
   },
   {
       BLADE: 'position 2', STATUS: "OK", TEMPERATURE: 1979, genre: 'Comedy, sci-fi',
       price: 12.43, language: 'EN', length: 224, format: 'hardcover'
   },
   {
       BLADE: 'position 3', STATUS: "OK", TEMPERATURE: 1963, genre: 'Satire, sci-fi',
       price: 7.21, language: 'EN', length: 306, format: 'e-book'
   },
   {
       BLADE: 'position 4', STATUS: "OK", TEMPERATURE: 1965, genre: 'Novel',
       price: 4.95, language: 'EN', length: 218, format: 'paperback'
   },
   {
       BLADE: 'position 5', STATUS: "OK", TEMPERATURE: 20, genre: 'Historical fiction',
       price: 29.84, language: 'EN', length: 1024, format: 'hardcover'
   },
   {
       BLADE: 'position 6', STATUS: "OK", TEMPERATURE: 35, genre: 'Novel',
       price: 4.73, language: 'EN', length: 357, format: 'e-book'
   },
   {
       BLADE: 'position 7', STATUS: "OK", TEMPERATURE: 32, genre: 'Dystopian novel, political fiction',
       price: 15.53, language: 'EN', length: 376, format: 'hardcover'
   },
   {
       BLADE: 'position 8', STATUS: "OK", TEMPERATURE: 45, genre: 'Speculative fiction',
       price: 19.51, language: 'EN', length: 592, format: 'hardcover'
   },
   {
       BLADE: 'position 9', STATUS: "OK", TEMPERATURE: 55, genre: 'Novel',
       price: 5.95, language: 'EN', length: 298, format: 'e-book'
   },
   {
       BLADE: 'position 10', STATUS: "OK", TEMPERATURE: 40, genre: 'Sci-fi',
       price: 4.50, language: 'EN', length: 298, format: 'e-book'
   },
   {
       BLADE: 'position 11', STATUS: "OK", TEMPERATURE: 22, genre: 'Dystopian novel',
       price: 7.90, language: 'EN', length: 179, format: 'paperback'
   },
   {
       BLADE: 'position 12', STATUS: "PROBLEM!!!", TEMPERATURE: 80, genre: 'Realistic fiction',
       price: 2.41, language: 'EN', length: 384, format: 'paperback'
   }
];

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

var gridDataSourceConfiguration = {
    store: customStoreSQLMEM
};



$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
			{ dataField: 'Name', width: 125 },
			{ dataField: 'model', visible: true },
			{ dataField: 'Temp', visible: true },
			{ dataField: 'TempStatus', visible: true },
			{ dataField: 'Power', visible: true },
			{ dataField: 'Cooling', visible: true },
			{ dataField: 'ILONetwork', visible: true },
			{ dataField: 'DeviceDegraded', visible: true },
			{ dataField: 'format', width: 90 }
        ],
        columnChooser: { enabled: true },
        allowColumnReordering: true,
        sorting: { mode: 'multiple' },
        groupPanel: { visible: true, emptyPanelText: 'Drag a column header here to group grid records' },

        editing: {
            allowUpdating: true,
            mode: 'row',
            allowAdding: true,
            allowDeleting: true
        },
        filterRow: { visible: true },
        searchPanel: { visible: true },
        selection: { mode: 'none' }
    });
});
