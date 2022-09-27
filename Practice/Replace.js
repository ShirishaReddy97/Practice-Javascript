let arr = [
    {
      "enabled": true,
      "deviceID": "eI2K-6iUvVw:APA",
    },
    {
      "enabled": true,
      "deviceID": "e_Fhn7sWzXE:APA",
    },
    {
      "enabled": true,
      "deviceID": "e65K-6RRvVw:APA",
    },
  ];
  
  const id = 'eI2K-6iUvVw:APA';
  
  arr.find(v => v.deviceID === id).enabled = false;
  
  console.log(arr);