// maxi.js — MAXI (2-fach)

export function MAXI(achsen, msg) {
    const text = String(msg || "");

    return {
        ok: true,
        sys: "MAXI",
        input: text,
        maxi: {
            mode1: achsen,
            mode2: achsen
        },
        time: Date.now()
    };
}
