import React from 'react';
import Plot from 'react-plotly.js';


function BachelorsData() {
  const total = {
    x: [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
      1995,1996,1997,1998,1999,2000,2001,2002,2003, 2004,2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015],
    y: [2388,3402,
      4304,
      4756,
      5033,
      5652,
      6407,
      7201,
      8719,
      11154,
      15121,
      20267,
      24565,
      32439,
      39121,
      42337,
      39767,
      34651,
      30560,
      27347,
      25159,
      24821,
      24519,
      24527,
      24737,
      24506,
      25422,
      27829,
      30552,
      37788,
      44142,
      50365,
      57433,
      59488, 54111,
      47702,
      42164,
      38523,
      37992,
      39593,
      43066,
      47406,
      50961,
      55271,
      59586,
      64402],
    name: 'Total',
    type: 'scatter'
  };
  const males = {
    x: [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
      1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015],
    y: [2064,
      2941,
      3664,
      3976,
      4080,
      4534,
      4876,
      5349,
      6272,
      7782,
      10202,
      13218,
      15641,
      20416,
      24737,
      27208,
      25962,
      23414,
      21143,
      19159,
      17771,
      17685,
      17606,
      17528,
      17684,
      17757,
      18527,
      20372,
      22289,
      27185,
      31923,
      36462,
      41950,
      44585, 42125,
      37905,
      34338,
      31731,
      31213,
      32414,
      35477,
      38796,
      41874,
      45320,
      48844,
      52330],
    name: 'Male',
    type: 'scatter'
  };
  const females = {
    x: [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
      1995,1996,1997,1998,1999,2000,2001,2002,2003, 2004,2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015],
    y: [324,
      461,
      640,
      780,
      953,
      1118,
      1531,
      1852,
      2447,
      3372,
      4919,
      7049,
      8924,
      12023,
      14384,
      15129,
      13805,
      11237,
      9417,
      8188,
      7388,
      7136,
      6913,
      6999,
      7053,
      6749,
      6895,
      7457,
      8263,
      10603,
      12219,
      13903,
      15483,
      14903, 11986, 
      9797,
      7826,
      6792,
      6779,
      7179,
      7589,
      8610,
      9087,
      9951,
      10742, 
      12072],
    name: 'Female',
    type: 'scatter'
  };

  const data = [total, males, females];

  const layout = {
    width: 1500,
    height: 400,
    title: {
      text:'Bachelor Degrees in Computer Science Conferred by Post-Secondary Institutions (1970-2015)',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Year',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Number of Students',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };
  
  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default BachelorsData;