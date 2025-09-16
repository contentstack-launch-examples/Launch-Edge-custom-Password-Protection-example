//CUSTOM PASSWORD PROTECTION FOR DOMAIN
export default async function handler(request) {
  const url = new URL(request.url);
  const hostname = url.hostname;
  console.log('hostname:', hostname);
  if(hostname.includes('test-protected-domain.devcontentstackapps.com')){
    console.log('protected domain');
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new Response('Authentication Required', { 
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Protected Area"',
          'Content-Type': 'text/html'
        }
      });
    }
    
    try {
      // Decode the base64 credentials
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = atob(base64Credentials);
      const [username, password] = credentials.split(':');
      
      if(username === 'admin' && password === 'admin'){
        // Forward the request to the original destination
        return await fetch(request);
      } else {
        return new Response('Unauthorized - Invalid credentials', { 
          status: 401,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    } catch {
      return new Response('Unauthorized - Invalid auth format', { 
        status: 401,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
  else if(hostname.includes('test-unprotected-domain.devcontentstackapps.com')){
    return await fetch(request);
  }
  
  return fetch(request);
}