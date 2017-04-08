function passwordStrength(e) {
    return score = 0,
    score += 4 * e.length,
    score += 1 * (checkRepetition(1, e).length - e.length),
    score += 1 * (checkRepetition(2, e).length - e.length),
    score += 1 * (checkRepetition(3, e).length - e.length),
    score += 1 * (checkRepetition(4, e).length - e.length),
    e.match(/(.*[0-9].*[0-9].*[0-9])/) && (score += 5),
    e.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/) && (score += 5),
    e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (score += 10),
    e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (score += 15),
    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([0-9])/) && (score += 15),
    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([a-zA-Z])/) && (score += 15),
    (e.match(/^\w+$/) || e.match(/^\d+$/)) && (score -= 10),
    score
}

function nonZeroLength(e) {
    var t = $(e).val();
    return 0 != t.length
}
function onlyNumber(e) {
    var t = $(e).val()
      , i = /^[0-9, ' ']*$/;
    return i.test(t)
}
function alphaNum(e) {
    var t = $(e).val()
      , i = /[.*+=_~&?!^@#%;,\/\\${}()|[\]]/;
    return !i.test(t)
}
function onlyAlpha(e) {
    var t = $(e).val()
      , i = /[0-9.*+=_~&?!^@#%;,\/\\${}()|[\]]/;
    return !i.test(t)
}

function checkRepetition(e, t) {
    for (res = "",
    i = 0; i < t.length; i++) {
        for (repeated = !0,
        j = 0; j < e && j + i + e < t.length; j++)
            repeated = repeated && t.charAt(j + i) == t.charAt(j + i + e);
        j < e && (repeated = !1),
        repeated ? (i += e - 1,
        repeated = !1) : res += t.charAt(i)
    }
    return res
}