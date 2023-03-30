function TechsItem(name, index) {
	return (
		<div key={index} className='techs__item'>
			{name}
		</div>
	);
}

function Techs() {
	const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];
	return (
		<section id='techs' className='techs'>
			<h3 className='techs__toc'>Технологии</h3>
			<div className='techs__info'>
				<h2 className='techs__title'>7 технологий</h2>
				<p className='techs__subtitle'>
					На курсе веб-разработки мы освоили технологии, которые применили в
					дипломном проекте.
				</p>
			</div>
			<div className='techs__items'>
				{techs.map((item, index) => TechsItem(item, index))}
			</div>
		</section>
	);
}

export default Techs;
