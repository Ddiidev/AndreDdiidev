const app = {
    data() {
        return {
            interface: {
                grid: {
                    defaultCols: 3,
                    cols: 3,
                    defaultMarginLeft: 'ml-2',
                    defaultPaddingBottom: '',

                    marginLeft: 'ml-2',
                    containerMarginLeftRight: '',
                    paddingBottom: '',
                    visible: ''
                },
                card: {
                    defaultFontSizeTitle: 'text-5xl',
                    defaultFontSizeSubTitle: 'text-xl',
                    defaultFontSizeNick: 'text-md',

                    fontSizeTitle: 'text-5xl',
                    fontSizeSubTitle: 'text-xl',
                    fontSizeNick: 'text-md',
                }
            },
            shares: [
                {
                    rede: 'Youtube',
                    message: "Lugar pra descarregar todos os meus pensamentos.",
                    link: "https://www.youtube.com/@Andreldev"
                },
                {
                    rede: 'Instagram',
                    message: "Eu e minha família.",
                    link: "https://www.instagram.com/alsdevbin"
                },
                {
                    rede: 'GitHub',
                    message: "Aqui fica tudo que já fiz/faço (muito massa oque eu já fiz)",
                    link: "https://github.com/ldedev"
                },
                {
                    rede: 'Linkedin',
                    message: "Ótimo local para acompanhar publicações mais profissionais.",
                    link: "https://www.linkedin.com/in/andr%C3%A9-luiz-silva-santos/"
                }
            ]
        }
    },
    created() {
        window.addEventListener("resize", this.ResizeEventHandler);
    },
    mounted() {
        this.ResizeEventHandler();
    },
    destroyed() {
        window.removeEventListener("resize", this.ResizeEventHandler);
    },
    methods: {
        OpenPage(link) {
            window.open(link)
        },
        ResizeEventHandler() {
            this.adjustColsGrid();
            this.gridIsVisible();
            this.adjustButtons();
            this.adjustCard();
        },
        adjustCard() {
            const card = document.getElementById("card");
            let widthCard = 40;
            let padding = '15px';
            let allowPercentForScreen = [
                900, 1000, 1150, 1300, 650
            ];

            allowPercentForScreen.forEach(item => {
                if (window.innerWidth < item)
                    widthCard += 10;
            });

            if (window.innerWidth < 570) {
                padding = '7px';
                this.interface.card.fontSizeTitle = 'text-4xl'
                this.interface.card.fontSizeSubTitle = 'text-lg'
                this.interface.card.fontSizeNick = 'text-sm'
            } else {
                this.interface.card.fontSizeTitle = this.interface.card.defaultFontSizeTitle
                this.interface.card.fontSizeSubTitle = this.interface.card.defaultFontSizeSubTitle
                this.interface.card.fontSizeNick = this.interface.card.defaultFontSizeNick
            }

            card.style.width = widthCard + "%";
            card.style.padding = padding;
        },
        adjustButtons() {
            this.interface.grid.marginLeft = this.interface.grid.defaultMarginLeft;
            this.interface.grid.paddingBottom = this.interface.grid.defaultPaddingBottom;
            this.interface.grid.containerMarginLeftRight = 'ml-5 mr-5';
            this.interface.grid.paddingBottom = 'pb-3';

            if (window.innerWidth < 390) {
                this.interface.grid.marginLeft = 'ml-2';
                this.interface.grid.paddingBottom = 'pb-10';
                this.interface.grid.containerMarginLeftRight = 'ml-5 mr-5';
            }
        },
        gridIsVisible() {
            this.interface.grid.visible = window.innerWidth > 270 ? '' : 'none';
        },
        adjustColsGrid() {
            if (window.innerWidth < 640)
                this.interface.grid.cols = 1;
            else if (window.innerWidth < 780)
                this.interface.grid.cols = 2;
            else
                this.interface.grid.cols = this.interface.grid.defaultCols;
        }
    }
};


Vue.createApp(app).mount('#app');