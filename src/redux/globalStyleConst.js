const duration = 0.2;
export const drawerDurationSec = `${duration}s`;
export const drawerDurationMs = duration * 1000;
export const myShadow = '0 0 10px 5px rgba(100, 100, 100, 0.3)';
export const myHoverShadow = '0 0 10px 5px rgba(25, 25, 25, 0.4)';
export const myShadows = {
    boxShadow: myShadow,
    '&:hover': {
        boxShadow: myHoverShadow
    }
};
