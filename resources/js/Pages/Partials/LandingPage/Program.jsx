import 'swiper/css';
import { Link } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ButtonSwiper from '@/Components/ButtonSwiper';
import program1 from '/resources/img/program-dibimbing-sekali.png';
import program2 from '/resources/img/program-dibimbing-tuntas.png';
import program3 from '/resources/img/program-dibimbing-olah-data.png';
import program4 from '/resources/img/program-e-book-skripsi.png';

export default function Program () {
    const programs = {
        1: {
            id: 1,
            name: 'Dibimbing Sekali',
            slug: 'dibimbing-sekali',
            img: program1,
            excerpt: 'Capai kesuksesan skripsimu melalui bimbingan personal secara 1-on-1, sesuai dengan permasalahan pada skripsimu.',
            description: 'Capai kesuksesan skripsimu melalui bimbingan personal secara 1-on-1, sesuai dengan permasalahan pada skripsimu.',
            features: {
                times: 1,
                minDuration: 30,
                maxDuration: 60,
                category: 'Online/Offline',
                total: null,
                media: null,
                information: null
            },
            price: '47.000',
            hasDiscount: true,
        },
        2: {
            id: 2,
            name: 'Dibimbing Tuntas',
            slug: 'dibimbing-tuntas',
            img: program2,
            excerpt: 'Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 9 kali pertemuan.',
            description: 'Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 9 kali pertemuan.',
            features: {
                times: 9,
                minDuration: 40,
                maxDuration: 60,
                category: 'Online/Offline',
                total: null,
                media: null,
                information: null
            },
            price: '649.000',
            hasDiscount: true,
        },
        3: {
            id: 3,
            name: 'Dibimbing Olah Data',
            slug: 'dibimbing-olah-data',
            img: program3,
            excerpt: 'Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.',
            description: 'Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.',
            features: {
                times: 1,
                minDuration: 40,
                maxDuration: 60,
                category: 'Online/Offline',
                total: null,
                media: null,
                information: null
            },
            price: '115.000',
            hasDiscount: false,
        },
        4: {
            id: 4,
            name: 'E-Book Skripsi',
            slug: 'e-book-skripsi',
            img: program4,
            excerpt: 'Panduan berharga dengan kiat-kiat jitu untuk sukses dalam penyusunan skripsi.',
            description: 'Panduan berharga dengan kiat-kiat jitu untuk sukses dalam penyusunan skripsi.',
            features: {
                times: null,
                minDuration: null,
                maxDuration: null,
                category: null,
                total: '1-4 E-Book',
                media: 'Semua Device',
                information: 'Bebas Unduh'
            },
            price: '9.000',
            hasDiscount: false,
        },
    }

    return (
        <section id="program" className="my-16 xl:my-24 3xl:my-32">
            <div className="container mx-auto">
                <div className="flex justify-between mb-8">
                    <div className="md:w-6/12">
                        <h2 className='hidden md:inline-block'>Pilih Program Goals untuk <span className="text-primary">Solusi Skripsimu.</span></h2>
                        <h2 className='md:hidden'>Pilih Program <span className="text-primary">Tersedia.</span></h2>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <ButtonSwiper name="program-prev" direction="left" />
                        <ButtonSwiper name="program-next" direction="right" />
                    </div>
                </div>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                className='swiper-custom'
                wrapperClass="swiper-wrapper -ms-2"
                slidesPerView={"auto"}
                grabCursor={true}
                navigation={{ nextEl: ".program-next", prevEl: ".program-prev" }}
                >
                    {Object.values(programs).map(program => {return (
                        <SwiperSlide key={program.id} style={{ width: "fit-content" }} className="p-4 md:p-2 lg:p-3 xl:p-4">
                            <ProgramCard item={program} />
                        </SwiperSlide>
                    )})}
                </Swiper>
            </div>
        </section>
    )
}

function ProgramCard ({item}) {
    const features = item.features

    function generateFeature (features, feature) {
        if (feature != null & feature == features.times) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar text-primary"></i>
                    <p>{features.times}x Pertemuan</p>
                </div>
            )
        } else if (feature != null & feature == features.minDuration) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-solid fa-clock text-12 md:text-6 lg:text-10 xl:text-12 text-primary"></i>
                    <p>{features.minDuration}-{features.maxDuration} Menit</p>
                </div>
            )
        } else if (feature != null & feature == features.category) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    <p>{features.category}</p>
                </div>
            )
        } else if (feature != null & feature == features.total) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    <p>{features.total}</p>
                </div>
            )
        } else if (feature != null & feature == features.media) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    <p>{features.media}</p>
                </div>
            )
        } else if (feature != null & feature == features.information) {
            return (
                <div key={feature} className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    <p>{features.information}</p>
                </div>
            )
        }
    }

    return (
        <div className="w-72 md:w-40 lg:w-52 xl:w-72 3xl:w-[22rem] shadow-lg md:shadow-bottom-right lg:shadow-lg rounded-3xl md:rounded-lg xl:rounded-3xl overflow-hidden">
            <div className='w-full h-56 md:h-32 lg:h-40 xl:h-52 overflow-hidden'>
                <img src={item.img} alt={item.name} />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-2 lg:p-3 xl:p-6">
                <div className="flex justify-between h-12 md:h-8 xl:h-16 3xl:h-20">
                    <h4 className="w-1/2">{item.name}</h4>
                    <div className="w-1/2 text-end">
                        <h6 className="font-bold">Mulai dari</h6>
                        <h5 className="text-primary font-bold 3xl:py-0.5">IDR {item.price}</h5>
                        {item.hasDiscount ? (
                            <p className="inline text-10 md:text-6 xl:text-10 3xl:text-12 text-red-600 bg-red-200">Diskon Tersedia</p>
                        ) : ''}
                    </div>
                </div>
                <p className="my-8 md:my-2 lg:my-4 h-20 md:h-12 lg:h-16 3xl:h-28">{item.excerpt}</p>
                <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 3xl:gap-3 mb-8 md:mb-4 xl:mb-8 3xl:mb-12">
                    <p>Layanan</p>
                    {Object.values(features).map(feature => generateFeature(features, feature))}
                </div>
                <Link className="inline-block font-medium text-center py-2 md:py-1 xl:py-2 text-white bg-secondary hover:bg-primary w-full rounded-full">Daftar Sekarang</Link>
            </div>
        </div>
    )
}