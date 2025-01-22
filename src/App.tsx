import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthPage from './pages/auth/AuthPage';
import MainLayout from './layouts/MainLayout';
import { RootState } from './store';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  
  return <MainLayout>{children}</MainLayout>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 公开路由 */}
        <Route path="/auth" element={<AuthPage />} />
        
        {/* 受保护的路由 */}
        <Route path="/" element={
          <ProtectedRoute>
            <div>首页内容</div>
          </ProtectedRoute>
        } />
        
        {/* 示例：添加更多受保护的路由 */}
        <Route path="/profile" element={
          <ProtectedRoute>
            <div>个人资料页面</div>
          </ProtectedRoute>
        } />
        
        {/* 404 页面 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
