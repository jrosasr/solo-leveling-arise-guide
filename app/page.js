'use client'
import { useEffect } from 'react'

const CHARACTERS = [
  {
    name: 'Sung Jinwoo',
    slug: "sung-jinwoo.png",
  },
  {
    name: 'Alicia Blanche',
    slug: "alicia-blanche.png",
  },
  {
    name: 'Cha Hae In',
    slug: "cha-hae-in.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Lee Joohee',
    slug: "lee-joohee.png",
  },
  {
    name: 'Song Chiyul',
    slug: "song-chiyul.png",
  }
]
export default function Home() {
  useEffect(() => {
    const thumbs = document.querySelectorAll('.thumb li')
    const infoSlider = document.querySelectorAll('.info-slider')
    const imgSlider = document.querySelectorAll('.img-slider')
    const items = document.querySelectorAll('.item')

    let indet = 0

    thumbs.forEach((thumb, ind) => {
      thumb.addEventListener('click', () => {
        document.querySelector('.thumb .selected')?.classList?.remove('selected')
        thumb.classList.add('selected')

        const index = ind

        infoSlider.forEach(slide => {
          slide.style.transform = `translateY(${index * -100}%)`
        })

        imgSlider.forEach(slide => {
          slide.style.transform = `translateX(${index * -100}%)`
        })

        document.querySelector('.item.active').classList.remove('active')
        items[index].classList.add('active')
      })
    })
  
    return () => {
      document.querySelector('.item.active')?.classList?.remove('active')
      items[0].classList.add('active')
    }
  }, [])
  
  return (
    <>
      <main classList="max-w-7xl mx-auto">

      </main>
      <div className="carousel">
        {CHARACTERS.map((character, i) => (
          <div className="item" key={i}>
          <div className="bg"></div>
          <div className="info-box">
            <div className="info-slider">
              <div className="info-item" style={{ '--i': i }}>
                <h2>{character.name}</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industrys 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a 
                  type specimen book. It has survived not only five centuries
                </p>
                <a className="btn" href="#">View More</a>
              </div>
            </div>
          </div>
          <div className="img-box">
            <div className="img-slider">
              <div className="img-item" style={{ '--i': i }}>
                <img src={`/characters/${character.slug}`} />
              </div>
            </div>
          </div>
        </div>
        ))}

        <ul className="thumb">
          {CHARACTERS.map((character, i) => (
            <li key={i}>
              <img src={`/miniatures/${character.slug}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   asdasd
    // </main>
  );
}
