import React, { useState } from 'react'

const StringMatching = () => {
    const [txt, setTxt] = useState("");
    const [pat, setPat] = useState("");
    const [ans, setAns] = useState([]);
    const KMPAlgorithm = () => {
        var res = [];
        var M = pat.length;
        var N = txt.length;
        var lps = [];
        var j = 0;
        FillLPS(pat, M, lps);
        var i = 0;
        while ((N - i) >= (M - j)) {
            if (pat.charAt(j) == txt.charAt(i)) {
                j++;
                i++;
            }
            if (j == M) {
                res.push(i - j);
                console.log(ans);
                j = lps[j - 1];
            }
            else if (i < N && pat.charAt(j) != txt.charAt(i)) {
                if (j != 0)
                    j = lps[j - 1];
                else
                    i = i + 1;
            }
        }
        setAns(res);

    }
    const FillLPS = (pat, M, lps) => {
        var len = 0;
        var i = 1;
        lps[0] = 0;
        while (i < M) {
            if (pat.charAt(i) == pat.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            }
            else {
                if (len != 0) {
                    len = lps[len - 1];
                }
                else {
                    lps[i] = len;
                    i++;
                }
            }
        }
    }

    return (
        <section>
            <div>
                <div className='stringBox'>
                    <h1>String Matching</h1>
                    <input type="text" id="str" onChange={(e) => { setTxt(e.target.value); }} placeholder="String" autoComplete="off" />
                    <input type="text" id="ptr" onChange={(e) => { setPat(e.target.value) }} placeholder="Pattern" autoComplete="off" />
                    <button className="btn" onClick={KMPAlgorithm}>Check</button>
                    <div>{ans ? ans.map((ele) => {
                        return (
                            <p>Pattern found at Position {ele + 1}</p>
                        )
                    }) : ""}</div></div>
            </div>
        </section >
    )
}

export default StringMatching