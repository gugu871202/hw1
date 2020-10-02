//綠 黃 橘 紅 0-64 65-130 131-195 196+
let av=[[0,64],[65,130],[131,195],[196,2000]]
function transColor(people)
{
    if (people>=0 && people<65)
        return 'green';
    else if (people>=65 && people<131)
        return 'yellow';
    else if (people >=131 && people<196)
        return 'orange';
    else
        return 'red';
}

function transIcon(people)
{
    if (people>=0 && people<65)
        return greenIcon;
    else if (people>=65 && people<131)
        return yellowIcon;
    else if (people >=131 && people<196)
        return orangeIcon;
    else
        return redIcon;
}

function transCrowd(people)
{
    if (people>=0 && people<65)
        return '人流順暢';
    else if (people>=65 && people<131)
        return '普通';
    else if (people >=131 && people<196)
        return '稍微擁擠';
    else
        return '擁擠';
}