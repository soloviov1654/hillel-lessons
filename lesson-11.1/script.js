const table = document.querySelector('table');

function pifagor () {
    
    for (let vertical =1; vertical<=10;vertical++) {
        
        const tr = document.createElement('tr');
       const td = document.createElement('td')
        td.textContent = vertical
        tr.appendChild(td); 

        for (let horizontal= 2; horizontal<=10;horizontal++) {
            const td = document.createElement('td')
            td.textContent = horizontal * vertical
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

}
pifagor ();