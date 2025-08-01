import { useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, Facebook, Upload, FileText, X } from 'lucide-react';

function Career() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleFileChange = (e) => {
    console.log(e, 'File input change');
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx'))) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('Please upload a valid resume file (PDF, DOC, or DOCX)');
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
 
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        setFormData(prev => ({
          ...prev,
          resume: file
        }));
      } else {
        alert('Please upload a valid resume file (PDF, DOC, or DOCX)');
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      resume: null
    }));
  };

  
  const handleSubmit = async () => {
    if (!formData.resume) {
      alert('Please upload your resume');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    }, 3000);
  };
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }
  return (
    <div>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Grow your career with PCS Global
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our dynamic team and take your career to the next level. We're always looking for talented individuals!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Information Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden h-full">
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Career Information</h2>
                <p className="text-blue-100 mb-8 text-lg">Ready to build your future with us? Send us your resume!</p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-lg">+91 6296373387</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-lg">careers@pcsgl.com</span>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-lg leading-relaxed">
                      Merlin Infinite, Sector V, Saltlake,<br />
                      Kolkata, West Bengal
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold">Why Join PCS Global?</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Competitive salary and benefits</li>
                    <li>• Professional growth opportunities</li>
                    <li>• Collaborative work environment</li>
                    <li>• Cutting-edge technology projects</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 transform hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 transform hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 012 3456 789"
                  className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                  required
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume
                </label>
                
                {!formData.resume ? (
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 transition-colors duration-200 ${
                      dragActive 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-blue-600 hover:text-blue-500">
                            Click to upload
                          </span>
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC or DOCX (MAX. 10MB)
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {formData.resume.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={removeFile}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Career