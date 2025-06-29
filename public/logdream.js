document.getElementById('dreamForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dream = {
        title: document.getElementById('title').value.trim(),
        date: document.getElementById('date').value,
        description: document.getElementById('description').value.trim(),
        location: document.getElementById('location').value.trim() || "Unknown",
        tags: document.getElementById('tags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
        submittedBy: document.getElementById('submittedBy').value.trim() || "Anonymous"
    };

    console.log('Dream to be saved:', dream);

    // In production, this would send data to a backend API or store locally
      alert('Dream saved');

      try{
        fetch("/api",{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(dream)
        })
      }

      catch(err){
        console.error(err);
      }

      document.getElementById('dreamForm').reset();
    });