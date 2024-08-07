import React from 'react'

function Product() {
  return (
    <div id='Product' className='Products bg-[url("./assets/product.jpg")]'>
        <div data-scroll data-scroll-section data-scroll-speed=".01" className='Products-main'>
          <div className='Products-heading'>
            <h1>Products</h1>
          </div>
          <div className='Products-Container'>
              <div className='Card-Container'>
                <div className='Card'>
                  <img src=".\src\assets\rabekal.webp" alt="" />
                  <h1>RabeKAL- DSR</h1>
                  <p>Entric Coated Rabelprazole Sodium and sustained Release Domperidone Capsules.</p>
                </div>
                <div className='Card'>
                  <img src=".\src\assets\pantokal.webp" alt="" />
                  <h1>PantoKAL-DSR capsules</h1>
                  <p> Pantoprazole sodium (EC ) & domperidone (SR) Capsules</p>
                </div>
              </div>
              <div className='Card-Container'>
                <div className='Card'>
                  <img src=".\src\assets\parakal.webp" alt="" />
                  <h1>ParaKAL-A Tablets</h1>
                  <p> Aceclofenac 100 mg + Paracetamol 325 mg</p>
                </div>
                <div className='Card'>
                  <img src=".\src\assets\parakaln.webp" alt="" />
                  <h1>ParaKAL-N Tablets</h1>
                  <p>Nimesulide & Paracetamol Tablets</p>
                </div>
              </div>
          </div>
          <div className='Products-More'>
            <div className='Products-more-heading'>
              <h1>More</h1>
            </div>
            <div class="card-container">
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\tablets.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KALglim-PM1 tablets</h2>
                    <p>Glimepride 1 mg + pioglitazone15mg + metformin 500 Mg (sr)</p>
                  </div>
                </div>

                  {/* 5  */}
                  <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\syrup.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KALcough-W syrup</h2>
                    <p>Ambroxol 15mg + terbutaline sulphate 1.25mg +<br /> guaiphenesin 50mg /,menthol 1mg</p>
                  </div>
                </div>

                 {/* 6 */}
                 <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\capsule.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>ItraKAL-200 CAPSULES</h2>
                    <p>ITRACONAZOLE 200MG </p>
                  </div>
                </div>

                {/* 2 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\tablets.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KALglim-PM2 tablets</h2>
                    <p> Glimepride 2 mg + pioglitazone 15mg + metformin 500 Mg(sr)</p>
                  </div>
                </div>
                {/* 3 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\tablets.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>LeveKAL-500 tablets</h2>
                    <p>Levetracetam tablets 500 mg</p>
                  </div>
                </div>
                {/* 4*/}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\tablets.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>Kaligra-100 tablets</h2>
                    <p> Sildenafil Citrate 100 mg</p>
                  </div>
                </div>
                
                  {/* 7 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\capsule.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>RIvi-KAL Capsules</h2>
                    <p>Multivitamins+multiminerals+ginseng</p>
                  </div>
                </div>
                  {/* 8 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\syrup.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KALcough-D syrup</h2>
                    <p>Dextromethorphan hydrobromide 10mg +<br /> Phenylephrine Hcl 5mg Chlorpheniramine Maleate 2 mg</p>
                  </div>
                </div>
                  {/* 9 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\capsule.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>YashiKAL Softgel Capsule</h2>
                    <p>Omega-3 Fatt Acid + Green Tea Extract + Ginkgo Biloba +<br />Ginseng Extract + Garlic Oil + Grape Seed Extract +<br /> Antioxidents + Vitamins & Minerals</p>
                  </div>
                </div>
                {/* 10 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\capsule.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>Lyco-Sara soft gel Capsules</h2>
                    <p>Lycopene10% 5000mcg + Betacarotene 10% + Lutein 8% 2000mcg +<br /> Grape Seed Extract+zinc Sulphate + Selenium</p>
                  </div>
                </div>
                {/* 11 */}
                <div class="card">
                  <div class="card-img">
                    <img src=".\src\assets\capsule.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KAL-top capsule</h2>
                    <p>Methyl Cobalamin 1500mcg + Alphalipoic Acid 100 Mg +<br />Folic Acid 500mcg + Thiamine Mononitrate 4500 Mcg +<br />Pyridoxine 1500 Mcg</p>
                  </div>
                </div>
                {/* 12 */}
                <div class="card">
                  <div class="card-img">
                  <img src=".\src\assets\protein.jpg" alt="" />
                  </div>
                  <div class="card-div">
                    <h2>KAL-PRO Protein powder</h2>
                    <p>Protein 10%-20gm + lycopene 6%-1000mcg + multivitamin,<br />Minerals & antioxidant with dha 10%-100mg (sugar free)</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product