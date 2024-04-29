function getMiddle(s)
{
  const isOdd = Boolean(s.length % 2);
  
  return isOdd ? s[Math.floor(s.length / 2)] : s[s.length/2-1] + s[s.length/2];
}