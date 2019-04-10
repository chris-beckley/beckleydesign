var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {

  type: 'pie',

  data: {
    labels: ['18-23', '24-29', '30-35', '36-40'],
    datasets: [{
      label: 'Ages of respondents',
      backgroundColor: ["#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      data: [33.3, 26.7, 13.3, 20]
    }]
  },

  options: {
    title: {
        display: true,
        text: 'Ages of respondents (%)'
  }
}
});
