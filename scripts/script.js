const animItems = document.querySelectorAll('._anim-item'); /*получаем все что нужно анимировать*/ 

if(animItems.length > 0) { /*если объектов не ноль*/
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for(let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 2; /* для  определения момента  анимации*/
			
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < animItemOffset + animItemHeight) {
				animItem.classList.add('_active');
			}
			else {
				if(!animItem.classList.contains('_no-repeat')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	
	function offset(el) {
		const rect = el.getBoundingClientRect();
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	
	setTimeout(() => {
		animOnScroll();
	}, 300);
}