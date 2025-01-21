const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'Dashboard de Análise do Mercado de Criptomoedas',
      date: '07 de Setembro de 2024',
      languages: [],
      description: `Este dashboard foi desenvolvido como parte de um processo seletivo para a vaga de Desenvolvedor Full Stack na TradeSee. <br /> <br />
                    "Teste de UI/UX<br />
                    📌 Criar uma dashboard com um interface de usuário criativa e intuitiva.<br />
                    1. Utilizar linguagens JavaScript e qualquer framework;<br />
                    2. A aplicação deverá ser responsiva para web e mobile;<br />
                    3. Fazer um breve descrição justificando os elementos e as paletas de cores;<br />
                    4. Subir o projeto em um repositório no github e compartilhar;<br />
                    5. Não será permitido plágios e códigos de IA." <br /> <br />

                    ⚙️ Tecnologias Utilizadas<br />

                    Next.js: Para uma experiência de usuário rápida e otimizada.<br />
                    React: Para construir interfaces interativas e responsivas.<br />
                    JavaScript​: A base para a lógica do projeto.<br />
                    Node.js: Para gerenciar o backend e manipular dados.<br /><br />


                    Além disso, o design responsivo garante uma boa experiência em diferentes dispositivos, adaptando-se às necessidades dos usuários.<br /><br />

                    🌟 Conclusão<br />
                    Este projeto não apenas me permitiu aplicar meus conhecimentos técnicos, mas também aprimorar minhas habilidades em design de interface e usabilidade.<br /><br />
`,
      imgSrc: './img/Dashboard.png',
      videoSrc: 'https://www.youtube.com/embed/M7_t8HfjYt4',
      linkedin: 'https://www.linkedin.com/posts/gabrielfarhat_apresentando-meu-projeto-dashboard-de-activity-7252824639972761600-FeNL?utm_source=share&utm_medium=member_desktop',
      repository: 'https://github.com/Gabriel-Farhat/Dashboard-Analise-Mercado-Criptomoedas',
      site: 'https://analytical-cripto-dash.vercel.app'
    },
    {
      id: 2,
      type: 1,
      title: 'Software para impressão de etiquetas de pallets <br/>- BackEnd',
      date: '01 de Dezembro de 2024',
      languages: [''],
      description: `É com grande satisfação que compartilho o projeto desenvolvido durante meu estágio! 🚀<br/><br/>
Trata-se de uma solução de software para impressão de etiquetas de pallets, desenvolvida com foco na otimização do controle de validade dos produtos. O sistema se integra ao banco de dados Oracle corporativo, realizando consultas e gestão das informações em tempo real.<br/><br/>
Desenvolvido integralmente em Python, com interface gráfica implementada via Tkinter, o software automatiza todo o processo de etiquetagem: desde a seleção do produto até a impressão das etiquetas em impressoras Zebra TLP, permitindo ao usuário definir a quantidade necessária com precisão.<br/><br/>

Os principais benefícios alcançados incluem:<br/>

             •  Automatização do processo de etiquetagem<br/>
             •  Redução significativa de erros operacionais<br/>
             •  Maior controle sobre datas de validade<br/>
             •  Otimização do tempo de processamento no setor de recebimento<br/><br/>

Este projeto não apenas modernizou o processo existente, mas trouxe ganhos mensuráveis de produtividade para a operação. Estou entusiasmado para discutir os resultados obtidos e explorar novas possibilidades de aprimoramento! 💡<br/><br/>`,
      imgSrc: './img/imppalete.png',
      videoSrc: './img/impapresenta.png',
      linkedin: 'https://www.linkedin.com/posts/gabrielfarhat_inovaaexaeto-python-desenvolvimentodesoftware-activity-7163550841822547971-rniR?utm_source=share&utm_medium=member_desktop',
      repository: '#',
      site: '#'
    },
    {
      id: 3,
      type: 2,
      title: 'Central do colaborador - Distribuidora Campos',
      date: '14 de Outubro de 2023',
      languages: [],
      description: `O projeto Central do Colaborador foi desenvolvido durante minha atuação na Distribuidora Campos, com o objetivo de reunir, em um único ambiente, informações e 
                    ferramentas essenciais para aumentar a produtividade dos colaboradores.<br /><br />

                    A plataforma foi projetada para oferecer fácil acesso a recursos como:<br />

                    Dashboards com indicadores de status do pedido, cortes de produto por pedidos, etc..;<br />
                    Listagem de números de ramais organizados para agilizar a comunicação interna;<br />
                    Outras ferramentas úteis para o dia a dia, integradas para promover eficiência e reduzir o tempo gasto com tarefas operacionais.<br /><br />
                    Com uma interface intuitiva e centralizada, a Central do Colaborador se tornou um ponto de apoio estratégico, proporcionando maior organização e contribuindo 
                    diretamente para o aumento da eficiência e da colaboração dentro da empresa.
        `,
      imgSrc: './img/centraldocolaborador.png',
      videoSrc: './img/centralfoto.png',
      linkedin: '#',
      repository: '#',
      site: '#'

    },
    {
      id: 4,
      type: 2,
      title: 'E-Commerce - Distribuidora Campos',
      date: '14 de Outubro de 2023',
      languages: [],
      description: `Este projeto, já em funcionamento, é um site de e-commerce de uma distribuidora de alimentos, no qual assumi a responsabilidade de realizar melhorias e 
                    atualizações no layout. O objetivo principal das alterações foi tornar o site mais amigável para os clientes, ao mesmo tempo em que se buscava reforçar uma 
                    aparência mais profissional e alinhada com a identidade visual da empresa.<br /><br />

                    As melhorias foram implementadas com foco na usabilidade, acessibilidade e estética, resultando em uma experiência mais intuitiva e agradável para os usuários, 
                    fortalecendo a presença online e a credibilidade da marca no mercado.<br /><br />

                    Tecnologias utilizadas:<br />

                    HTML<br />      
                    CSS<br />
                    JavaScript<br /><br />`,
      imgSrc: './img/dtcpprincipal.png',
      videoSrc: './img/dtcpprincipal.png',
      linkedin: '',
      repository: '',
      site: ''
    },
    
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="dowhile 2021">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      name: 'React.js',
      src: 'react'
    },
    {
      name: 'Next.js',
      src: 'nextjs'
    },
    // {
    //   name: 'CSS-in-JS',
    //   src: 'styledcomponents'
    // },
    // {
    //   name: 'Material UI',
    //   src: 'materialui'
    // },
    // {
    //   name: 'Tailwind CSS',
    //   src: 'tailwindcss'
    // },
    // {
    //   name: 'GraphQL',
    //   src: 'graphql'
    // },
    // {
    //   name: 'Apollo',
    //   src: 'apollo'
    // },
    // {
    //   name: 'Redux',
    //   src: 'redux'
    // },
    // {
    //   name: 'React Query',
    //   src: 'reactquery'
    // },
    // {
    //   name: 'React Testing',
    //   src: 'testing'
    // },
    // {
    //   name: 'Strapi',
    //   src: 'strapi'
    // },
    // {
    //   name: 'Storybook',
    //   src: 'storybook'
    // },
    // {
    //   name: 'SASS',
    //   src: 'sass'
    // },
    // {
    //   name: 'Figma',
    //   src: 'figma'
    // }
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkLinkedin.setAttribute('href', linkedin)
  iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();

