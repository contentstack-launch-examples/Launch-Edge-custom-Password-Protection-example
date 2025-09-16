# Edge Password Protection Example

A Next.js application demonstrating password-based access control using Contentstack Edge Functions. This project shows how to implement password protection for specific domains using Basic Authentication.

## 🚀 Features

- **Password Protection**: Secure access control using Basic Authentication
- **Domain-based Protection**: Apply protection to specific domains only
- **Edge Function Integration**: Uses Contentstack Edge Functions for real-time authentication
- **Real-time Access Control**: Authentication validation happens at the edge for optimal performance

## 📋 Prerequisites

- Node.js 22+ 
- npm or yarn
- Contentstack account (for Edge Functions deployment)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd launch-edge-custom-Password-Protection-example
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Password Protection Setup

Edit the `functions/[proxy].edge.js` file to configure your protected domains and credentials:

```javascript
// Protected domain configuration
if(hostname.includes('test-protected-domain.devcontentstackapps.com')){
  // Check for Basic Authentication
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
  
  // Validate credentials (admin/admin)
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(':');
  
  if(username === 'admin' && password === 'admin'){
    return await fetch(request);
  }
}
```

### Adding Protected Domains

To add new protected domains:

1. Add a new `else if` condition for your domain
2. Configure the authentication logic
3. Deploy the Edge Function

## 🏗️ Project Structure

```
launch-edge-custom-Password-Protection-example/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main application page
│   ├── layout.tsx         # Root layout component
│   └── globals.css        # Global styles
├── functions/
│   └── [proxy].edge.js    # Edge Function for password protection
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── next.config.ts         # Next.js configuration
```

## 🔒 How It Works

1. **Request Interception**: All requests are intercepted by the Edge Function
2. **Domain Check**: The request hostname is checked against protected domains
3. **Authentication**: For protected domains, Basic Authentication is required
4. **Access Control**: 
   - ✅ **Allowed**: Request proceeds to the application (valid credentials)
   - ❌ **Denied**: Returns 401 Unauthorized response (invalid/missing credentials)

### Authentication Logic

The Edge Function handles Basic Authentication:
- Checks for `Authorization` header with `Basic` prefix
- Decodes base64 credentials
- Validates username and password
- Returns appropriate HTTP status codes

```javascript
const authHeader = request.headers.get('Authorization');
const base64Credentials = authHeader.split(' ')[1];
const credentials = atob(base64Credentials);
const [username, password] = credentials.split(':');
```

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```


## 🧪 Testing

### Test Different Authentication Scenarios

1. **Valid Credentials**: Should see the success page (admin/admin)
2. **Invalid Credentials**: Should see "Unauthorized" message
3. **No Authentication**: Should see browser authentication prompt
4. **Non-protected Domain**: Should access directly without authentication

### Manual Testing

You can test the authentication by:
- Accessing the protected domain without credentials
- Using correct credentials (admin/admin)
- Using incorrect credentials
- Accessing non-protected domains

## 📚 Learn More

- [Contentstack Edge Functions Documentation](https://www.contentstack.com/docs/developers/launch/edge-functions)
- [Next.js Documentation](https://nextjs.org/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Contentstack documentation](https://www.contentstack.com/docs/)
2. Review the Edge Function logs in your Contentstack dashboard
3. Ensure your domain configuration is correct
4. Verify your authentication credentials

---

**Note**: This is an example implementation. In production, consider additional security measures such as:
- Strong password policies
- HTTPS enforcement
- Rate limiting
- Logging and monitoring
- Consider using more secure authentication methods 
