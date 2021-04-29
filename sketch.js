const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

var engine,world;
var quiz,question,a,b,c,d,e,al,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;

function preload(){
    al = loadImage("Letter Images/A.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    quiz = new Quiz1();
    question = new Question();
    a = new Letter(windowWidth-300,100,"Letter Images/A.png");
    b = new Letter(windowWidth-250,100,"Letter Images/B.png");
    c = new Letter(windowWidth-200,100,"Letter Images/C.png");
    d = new Letter(windowWidth-150,100,"Letter Images/D.png");
    e = new Letter(windowWidth-100,100,"Letter Images/E.png");
    f = new Letter(windowWidth-300,150,"Letter Images/F.png");
    g = new Letter(windowWidth-250,150,"Letter Images/G.png");
    h = new Letter(windowWidth-200,150,"Letter Images/H.png");
    i = new Letter(windowWidth-150,150,"Letter Images/I.png");
    j = new Letter(windowWidth-100,150,"Letter Images/J.png");
    k = new Letter(windowWidth-300,200,"Letter Images/K.png");
    l = new Letter(windowWidth-250,200,"Letter Images/L.png");
    m = new Letter(windowWidth-200,200,"Letter Images/M.png");
    n = new Letter(windowWidth-150,200,"Letter Images/N.png");
    o = new Letter(windowWidth-100,200,"Letter Images/O.png");
    p = new Letter(windowWidth-300,250,"Letter Images/P.png");
    q = new Letter(windowWidth-250,250,"Letter Images/Q.png");
    r = new Letter(windowWidth-200,250,"Letter Images/R.png");
    s = new Letter(windowWidth-150,250,"Letter Images/S.png");
    t = new Letter(windowWidth-100,250,"Letter Images/T.png");
    u = new Letter(windowWidth-300,300,"Letter Images/U.png");
    v = new Letter(windowWidth-250,300,"Letter Images/V.png");
    w = new Letter(windowWidth-200,300,"Letter Images/W.png");
    x = new Letter(windowWidth-150,300,"Letter Images/X.png");
    y = new Letter(windowWidth-100,300,"Letter Images/Y.png");
    z = new Letter(windowWidth-200,350,"Letter Images/Z.png");
}

function draw(){
    background("blue");
    Engine.update(engine);
    question.display();
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();
    q.display();
    r.display();
    s.display();
    t.display();
    u.display();
    v.display();
    w.display();
    x.display();
    y.display();
    z.display();
}