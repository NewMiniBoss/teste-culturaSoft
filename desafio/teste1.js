// alternar destaque de número par
<div id='numbers'>
  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
  <button id='btn' onclick='trocaFundo()'>Toggle even number highlighting</button>
</div>

function trocaFundo() {
  let nodeSpan = document.querySelectorAll('#numbers span');
  
  nodeSpan.forEach(function () {
    item.style.backgroundColor = '';
  }
}