function update_dropdown_list(element, data){
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option');
        option.text = data[i].name;
        option.setAttribute("value", i);
        element.add(option);
    }
}

function update_chart1(){
    chart1.destroy()
    chart1.data = data_c1[c1_dropdown.value]
    chart1 = new Chart(chart1_ctx, chart1_cfg);
}

function update_chart2(){
    chart2.destroy()
    chart2.data = data_c2[c2_dropdown.value]
    chart2 = new Chart(chart2_ctx, chart2_cfg);
}

function update_chart4(){
    chart4.destroy()
    chart4.data = data_c4[c4_dropdown.value]
    chart4 = new Chart(chart4_ctx, chart4_cfg);
}

const chart1_cfg = {
    type: 'line',
    options: {
    responsive: true,
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    },
    scales: {
        x: {
            title: {
            display: true,
            text: 'Year'
            }
        },
        y: {
            stacked: true,
            title: {
            display: true,
            text: 'Interest Over Time'
            }
        }
    }
    }
};

const chart2_cfg = {
    type: 'line',
    options: {
    scales: {
        x: {
            title: {
                display: true,
                text: 'Year'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Interest Difference'
            }
        },
    },
    plugins: {
        filler: {
            propagate: false,
        },
        'samples-filler-analyser': {
            target: 'chart-analyser'
        },
        legend: {
            display:true,
        },
        tooltip: {
            callbacks: {
              label: function(context) {
                        value = context.dataset.data[context.dataIndex]
                        if(value > 0) {
                            return "Trends ahead by: " + value
                        } else if (value < 0){
                            return "DBLP ahead by: " + -1 * value
                        } else{
                            return "Equal Interest"
                        }  
                    }
            }
        }
    },
    interaction: {
        intersect: false,
    },
    },
  };

const chart3_cfg = {
    type: 'bar',
    data: data_c3[0],
    options: {
      plugins: {
        title: {
          display: false,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };

const chart4_cfg = {
    type: 'doughnut',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
};


const chart1_ctx = document.getElementById('chart1').getContext('2d');
const c1_dropdown = document.getElementById('chart1_dropdown');

const chart2_ctx = document.getElementById('chart2').getContext('2d');
const c2_dropdown = document.getElementById('chart2_dropdown');

const chart3_ctx = document.getElementById('chart3').getContext('2d');
const c3_dropdown = document.getElementById('chart3_dropdown');

const chart4_ctx = document.getElementById('chart4').getContext('2d');
const c4_dropdown = document.getElementById('chart4_dropdown');

let chart1 = new Chart(chart1_ctx, chart1_cfg);
chart1.data = data_c1[0]
update_dropdown_list(c1_dropdown, data_c1)
chart1.update()

let chart2 = new Chart(chart2_ctx, chart2_cfg);
chart2.data = data_c2[0]
update_dropdown_list(c2_dropdown, data_c2)
chart2.update()

let chart3 = new Chart(chart3_ctx, chart3_cfg);

let chart4 = new Chart(chart4_ctx, chart4_cfg);
chart4.data = data_c4[0]
update_dropdown_list(c4_dropdown, data_c4)
chart4.update()