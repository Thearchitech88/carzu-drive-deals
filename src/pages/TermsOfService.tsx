
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-600">
                Last Updated: May 20, 2024
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="prose prose-blue max-w-none">
                <p>
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Carzu website and services.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">2. Description of Service</h2>
                <p>
                  Carzu provides an online platform that connects car buyers and sellers. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                  <li>Listing vehicles for sale</li>
                  <li>Searching for vehicles</li>
                  <li>Providing vehicle history reports</li>
                  <li>Facilitating financing options</li>
                  <li>Offering insurance options</li>
                  <li>Vehicle valuation services</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-8 mb-4">3. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p className="mt-3">
                  You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">4. Listing and Content Policies</h2>
                <p>
                  Users who list vehicles for sale must:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                  <li>Provide accurate and complete information about the vehicle</li>
                  <li>Only list vehicles that they legally own or are authorized to sell</li>
                  <li>Disclose known defects or issues with the vehicle</li>
                  <li>Use authentic photographs of the actual vehicle being sold</li>
                  <li>Set fair and reasonable prices</li>
                </ul>
                <p>
                  Carzu reserves the right to remove listings that violate these policies.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">5. Transactions and Payment</h2>
                <p>
                  Carzu may facilitate transactions between buyers and sellers, but we are not a party to any transaction. Any contract formed is solely between the buyer and seller.
                </p>
                <p className="mt-3">
                  We offer secure payment processing options, but users should exercise caution and due diligence in all transactions.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
                <p>
                  In no event shall Carzu, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-4 space-y-1">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                
                <h2 className="text-xl font-bold mt-8 mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@carzu.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
