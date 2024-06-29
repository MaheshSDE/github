import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts'

const COLORS = [
  'Pink',
  '#00C49F',
  '#FFBB28',
  '#0088FE',
  '#F2637F',
  'Orange',
  'purple',
]

const RepoCommitCountPie = props => {
  const {repoCommitCount} = props
  const data = [
    {name: 'bookshelf', value: repoCommitCount.bookshelf},
    {name: 'kcd-discord-bot-v1', value: repoCommitCount['kcd-discord-bot-v1']},
    {name: 'kentcdodds.com', value: repoCommitCount['kentcdodds.com']},
    {name: 'old-kentcdods.com', value: repoCommitCount['old-kentcdodds.com']},
    {name: 'react-fundamentals', value: repoCommitCount['react-fundamentals']},
    {name: 'react-hoooks', value: repoCommitCount['react-hooks']},
    {name: 'react-performance', value: repoCommitCount['react-performance']},
    {name: 'react-suspense', value: repoCommitCount['react-suspense']},
    {name: 'react-workshop-app', value: repoCommitCount['react-workshop-app']},
    {name: 'testing-react-apps', value: repoCommitCount['testing-react-apps']},
  ]
  console.log(data)
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={data.name + data.value}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        {/*  <Legend
          iconType="square"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        /> */}
      </PieChart>
    </ResponsiveContainer>
  )
}

export default RepoCommitCountPie
