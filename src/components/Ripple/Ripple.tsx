import React from 'react';

type RippleArrayType = {
    x: number;
    y: number;
    size: any;
}

const Ripple = () => {
    const [rippleArray, setRippleArray] = React.useState<RippleArrayType[]>([]);
  
    const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
            ? rippleContainer.width
            : rippleContainer.height;
        const x = event.pageX - (rippleContainer.x + window.pageXOffset) - (size / 2);
        const y = event.pageY - (rippleContainer.y + window.pageYOffset) - (size / 2);
        const newRipple = {x,y,size};
        setRippleArray([...rippleArray, newRipple]);
    };

    React.useEffect(() => {
        let bounce: any;
        if (rippleArray.length > 0) {
            window.clearTimeout(bounce);
            bounce = window.setTimeout(() => {
                setRippleArray([]);
                window.clearTimeout(bounce);
            }, 850 * 4);
        }
        return () => window.clearTimeout(bounce);
    }, [rippleArray.length, 850]);

  
    return (
        <div 
            onMouseDown={addRipple}
            className='ripple-container'
        >
            {rippleArray.length 
                && rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                            }}
                        />
                    );
                }) 
                || null}
        </div>
    );
}

export { Ripple };