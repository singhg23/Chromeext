document.addEventListener('DOMContentLoaded', function() {
    var standardSection = document.getElementById('standard-section');
  
    // Fetch and display standard Google Sheets
    fetch('https://www.googleapis.com/drive/v3/files?q=name%20contains%20%27The%20scheduler%27%20or%20name%20contains%20%27Weekend%20responders%27%20or%20name%20contains%20%27Holiday%27', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    .then(response => response.json())
    .then(data => {
      data.files.forEach(file => {
        var tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = file.name;
        tile.setAttribute('data-url', 'https://docs.google.com/spreadsheets/d/' + file.id);
        standardSection.appendChild(tile);
      });
    })
    .catch(error => {
      console.error('Error fetching standard Google Sheets:', error);
    });
  });
  