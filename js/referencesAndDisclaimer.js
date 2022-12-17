export const renderRefAndDis = () => {
    return `
        <div class="Disclaimer_and_References-content" id="Disclaimer_and_References-content">
        </div>
        <div class="resources" id="resources">
        <iframe id="resources-item" src="https://www.youtube.com/embed/vP4U8uhWmrY?autoplay=0&mute=1"
            frameborder="1"></iframe>
        </div>
    `
}

export const handleEvents = () => {
    const Disclaimer_and_References_content = "Griner played for a Russian basketball team during the WNBA offseason, and she was arrested on drug smuggling charges shortly prior to Russia's invasion of Ukraine on Feb. 17 before being released on Dec. 9 in a prisoner exchange for convicted arms dealer Viktor Bout. Griner took off from Kelly Field in San Antonio Friday around 11 a.m., CNN confirmed via her agent Lindsay Kagawa Colas. As she boarded the plane, Griner was greeted by Phoenix Mercury General Manager Jim Pitman, Phoenix Mercury President Vince Kozar and her Mercury teammate Diana Taurasi, all of whom made a surprise appearance to welcome her home. Griner is heading back to Arizona, though her representatives would not confirm exactly where, citing security concerns. CNN previously reported that Griner and her wife Cherelle had already made plans to move upon her return to the United States. CNN is reaching out to the Phoenix Mercury about Griner's intention to play on the team this season, but has not heard back yet.";
    document.getElementById('Disclaimer_and_References-content').innerHTML = Disclaimer_and_References_content;
}