$(document).ready(function () {

    
    for (let country in treeData) {
        $("#treeMenu").append(`<h6>${country}</h6>`);
        treeData[country].forEach(city => {
            $("#treeMenu").append(`<div class="tree-item" data-city="${city}">- ${city}</div>`);
        });
    }

    
    function renderTable(filterCity = null) {
        $("#dataTable tbody").empty();

        var customerList = customers.filter(c => !filterCity || c.city === filterCity);

        if(customerList.length <= 0){
            $("#dataTable tbody").append(`
                    <tr>
                        <td>
                            no data found
                        </td>
                    </tr>
                `);
                return;
        }

            customerList.forEach((c, i) => {
                $("#dataTable tbody").append(`
                    <tr>
                        <td>${c.name}</td>
                        <td>${c.address}</td>
                        <td>${c.city}</td>
                        <td>${c.Poscode}</td>
                        <td>${c.country}</td>
                        <td>
                            <button class="btn btn-sm btn-primary view-btn" data-index="${i}">
                                View
                            </button>
                             <button class="btn btn-sm btn-warning view-btn" >
                                Edit
                            </button>
                            <button class="btn btn-sm btn-danger view-btn" >
                                Delete
                            </button>
                        </td>
                    </tr>
                `);
            });
    }

    renderTable();

    
    $(document).on("click", ".tree-item", function () {
        const city = $(this).data("city");
        renderTable(city);
    });

   
    $(document).on("click", ".view-btn", function () {
        const index = $(this).data("index");
        console.log(customers[index]);
        alert(JSON.stringify(customers[index], null, 2));
    });

    
    $("#tabs .nav-link").click(function () {
        $("#tabs .nav-link").removeClass("active");
        $(this).addClass("active");

        $(".page").addClass("d-none");
        $("#" + $(this).data("page")).removeClass("d-none");
    });

    
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        const formData = {
            userid: $("#UserID").val(),
            password: $("#Pass").val()
        };
       
        console.log(formData);
        console.log(JSON.stringify(formData));

        Swal.fire({
            title: 'Form Data',
            icon: 'info',
            html: `${formData.userid} is successfully logined`,
            width: 600
        });

    });

});
