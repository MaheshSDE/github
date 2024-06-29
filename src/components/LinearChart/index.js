import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

/* const data = [
  {
    name: '2015-Q3',
    commits: 1,
  },
  {
    name: '2015-Q4',
    commits: 0,
  },
  {
    name: '2016-Q1',
    commits: 4,
  },
  {
    name: '2016-Q2',
    commits: 2,
  },
  {
    name: '2016-Q3',
    commits: 5,
  },
  {
    name: '2016-Q4',
    commits: 3,
  },
]
 */
const LinearChart = props => {
  const {quarterCommitCount} = props

  const data = [
    {name: '2012-Q1', commits: quarterCommitCount['2012-Q1']},
    {name: '2012-Q2', commits: quarterCommitCount['2012-Q2']},
    {name: '2012-Q3', commits: quarterCommitCount['2012-Q3']},
    {name: '2012-Q4', commits: quarterCommitCount['2012-Q4']},

    {name: '2013-Q1', commits: quarterCommitCount['2013-Q1']},
    {name: '2013-Q2', commits: quarterCommitCount['2013-Q2']},
    {name: '2013-Q3', commits: quarterCommitCount['2013-Q3']},
    {name: '2013-Q4', commits: quarterCommitCount['2013-Q4']},

    {name: '2014-Q1', commits: quarterCommitCount['2014-Q1']},
    {name: '2014-Q2', commits: quarterCommitCount['2014-Q2']},
    {name: '2014-Q3', commits: quarterCommitCount['2014-Q3']},
    {name: '2014-Q4', commits: quarterCommitCount['2014-Q4']},

    {name: '2015-Q1', commits: quarterCommitCount['2015-Q1']},
    {name: '2015-Q2', commits: quarterCommitCount['2015-Q2']},
    {name: '2015-Q3', commits: quarterCommitCount['2015-Q3']},
    {name: '2015-Q4', commits: quarterCommitCount['2015-Q4']},

    {name: '2016-Q1', commits: quarterCommitCount['2016-Q1']},
    {name: '2016-Q2', commits: quarterCommitCount['2016-Q2']},
    {name: '2016-Q3', commits: quarterCommitCount['2016-Q3']},
    {name: '2016-Q4', commits: quarterCommitCount['2016-Q4']},

    {name: '2017-Q1', commits: quarterCommitCount['2017-Q1']},
    {name: '2017-Q2', commits: quarterCommitCount['2017-Q2']},
    {name: '2017-Q3', commits: quarterCommitCount['2017-Q3']},
    {name: '2017-Q4', commits: quarterCommitCount['2017-Q4']},

    {name: '2018-Q1', commits: quarterCommitCount['2018-Q1']},
    {name: '2018-Q2', commits: quarterCommitCount['2018-Q2']},
    {name: '2018-Q3', commits: quarterCommitCount['2018-Q3']},
    {name: '2018-Q4', commits: quarterCommitCount['2018-Q4']},

    {name: '2019-Q1', commits: quarterCommitCount['2019-Q1']},
    {name: '2019-Q2', commits: quarterCommitCount['2019-Q2']},
    {name: '2019-Q3', commits: quarterCommitCount['2019-Q3']},
    {name: '2019-Q4', commits: quarterCommitCount['2019-Q4']},

    {name: '2020-Q1', commits: quarterCommitCount['2020-Q1']},
    {name: '2020-Q2', commits: quarterCommitCount['2020-Q2']},
    {name: '2020-Q3', commits: quarterCommitCount['2020-Q3']},
    {name: '2020-Q4', commits: quarterCommitCount['2020-Q4']},

    {name: '2021-Q1', commits: quarterCommitCount['2021-Q1']},
    {name: '2021-Q2', commits: quarterCommitCount['2021-Q2']},
    {name: '2021-Q3', commits: quarterCommitCount['2021-Q3']},
    {name: '2021-Q4', commits: quarterCommitCount['2021-Q4']},

    {name: '2022-Q1', commits: quarterCommitCount['2022-Q1']},
    {name: '2022-Q2', commits: quarterCommitCount['2022-Q2']},
    {name: '2022-Q3', commits: quarterCommitCount['2022-Q3']},
    {name: '2022-Q4', commits: quarterCommitCount['2022-Q4']},

    {name: '2023-Q1', commits: quarterCommitCount['2023-Q1']},
    {name: '2023-Q2', commits: quarterCommitCount['2023-Q2']},
    {name: '2023-Q3', commits: quarterCommitCount['2023-Q3']},
    {name: '2023-Q4', commits: quarterCommitCount['2023-Q4']},

    {name: '2024-Q1', commits: quarterCommitCount['2024-Q1']},
    {name: '2024-Q2', commits: quarterCommitCount['2024-Q2']},
  ]

  return (
    <LineChart
      width={330}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 100,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="" dataKey="commits" stroke="#8884d8" activeDot={{r: 8}} />
    </LineChart>
  )
}
export default LinearChart
