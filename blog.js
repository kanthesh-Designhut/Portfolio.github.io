7
const Blog = [
    { header: "Complete Working of Agile Methdology", des: "Agile process model  which refers to a software development approach based on iterative development, Agile approaches that help to develop requirements ... We embrace modeling, but not in order to file some diagrams in a dusty corporate repository. We exclude documentation, but not hundreds of pages so Agile is an interactive software development approach that is delivered from time to time. so today we are going to know more about Agile, its Advantages, Disadvantages, Working flow, How it works with its Characteristics" },
    { header: "Templates & Themes: HTML,CSS & Bootstrap", des: "You will be specialized in designing and creating elegant, clean, and beautiful free website templates using Bootstrap, the most popular HTML, CSS & JS framework.here to help you all, I have updated some of the templates with code where you people can refer and build your designing skills and improve your knowledge on the mentioned technologies." },
    { header: "Web Development With Python & Django", des: "When an idea strikes the mind, the only limitation to seeing our vision come alive (or in case of development, which we are going to talk about today, the software or app we visualized to get working) is time. It may just be a small project, or even a big idea which can take the tech-lovers by the storm of its success, a complicated twirl of brain-cracking solution-offering mobile application development or even just another way to save your pictures to the cloud…or whatever you may imagine! The thing is, today the world is moving so fast, ideas can spread like fire and way before you even get a chance to realize them, someone may come up with a better solution (and a better app for it!)." },
    { header: "How to become a Web Developer", des: "FrontEnd & Backend :The every web developer should be able to explain these technologies basics So the  template seen here are designed using above some  technologies mentioned.These images are called as templates in  Web Development. Where we can use this static template as dynamic  by appying some Tricky codes before going to dynamic page lets learn some  basic Design of web page" },
    { header: "Flutter is no longer a cross-platform framework", des: "One of the main things pointed out during this year's Flutter Engage was the ability to build your app to one of six platforms: iOS, Android, Mac, Windows, Linux and web. That’s awesome news! But…" },
];

const html = Blog.map(el => {
    let newdes = el.des.slice(0, 350);
    return `<div class="Blog">
                <div class="image"></div>
                <div class="des">
                    <h3>${el.header}</h3>
                    <p>${newdes + '...'}</p>
                    <a href="https://kantheshb133.wixsite.com/designhut" target="_blank">See Details</a>
                </div>
            </div>`
});

const i = document.getElementById('demo');
i.innerHTML = html;