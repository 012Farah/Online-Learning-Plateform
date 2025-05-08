export default function ChangePassword() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-bold mb-4 text-center">Change Password</h1>
          <input type="password" placeholder="Current Password" className="w-full p-2 mb-3 border rounded" />
          <input type="password" placeholder="New Password" className="w-full p-2 mb-3 border rounded" />
          <input type="password" placeholder="Confirm New Password" className="w-full p-2 mb-3 border rounded" />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Update Password
          </button>
        </div>
      </div>
    );
  }
  