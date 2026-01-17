'use client'; // Required for usePathname and motion hooks

// import { motion } from 'motion/react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, FolderOpen, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: LayoutDashboard, label: 'My Courses', path: '/' },
  { icon: TrendingUp, label: 'Global Insights', path: '/insights' },
  { icon: FolderOpen, label: 'Document Vault', path: '/vault' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 z-[100]"
      style={{
        background: 'rgba(0, 32, 78, 0.95)',
        backdropFilter: 'blur(24px)',
        borderRight: '2px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '5px 0 30px rgba(139, 92, 246, 0.2)',
      }}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link href="/">
        <motion.div
          className="w-12 h-12 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-2xl font-black text-white">S</span>
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </Link>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer relative"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
                      : 'rgba(139, 92, 246, 0.1)',
                    border: `1px solid ${isActive ? '#8B5CF6' : 'rgba(139, 92, 246, 0.3)'}`,
                    boxShadow: isActive ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none',
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: isActive ? '#fff' : '#8B5CF6' }} />
                </div>

                {/* Tooltip */}
                <div
                  className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]"
                  style={{
                    background: 'rgba(0, 32, 78, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #8B5CF6',
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
                  }}
                >
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Avatar (using initials) */}
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-2"
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          borderColor: 'rgba(16, 185, 129, 0.5)',
          boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-black text-white">AT</span>
      </motion.div>
    </motion.div>
  );
}