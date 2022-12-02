import { Question } from "../models/question";

export const questionsAPI: Question[] = [
    {
        question: "C'est notre premier rapport sexuel, y a-t'il besoin d'utiliser un préservatif ?",
        image : {
            name : "preservatif",
            extension : "png",
            mimetype : "image/png"
        },
        media: 6,
        choices : [
            {
                name: "Oui",
                effects: {
                    plaisir : 3,
                    sante : -1,
                    argent : -2
                }
            },
            {
                name: "Non",
                effects: {
                    plaisir : -5,
                    sante : 3,
                    argent : 1
                }
            }
        ],
        answer : "Des infections sexuellement transmissibles peuvent être présentes avant votre première relation. De plus c'est l'un des moyens de contraceptions le plus fiable."
    },
    {
        question: "Un homme me demande une fellation, que fais-je ?",
        media: 2,
        image : {
            name : "fellation",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "Je lui demande de mettre un préservatif",
                effects: {
                    plaisir : -5,
                    sante : 3,
                    argent : -2
                }
            },
            {
                name: "Je m'attelle à la tache",
                effects: {
                    plaisir : 3,
                    sante : -5,
                    argent : 1
                }
            }
        ],
        answer : "Des infections sexuellements transmissibles peuvent également se transmettre par voie bucale. C'est valable pour la femme comme pour l'homme."
    },
    {
        question: "Nous n'avons pas de préservatif, que faire ?",
        media: 3,
        image : {
            name : "grotte",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "Je lui dis de pratiquer une pénétration anale",
                effects: {
                    plaisir : 5,
                    sante : -5,
                    argent : 1
                }
            },
            {
                name: "Nous utilisons nos mains pour nous donner du plaisir réciproque",
                effects: {
                    plaisir : -5,
                    sante : -5,
                    argent : 1
                }
            }
        ],
        answer : "Les pénétrations anales ne sont pas sans risque pour les IST. Néamoins la masturbation avec vos mains entraine un risque très minime."
    },
    {
        question: "Je veux faire un cunilingus avec ma partenaire ?",
        media:1,
        image : {
            name : "digue",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "Je ne risque rien, il n'y a pas de pénétration",
                effects: {
                    plaisir : 5,
                    sante : -5,
                    argent : 1
                }
            },
            {
                name: "Il faut me protéger",
                effects: {
                    plaisir : 2,
                    sante : 5,
                    argent : -3
                }
            }
        ],
        answer : "Même dans les situations sans pénétration il faut se protéger. Il existe par exemple des digues dentaires pour se protéger lors d'un cunilingus."
    },
    {
        question: "Durant le rapport le préservatif se déchire :",
        media:9,
        image : {
            name : "urgences",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "J'irai me faire tester prochainement",
                effects: {
                    plaisir : -5,
                    sante : 0,
                    argent : 0
                }
            },
            {
                name: "Je me rends immédiatement aux urgences",
                effects: {
                    plaisir : 5,
                    sante : 0,
                    argent : 0
                }
            }
        ],
        answer : "En cas d'expositions à différentes IST il est possible de recevoir un traitement post exposition (TPE) directement aux urgences. Il doit idéalement être pris dans les 4 heures après l'expositions."
    },
    {
        question: "J'ai peur que durant le rapport le préservatif se déchire :",
        media:5,
        image : {
            name : "lubrifiant",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "J'ajoute un deuxième préservatif",
                effects: {
                    plaisir : -3,
                    sante : -5,
                    argent : -4
                }
            },
            {
                name: "Je lubrifie bien le tout",
                effects: {
                    plaisir : 5,
                    sante : 3,
                    argent : -1
                }
            }
        ],
        answer : "En cas d'expositions à différentes IST il est possible de recevoir un traitement post exposition (TPE) directement aux urgences. Il doit idéalement être pris dans les 4 heures après l'expositions."
    },
    {
        question: "J'ai eu une IST il y a plusieurs années :",
        media:8,
        image : {
            name : "secret",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "J'en informe mon partenaire du moment",
                effects: {
                    plaisir : -10,
                    sante : 2,
                    argent : 0
                }
            },
            {
                name: "Je ne dis rien, je profite du moment",
                effects: {
                    plaisir : 5,
                    sante : -5,
                    argent : 0
                }
            }
        ],
        answer : "Selon le type d'IST sa transmission reste possible même plusieurs années après ! Il est toujours mieux d'en parler avec son partenaire et de se protéger."
    },
    {
        question: "Je suis séropositif sous traitement, je peux avoir une relation sexuelle sans préservatif en sécurité :",
        image : {
            name : "virus",
            extension : "png",
            mimetype : "image/png"
        },
        media: 10,
        choices : [
            {
                name: "Oui",
                effects: {
                    plaisir : 2,
                    sante : 0,
                    argent : 0
                }
            },
            {
                name: "Non",
                effects: {
                    plaisir : -2,
                    sante : 0,
                    argent : 2
                }
            }
        ],
        answer : "Aujourd'hui les traitements contre le VIH empèchent la transmission de celui-ci."
    },
    {
        question: "Ma partenaire est alergique au latex :",
        media:4,
        image : {
            name : "latexFree",
            extension : "png",
            mimetype : "image/png"
        },
        choices : [
            {
                name: "Elle prend sur elle",
                effects: {
                    plaisir : -10,
                    sante : -5,
                    argent : 0
                }
            },
            {
                name: "Il existe des préservatifs sans latex",
                effects: {
                    plaisir : 3,
                    sante : 2,
                    argent : -4
                }
            }
        ],
        answer : "Et oui il existe des préservatifs sans latex."
    },
    {
        question: "Mon partenaire masculin ne souhaite pas mettre de préservatif car ils diminuent le plaisir :",
        image : {
            name : "presFeminin",
            extension : "png",
            mimetype : "image/png"
        },
        media:7,
        choices : [
            {
                name: "Je renonce au rapport",
                effects: {
                    plaisir : -5,
                    sante : 0,
                    argent : 0
                }
            },
            {
                name: "Il existe des préservatifs féminin",
                effects: {
                    plaisir : 5,
                    sante : 3,
                    argent : -4
                }
            }
        ],
        answer : "Les préservatifs féminins étant plus fin ils augmentent les sensations."
    }
]