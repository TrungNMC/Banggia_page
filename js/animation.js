const scroll = ScrollReveal({
    distance:"100px",
    duration:2000,
    reset:true
});

scroll.reveal(`.animation-right`,{
    origin:"left"
});

scroll.reveal(`.fade-bottom`,{
    origin:"bottom"
});