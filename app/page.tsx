import Image from "next/image";

export default async function Home() {
  
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Authentication Success Notification */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-0">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              <span className="font-medium">Access Granted!</span> You have successfully authenticated and can access this protected resource.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        <main className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Contentstack Logo */}
          <div className="mb-8">
            <Image
              src="/Contentstack_Logo.jpg"
              alt="Contentstack Logo"
              width={180}
              height={90}
              className="mb-4 mx-auto"
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8">
            Password Protection Edge Function Example
          </h1>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-purple-100">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              What are Edge Functions?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Edge Functions are serverless functions that run at the edge of Contentstack&apos;s global network, 
              closest to your users. They allow you to modify requests and responses, implement custom logic, 
              and enhance your applications with real-time processing capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">Key Features</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Modify requests and responses</li>
                  <li>• Implement custom authentication</li>
                  <li>• A/B testing and personalization</li>
                  <li>• Real-time content transformation</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-purple-800 font-semibold mb-3">Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Global edge deployment</li>
                  <li>• Low latency performance</li>
                  <li>• Serverless architecture</li>
                  <li>• Easy integration with Contentstack</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Password Protection Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-purple-100">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Password Protection Access Control
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With Edge Functions, you can implement sophisticated password-based access control mechanisms. 
              This protection system requires Basic Authentication for specific domains while allowing direct access to others, 
              creating secure perimeters around your applications and APIs.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h4 className="text-blue-800 font-semibold mb-3">Authentication Details</h4>
              <p className="text-gray-700 text-sm">
                This example uses Basic Authentication with credentials: <code className="bg-gray-200 px-2 py-1 rounded">admin/admin</code>
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <a
            href="https://www.contentstack.com/docs/developers/launch/edge-functions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More About Edge Functions
          </a>
        </main>
      </div>
    </div>
  );
}
