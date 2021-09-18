export default function getOptionsSpecAttacks({ special }) {
  const arrSpecAttacks = [];

  special.forEach((elem) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = elem;

    arrSpecAttacks.push({
      id, name, icon, description,
    });
  });

  return arrSpecAttacks;
}
