const SkillItem = ({ skill }) => {
  return (
    <li className='bg-slate-600 px-4 py-2 dark:bg-slate-300 rounded-lg font-medium'>
      <p className=''>{skill}</p>
    </li>
  );
};

export default SkillItem;