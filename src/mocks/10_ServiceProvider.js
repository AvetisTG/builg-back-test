module.exports = async (models) => {

  const data = [
    {
      name: 'ABC Renovations',
      latitude: 40.1811,
      longitude: 44.5136,
    },
    {
      name: 'Smith Home Improvement',
      latitude: 40.1775,
      longitude: 44.5151,
    },
    {
      name: 'Modern Construction Co.',
      latitude: 40.1821,
      longitude: 44.5142,
    },
    {
      name: 'Elite Builders',
      latitude: 40.1852,
      longitude: 44.5167,
    },
    {
      name: 'Pro Builders Inc.',
      latitude: 40.1880,
      longitude: 44.5185,
    },
    {
      name: 'Top Notch Remodeling',
      latitude: 40.1834,
      longitude: 44.5164,
    },
    {
      name: 'Home Solutions LLC',
      latitude: 40.1762,
      longitude: 44.5111,
    },
    {
      name: 'Dynamic Builders',
      latitude: 40.1773,
      longitude: 44.5143,
    },
    {
      name: 'Master Remodelers',
      latitude: 40.1846,
      longitude: 44.5173,
    },
    {
      name: 'Prime Construction Services',
      latitude: 40.1799,
      longitude: 44.5139,
    },
    {
      name: 'All Seasons Remodeling',
      latitude: 40.1871,
      longitude: 44.5201,
    },
    {
      name: 'Exclusive Renovations',
      latitude: 40.1767,
      longitude: 44.5162,
    },
    {
      name: 'Innovative Builders',
      latitude: 40.1841,
      longitude: 44.5209,
    },
    {
      name: 'New Era Construction',
      latitude: 40.1865,
      longitude: 44.5133,
    },
    {
      name: 'Premier Renovations',
      latitude: 40.1820,
      longitude: 44.5129,
    },
    {
      name: 'Complete Home Remodeling',
      latitude: 40.1745,
      longitude: 44.5138,
    },
    {
      name: 'Forever Homes Inc.',
      latitude: 40.1805,
      longitude: 44.5116,
    },
    {
      name: 'Creative Home Solutions',
      latitude: 40.1859,
      longitude: 44.5196,
    },
    {
      name: 'Green City Builders',
      latitude: 40.1787,
      longitude: 44.5135,
    },
    {
      name: 'Blue Ridge Renovations',
      latitude: 40.1843,
      longitude: 44.5193,
    },
  ];

  for (let i in data) {

    if (data.hasOwnProperty(i)) {

      await models.ServiceProvider.upsert({
        ...data[i],
        createdAt: new Date(),
        updatedAt: new Date()
      });

    }

  }

  return true;

};
