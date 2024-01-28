let votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
    option5: 0,
    option6: 0,

  };
  
  function vote(option) {
    votes[option]++;
    updateVotes(option);
  }
  
  function updateVotes(option) {
    document.getElementById('votes1').innerText = votes.option1;
    document.getElementById('votes2').innerText = votes.option2;
    document.getElementById('votes3').innerText = votes.option3;
    document.getElementById('votes4').innerText = votes.option4;
    document.getElementById('votes5').innerText = votes.option5;
    document.getElementById('votes6').innerText = votes.option6;
}
  