var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {

  type: 'pie',

  data: {
    labels: ['Computer', 'Smartphone', 'Both'],
    datasets: [{
      label: 'Usage of cloud storage app via computer, smartphone, or both',
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
      data: [30.8, 15.4, 53.8]
    }]
  },

  options: {
    title: {
        display: true,
        text: 'Usage of cloud storage app via computer, smartphone, or both (%)'
  }
}
});
