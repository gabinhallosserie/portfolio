export default function Experiences() {
    const experiences = [
        {
            title: "Développeur Web Full Stack (Stage BTS SIO - 1ère année)",
            company: "Lycée Emile Peytavin",
            duration: "Juin 2023 - Juillet 2023",
            description: "Développement d'une application web pour la gestion des prises de rendez-vous pour les réunions parents-professeurs. Utilisation de HTML, CSS, JavaScript, et PHP avec une base de données MySQL."
        },
        {
            title: "Développeur Web Backend (Stage BTS SIO - 2ème année)",
            company: "Collège André Chamson",
            duration: "Janvier 2024 - Février 2024",
            description: "Création d'une API RESTful pour une application web de création de cartes mentales pour aider les collégiens dans leurs réfléxions de projet d'orientation. Utilisation de NextJS, Prisma et MySQL."
        }
    ]

    return (
        <div className={"w-2/3 flex flex-col justify-start items-start gap-10 mx-auto mb-20"}>
            <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-10"}>
                {experiences.map((experience, index) => (
                    <div
                        className={"flex flex-col items-start border border-gray-500 rounded-md p-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"}
                        key={index}>
                        <div className={"w-full flex justify-between items-center"}>
                            <div className={"flex flex-col justify-start items-start"}>
                                <p className={"font-bold text-md"}>{experience.title}</p>
                                <span className="font-light text-xs italic">{experience.company}</span>
                            </div>
                        </div>

                        <p className={"text-sm font-medium mt-5 line-clamp-4"}>{experience.description}</p>

                        <hr className={"w-full h-px bg-gray-300 mt-5"}/>

                        <div className={"w-full flex justify-between items-center mt-5"}>
                            <p className={"text-xs font-light text-gray-500"}>{experience.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}