/* MORE READABLE */
/* MORE READABLE */
/* MORE READABLE */
/* MORE READABLE */
function rank(st, we, n) {
    if (st.trim() === "") return "No participants";
    
    const participants = st.split(",");
    if (n > participants.length) return "Not enough participants";
    
    // 2-dimensional array of arrays in shape ['name', number]
    const associative = participants
                    .map((participant, idx) => ([participant, getParticipantNameValue(participant) * we[idx]]))
                    .sort(sortDescByValAndName);
    
    return associative.at(n-1)[0];
  }
  
  // Sum up name length and its letters charcodes starting "a" letter value of 1, "b" value of 2 etc..
  function getParticipantNameValue(str) {
    return str.split("").reduce((acc, cur) => (acc + (Number(cur.toUpperCase().charCodeAt(0)) - 64)), str.length);
  }
  
  // Sort desc by values, if values the same, sort desc by names
  function sortDescByValAndName(a, b) {
    if (a[1] != b[1]) {
      return b[1] - a[1];
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }

/* ONE LINER */
/* ONE LINER */
/* ONE LINER */
/* ONE LINER */
  function rank(st, we, n) {
    return st.trim() === "" ? "No participants" :  st.split(",")
                                                    .map((participant, idx) => ([participant, participant.split("").reduce((acc, cur) => (acc + (Number(cur.toUpperCase().charCodeAt(0)) - 64)), participant.length) * we[idx]]))
                                                    .sort((a,b) => {
                                                        if (a[1] != b[1]) {
                                                            return b[1] - a[1];
                                                        } else {
                                                            return a[0] < b[0] ? -1 : 1;
                                                        }
                                                    })
                                                    .at(n-1)?.at(0) ?? "Not enough participants";
}