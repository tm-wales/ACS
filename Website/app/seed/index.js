/* Module dependencies. */
/* ------------------------------------------------ */
    const log  = pygmy.util.logger
    const websiteTitle = pygmy.config.app.websiteTitle
/* ------------------------------------------------ */

/* ------------------------------------------------ */


/* Seed here */
/* ------------------------------------------------ */

let output = {
    seedPages: () => {
        // setup data
        let pages = [
            {
                name: 'home',
                templatePath: 'home.ejs',
                title: websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/resources/img/start.png',
                        video: '/resources/video/intro.mp4'
                    },
                    headerTitle: {
                        text: 'Architectual Cleaning Services'
                    },
                    headerSubtitle: {
                        text: 'Making Buildings Beautiful Again'
                    },
                }
            },
            {
                name: 'benefits',
                templatePath: 'benefits.ejs',
                title: 'Benefits of DOFF & TORC | ' + websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/resources/img/header/benefits.jpg'
                    },
                    headerTitle: {
                        text: 'Why DOFF & TORC?'
                    },
                    headerSubtitle: {
                        // text: 'Structural Timber is used in 70% of homes constructed in the world, but what benefits does timber frame have over traditional construction methods?'
                        text: 'The latest technology'
                    }
                }
            },
            {
                name: 'about',
                templatePath: 'about.ejs',
                title: 'About Us | ' + websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/resources/img/header/about.jpg'
                    },
                    headerTitle: {
                        text: 'ACS Ltd'
                    },
                    headerSubtitle: {
                        text: 'Specialist Facade Cleaning'
                    },
                    text: {
                        text: '<p>Architectural Cleaning Services Ltd is an industry-leading company focussing on the cleaning and care of structural façades.</p><p>In a world where we are surrounded by structures, with modern buildings neighbouring much older and historical buildings, all these structures and their varying façades need a specialist and dynamic approach to cleaning. </p><p>A clean presentation is appealing to the eye and the preservation of the façade a priority to ensure the life of the structure. Using innovative and specialist systems, including DOFF and TORC, we have the expertise to accommodate any type of cleaning project from cladding cleaning right through to sympathetic works on aged and fragile façades. Our industry-trained and experienced technicians provide a complete holistic solution to clean, restore and preserve any façade.</p><p>Architectual Cleaning Services Ltd can undertake various types and sizes of projects and always with a professional attitude and consideration for the building and the surrounding environment. We ensure a high level of service, working closely with project management teams to deliver contracts on time and within budget. </p><p>Some of our clients include Willmott Dixon, Kier, Collins Construction, John Weaver, ISG PLC, Beard Construction. </p><p>ACS Ltd are fully insured across the UK for all site works and use of access, with all relevant certification in the form of CSCS, IPAF and PASMA cards, accreditation to CHAS, SAFE Contractor and Construction line and we are <a href="https://www.stonehealth.com">StoneHealth</a> approved. We can provide method statements, risk assessments and COSHH details for all our specialist services. </p>'
                    },
                }
            },
            {
                name: 'cases',
                templatePath: 'cases.ejs',
                title: 'Our Work | ' + websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/vendors/img/image-placeholder.png'
                    },
                    headerTitle: {
                        text: 'Showing our work'
                    },
                    headerSubtitle: {
                        text: 'to giving confidence in your choices'
                    }
                }
            },
            {
                name: 'case',
                templatePath: 'cases.ejs',
                title: 'Case Studies | ' + websiteTitle,
                description: '',
                keywords: '',
            },
            {
                name: 'news',
                templatePath: 'news.ejs',
                title: 'News | ' + websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/resources/img/header/news.jpg'
                    },
                    headerTitle: {
                        text: 'Latest News'
                    },
                    headerSubtitle: {
                        text: 'From ACS'
                    }
                }
            },
            {
                name: 'newsItem',
                templatePath: 'newsItem.ejs',
                title: 'News | ' + websiteTitle,
                description: '',
                keywords: '',
            },
            {
                name: 'products',
                templatePath: 'products.ejs',
                title: 'Services | DOFF | TORC' + websiteTitle,
                description: '',
                keywords: '',
                content: {
                    header: {
                        backgroundImage:'/resources/img/header/services.jpg'
                    },
                    headerTitle: {
                        text: 'Whatever you need'
                    },
                    headerSubtitle: {
                        text: 'to make your buildings beautiful again'
                    }
                }
            },
            {
                name: 'productGroup',
                templatePath: 'productGroup.ejs',
                title: 'Services | DOFF | TORC' + websiteTitle,
                description: '',
                keywords: '',
            },
            {
                name: 'productsSub',
                templatePath: 'productSub.ejs',
                title: 'Services | ' + websiteTitle,
                description: '',
                keywords: '',
            },
            {
                name: 'jobs',
                templatePath: 'jobs.ejs',
                title: 'Jobs | ' + websiteTitle,
                description: 'Jobs available at ' + websiteTitle,
                keywords: websiteTitle + ',jobs',
                content: {
                    header: {
                        backgroundImage:'/resources/img/header/jobs.jpg'
                    },
                    headerTitle: {
                        text: 'We\'re Hiring'
                    },
                    headerSubtitle: {
                        text: 'Jobs @ ACS'
                    }
                }
            }
        ]

        //Seed new users
        pages.forEach((seed) => {
            pygmy.pages.amend(seed, true)
        });
    },
    seedProducts: () => {
        // setup data
        let products = [
            {
                name: "Clean",
                order: 1,
                // iconPath:  "/resources/img/services/clean.jpg",
                iconPath: "/resources/img/header/clean.jpg",
                mainDisplay: {
                    type: 'Image',
                    path: '/resources/img/header/clean.jpg',
                },
                content: {
                    summary: '<p>We use a variety of different methods and systems to provide a complete and universal solution to facade cleaning: Traditional jet washing; DOFF super-heated steam cleaning; TORC media blasting; Traditional shot blasting.</p>',
                    main: '<p>These systems allow us to specialise in the cleaning of all types of building and structural facades. We have solutions for all natural and fabricated stone, brick and block work, encompassing everything from new-build structures to Grade I & II psted buildings, block paving and cladding and steel structure cleaning. Consideration for the surface type and requisite cleaning finish will determine the use of mechanical or chemical cleaning solutions.</p><p>The removal of unsightly dirt, grime and pollution build-up, accidental spillages and staining occurring during construction, unwanted paint or organic matter is imperative for creating an appealing presentation and allowing the structures natural aesthetic to be highlighted. </p>'
                },
                subProducts: [
                    {
                        name: "DOFF super-heated steam cleaning",
                        order: 1,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Clean/DOFF-Integra-Hero-Slide.png',
                        },
                        content: {
                            summary: '<p>Deep, gentle and sensitive steam cleaning with little to no risk of damage to depcate facades; used for more sensitive works where high-pressure cleaning is not a viable option, such as listed/heritage sites, aged and brittle block or brick work and aged sandstone features. </p>',
                            keyFacts: [
                                'Super-heated water system reaching temperatures up to 150°C',
                                'Chemical-free',
                                'Environmentally friendly',
                                'Leaves no harmful residue',
                                'Surface dries in minutes preventing long-term damage caused by trapped moisture',
                                'Cleans a variety of surfaces: <p>Brick, Stone, Concrete, Tiled (glazed and caustic), Wood,	Faience and terracotta.</p>',
                                'Used to remove:<p>Paint coatings (many oil and plastic types), Certain types of graffiti, Bird or vermin fouling, Algae, moss and fungi, Wax coatings, Chewing gum, Bitumen, oil and grease.</p>',
                            ]
                        },
                    },
                    {
                        name: "TORC media blasting",
                        order: 2,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Clean/TORC.png',
                        },
                        content: {
                            summary: '<p>Best suited to well-maintained and strong facades, where the substrate is not brittle or breaking, for a deep, intensive clean, removing aged and defective coatings and moss, algae and lichen from brick and block work and sandstone features. </p>',
                            keyFacts: [
                                'Sensitive and efficient method of cleaning masonry',
                                'Modulised nozzle creating a swirling vortex using low air pressure, low volumes of water and a safe, inert granulate',
                                'Granulate contains less than 1% quartz and no other form of crystalline sipca ',
                                'Non-toxic',
                                'Environmentally friendly',
                                'Cleans a variety of surfaces: <p>Stone, Brick, Terracotta, Ceramic tiles, Glass, Faience, Concrete</p>',
                                'Used to remove:<p>Carbon sulphation, lime and cement-based paints, Paint and plaster residues, Some old oil-based paints, Oxidised bitumen, limescale, Efflorescence</p>',
                                'Can also be used to remove:<p>Oxidisation and sulphation from brass, bronze, copper and anodised aluminium.</p>',
                            ]
                        },
                    },
                    {
                        name: "Traditional shot blasting",
                        order: 3,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Clean/blast-machine.jpg',
                        },
                        content: {
                            summary: '<p>Used for the removal of plaster and defective paintwork and heavy carbon staining on brick and block work and pre-fabricated concrete panels and for etching and preparations works in readiness for new coatings and spray-on sealants.</p><p>We use 1440NC blast machines. It has an expendable abrasive capacity of 75kg with overall dimensions of 1070mm high x 670mm x 800mm. This machine offers twice the capacity of the 1028 machine, allowing it to be used on all sized projects. The design of this unit allows the machine to be moved through standard doorways and is a very popular choice on stone renovation projects.</p>',
                            keyFacts: [
                                'Abrasive types <p>All commercially available dry abrasives - metallic, garnet, aluminium, plastic, glass, blended, specialist, etc, excluding soda and calcium carbonate</p>',
                                'Can be used with a wide range of JBlast expendable & recyclable media',
                                'In-house blasting booth',
                                'Pressure regulator for accurate control of air pressure and blast results',
                                'Applications <p>Wide variety of blasting work including steel, stone, alloys & wood</p>'
                            ]
                        },
                    },
                    {
                        name: "Traditional jet washing",
                        order: 4,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Clean/jet-washing.jpg',
                        },
                        content: {
                            summary: '<p>Used primarily for cleaning cladding and traditional brick work facades, block paving and external steel-work structures</p>',
                            keyFacts: [
                                'Pressure washers work by blasting water at high velocity<p>The power of this water stream is often sufficient to pft stains and mildew without the need for harmful chemicals.</p>',
                                'It saves water <p>The pressure of the water jets means up to 80% less water is used to provide effective cleaning when compared to manual washing.</p>',
                                'It’s Eco-Friendly <p>No nasty chemicals are needed, just high-pressure water.<p>',
                                'It saves time<p>It takes a skilled jet washer a tenth of the time to complete the average project using this method than standard manual washing.</p>'
                            ]
                        },
                    },
                ]
            },
            {
                name: "Restore",
                order: 2,
                iconPath:  "/resources/img/services/restore.png",
                mainDisplay: {
                    type: 'Image',
                    path: '/resources/img/header/restore.png',
                },
                content: {
                    summary: '<p>Restoring the facade of a building or structure helps keep the substrate in good condition, increasing the aesthetic appeal and allowing the natural beauty to shine through. Removing any unpleasant or unwanted staining or paintwork aids in the prevention of damage to the structure from chemical erosion and gives the facade a complete cosmetic overhaul. </p>',
                    main: '<p>Graffiti and unwanted or defective paintwork, carbon staining, bitumen and tar spills and stains and efflorescence build-up are all easily removed using our many specialist cleaning systems and solutions, including DOFF super-heated steam cleaning and TORC media blast cleaning. </p> <p> With the surface material of the building or structure being taken in to account, a full evaluation of the correct restoration procedure is conducted to ensure the relevant cleaning system is used, in order to achieve a complete and satisfactory result. </p>'
                },
                subProducts: [
                    {
                        name: "Graffiti/paint removal",
                        order: 1,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Video',
                            path: '/resources/video/graffiti-removal.mp4',
                        },
                        content: {
                            summary: '<p>Unwanted Graffiti can be a difficult issue to deal with. Many areas with existing graffiti will see propfic growth over time. Even after removal, you will find repeated applications. Our <a href="/services/Preserve">preserve</a> applications can help combat future issues.</p><p>Using either chemical or mechanical solutions, various types of paint, including but not pmited to spray-paints, cellulose, lead-based, water-based, can be removed from all building and structure façades. </p>',
                            keyFacts: [
                                'Cause <p>Intentional use of harmful spray or other paint or markers to deface a substrate or surface.</p>',
                                'Removal <p>Using a mixture of both paint softening poultices and super-heated steam, namely the DOFF super-heated steam cleaner, we can clean off the brick with very little to no ghosting or outpnes remaining. The length of time the unwanted art work has been in place will usually determine the success of removal - either totally or partially. If the graffiti leaves an outpne or ghosting, more aggressive methods will then need to be undertaken by way of media blast cleaning. This will provide an overall deep clean meaning the whole area will need to be treated to achieve a uniformed finish, as a locapsed cleaning option would not be sufficient.',
                                'Prevention<p>Surfaces are easier to clean when treated with Anti-Graffiti Coatings</p>',
                            ]
                        },
                    },
                    {
                        name: "Efflorescence removal",
                        order: 2,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Restore/efflorescence.jpg',
                        },
                        content: {
                            summary: '<p>Efflorescence is a salty substance that is usually white/grey and powdery. It can be found on many masonry surfaces, normally due to lack of seapng and the moisture present. When water evaporates from the materials surface it leaves behind these salty deposits (efflorescence). </p><p>Salt deposits can be easily removed with little to no damage and without leaving ‘ghosting’ or shadowing from the stains.</p>',
                            keyFacts: [
                                'Cause<p>Water-soluble salts dissolved in rainwater, construction water or groundwater migrate to the surface upon drying. As the surface water evaporates, white crystalline salts form on the surface.</p>',
                                'Removal<p>using salt reducing poultices and high temperature steam via the DOFF system, it is possible to remove the staining with any re-growth being stalled for long periods before treatment is required again.</p>',
                                'Prevention<p>Protect wall cavities and masonry products from moisture during construction. Let masonry dry before cleaning. </p>',
                            ]
                        },
                    },
                    {
                        name: "Carbon staining removal",
                        order: 3,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Video',
                            path: '/resources/video/carbon-stain.mp4',
                        },
                        content: {
                            summary: '<p>A build-up of carbon monoxide that settles into the surface of the substrate, eating away at the stone and altering the physical appearance, which once removed, allows the restored stonework to have an ‘as new’ and fresh look.</p>',
                            keyFacts: [
                                'Cause <p>This staining is caused by the pollution created during the current or previous burning of fossil fuels – coal, oil, gasopne, etc which leaves a sticky, water-resistant film over the face of the substrate. The airborne pollutants adhere to the film and progressively build-up on the surface. On acid-sensitive carbonate surfaces, acid rain will erode the built-up carbon from projecting elements, leaving such surfaces with pronounced streaking. In severe cases, calcium sulphate crusts can form in carved recesses which will weaken the underlying stone.</p>',
                                'Removal<p>Cleaning can be a mixture of both carbon reducing poultices and DOFF steam cleaner or for more aggressive deposits, TORC media blast cleaning.</p>',
                                'Prevention<p>Keep moisture out of the substrate by protecting it with appropriate sealants and water repellents; reduce the sensitivity to acid rain on carbonate substrates with conserving and preserving treatments.</p>'
                            ]
                        },
                    },
                    {
                        name: "Bitumen and tar removal",
                        order: 3,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Restore/cracked-tar.jpg',
                        },
                        content: {
                            summary: '<p>Used as a weather-proofing or protective coating on unseen areas, if it gets spilled or splashed on clean or natural stone façades, it creates a very unattractive look which can, in most cases, be completely removed using DOFF or TORC either as stand-alone machines or with mild chemical solutions.</p>',
                            keyFacts: [
                                'Cause <p>Staining can occur from road/car park construction or repair; roof construction or repair; or below-grade waterproofing.</p>',
                                'Removal <p>removal is generally done by breaking down the hard and worn surface area, then using the DOFF super-heated steam system or the TORC media blast system. Tar remover and fast acting stripper can also be used where the DOFF cannot.</p>',
                                'Prevention <p>Cover the adjacent substrates with protective films or sheets during construction.</p>',
                            ]
                        },
                    },
                ]
            },
            {
                name: "Preserve",
                order: 3,
                iconPath:  "/resources/img/services/preserve.jpg",
                mainDisplay: {
                    type: 'Image',
                    path: '/resources/img/header/preserve.jpg',
                },
                content: {
                    summary: '<p>To preserve the life of any facade, preventative measures must be taken in the form of a complete clean and restore of the facade, followed by an apppcation of specialist coatings. These coatings reduce the likelihood of any/further damage by acting as a protective layer between the facade and the causes of the damage.</p>',
                    main: '<p>Prolific graffiti offending on a facade not only spoils the aesthetic appeal of a building or structure but the chemicals in the paint can seep through into the substrate and damage stonework and corrode metalwork. Similarly, rainfall, extreme changes in climate and exposure to the elements can also cause erosion and corrosion of stone and metal facades resulting in easily preventable repairs being required.</p>'
                },
                subProducts: [
                    {
                        name: "Anti-graffiti coating",
                        order: 1,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Preserve/antigraffiti-coating2.jpg',
                        },
                        content: {
                            summary: '<p>A sacrificial coating appped to the facade blocking the paint and paint chemicals from seeping into the substrate underneath. In circumstances of repeat graffiti, the coating gets washed away with the paint, leaving the undamaged surface beneath clean and ready for a top-up apppcation, maintaining the protection and preserving the life of the facade.</p>',
                            keyFacts:[
                                'Sacrificial anti-graffiti coating for brick and porous surfaces that need to breathe<p>o	AGS Graffi 1 or AGS Graffi 1 ES coating</p><p>o	Up to 10-year protection</p><p>o	Permeable, fully reversible water-based crystalline micro wax coating</p><p>o	Suitable for use on all masonry surfaces and most porous surfaces</p><p>o	Prevents penetration of atmospheric pollutants into the substrate</p><p>o	Easy to clean off and re-apply</p>',
                                'Permanent anti-graffiti coating for hard surfaces or brick and stone where permeability is not important.<ul<p>o	AGS Graffi coating</p><p>o	Long lasting permanent protection</p><p>o	Suitable for use on non-porous, hard surfaces which are usually painted</p></ul>',
                            ]
                        },
                    },
                    {
                        name: "Waterproof coating",
                        order: 2,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Preserve/waterproof.jpg',
                        },
                        content: {
                            summary: '<p>a specialist coating that allows the facade to breath and move with the natural expansion and contraction that occurs during climate changes. Any penetrations in the substrate need to be sealed or filled in order for the full effectiveness of the protective layer to be reached. Unfilled or unsealed damage will allow water to pass through the protective coating rendering it redundant and diminishing its protective properties. </p>',
                            keyFacts:[
                                'Coated using KEIM Lotexan®',
                                'Sipcone-based repellent and dust suppressant treatment',
                                'Soaks into substrate creating a breathable but protective membrane',
                                'Prevents erosion from water, adverse weather conditions and pollutants',
                                'Prevents the absorption of water into the permeable façade, solving potential damp issues'
                            ]
                        },
                    },
                    {
                        name: "Decorative coating",
                        order: 3,
                        iconPath:  "/vendors/img/image-placeholder.png",
                        mainDisplay: {
                            type: 'Image',
                            path: '/resources/img/services/Preserve/decorative coating.jpg',
                        },
                        content: {
                            summary: '<p>We use a modern sol-Silicate based paint for use on mineral and previously painted substrates. </p><p>Our paint is a highly developed multipurpose exterior sol Silicate paint system based on a combination of potassium Silicate and sipca sol binding agents, forming a chemical bond to mineral substrates and a mechanical bond to existing paint coatings.</p><p>It is ideal for apppcation onto both previously painted and mineral substrates, combining the benefits of a classic mineral paint with simplicity of apppcation.</p><p>This is a modern, innovative mineral paint which creates pghtfast and UV resistant coatings with enhanced condensation resistance which are extremely durable and resistant to weathering.</p>',
                            keyFacts: [
                                'Extreme long life/durable',
                                'Weathering protection/waterproof',
                                'Breathable/highly moisture vapour permeable',
                                'Economical and easy to apply',
                                'Inherently incombustible',
                                'For use on mineral and previously painted substrates',
                                'Low VOC and no solvents',
                                'pghtfast/colourfast and UV stable',
                                'Silicate matt surface appearance',
                                'Environmentally friendly, ISO14001',
                            ]
                        },
                    }
                ]
            }
        ]
        //Seed products
        const Product = pygmy.models.model.Product.schema
        let state = 0;
        products.forEach((seed) => {
            let query = {name : seed.name}
            let update = seed
            let options = { upsert: true, new: true, setDefaultsOnInsert: true };

            // Find the document
            Product.findOneAndUpdate(query, update, options, function(err, result) {
                if (err) {
                    log.error("Products: update error (" + err + ')')
                    return;
                }

                // If nothing is found, add it
                if(!result) {
                    Product.create(seed, err => {
                        if(err) {
                            log.error("Products: create error (" + err + ')')
                        } else {
                            log.info("Products: Added (" + seed.name + ")")
                        }
                    });
                }
            // do something with the document
            });
        });
    },
    seedCases: () => {
        // setup data
        let caseStudies = [
            {
                name: 'Cardiff Crown Court',
                featured: true,
                client: 'Cardiff Crown Court',
                location: 'Cardiff',
                service: ['Clean'],
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Cardiff Crown Court/28575746_330949150642662_7791288799397202024_n.jpg',
                        after: '/resources/img/Cases/Cardiff Crown Court/28827122_330948957309348_7031291519717095571_o.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28471782_330949140642663_7068550138364916835_n.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28515297_330949173975993_2760652988979231728_o.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28516173_330948980642679_6887660423492343987_o.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28619227_330948950642682_9106103756662569562_o.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28783073_330949170642660_8194652192378708128_n.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Cardiff Crown Court/28870451_330948203976090_6920855578492073982_n.jpg',
                            type: 'Before',
                            order: 1
                        }
                    ],
                },
                text: {
                    summary: 'Sensitive cleaning works in a heavy pedestrian area in Cardiff crown court',
                    other: '<p>We cleaned from 8am to 430pm Monday to Friday with little to no disruption to the general pubpc or any of the staff, utilising our Doff super heated steam cleaning equipment we were able to remove some of the heaviest algae and dirt and grime deposits we have seen on a main entrance steps before.</p><p>Not only is this dangerous, but it also makes the centre piece of any building look tired and unwelcoming for its patrons and staff, using only pure steam and no chemicals offering a completely environmentally friendly process, we were able to carry out and complete a sympathetic clean to the area causing no damage to the aged sandstone feature, and present the client with another job well done by ACS making buildings beautiful again.</p><p>On the last day of the contract, our staff and operations director were inundated with remarks on the level of cleaning produced and the fact that they were proud to see a tired looking entrance become inviting once more.</p>'
                },
                keyFacts: [
                    {
                        main: '50',
                        sub: 'm2'
                    },
                    {
                        main: 'DOFF',
                        sub: 'system'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Commonwealth Exchange London',
                featured: false,
                client: 'Commonwealth Exchange London',
                location: 'London',
                service: ['Restore'],
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Commonwealth Exchange London/28472071_330963010641276_5209481494189249348_2n.jpg',
                        after: '/resources/img/Cases/Commonwealth Exchange London/28576772_330963047307939_4095861261565735525_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Commonwealth Exchange London/28576266_330963007307943_7185579201387283534_n.jpg',
                            type: 'During',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Commonwealth Exchange London/28661071_330963003974610_2006799470634124006_n.jpg',
                            type: 'During',
                            order: 1
                        }
                    ],
                },
                text: {
                    summary: 'Working on the commonwealth building was a challenge just to get approved to get on site, undergoing rigourous security checks and meeting the accreditation requirements of the main contractor were hard, but we are proud to say we met the right criteria to carry out the works. Unfortunately due to security we could only take pictures of our test samples.',
                    other: "<p>Using our peelaway system designed for works on depcate and intricate stone work, we carried out various samples in a controlled and secure area working only metres away from MP's and Parliament members.</p><p>Working in a similar fashion to that of the paint softener psted above, we were able to offer out client a completely mechanical free solution to removing aged paintwork from one of the UK's most prestigious buildings, low noise, low odour, low risk was the name of game and we delivered as promised and on time.</p>"
                },
                keyFacts: [
                    {
                        main: 'Security',
                        sub: 'clearance'
                    },
                    {
                        main: 'Peelaway',
                        sub: 'system'
                    }
                ],
                date: '1900-01-01',
            },
            {
                name: 'Fish Island Stratford',
                featured: false,
                client: 'Hill Partnership',
                service: ['Clean'],
                location: 'Stratford, London',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Fish Island Stratford/29497288_336718183399092_5459556180817358165_n.jpg',
                        after: '/resources/img/Cases/Fish Island Stratford/29511839_336720336732210_2645411269820933876_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Fish Island Stratford/29497756_336718176732426_6245037705714251864_n.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Fish Island Stratford/29541781_336720333398877_493699931732357809_2.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Fish Island Stratford/29595273_336718106732433_3033102915864464270_n.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Fish Island Stratford/29512381_336718113399099_8012400870804916524_n.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Fish Island Stratford/29512819_336718110065766_7772224182665473116_n.jpg',
                            type: 'Before',
                            order: 1
                        }
                    ],
                },
                text: {
                    summary: "Ongoing decorative finish Shot Blasting works. Further to our approved samples and our first week into the contract, Hill are so impressed with both our H&S awareness and quality of our works, we are already into negotiations for the remaining buildings being built and about to be built over the next 6 months",
                    other: "<p>ACS were called in to carry out on site shot blasting to the pre casted concrete support pillars. </p><p>The reason for this work was the client had decided he would like to have an exposed aggregate decorative finish to the columns to create a rough cast look, ACS carried out a sample day in January 2018 and subsequently got selected and awarded the contract at the end of February 2018, based on the quality of that sample over three other competitors samples, and then secured the job with competitive pricing and the right attitude. Photos below show the site and before and after samples.</p>"
                },
                keyFacts: [
                    {
                        main: 'Large',
                        sub: 'Site'
                    },
                    {
                        main: 'Shot',
                        sub: 'Blasting'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Huller House - Cheese Factory Phase 1',
                featured: true,
                client: 'Cheese Factory',
                service: ['Clean'],
                location: 'Bristol',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Huller House - Cheese Factory Phase 1/28514930_330961267308117_3809684663087861399_o.jpg',
                        after: '/resources/img/Cases/Huller House - Cheese Factory Phase 1/28660328_330961257308118_1275913719849215898_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Huller House - Cheese Factory Phase 1/28514930_330961267308117_3809684663087861399_o.jpg',
                            type: 'Before',
                            order: 1
                        }
                    ],
                },
                text: {
                    summary: "ACS were commissioned over multiple phases, for both the Doff Super heated steam cleaning and Torc soft media blast systems, we were asked to get involved on one of the most specialists projects we have undertaken to date, we were required to steam clean and remove years of contamination from pigeon guano for the main contractor to be able to commission the area for construction development.",
                    other: "<p>Further to successful completion of the 5th floor, we were engaged to clean the remaining 4 floors to assist in depvering the building in a clean and sterile condition, thus enabling the main contractors work force to have a suitable and safe working environment, without the risk of harmful toxins becoming airborne during the construction phase.</p>"
                },
                keyFacts: [
                    {
                        main: 'DOFF',
                        sub: 'System'
                    },
                    {
                        main: 'TORC',
                        sub: 'Blasting'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Huller House - Cheese Factory Phase 2',
                featured: false,
                client: 'Cheese Factory',
                service: ['Clean'],
                location: 'Bristol',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Huller House - Cheese Factory Phase 2/28685969_330961980641379_3564198997053901564_n.jpg',
                        after: '/resources/img/Cases/Huller House - Cheese Factory Phase 2/28472160_330962013974709_8666464357512976562_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Huller House - Cheese Factory Phase 2/28576302_330961843974726_7902761489077244854_n.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Huller House - Cheese Factory Phase 2/28782890_330961890641388_5388807141786083989_n.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Huller House - Cheese Factory Phase 2/28472228_330961937308050_6262076744736270313_n.jpg',
                            type: 'After',
                            order: 3
                        }
                    ],
                },
                text: {
                    summary: "Further to successful completion of phase 1, ACS were then engaged to clean down the external features of the building by way of utilising soft media blasting to reveal the beautiful architecture that was hidden by decades of growth, carbon build up and general dirt and grime.",
                    other: ""
                },
                keyFacts: [
                    {
                        main: 'TORC',
                        sub: 'Blasting'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Huller House - Cheese Factory Phase 3',
                featured: true,
                client: 'Cheese Factory',
                service: ['Restore'],
                location: 'Bristol',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Huller House - Cheese Factory Phase 3/28827760_330962340641343_3373272218247905806_o.jpg',
                        after: '/resources/img/Cases/Huller House - Cheese Factory Phase 3/28617005_330962377308006_5404833701176751252_o.jpg'
                    },
                },
                text: {
                    summary: "ACS were commissioned once more on the project, to undertake the paint removal from the internal walls, the walls pictured below form part of the living quarters in some very high rise apartments costing upward of a million pounds, taking this project on was not easy as explained below.",
                    other: "<p>Working with this type of paint is always difficult, having been in place for decades the paint is a nightmare to remove by blasting alone, we had to pay careful attention not to score the face of the brick with heavy blasting.</p><p>Instead we used an environmentally friendly paint softener, which is capable of removing up to twenty layers of paint in a single apppcation, the softener after its recommended dwell time turn into a rubber sheet and is peeled of in large section taking multiple layers of the aged coating of the brick work.</p><p>Once removed a mild blast abrasive is used to clean up the area where the softener is unable to penetrate depvering the results you see below.</p>"
                },
                keyFacts: [
                    {
                        main: 'Environmentally',
                        sub: 'Friendly'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'New Wing - Lakeshaw',
                featured: false,
                client: '',
                service: 'Clean',
                location: 'Unknown',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/New Wing - Lakeshaw/28575994_330972843973626_4269995745290366601_n.jpg',
                        after: '/resources/img/Cases/New Wing - Lakeshaw/28701582_330972703973640_8849716805741095882_o.jpg'
                    },
                },
                text: {
                    summary: "Another amazing job completed with appraisals from the client to the ACS team here at the new wing Lakeshaw. specialist DOFF cleaning photographed here with before and after shots! Great work guys! For all enquiries contact Dale Thomas on 01792 763380.",
                    other: ""
                },
                keyFacts: [
                    {
                        main: 'DOFF',
                        sub: 'System'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Sandhurst Royal Military Academy',
                featured: true,
                client: '',
                service: ['Restore','Clean'],
                location: 'Sandhurst',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Sandhurst Royal Military Academy/28685786_330957323975178_3157839746088696300_n.jpg',
                        after: '/resources/img/Cases/Sandhurst Royal Military Academy/28661300_330957403975170_7651411682415053635_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Sandhurst Royal Military Academy/28576461_330957400641837_2790030529205947722_n.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Sandhurst Royal Military Academy/28685125_330957443975166_3152086217244393687_n.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Sandhurst Royal Military Academy/28701053_330957460641831_1687412956580675940_o.jpg',
                            type: 'Before',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Sandhurst Royal Military Academy/28796110_330957453975165_1762185423970917506_n.jpg',
                            type: 'After',
                            order: 4
                        },
                        {
                            img: '/resources/img/Cases/Sandhurst Royal Military Academy/28661246_330957397308504_8357150028854704196_n.jpg',
                            type: 'After',
                            order: 5
                        }
                    ],
                },
                text: {
                    summary: "Working closely with the main contractor on this project, we were asked to clean down a number of buildings, monuments and blast and paint a number of iron features like a weather cock and railings, using a mixture of both media and steam cleaning we delivered our package on time and exceeded quality expectations.",
                },
                keyFacts: [
                    {
                        main: 'Large',
                        sub: 'Site'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Swansea Guild Hall',
                featured: true,
                client: 'Swansea City Council',
                service: ['Restore','Clean'],
                location: 'Swansea',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Swansea Guild Hall/28471936_330944553976455_2277717852864654858_n.jpg',
                        after: '/resources/img/Cases/Swansea Guild Hall/28472082_330955967308647_6444193386746637851_n.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/Swansea Guild Hall/28424888_330955940641983_9027954116638239131_o.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Swansea Guild Hall/28471770_330944523976458_8021755200136914806_n.jpg',
                            type: 'After',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Swansea Guild Hall/28514942_330956060641971_1296558122038537860_o.jpg',
                            type: 'During',
                            order: 3
                        }
                    ],
                },
                text: {
                    summary: "After this contract had finished we were awarded a second and third phase on the project, and invited to attend the award where the mayor of Swansea paid special tribute to ACS for a job well done.",
                    other: "Working on one of Swansea's most iconic landmarks, the clock tower looks out over Swansea's remarkable coastline and stands proud in the heart of the city centre, using the Doff we were able to clean years of dirt and grime with ease producing an almost as new finish to the spec and depght of Swansea council members."
                },
                keyFacts: [
                    {
                        main: 'Large',
                        sub: 'Landmark'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'The Vault Chambers',
                featured: true,
                client: 'Bristol City Council',
                service: ['Restore','Clean','Preserve'],
                location: 'Bristol',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/The Vaulted Chambers - Bristol/28619370_330960450641532_3691584991934596675_o.jpg',
                        after: '/resources/img/Cases/The Vaulted Chambers - Bristol/28827198_330960457308198_7355081124317950446_o.jpg'
                    },
                    other: [
                        {
                            img: '/resources/img/Cases/The Vaulted Chambers - Bristol/28516242_330960513974859_3664982420161118096_o.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/The Vaulted Chambers - Bristol/28619182_330960453974865_4022892133814516622_o.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/The Vaulted Chambers - Bristol/28575581_330960507308193_2016721434269493854_n.jpg',
                            type: 'Before',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/The Vaulted Chambers - Bristol/28661252_330960517308192_8354303859921704602_n.jpg',
                            type: 'After',
                            order: 3
                        }
                    ],
                },
                text: {
                    summary: "ACS were commissioned to remove a large quality on unwanted art work from the facade of a grade 1 psted building, retained in the facade of the building is part of the original Bristol city castle dating back to the 14th century, the council asked us to soft media blast this to expose its natural features which are now on display and we have administered a protective anti-graffiti coating, to prevent unwanted future tag artists making their mark.",
                    other: "<p>Further to completing this works we were also asked to soft media blast the main entrance wooden doors, in an effort to bring them back to their former glory ready for painting.</p>"
                },
                keyFacts: [
                    {
                        main: 'Large',
                        sub: 'Landmark'
                    }
                ],
                date: '1900-01-02',
            },
            {
                name: 'Plymouth University',
                featured: false,
                client: 'Plymouth University',
                service: ['Clean'],
                location: 'Plymouth',
                imagePaths: {
                    primary: {
                        before: '/resources/img/Cases/Plymouth University/before2.jpg',
                        after: '/resources/img/Cases/Plymouth University/after1.jpg'
                    },
                    video: '/resources/video/Plymouth University.mp4',
                    other: [
                        {
                            img: '/resources/img/Cases/Plymouth University/before1.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/before3.jpg',
                            type: 'Before',
                            order: 1
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during1.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during2.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during3.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during4.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during5.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during6.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during7.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/during8.jpg',
                            type: 'During',
                            order: 2
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/after1.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/after2.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/after3.jpg',
                            type: 'After',
                            order: 3
                        },
                        {
                            img: '/resources/img/Cases/Plymouth University/after4.jpg',
                            type: 'After',
                            order: 3
                        }
                    ],
                },
                text: {
                    summary: "The church was cleaned down with a sympathetic Steam system the Doff, working against an aged and brittle façade on some 1200m2 of Bath and Somerset natural stone.",
                    other: "<p>The building is magnificent with stunning features and architecture, ACS were been commissioned over a 2 week period working against tight deadlines to complete and handover to the Plymouth university</p>"
                },
                keyFacts: [
                    {
                        main: 'Large',
                        sub: 'Site'
                    }
                ],
                date: '1900-01-02',
            }
        ]

        //Seed case studies
        const Case = pygmy.models.model.Case.schema
        Case.remove({}, function() {
            caseStudies.forEach((seed) => {
                let query = {name : seed.name}
                let update = seed
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    
                // Find the document
                Case.findOneAndUpdate(query, update, options, function(err, result) {
                    if (err) {
                        log.error("Case: update error (" + err + ')')
                        return;
                    }
    
                    // If nothing is found, add it
                    if(!result) {
                        Case.create(seed, err => {
                            if(err) {
                                log.error("Case: create error (" + err + ')')
                            } else {
                                log.info("Case: Added (" + seed.name + ")")
                            }
                        });
                    }
                // do something with the document
                });
            });
        })
    },
    seedJobs: () => {
        // setup data
        let jobs = [
            {
                reference: 'ACS2018-OP-01',
                name: 'Operator',
                numberNeeded: 1,
                description: 'Due to continued growth, ACS are seeking an temporary operators (with the possibility of a full time for the right candidate) to join our on site team. Full training will be available.',
                date: '2018-11-05',
                responsibilities: [
                    'Operate advanced equipment',
                    'Training is available'
                ],
                requirements: [
                    'Quick to learn',
                    'High attention to detail',
                    'Flexible',
                    'Team player who can work in a fast paced environment',
                    'Able to work to tight deadlines',
                ],
                package: 'Dependant on experience',
                contact: {
                    name: 'Paul Andrews',
                    title: 'Director',
                    email: 'info@acsfacades.uk'
                },
                location: 'Swansea, South Wales & travelling'
            }
        ]

        //Seed case studies
        const Job = pygmy.models.model.Job.schema
        Job.remove({}, function() {
            jobs.forEach((seed) => {
                let query = {name : seed.name}
                let update = seed
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };

                // Find the document
                Job.findOneAndUpdate(query, update, options, function(err, result) {
                    if (err) {
                        log.error("Job: update error (" + err + ')')
                        return;
                    }

                    // If nothing is found, add it
                    if(!result) {
                        Job.create(seed, err => {
                            if(err) {
                                log.error("Job: create error (" + err + ')')
                            } else {
                                log.info("Job: Added (" + seed.name + ")")
                            }
                        });
                    }
                // do something with the document
                });
            });
        })
    },
    seedNews: () => {
        // setup data
        let news = [
            {
                name: 'K-rend Removal',
                category: 'News',
                mainImage: {
                    path: "/resources/news/k-rend before.jpg",
                },
                content: "<p>During the construction phase and application of the K-rend, run off can drip onto a brick face causing staining and chalking. Using the ibix portable soft blast system we can remove stains using natural aggregates to leave no trace of the substance. </p><img src='/resources/news/k-rend after.jpg'><p>We are currently on site at Nantygwyn School in Pontypridd to perform this type of work.</p>",
                date: '2018-11-07'
            },
            {
                name: 'Brandons Yard – Bristol',
                category: 'News',
                mainImage: {
                    path: "/resources/news/Brandons Yard.jpg",
                },
                content: "<p>ACS were called in by <a href='https://spellermetcalfe.com'>Speller Metcalfe</a> to manually prepare and re-surface natural stone work on a grade 1 listed building.</p><p>Salt corrosion and the harsh elements raining down on the building have caused spalling and severe deterioration of the natural stone. ACS need to carefully remove the defective layers from the stone face and prep the areas ready for the stone masons to re-point the building.</p>",
                date: '2018-11-05'
            },
            {
                name: 'New website & web address',
                category: 'News',
                mainImage: {
                    path: "/resources/news/new-web.png",
                },
                content: "<p>Architectual Cleaning Services are now @ www.acsfacades.uk and has been redesigned with thanks to <a href='https://www.techmeleon.co.uk'>Techmeleon</a></p>",
                date: '2018-10-01'
            },
            {
                name: 'New specialist jetwash',
                category: 'News',
                mainImage: {
                    path: "/resources/news/jetwash.jpg",
                },
                content: "<p>Here we have the new Jet wash and bowser system. This was bought to enable works to be carried out far easier, as it being a self sufficient machine. Boys & their toys.... </p><img src='/resources/news/jetwash2.jpg'>",
                date: '2018-07-14'
            },
            {
                name: 'Happy birthday CABS!',
                category: 'News',
                mainImage: {
                    path: "/resources/news/CABSbirthday.jpg",
                },
                content: "<p>HAPPY 6TH BIRTHDAY and Congratulations <a href='https://www.candbs.co.uk'>Coating & Blasting Services</a> (our sister company) We are proud to be celebrating our 6th birthday here with CABS, an award winning company - thanks to all our staff for their hard work and thanks to our clients for their business, and you guys for your continued support!</p>",
                date: '2018-07-14'
            }
        ]

        //Seed new users
        const News = pygmy.models.model.News.schema
        News.remove({}, function() {
            news.forEach((seed) => {
                let query = {name : news.name}
                let update = seed
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    
                // Find the document
                News.findOneAndUpdate(query, update, options, function(err, result) {
                    if (err) {
                        log.error("News: update error (" + err + ')')
                        return;
                    }
    
                    // If nothing is found, add it
                    if(!result) {
                        News.create(seed, err => {
                            if(err) {
                                log.error("News: create error (" + err + ')')
                            } else {
                                log.info("News: Added (" + seed.name + ")")
                            }
                        });
                    }
                // do something with the document
                });
            });
        })

    },
    seedSocial: () => {

        // setup data
        let social = [
            {
                name: 'Twitter',
                link: 'https://twitter.com/search?q=architectual%20cleaning%20services&src=typd&lang=en',
                icon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/Architectural-Cleaning-Services-330057477398496/',
                icon: '<i class="fab fa-facebook-square"></i>'
            },
        ]

        //Seed new users
        const Social = pygmy.models.model.Social.schema
        Social.remove({}, function() {
            social.forEach((seed) => {
                let query = {name : seed.name}
                let update = seed
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };

                Social.findOneAndUpdate(query, update, options, function(err, result) {
                    if (err) {
                        log.error("Socials: update error (" + err + ')')
                        return;
                    }

                    // If nothing is found, add it
                    if(!result) {
                        Social.create(seed, err => {
                            if(err) {
                                log.error("Socials: create error (" + err + ')')
                            } else {
                                log.info("Socials: Added (" + seed.name + ")")
                            }
                        });
                    }
                // do something with the document
                });
            });
        })
    }
}

/* ------------------------------------------------ */

/* Module export. */
/* ------------------------------------------------ */

module.exports = output;

/* ------------------------------------------------ */