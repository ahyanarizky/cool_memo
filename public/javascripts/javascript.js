// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();
    // Add User button click
    $('#btnAddUser').on('click', addUser);
    // Delete User link click
    $('#userList table tbody').on('click', 'td a.btn.btn-danger', deleteUser);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/api/', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.title + '</td>';
            tableContent += '<td>' + this.content + '</td>';
            tableContent += '<td>' + this.tags + '</td>';
            tableContent += '<td><a href="#" class="btn btn-danger" role="button" rel="' + this._id + '">Delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'title': $('#addUser fieldset input#inputTitle').val(),
            'content': $('#addUser fieldset input#inputContent').val(),
            'tags': $('#addUser fieldset input#inputTags').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({type: 'POST', data: newUser, url: '/api', dataType: 'JSON'}).done(function(response) {
            // Clear the form inputs
            $('#addUser fieldset input').val('');
            // If something goes wrong, alert the error message that our service returned
            populateTable();

        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/api/' + $(this).attr('rel')
        }).done(function(response) {
            // Update the table
            populateTable();

        });

    } else {

        // If they said no to the confirm, do nothing
        return false;

    }

};
