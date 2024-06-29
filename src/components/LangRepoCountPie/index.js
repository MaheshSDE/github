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

const LanguageRepoCountPie = props => {
  const {langRepoCount} = props
  const data = [
    /* {name: 'CSS', value: langRepoCount.CSS}, */
    {name: 'Dockerfile', value: langRepoCount.Dockerfile},
    {name: 'HTML', value: langRepoCount.HTML},
    {name: 'Java', value: langRepoCount.Java},
    {name: 'JavaScript', value: langRepoCount.JavaScript},
    /*   {name: 'MDX', value: langRepoCount.MDX},
    {name: 'Perl', value: langRepoCount.Perl},
    {name: 'Shell', value: langRepoCount.Shell}, */
    {name: 'TypeScript', value: langRepoCount.TypeScript},
    /*  {name: 'Unknown', value: langRepoCount.Unknown}, */
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

export default LanguageRepoCountPie
