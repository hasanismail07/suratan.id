import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const templateCategories = [
    {
        category: 'Pernikahan',
        description: 'Undangan digital dengan tema minimalis',
        images: ['/assets/pernikahan1.png', '/assets/pernikahan2.png', '/assets/pernikahan3.png', '/assets/pernikahan4.png', '/assets/pernikahan5.png'],
        links: ['/preview/template-01', '/preview/template-02', '/preview/template-03', '/preview/template-04', '/preview/template-05'],
    },
    {
        category: 'Khitanan',
        description: 'Undangan digital untuk acara khitanan',
        images: ['/assets/khitanan1.png', '/assets/khitanan2.png', '/assets/khitanan3.png', '/assets/khitanan4.png'],
        links: ['/preview/khitanan-01', '/preview/khitanan-02', '/preview/khitanan-03', '/preview/khitanan-04'],
    },
    {
        category: 'Ulang Tahun',
        description: 'Undangan digital untuk acara ulang tahun',
        images: ['/assets/ultah1.png', '/assets/ultah2.png', '/assets/ultah3.png', '/assets/ultah4.png'],
        links: ['/preview/ulangtahun-01', '/preview/ulangtahun-02', '/preview/ulangtahun-03', '/preview/ulangtahun-04'],
    },
];

const RelatedTemplates = () => {
    return (
        <div className="bg-[#fdf2f8] py-12">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-2xl font-bold">Template Lainnya</h2>
                {templateCategories.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="mb-4 text-xl font-semibold">{category.category}</h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                            {category.images.map((image, i) => (
                                <div key={i} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src={image}
                                            alt={`Template ${category.category} ${i + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-medium">Template {category.category} {i + 1}</h4>
                                        <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                                        <Button variant="outline" className="mt-3 w-full text-sm" asChild>
                                            <Link href={category.links[i]}>Lihat Detail</Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedTemplates;