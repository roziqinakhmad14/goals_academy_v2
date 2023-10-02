import CornerWaveVector from "@/Components/CornerWaveVector";

export default function Preliminary () {
    return (
        <section id="preliminary" className="my-16 xs:my-20 md:my-16 lg:my-20 xl:my-24 3xl:my-32">
            <div className="flex flex-col md:flex-col-reverse">
                <div className="relative shadow-centered-spread">
                    <div className="container mx-auto flex flex-col items-center md:gap-2 xl:gap-4 py-8 xs:py-12 md:py-6 xl:py-12">
                        <i className="bi bi-quote text-primary text-28 md:text-32 lg:text-48 xl:text-64 3xl:text-80"></i>
                        <p className="md:w-8/12 my-2 md:my-0 text-center text-dark text-16 xs:text-20 md:text-10 lg:text-12 xl:text-18 3xl:text-24">Berkomitmen dalam mentransformasi tenaga pendidik profesional dan pelajar sebagai pemimpin di masa depan dengan mengedepankan kemajuan dan efektifitas di bidang riset, pendidikan dan keilmuan berbasis inovasi dan teknologi.</p>
                        <i className="bi bi-quote text-primary text-28 md:text-32 lg:text-48 xl:text-64 3xl:text-80 -scale-x-1 -scale-y-1"></i>
                    </div>
                </div>
                <div className="relative bg-secondary">
                    <CornerWaveVector
                        cornerClassName="w-10/12 md:w-4/12"
                    />
                    <div className="container-lg mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-4 xl:gap-8 py-16 xs:py-24 md:py-6 xl:py-16 text-secondary">
                        <div className="w-full md:w-4/12 rounded-lg shadow-centered-spread md:shadow-none bg-white flex justify-center items-center gap-6 md:gap-2 xl:gap-6 p-8 md:p-4">
                            <i className="bi bi-people text-72 xs:text-80 md:text-52 xl:text-80 3xl:text-96"></i>
                            <div className="w-8/12">
                                <p className="font-poppins font-bold text-28 xs:text-32 md:text-20 xl:text-32 3xl:text-56">30+</p>
                                <p className="text-dark text-16 xs:text-20 md:text-10 lg:text-12 xl:text-18 3xl:text-24">Tutor Skripsi yang berpengalaman</p>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 rounded-lg shadow-centered-spread md:shadow-none bg-white flex justify-center items-center gap-6 md:gap-2 xl:gap-6 p-8 md:p-4">
                            <i className="bi bi-rocket-takeoff text-64 xs:text-72 md:text-36 xl:text-80 3xl:text-96"></i>
                            <div className="w-8/12">
                                <p className="font-poppins font-bold text-28 xs:text-32 md:text-20 xl:text-32 3xl:text-56">7</p>
                                <p className="text-dark text-16 xs:text-20 md:text-10 lg:text-12 xl:text-18 3xl:text-24">Program Bimbingan yang telah diluncurkan</p>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 rounded-lg shadow-centered-spread md:shadow-none bg-white flex justify-center items-center gap-6 md:gap-2 xl:gap-6 p-8 md:p-4">
                            <i className="bi bi-mortarboard text-72 xs:text-80 md:text-52 xl:text-80 3xl:text-96"></i>
                            <div className="w-8/12">
                                <p className="font-poppins font-bold text-28 xs:text-32 md:text-20 xl:text-32 3xl:text-56">76</p>
                                <p className="text-dark text-16 xs:text-20 md:text-10 lg:text-12 xl:text-18 3xl:text-24">Mahasiswa Lulus bersama Goals Academy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
