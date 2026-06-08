'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from '@/lib/motion-utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    nama: string;
    email: string;
    pesan: string;
}

const FormSection = () => {
    const [formData, setFormData] = useState<FormData>({
        nama: '',
        email: '',
        pesan: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Gagal mengirim pesan.');
            }

            setStatus('success');
            setMessage('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.');
            setFormData({ nama: '', email: '', pesan: '' });

            // Reset status setelah 5 detik
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (err) {
            setStatus('error');
            setMessage(
                err instanceof Error ? err.message : 'Terjadi kesalahan. Silakan coba lagi.'
            );

            // Reset error setelah 5 detik
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }
    };

    const isLoading = status === 'loading';

    return (
        <section className="relative py-20 pt-32 px-6 blueprint-grid overflow-hidden min-h-screen flex items-center">
            {/* Decorative Architectural Detail */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 m-10 hidden lg:block"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 m-10 hidden lg:block"></div>
            
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-10">
                {/* Content: Identity & Information (Centered) */}
                <motion.div 
                  className="max-w-xl text-center mb-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                >
                    <motion.h1 variants={fadeInUp} className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4 uppercase">
                        Hubungi Kami
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="font-body text-zinc-500 text-base leading-relaxed">
                        Isi formulir di bawah, tim kami akan segera menghubungi Anda untuk mendiskusikan visi arsitektural Anda.
                    </motion.p>
                </motion.div>
                
                {/* Right Content: The Form (Centered) */}
                <motion.div 
                  className="w-full max-w-xl bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-lg border border-outline-variant/10 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                >
                    {/* Accent Pattern */}
                    <div className="absolute top-0 right-0 p-3 opacity-[0.03] pointer-events-none">
                        <span className="material-symbols-outlined text-7xl">architecture</span>
                    </div>

                    {/* Status Message */}
                    <AnimatePresence mode="wait">
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 overflow-hidden ${
                                    status === 'success'
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                }`}
                            >
                                <span className="material-symbols-outlined text-lg">
                                    {status === 'success' ? 'check_circle' : 'error'}
                                </span>
                                {message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.form 
                      className="space-y-6 relative z-10" 
                      onSubmit={handleSubmit}
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <motion.div variants={staggerItem} className="space-y-1">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-2" htmlFor="nama">Nama Lengkap</label>
                                <input
                                    className="w-full bg-surface-container px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary/20 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    id="nama"
                                    name="nama"
                                    placeholder="Masukkan Nama Anda"
                                    required
                                    type="text"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                />
                            </motion.div>
                            <motion.div variants={staggerItem} className="space-y-1">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-2" htmlFor="email">Alamat Email</label>
                                <input
                                    className="w-full bg-surface-container px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary/20 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    id="email"
                                    name="email"
                                    placeholder="email@gmail.com"
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                />
                            </motion.div>
                        </div>
                        <motion.div variants={staggerItem} className="space-y-1">
                            <label className="text-[10px] font-bold text-primary uppercase tracking-wider ml-2" htmlFor="pesan">Pesan Anda</label>
                            <textarea
                                className="w-full bg-surface-container px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary/20 transition text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                id="pesan"
                                name="pesan"
                                placeholder="Tuliskan Deskripsi di sini..."
                                required
                                rows={4}
                                value={formData.pesan}
                                onChange={handleChange}
                                disabled={isLoading}
                            ></textarea>
                        </motion.div>
                        <motion.div variants={staggerItem} className="pt-2">
                            <motion.button
                                whileHover={isLoading ? {} : { scale: 1.02 }}
                                whileTap={isLoading ? {} : { scale: 0.98 }}
                                className="w-full bg-gradient-to-br from-[#af101a] to-[#D32F2F] text-white font-bold py-3 rounded-lg uppercase tracking-wide shadow flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Mengirim...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>KIRIM PESAN</span>
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </>
                                )}
                            </motion.button>
                            <p className="text-[10px] text-center text-zinc-400 mt-4">
                                Dengan mengirimkan pesan, Anda setuju dengan kebijakan privasi kami.
                            </p>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default FormSection;
