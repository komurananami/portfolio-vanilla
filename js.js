/* eslint-disable no-undef */

const App = {
  init() {
    console.log("lets start");

    this.controllers.renderComponents();
    this.controllers.renderHome();
    this.controllers.renderSkills();
    this.controllers.updateTime();

    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page");
    this.router.go(page);

    console.log("end");
  },

  store: {},

  router: {
    go(newPage) {
      console.log("lets go to", newPage);

      // Get current params
      const searchParams = new URLSearchParams(location.search);

      // Set new params
      searchParams.set("page", newPage);

      // Create new query string, must have `?`
      const path = newPage ? `?${searchParams.toString()}` : "?";

      console.log(searchParams.toString());
      console.log(path);

      history.pushState({ page: newPage }, newPage, path);

      App.elements.main.index.style.display = "none";
      App.elements.skills.index.style.display = "none";

      if (!newPage) {
        App.elements.main.index.style.display = "block";
      } else if (newPage === "skills") {
        App.elements.skills.index.style.display = "block";
      }
    },
  },

  controllers: {
    renderComponents() {
      const els = App.elements;

      console.log(" Lets create the base elements");

      els.header.style.position = "fixed";
      els.header.style.zIndex = "10";
      els.header.style.width = "100%";
      els.headerCon.style.display = "flex";
      els.headerCon.style.justifyContent = "space-between";
      els.headerCon.style.padding = "0 80px";
      els.headerCon.style.height = "100px";
      els.headerCon.style.zIndex = 10;
      els.headerCon.style.margin = "0 auto";
      els.headerCon.style.flexDirection = "row";
      els.headerCon.style.alignItems = "center";
      els.headerLeftAImg.style.width = "60px";
      els.headerRightA2.style.marginLeft = "20px";
      els.headerRightA3.style.marginLeft = "20px";
      els.headerRightA4.style.marginLeft = "20px";
      els.headerLeftAImg.style.cursor = "pointer";
      els.headerRightA1.style.cursor = "pointer";
      els.headerRightA2.style.cursor = "pointer";
      els.headerRightA3.style.cursor = "pointer";
      els.headerRightA4.style.cursor = "pointer";

      //-------header
      els.app.appendChild(els.header);
      els.header.appendChild(els.headerCon);
      els.headerCon.appendChild(els.headerLeft);
      els.headerCon.appendChild(els.headerRight);
      els.headerLeft.appendChild(els.headerLeftA);
      els.headerLeftA.appendChild(els.headerLeftAImg);
      els.headerLeftAImg.src =
        "https://fontmeme.com/permalink/210330/86265904da868351312d6fcc83be3480.png";
      els.headerRight.appendChild(els.headerRightA1);
      els.headerRightA1.innerHTML = "Home";
      els.headerRightA1.onclick = function () {
        App.router.go("");
      };

      els.headerRight.appendChild(els.headerRightA2);
      els.headerRightA2.innerHTML = "Skills";
      els.headerRightA2.onclick = function () {
        App.router.go("skills");
      };

      els.headerRight.appendChild(els.headerRightA3);
      els.headerRightA3.innerHTML = "Works";
      els.headerRight.appendChild(els.headerRightA4);
      els.headerRightA4.innerHTML = "Playground";

      console.log("Done");
      console.log(app);
    },

    renderHome() {
      const els = App.elements.main;

      els.index.style.padding = "80px";
      els.index.style.overflow = "hidden";
      els.index.style.height = "1700px";
      els.index.style.position = "relative";
      els.index.style.display = "none";

      els.shapeTop.style.position = "absolute";
      els.shapeTop.style.zIndex = -1;
      els.shapeTop.style.top = "-1230px";
      els.shapeTop.style.right = "-2000px";
      els.shapeTop.style.width = "3500px";

      els.shapeBottom.style.position = "absolute";
      els.shapeBottom.style.zIndex = -1;
      els.shapeBottom.style.top = "1200px";
      els.shapeBottom.style.right = "-200px";
      els.shapeBottom.style.width = "2600px";

      els.home.style.padding = "170px 0";
      els.homeTopAnimation.style.position = "absolute";
      els.homeTopAnimation.style.width = "600px";
      els.homeTopAnimation.style.top = "50px";
      els.homeTopAnimation.style.right = "15vw";
      els.homeMessage.style.padding = "0 40px";
      els.homeMessageBtn.style.borderRadius = "20px";
      els.homeMessageBtn.style.cursor = "pointer";
      els.homeMessageBtn.style.border = "none";
      els.homeMessageBtn.style.padding = "10px 15px";
      els.homeMessageBtn.style.boxShadow = "0 0.2em 0.5em rgba(0, 0, 0, 0.2)";
      els.homeMessageBtn.style.background = "#fe697d";
      els.homeMessageBtn.style.color = "#ffffff";
      els.homeMessageBtn.style.fontSize = "15px";
      //-------skills
      els.skillsHeading.style.fontSize = "30px";
      els.skillsHeading.style.textAlign = "center";
      els.skillsHeading.style.paddingBottom = "60px";

      els.skillsCon.style.display = "flex";
      els.skillsCon.style.justifyContent = "space-between";
      els.skillsCon.style.width = "850px";
      els.skillsCon.style.margin = "0 auto";
      els.skillsCon.style.marginBottom = "100px";

      els.skillsConBox1.style.padding = "20px";
      els.skillsConBox2.style.padding = "20px";
      els.skillsConBox3.style.padding = "20px";
      els.skillsConBox1.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";
      els.skillsConBox2.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";
      els.skillsConBox3.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";

      els.skillsConBox1Img.style.width = "200px";
      els.skillsConBox2Img.style.width = "200px";
      els.skillsConBox3Img.style.width = "200px";
      //-------works
      els.works.style.padding = "0 80px";
      els.works.style.margin = "0 auto";
      els.worksHeading.style.fontSize = "30px";
      els.worksHeading.style.textAlign = "center";
      els.worksHeading.style.paddingBottom = "60px";

      els.worksCon.style.display = "flex";
      els.worksConSection.style.width = "600px";
      els.worksConSection.style.margin = "0 auto";
      els.worksConSection.style.display = "flex";
      els.worksConSection.style.justifyContent = "space-between";
      els.worksConSection.style.padding = "0 50px";

      els.worksConSectionP1.style.background = "#fe697d";
      els.worksConSectionP1.style.height = "150px";
      els.worksConSectionP1.style.width = "160px";
      els.worksConSectionP1.style.margin = "0 20px";
      els.worksConSectionP1.style.color = "white";
      els.worksConSectionP1.style.textAlign = "center";
      els.worksConSectionP1.style.lineHeight = "150px";
      els.worksConSectionP1.style.boxShadow =
        "3px 5px 5px rgba(70, 62, 62, 0.15)";
      els.worksConSectionP2.style.background = "#fe697d";
      els.worksConSectionP2.style.height = "150px";
      els.worksConSectionP2.style.width = "160px";
      els.worksConSectionP2.style.margin = "0 20px";
      els.worksConSectionP2.style.color = "white";
      els.worksConSectionP2.style.textAlign = "center";
      els.worksConSectionP2.style.lineHeight = "150px";
      els.worksConSectionP2.style.boxShadow =
        "3px 5px 5px rgba(70, 62, 62, 0.15)";
      els.worksConSectionP3.style.background = "#fe697d";
      els.worksConSectionP3.style.height = "150px";
      els.worksConSectionP3.style.width = "160px";
      els.worksConSectionP3.style.margin = "0 20px";
      els.worksConSectionP3.style.color = "white";
      els.worksConSectionP3.style.textAlign = "center";
      els.worksConSectionP3.style.lineHeight = "150px";
      els.worksConSectionP3.style.boxShadow =
        "3px 5px 5px rgba(70, 62, 62, 0.15)";

      App.elements.app.appendChild(els.index);
      //-------home
      els.index.appendChild(els.home);
      els.index.appendChild(els.shapeTop);
      els.shapeTop.src = "./assets/blob.svg";
      els.index.appendChild(els.shapeBottom);
      els.shapeBottom.src = "./assets/blob.svg";
      els.home.appendChild(els.homeMessage);
      els.homeMessage.appendChild(els.homeMessageH1);
      els.homeMessage.appendChild(els.homeMessageP1);
      els.homeMessageP1.innerHTML =
        "welcome to my portfolio site. <br/> This is my introduction and tech notes. <br />You can see tech record <br/>in PLAYGROUND";
      els.homeMessage.appendChild(els.homeMessageBtn);
      els.homeMessageBtn.innerHTML = "go to PLAYGROUND";
      els.home.appendChild(els.homeTopAnimation);
      els.homeTopAnimation.appendChild(els.a1);
      lottie.loadAnimation({
        container: els.a1,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: A1,
      });
      //--------skills
      els.index.appendChild(els.skills);
      els.skills.appendChild(els.skillsHeading);
      els.skillsHeading.innerHTML = "Skills";
      els.skills.appendChild(els.skillsCon);

      els.skillsCon.appendChild(els.skillsConBox1);
      els.skillsCon.appendChild(els.skillsConBox2);
      els.skillsCon.appendChild(els.skillsConBox3);

      els.skillsConBox1.appendChild(els.skillsConBox1Img);
      els.skillsConBox1Img.src = "./assets/svg/I1.svg";
      els.skillsConBox1.appendChild(els.skillsConBox1H2);
      els.skillsConBox1H2.innerHTML = "Engineer";
      els.skillsConBox1.appendChild(els.skillsConBox1P1);
      els.skillsConBox1P1.innerHTML = "HTML5";
      els.skillsConBox1.appendChild(els.skillsConBox1P2);
      els.skillsConBox1P2.innerHTML = "CSS3";
      els.skillsConBox1.appendChild(els.skillsConBox1P3);
      els.skillsConBox1P3.innerHTML = "JavaScript";

      els.skillsConBox2.appendChild(els.skillsConBox2Img);
      els.skillsConBox2Img.src = "./assets/svg/I1.svg";
      els.skillsConBox2.appendChild(els.skillsConBox2H2);
      els.skillsConBox2H2.innerHTML = "Design";
      els.skillsConBox2.appendChild(els.skillsConBox2P1);
      els.skillsConBox2P1.innerHTML = "AdobeXD";
      els.skillsConBox2.appendChild(els.skillsConBox2P2);
      els.skillsConBox2P2.innerHTML = "Photoshop";
      els.skillsConBox2.appendChild(els.skillsConBox2P3);
      els.skillsConBox2P3.innerHTML = "Illustrator";

      els.skillsConBox3.appendChild(els.skillsConBox3Img);
      els.skillsConBox3Img.src = "./assets/svg/I1.svg";
      els.skillsConBox3.appendChild(els.skillsConBox3H2);
      els.skillsConBox3H2.innerHTML = "Architect";
      els.skillsConBox3.appendChild(els.skillsConBox3P1);
      els.skillsConBox3P1.innerHTML = "ArchiCAD";
      els.skillsConBox3.appendChild(els.skillsConBox3P2);
      els.skillsConBox3P2.innerHTML = "Twinmotion";
      els.skillsConBox3.appendChild(els.skillsConBox3P3);
      els.skillsConBox3P3.innerHTML = "Rhinoceros";
      //-------works
      els.index.appendChild(els.works);
      els.works.appendChild(els.worksHeading);
      els.worksHeading.innerHTML = "Works";
      els.works.appendChild(els.worksCon);
      els.worksCon.appendChild(els.worksConAnimation);
      els.worksConAnimation.appendChild(els.a2);
      lottie.loadAnimation({
        container: els.a2,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: A2,
      });
      els.worksCon.appendChild(els.worksConSection);
      els.worksConSection.appendChild(els.worksConSectionP1);
      els.worksConSectionP1.innerHTML = "coming soon...";
      els.worksConSection.appendChild(els.worksConSectionP2);
      els.worksConSectionP2.innerHTML = "coming soon...";
      els.worksConSection.appendChild(els.worksConSectionP3);
      els.worksConSectionP3.innerHTML = "coming soon...";
    },

    renderSkills() {
      const els = App.elements.skills;

      els.index.innerHTML = "skilsssssss";
      els.index.style.display = "none";
      App.elements.app.appendChild(els.index);
    },

    updateTime() {
      const els = App.elements.main;
      const now = dayjs();

      els.homeMessageH1.innerHTML = now.format("YYYY-MM-DD HH:mm:ss");

      setTimeout(() => {
        App.controllers.updateTime();
      }, 1000);
    },
  },

  elements: {
    app: document.getElementById("app"),
    //-----header
    header: document.createElement("div"),
    headerCon: document.createElement("div"),
    headerLeft: document.createElement("div"),
    headerRight: document.createElement("div"),
    headerLeftA: document.createElement("a"),
    headerLeftAImg: document.createElement("img"),
    headerRightA1: document.createElement("a"),
    headerRightA2: document.createElement("a"),
    headerRightA3: document.createElement("a"),
    headerRightA4: document.createElement("a"),
    //------main
    main: {
      index: document.createElement("div"),
      shapeTop: document.createElement("img"),
      shapeBottom: document.createElement("img"),
      //-----home
      home: document.createElement("div"),
      homeMessage: document.createElement("div"),
      homeMessageH1: document.createElement("h1"),
      homeMessageP1: document.createElement("p"),
      homeMessageBtn: document.createElement("button"),
      homeTopAnimation: document.createElement("div"),
      a1: document.createElement("div"),
      //-----skills
      skills: document.createElement("div"),
      skillsHeading: document.createElement("div"),
      skillsCon: document.createElement("div"),
      skillsConBox1: document.createElement("div"),
      skillsConBox2: document.createElement("div"),
      skillsConBox3: document.createElement("div"),

      skillsConBox1Img: document.createElement("img"),
      skillsConBox1H2: document.createElement("h2"),
      skillsConBox1P1: document.createElement("p"),
      skillsConBox1P2: document.createElement("p"),
      skillsConBox1P3: document.createElement("p"),

      skillsConBox2Img: document.createElement("img"),
      skillsConBox2H2: document.createElement("h2"),
      skillsConBox2P1: document.createElement("p"),
      skillsConBox2P2: document.createElement("p"),
      skillsConBox2P3: document.createElement("p"),

      skillsConBox3Img: document.createElement("img"),
      skillsConBox3H2: document.createElement("h2"),
      skillsConBox3P1: document.createElement("p"),
      skillsConBox3P2: document.createElement("p"),
      skillsConBox3P3: document.createElement("p"),

      //-------work
      works: document.createElement("div"),
      worksHeading: document.createElement("div"),
      worksCon: document.createElement("div"),
      worksConAnimation: document.createElement("div"),
      a2: document.createElement("div"),
      worksConSection: document.createElement("div"),
      worksConSectionP1: document.createElement("p"),
      worksConSectionP2: document.createElement("p"),
      worksConSectionP3: document.createElement("p"),
    },

    skills: {
      index: document.createElement("div"),
    },
  },
};

App.init();
