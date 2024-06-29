import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const COLORS = [
  'Pink',
  '#00C49F',
  '#FFBB28',
  '#0088FE',
  '#F2637F',
  'Orange',
  'purple',
]

const LanguageCommitCountPie = props => {
  const {langCommitCount} = props
  const data = [
    /* {name: 'CSS', value: langCommitCount.CSS}, */
    {name: 'Dockerfile', value: langCommitCount.Dockerfile},
    {name: 'HTML', value: langCommitCount.HTML},
    {name: 'Java', value: langCommitCount.Java},
    {name: 'JavaScript', value: langCommitCount.JavaScript},
    /*  {name: 'MDX', value: langCommitCount.MDX},
    {name: 'Perl', value: langCommitCount.Perl},
    {name: 'Shell', value: langCommitCount.Shell}, */
    {name: 'TypeScript', value: langCommitCount.TypeScript},
    /*  {ame: 'Unknown', value: langCommitCount.Unknown}, */
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
        <Legend
          iconType="square"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default LanguageCommitCountPie
