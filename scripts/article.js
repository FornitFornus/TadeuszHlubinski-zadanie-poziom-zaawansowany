const articles = [
	{
		id: 1,
		title: 'LeBron James NAJLEPIEJ punktującym graczem w historii NBA!',
		pictures: '/images/lbj_big.jpeg',
		pictures_medium: '/images/lbj_medium.jpeg',
		pictures_small: '/images/lbj_small.jpeg',
		article_header:
			'Po 20 latach od rozpoczęcia swojej bogatej kariery, LeBron James zapisał na swoje konto jedno z największych osiągnięć. Trudno je porównywać z nagrodami MVP czy zdobytymi mistrzostwami, ale z pewnością jest to świadectwo tego, jak wielkim stał się koszykarzem i jak wiele znaczy dla koszykówki.',
		article_content:
			'Już od paru tygodni wyczekiwaliśmy na ten moment. Przed meczem Los Angeles Lakers z Oklahomą City Thunder, LeBron James potrzebował 36 punktów, aby przeskoczyć na liście najlepszych strzelców wszech czasów Kareema Abdula-Jabbara. Na 10 sekund przed końcem trzeciej kwarty spotkania, LeBron James przedryblował i rzucił nad rękami obrońcy Oklahomy City Thunder. Piłka przecięła siatkę i w ten sposób LBJ został NAJLEPIEJ punktującym graczem w historii NBA. Po meczu z OKC ma na swoim koncie 38390 punktów.',
	},
];

document.getElementById('article_data').innerHTML = articles.map((item) => {
	return `<div class="container">
            <div class="image-container">
                <picture>
                  <source media="(min-width: 650px)" srcset=${item.pictures} />
                  <source
                    media="(min-width: 465px)"
                    srcset=${item.pictures_small}
                  />
                  <img
                    src=${item.pictures_medium}
                    class="img-fluid"
                    alt="LeBron James najlepszy punktujący w historii"
                  />
                </picture>
            </div>
            <div class="container">
              <h1 class="header-article">${item.title}</h1>
              <p class="content-section"><strong>${item.article_header}</strong></p>
              <p class="content-section">${item.article_content}</p>
            </div>
          </div>`;
});
