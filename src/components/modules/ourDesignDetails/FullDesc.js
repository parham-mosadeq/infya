import Image from 'next/image';
function FullDesc({ topic }) {
  if (topic === 'InteriorDesign')
    return (
      <section className='w-full h-full'>
        <article className='flex flex-col justify-center items-center w-full h-full'>
          <div className='flex  w-full h-full items-center justify-center flex-col lg:flex-row-reverse'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                COMMUNITY DESIGN PRESENTATION AND BUILD
              </h3>
              <p>
                We deliver personalized interior design and build services for
                residential projects across UAE and London region; a concierge
                design service for those who want everything handled for them.
                This luxury service includes the duration and management of
                every detail of a project from concept to accessory styling as
                well as new builds and renovations complete refurbishments,
                extensions, and existing space conversions. We can offer a full
                design, installation, and commissioning service for all clients,
                and with our knowledge of electrical installation together with
                Testing, Audiovisual, and Environmental systems, we can complete
                any project from start to finish the requirement of any business
              </p>
            </div>
            <div className='w-full h-full'>
              <Image
                className='w-full mx-auto object-cover my-10 '
                src='/images/ourDesign/image-1.jpg'
                width={420}
                height={420}
                alt={'COMMUNITY DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                COMMERCIAL DESIGN PRESENTATION AND BUILD
              </h3>
              <p>
                We create a space that represents the origin of your brand each
                detail is crafted keeping the brand’s personality in mind so
                that it helps clients understand your business captures your
                brand values and connects your team. It can also have the power
                to transform employee well-being and boost productivity. Our
                other commercial services are: Retails Hospitality Restaurants
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full mx-auto object-cover my-10 '
                src='/images/ourDesign/image-1.jpg'
                width={420}
                height={420}
                alt={'COMMERCIAL DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-full lg:flex-row-reverse'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                CUSTOM-MADE FURNITURE DESIGN{' '}
              </h3>
              <p>
                We design and customize furniture that blends with your brand,
                using our aesthetic sense and creativity in response to the
                taste of usage of that space. The right selection of materials
                are carefully made by our range of talented designers so that we
                can bring comfort to your life. Over the years of experience, we
                are dedicated to the pursuit of beauty where smooth lines
                combine in a casual modern design.
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full  mx-auto object-cover my-10 '
                src='/images/ourDesign/image-1.jpg'
                width={420}
                height={420}
                alt={' CUSTOM-MADE FURNITURE DESIGN'}
              />
            </div>
          </div>
        </article>
      </section>
    );

  if (topic === 'Maintenance') {
    return (
      <section className='w-full h-full'>
        <article className='flex flex-col justify-center items-center w-full h-full'>
          <div className='flex  w-full h-full items-center justify-center flex-col lg:flex-row-reverse'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>Maintenance</h3>
              <p>
                THIU Service and Maintenance Plans for All Types of FCU (Fan
                Coil Unit), HIU(Heating Interface Unit), and MVHR(Mechanical
                Ventilation Heat Recovery) systems are designed to operate at
                optimum efficiency, using high-performance equipment. However,
                the level of the continuous operation and maintenance service
                impact on the lifetime of the scheme. Master engineering can
                provide an ongoing service and maintenance package.
              </p>
            </div>
            <div className='w-full h-full'>
              <Image
                className='w-full max-h-96  mx-auto object-cover my-10 '
                src='/images/ourDesign/Maintenance.png'
                width={420}
                height={420}
                alt={'COMMUNITY DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                FCU Service and Maintenance Plans
              </h3>
              <p>
                A fan coil unit (FCU) is a simple unit consisting of a heating
                or cooling coil and fan in residential, commercial, and
                industrial buildings. Fan coil units circulate hot or cold water
                through a coil in order to condition a space. The unit gets its
                hot or cold water from a central plant, or mechanical room
                containing equipment for removing heat from the central
                building's closed-loop. Master Engineering can provide an
                ongoing service and maintenance package, available throughout
                the lifetime of the units. Our highly qualified service
                engineers provide the highest standard of service and are
                trained specialists in our full range of FCU units. Our team is
                true professionals from start to finish: they are well-trained,
                well-disciplined, and well-groomed. You can compare the
                different types of cover available below
                <span>Our Service Plan Provides the Following:</span>
                <span>
                  • Cover 7 days a week <br />• 12 months labor <br />• 12
                  months parts FCU Service Plan - 1 Year contract. Following the
                  Expiry of the FCU Warranty (Standard or Enhanced) Service &
                  Maintenance Plan 1 Year Service & Maintenance
                </span>
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/FCU-Service.png'
                width={420}
                height={420}
                alt={'COMMERCIAL DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-full lg:flex-row-reverse'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                HIU Service and Maintenance Plans for All Types of HIU
              </h3>
              <p>
                Heating systems are designed to operate at optimum efficiency,
                using high-performance equipment. However, the level of the
                continuous operation and maintenance service impacts on the
                lifetime of the scheme. Masterengineering can provide an ongoing
                service and maintenance package, available throughout the
                lifetime of the units. Our highly qualified service engineers
                provide the highest standard of service and are trained
                specialists in our full range of HIU communal heating equipment.
                You can compare the different types of cover available below
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/HIU-Service.jpg'
                width={420}
                height={420}
                alt={' CUSTOM-MADE FURNITURE DESIGN'}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-full lg:flex-row'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                Our Service Plan Provides the Following:
              </h3>
              <p>
                <span></span>
                <span>
                  • Cover 7 days a week
                  <br />• 12 months labor
                  <br /> • 12 months parts HIU Service Plan - 1 Year contract.
                  Following the Expiry of the HIU Warranty (Standard or
                  Enhanced) Service & Maintenance Plan 1 Year Service &
                  Maintenance •
                  <br />• 2-Year Plan Telephone Support Cover 6 am – 10 pm, 7
                  days/week.
                  <br />
                  -7 days/week Smart Talk Remote Diagnostics and Support
                  Included <br />
                  -Minimum Guaranteed On-site Response 24 hours.
                  <br />
                  -Replacement Parts and Labour Cover 1 year 2 years Physical
                  Service Inspection Not included. Included (where remote
                  communication is enabled via broadband connection 5 At the end
                  of the 24-month period,)
                  <br />
                  Subject to all terms and Conditions being satisfied, each HIU
                  will be eligible to continue warranty at the same level of
                  cover.
                </span>{' '}
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96  mx-auto object-cover my-10 '
                src='/images/ourDesign/HIUM.png'
                width={420}
                height={420}
                alt={' CUSTOM-MADE FURNITURE DESIGN'}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-full lg:flex-row-reverse'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                Our Service Plan Provides the Following:
              </h3>
              <p>
                <span></span>
                <span>
                  The Option 1 HIU Service Plan Provides the Following:
                  <br />
                  •Cover 7 days a week 6 am – 10 pm
                  <br />
                  • 24 months labour <br />
                  • 24 months parts
                  <br />• 1 service (physical inspection) during the contract
                  period Service Plan - 2 Year HIU Service and Maintenance Plans
                  Comprehensive Service Plan Terms and Conditions The
                  Comprehensive Service Plan covers all parts and labour for a
                  period of 2 years for Option 1 and 1 year for Option 2. Before
                  a call-out is arranged, an open purchase order or alternative
                  commitment to pay is required in the event that the fault
                  attended to does not fall within Masterengineer’s
                  esponsibility. Masterengineer will respond within 24 hours
                  between the hours of 06:00 and 22:00 seven days per week
                  providing that prior to contacting Masterengineer , the client
                  can demonstrate that they have taken appropriate steps to
                  establish that the heat and/or cooling system defect that
                  needs to be addressed falls within Masterengineer’s
                  responsibility.
                </span>{' '}
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/FCUM.jpg'
                width={420}
                height={420}
                alt={' CUSTOM-MADE FURNITURE DESIGN'}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full h-full lg:flex-row'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                Our Service Plan Provides the Following:
              </h3>
              <p>
                <span>
                  The Comprehensive Service Plan remains valid providing that
                  the following conditions are met and maintained: 1. Water
                  quality in the primary and secondary systems complies at all
                  times with BS 7593:2006, supported with an appropriate
                  certificate before the start of the plan. Parts and labour
                  costs incurred as a result of poor water quality will be
                  chargeable. 2. The units must be connected to a communications
                  network to allow remote access by Masterengineer or its
                  approved contractor. 3. All payments for both equipment and
                  labour should have been paid or are up to date within
                  Masterengineer payment terms. 4. Relevant administrative and
                  technical contact details valid for the periods of time
                  covered by this agreement have been filed with Masterengineer.
                  In the event that the above conditions are not complied with,
                  or the call-out is for anything other than the failure of the
                  unit, then labour will be chargeable for the first hour and an
                  additional charges for the subsequent hours or parts of an
                  hour thereafter between 08:00 and 17:00 Monday to Friday, and
                  at all other times the pricing will vary. Please Note: Both
                  service plan contracts require the FCU® units to be connected
                  to a communication network to allow remote access by
                  Masterengineer or its approved contractor. We recommend that
                  HIU’s are serviced after 2 years in operation.
                </span>{' '}
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/Maintenance.png'
                width={420}
                height={420}
                alt={' CUSTOM-MADE FURNITURE DESIGN'}
              />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row-reverse items-center justify-center w-full h-full'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>
                MVHR Service and Maintenance Plans{' '}
              </h3>
              <p>
                MVHR systems are a year-round, whole-home ventilation solution
                that is proven low-energy and highly efficient, typically
                installed in a utility room. MVHR is fast becoming the most
                common method of whole-home ventilation for new build
                properties. MVHR systems work by combining supply and extract in
                one unit. Moisture-laden, stale air is extracted from ‘wet’
                areas, such as kitchens and bathrooms. The heat from this stale
                air is recovered via a heat exchanger, and this tempered air is
                delivered into the home's living areas. MVHR systems provide
                continuous trickle ventilation to ensure a consistent level of
                fresh filtered air into the property to maintain adequate indoor
                air quality Master Engineering can provide an ongoing service
                and maintenance package, available throughout the lifetime of
                the units. Our highly qualified service engineers provide the
                highest standard of service and are trained specialists in our
                full range of MVHR units. Our team are true professionals from
                start to finish: they are well trained, well-disciplined, and
                well groomed
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/MVHR-Service.png'
                width={420}
                height={420}
                alt={'COMMERCIAL DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full'>
            <div className='w-full m-5'>
              <h3 className='text-2xl uppercase'>Electrical Services </h3>
              <p>
                For Electrical Installations we have a team in place ready to
                take on any project, we have completed many projects with a wide
                range of services and offer free estimates for all tender
                inquiries. We can offer a full design, installation, and
                commissioning service for all clients, and with our knowledge of
                electrical installation together with Testing, Audiovisual, and
                Environmental systems, we can complete any project from start to
                finish to meet the requirement of any business.
                <br />
                <span>
                  • Data Networking
                  <br />• Inspection & Testing <br />
                  • LV Distribution <br />
                  • Small Power • Lighting <br />
                  • Lighting Controls <br />
                  • Fire Alarm Installation • Access Control <br />• Security
                  Systems
                </span>
              </p>
            </div>
            <div className='h-full w-full'>
              <Image
                className='w-full max-h-96 mx-auto object-cover my-10 '
                src='/images/ourDesign/Electrical.png'
                width={420}
                height={420}
                alt={'COMMERCIAL DESIGN PRESENTATION AND BUILD'}
              />
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default FullDesc;
