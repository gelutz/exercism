export function hey(message: string): string {
  // removes newliners, tabs, non letters + numbers + ?, trailing whitespaces
  message = message
    .replace(/(\r\n|\n|\r|\t)/gm, "") 
    .replace(/[^a-zA-Z0-9?]/g, '') 
    .trim() 
  
  let response
  
  if (!message) { // trim should've removed all whitespaces, so there's nothing left
    response = 'Fine. Be that way!'
    return response
  }
  
  const endsWithQuestionMark = message.endsWith('?')
  response = endsWithQuestionMark ? 'Sure.' : 'Whatever.'
  
  if (message.match(/^[0-9?]+$/i)) { // checks if has numbers + ?
    return response
  }
  
  if (message === message.toUpperCase()) { // is uppercase
    response = endsWithQuestionMark ? "Calm down, I know what I'm doing!" : 'Whoa, chill out!'
  }
  
  return response

}
