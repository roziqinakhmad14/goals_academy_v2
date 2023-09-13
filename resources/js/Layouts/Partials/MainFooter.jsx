import logo from '/resources/img/logo-white.svg';

export default function MainFooter () {
    return (
        <footer className='bg-grey w-full'>
            <div className='container mx-auto flex flex-wrap justify-between py-16 md:py-8 lg:py-16'>
                <div className='w-6/12 md:w-3/12'>
                    <img className='h-16 md:h-12 xl:h-20' src={logo} alt="Goals Academy" />
                    <p className='my-6 sm:my-4 xl:my-6'>
                        Perum Graha Joyo Family B/14 Merjosari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144
                    </p>
                    <div className='flex gap-4 xl:gap-6'>
                        <a href='https://www.instagram.com/goalsacademy_id' target='_blank'>
                            <i className="fa-brands fa-instagram text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"></i>
                        </a>
                        <a href='https://www.tiktok.com/@goalsacademy_id' target='_blank'>
                            <i className="fa-brands fa-tiktok text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"></i>
                        </a>
                        <a href='https://www.twitter.com/goalsacademy_id' target='_blank'>
                            <i className="fa-brands fa-twitter text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"></i>
                        </a>
                        <a href='https://www.linkedin.com/company/goals-academy-id' target='_blank'>
                            <i className="fa-brands fa-linkedin text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"></i>
                        </a>
                    </div>
                </div>
                <div className='w-5/12 md:w-8/12 grid md:grid-cols-3 gap-8'>
                    <div>
                        <h5 className='font-semibold mb-4'>Produk</h5>
                        <div className='grid gap-2'>
                            <a>Dibimbing Sekali</a>
                            <a>Dibimbing Tuntas</a>
                            <a>Dibimbing Olah Data</a>
                            <a>E-book</a>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-semibold mb-4'>Perusahaan</h5>
                        <div className='grid gap-2'>
                            <a>Profil Perusahaan</a>
                            <a>Profil Tutor</a>
                            <a>Karir</a>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-semibold mb-4'>Hubungi</h5>
                        <div className='grid gap-2'>
                            <a href='https://wa.me/6285637564245' target='_blank'>(+62) 856-3756-4245</a>
                            <a href='mailto:cs@goalsacademy.id' target='_blank'>cs@goalsacademy.id</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-grey via-white to-grey h-0.5'>

            </div>
            <div className='text-center py-6'>
                Copyright 2023 <i className="fa-regular fa-copyright"></i> <span className='font-bold'>PT Sarana Edukasi Nusantara</span>
            </div>
        </footer>
    )
}