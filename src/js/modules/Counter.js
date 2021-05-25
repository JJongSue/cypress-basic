export default function Counter({ $app }) {
  const render = () => {
	$app.innerHTML = `
	   <div class="container">
		  <h1>ui counter</h1>
		  <div class="counter">
			<a href="#" class="minus-button"><span>-</span></a>
			<input name="count" type="text" class="count-display" value="10">
			<a href="#" class="plus-button"><span>+</span></a>
		  </div>
		</div>`;
  };

  const init = () => {
	render();
  };

  init();

  const $ = (selector) => document.querySelector(selector);
  const $counterBtn = $(".counter")
  const $countdiplay = $(".count-display");

  const onAddMinus = (event)  => {
	const $html = event.target.innerHTML;
	const $class = event.target.className;
	const $text = event.target.text;	
	if($html == '+' || $text == '+' || $class == 'plus-button') {
	  plus();	  
	  return;	
	}
	if($html == '-' || $text == '-' || $class == 'minus-button') {
	  minus();	  
	  return;	
	}
  };

  function plus() {
	// console.log('plus();');
	let value = Number($countdiplay.value);
	if(value >= 12) return;
	$countdiplay.value = (value+1);

  };
  function minus(){
	  let value = Number($countdiplay.value);
	if(8 >= value) return;
	$countdiplay.value = (value-1);
  }

  $counterBtn.addEventListener('click', onAddMinus);

}
