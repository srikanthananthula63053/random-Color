import { useEffect, useState } from "react";


export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateHexColor() {
        //  #123456 hex color having six digits
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);

    }
    function handleCreateRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{
        if(typeOfColor === "rgb") handleCreateRGBColor();
        else handleCreateHexColor();
    },[typeOfColor]);

    return (

        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRGBColor}>
                Generate Randon Color</button>
                <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color:'#fff',
                    marginTop : '50px',
                    fontSize : '60px',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                    <h1>{color}</h1>
                </div>
        </div >

    );
}