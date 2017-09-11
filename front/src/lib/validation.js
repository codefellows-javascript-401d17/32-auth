module.exports = (profile, preReqs) => {
  let incomplete = false;

  for (let i = 0; i < preReqs.length; i++) {
    if(!profile[preReqs[i]]) {
      console.error(`VALIDATION ERROR: Missing ${preReqs[i]} property.`);
      incomplete = true;
    }
  }

  if(incomplete) throw new Error('VALIDATION ERROR: process terminated.');
};
