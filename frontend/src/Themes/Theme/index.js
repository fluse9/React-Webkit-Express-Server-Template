const useTheme = () => {
    const palette = {
        primary: {
            dark: 'rgb(28, 50, 109)',
            main: 'rgb(70, 101, 174)',
            light: 'rgb(0, 139, 224)',
        },
        secondary: {
            dark: 'rgb(55, 120, 58)',
            main: 'rgb(31, 196, 40)',
            light: 'rgb(40, 247, 51)',
        },
        tertiary: {
            dark: 'rgb(196, 45, 141)',
            main: 'rgb(247, 57, 176)',
            light: 'rgb(249, 132, 206)',
        },
        accent: {
            dark: 'rgb(196, 26, 26)',
            main: 'rgb(228, 29, 30)',
            light: 'rgb(247, 32, 32)',
        },
        info: {
            main: 'rgb(52, 132, 240)',
        },
        success: {
            main: 'rgb(113, 201, 69)',
        },
        warning: {
            main: 'rgb(236, 181, 85)',
        },
        error: {
            main: 'rgb(225, 45, 45)',
        },
        white: {
            main: 'rgb(255, 255, 255)',
        },
        black: {
            black: 'rgb(0, 0, 0)',
            dark: 'rgb(21, 27, 31)',
            main: 'rgb(31, 41, 46)',
            light: 'rgb(39, 52, 59)',
        },
        gray: {
            dark: 'rgb(65, 80, 88)',
            main: 'rgb(200, 205, 208)',
            light: 'rgb(242, 242, 243)',
        },
    };

    const cssProperties = {
        boxShadow: {
            black: `0px 8px 32px 0px ${palette?.black?.main}`,
            dark: `${palette?.gray?.main} 0px 19px 38px, ${palette?.black?.main} 0px 15px 12px;`,
            main: `${palette?.gray?.main} 0px 50px 100px -20px, ${palette?.black?.main} 0px 30px 60px -30px`,
            light: `0px 2px 4px 1px ${palette?.gray?.main}`,
            lightHover: `0px 4px 8px 1px ${palette?.gray?.main}`,
            white: `0px 1px 2px 1px ${palette?.gray?.light}`,
        },
        padding: {
            none: '0px',
            extraSmall: '2px',
            small: '4px',
            medium: '8px',
            large: '12px',
            extraLarge: '16px',
            huge: '32px',
        },
        margin: {
            none: '0px',
            extraSmall: '2px',
            small: '4px',
            medium: '8px',
            large: '12px',
            extraLarge: '16px',
            huge: '32px',
        },
        transition: {
            short: '0.2s',
            medium: '0.4s',
            long: '0.8s',
        },
    };

    const sizes = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px',
    };

    const devices = {
        mobileS: `(min-width: ${sizes?.mobileS})`,
        mobileM: `(min-width: ${sizes?.mobileM})`,
        mobileL: `(min-width: ${sizes?.mobileL})`,
        tablet: `(min-width: ${sizes?.tablet})`,
        laptop: `(min-width: ${sizes?.laptop})`,
        laptopL: `(min-width: ${sizes?.laptopL})`,
        desktop: `(min-width: ${sizes?.desktop})`,
        desktopL: `(min-width: ${sizes?.desktop})`,
    };

    const theme = {
        palette,
        cssProperties,
        devices,
    };

    return theme;
};

export default useTheme;
