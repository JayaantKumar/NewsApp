import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Sibusiso Mjikeliso",
      title:
        "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
      description:
        "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
      url: "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
      publishedAt: "2021-08-26T11:40:16+00:00",
      content:
        '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "ABC News",
      title: "England cricket great Ted Dexter dies aged 86",
      description:
        'The former England captain, nicknamed "Lord Ted", is fondly remembered as a giant of the game and one of his country\'s greatest players.',
      url: "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
      publishedAt: "2021-08-26T09:07:52Z",
      content:
        "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "65px 0px" }}>
          Constitution of India
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="President Murmu on Samvidhan Divas: The Indian constitution is a live, progressive document"
                description="The Indian Constitution is a live and progressive document through we have achieved the goals of social justice and inclusive development, President Droupadi Murmu said on Tuesday."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/26/550x309/PTI11-26-2024-000037A-0_1732607174010_1732607213819.jpg"
                newsUrl="TODO"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Government, opposition spar over speakers list for Constitution Day event"
                description="In a letter to Speaker Om Birla, INDIA bloc leaders urged that Opposition leaders in both Houses be allowed to speak at the Constitution Day function."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/26/550x309/ANI-20241125376-0_1732592211701_1732592257725.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="A celebration of the indomitable spirit of our freedom struggle"
                description="India celebrates 75 years since adopting its Constitution, highlighting efforts to preserve its original manuscripts for future generations"
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/27/550x309/Dr_Babasaheb_Ambedkar_1726931368716_1732677347143.jpg"
              />
            </div>
            <div className="col-md-4">
                <NewsItem
                title="A museum and academy to mark the Constitution at 75"
                description="It is important that we, as a nation, educate ourselves more about the Constitution-making process."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/27/550x309/November-26--is-also-Samvidhan-Divas--or-Constitut_1732559047245_1732676900328.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="How SC read the right to property and its limits"
                description="The SC overruled a landmark judgment on property rights, clarifying definitions of community resources, impacting future property law interpretations."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/21/550x309/Justice-Chandrachud-was-quite-clear-that-certain-k_1732114136002_1732158359970.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Protecting the Constitution is India’s primary battle: Rahul Gandhi"
                description="Rahul Gandhi also said it was the first time he is seeking votes for his sister who has campaigned for him, and their parents earlier."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/11/03/550x309/Lok-Sabha-Leader-of-Opposition-Rahul-Gandhi-and-Co_1730661236091_1730673038191.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Row over Lady Justice statue in SC: Bar objects to ‘unilateral’ design change"
                description="While the scales represent balance and fairness in dispensing justice, the sword which symbolised punishment was replaced with the Constitution."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/10/24/550x309/A-recent-photo-of-the-Lady-Justice-statue-with-its_1729753202647.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Rahul Gandhi attacks PM Modi, RSS in US: ‘People stopped being scared of BJP after Lok Sabha results’"
                description="Rahul Gandhi said that Rashtriya Swayamsevak Sangh (RSS) believes India is one idea, while his party believes India is a multiplicity of ideas."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/09/09/550x309/PTI09-09-2024-000017B-0_1725850269749_1725850290564.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Indian Constitution's rare first edition auctioned for record price of…"
                description="A rare first edition of the Constitution of India was sold at an auction for ₹48 lakh, its highest price so far"
                imageUrl="https://images.hindustantimes.com/img/2024/07/31/550x309/constitution_1695050727251_1722390952228.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Sale of Constitution's copies increase amid INDIA bloc campaign: Report"
                description="The small copy of the Constitution that has become a symbol of the Opposition INDIA bloc's protest, has increased sales for one publisher"
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/06/25/550x309/Congress-leader-Sonia-Gandhi-and-other-INDIA-bloc-_1719254092317_1719286622767.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="PMO updates cover image on X, Congress claims ‘direct impact of Rahul Gandhi's…’"
                description="The new cover image, showing Modi paying respects to the Constitution of India during a meeting of NDA leaders, attracted significant attention."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/06/11/550x309/narendra_modi_pmo_1718116058016_1718116058274.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem
                title="Can the Governor be an accused? A look into the Constitutional immunity of the Governor"
                description="Article 361 of the Constitution confers upon the President and the Governor absolute personal immunity regarding acts while exercising official powers."
                imageUrl="https://www.hindustantimes.com/ht-img/img/2024/05/08/550x309/West-Bengal-Governor-CV-Ananda-Bose--File-_1715179769294_1715197370472.jpg"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
