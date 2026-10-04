import React from 'react'
import { Link } from 'react-router-dom'
import SectionIntro from '../components/SectionIntro'
import ProductCard from '../components/ProductCard'
import { products } from '../components/ProductsData'

const categoryInfo = [
  ['Steel', 'DEVKI STEEL MILLS LIMITED'],
  ['Cement', 'NATIONAL CEMENT COMPANY LIMITED'],
  ['Roofing', 'MAISHA MABATI MILLS LIMITED'],
  ['Fertilizers', 'MAISHA MINERALS & FERTILIZERS LIMITED'],
  ['Aviation', 'NORTHWOOD AVIATION AGENCIES LIMITED'],
  ['Packaging', 'MAISHA PACKAGING COMPANY LIMITED'],
  ['Clinker', 'CEMTECH LIMITED'],
  ['Rwanda', 'CIMERWA PLC'],
]

export default function Home() {
  return (
    <>
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="home-hero">
        <div className="hero-overlay" />

        <div className="hero-content container">
          <span className="hero-kicker">
           
          </span>

          <h1>
            Devki Group of Companies
            <br />
            — cement, steel, roofing &
            <br />
            fertilizer manufacturing in
            <br />
            East Africa
          </h1>

          <p>
            The future depends on what you do today.
          </p>

          <div className="hero-actions">
            <Link
              className="red-button"
              to="/products"
            >
              ORDER ONLINE 
            </Link>

            <Link
              className="white-button"
              to="/projects"
            >
              OUR COMPANIES
            </Link>
          </div>
        </div>

        {/* =========================
            TRUST / CATEGORY BOX
        ========================== */}
        <div className="trust-box container">

          <div className="trust-message">
            <span>Factory-direct prices</span>

            <i>·</i>

            <span>VAT inclusive</span>

            <i>·</i>

            <span>Delivery countrywide</span>
          </div>

          <div className="trust-pills">

            <Link to="/products?category=Steel">
              STEEL
            </Link>

            <Link to="/products?category=Cement">
              CEMENT
            </Link>

            <Link to="/products?category=Roofing">
              ROOFING
            </Link>

            <Link to="/products?category=Fertilizers">
              FERTILIZERS
            </Link>

            <Link to="/products?category=Aviation">
              AVIATION
            </Link>

            <Link to="/products?category=Packaging">
              PACKAGING
            </Link>

            <Link to="/products?category=Clinker">
              CLINKER
            </Link>

            <Link to="/products?category=Rwanda">
              RWANDA
            </Link>

            <Link
              className="active"
              to="/products"
            >
              ALL PRODUCTS
            </Link>

          </div>
        </div>
      </section>


      {/* =========================
          SHOP BY CATEGORY
      ========================== */}
      <section className="home-products container section-space">

        <SectionIntro
          eyebrow="SHOP"
          title="SHOP BY CATEGORY"
          centered
        />

        {categoryInfo.map(([category, company]) => {

          const items = products
            .filter(
              product => product.category === category
            )
            .slice(0, 8)

          return (
            <div
              className="category-block"
              key={category}
            >

              <div className="category-heading">

                <div>

                  <span className="eyebrow">
                    {category.toUpperCase()}
                  </span>

                  <h3>
                    {company}
                  </h3>

                </div>

                <Link
                  to={`/products?category=${category}`}
                >
                  ORDER PRODUCTS →
                </Link>

              </div>


              <div className="product-grid home-grid">

                {items.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    compact
                  />
                ))}

              </div>

            </div>
          )
        })}

      </section>


      {/* =========================
          CSR SECTION
      ========================== */}
      <section className="csr-section section-space">

        <div className="container split-feature">

          <div>

            <span className="eyebrow">
              CSR
            </span>

            <h2>
              Building a positive future.
            </h2>

            <p>
              Devki Group invests in communities,
              education and opportunity across
              East Africa.
            </p>

          </div>

          <img
            src="https://devkigroupkenya.com/assets/team-csr-D-FxWEwt.jpg"
            alt="Devki Group workers"
          />

        </div>

      </section>


      {/* =========================
          LEADERSHIP SECTION
      ========================== */}
      <section className="leader section-space container">

        <div className="leader-card">

          <img
            src="https://devkigroupkenya.com/assets/chairman-B3B3k1Dz.jpg"
            alt="Devki Group chairman"
          />

          <div>

            <span className="eyebrow">
              LEADERSHIP
            </span>

            <h2>
              DR. NARENDRA RAVAL
            </h2>

            <p>
              “Every experience is an opportunity
              to learn and grow.”
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          STATISTICS
      ========================== */}
      <section className="stats">

        <div className="container stats-grid">

          <div>
            <strong>8</strong>
            <span>COMPANIES</span>
          </div>

          <div>
            <strong>12+</strong>
            <span>FACTORIES</span>
          </div>

          <div>
            <strong>10,000+</strong>
            <span>EMPLOYEES</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>YEARS IN BUSINESS</span>
          </div>

        </div>

      </section>


      {/* =========================
          MEDIA SECTION
      ========================== */}
      <section className="media-section section-space container">

        <SectionIntro
          eyebrow="MEDIA"
          title="MEDIA"
          centered
        />

        <div className="media-grid">

          <article>

            <div className="media-photo one" />

            <h3>
              How East African enterprises are
              growing with human opportunity
            </h3>

            <span>
              READ MORE →
            </span>

          </article>


          <article>

            <div className="media-photo two" />

            <h3>
              Devki Steel Mills injects life into
              local, regional markets
            </h3>

            <span>
              READ MORE →
            </span>

          </article>


          <article>

            <div className="media-photo three" />

            <h3>
              Maisha Mabati expands building
              solutions
            </h3>

            <span>
              READ MORE →
            </span>

          </article>

        </div>

      </section>


      {/* =========================
          CAREERS SECTION
      ========================== */}
      <section className="careers">

        <div className="careers-inner container">

          <span className="eyebrow">
            CAREERS
          </span>

          <h2>
            Growing Together at Devki Group
          </h2>

          <p>
          It takes an entire team to build something big. Together, we work hard and strive for excellence in every little action. We pride ourselves on attracting, developing and engaging a diverse mix of talent that will grow with us. Come and work with us where we can help realise each other's aspirations and dreams.
          </p>

          <Link
            className="white-button"
            to="/contact"
          >
            VIEW VACANCIES
          </Link>

        </div>

      </section>

    </>
  )
}