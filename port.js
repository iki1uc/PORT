// port.js — 81 → 27 → 3

export function PORT_81(msg) {
    const text = String(msg || "");

    // 81 Basisports
    const basis = Array.from({ length: 81 }, (_, i) => ({
        id: i + 1,
        input: text,
        time: Date.now()
    }));

    // 27er Tripel
    const tripel = [
        basis.slice(0, 27),
        basis.slice(27, 54),
        basis.slice(54, 81)
    ];

    // 3 Achsen
    const achsen = {
        A: tripel[0],
        B: tripel[1],
        C: tripel[2]
    };

    return {
        ok: true,
        sys: "PORT",
        input: text,
        basis,
        tripel,
        achsen
    };
}
