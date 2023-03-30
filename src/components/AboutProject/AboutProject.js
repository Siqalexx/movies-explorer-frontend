function AboutProject() {
	return (
		<section id='about-project' className='about-project'>
			<h2 className='about-project__title'>О проекте</h2>
			<div className='about-info'>
				<div className='about-info__text-container'>
					<h3 className='about-info__title'>
						Дипломный проект включал 5 этапов
					</h3>
					<p className='about-info__subtitle'>
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности&nbsp;и&nbsp;финальные доработки.
					</p>
				</div>
				<div>
					<h3 className='about-info__title'>
						На выполнение диплома ушло 5 недель
					</h3>

					<p className='about-info__subtitle'>
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать,&nbsp;чтобы&nbsp;успешно защититься.
					</p>
				</div>
			</div>
			<div className='about-bars'>
				<div className='about-bar container__back'>
					<div className='about-bar__back'>1 неделя</div>
					<p className='about-bar__description'>Back-end</p>
				</div>
				<div className='about-bar container__front'>
					<div className='about-bar__front'>4 недели</div>
					<p className='about-bar__description'>Front-end</p>
				</div>
			</div>
		</section>
	);
}

export default AboutProject;
