import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	getQuestions(): any {
		const tests = [
			{
				id: '000001',
				title: 'En los accidentes de motocicleta, ¿cuáles son las infracciones más frecuentes cometidas por sus conductores?',
				answers: [
					{
						title: 'No respetar la prioridad de paso',
						value: false,
						selected: false
					},
					{
						title: 'Estacionar en las aceras y ocupar el sentido contrario',
						value: false,
						selected: false
					},
					{
						title: 'Invadir el sentido contrario y conducir de forma distraída',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000002',
				title: '¿Qué indica esta señal?',
				answers: [
					{
						title: 'Parada de autobuses',
						value: true,
						selected: false
					},
					{
						title: 'Carril reservado a autobuses',
						value: false,
						selected: false
					},
					{
						title: 'Vía con circulación reservada a autobuses',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000003',
				title: 'Esta señalización recomienda circular a 70 kilómetros por hora...',
				answers: [
					{
						title: 'sólo cuando está lloviendo.',
						value: true,
						selected: false
					},
					{
						title: 'sólo cuando las condiciones meteorológicas y ambientales sean favorables.',
						value: false,
						selected: false
					},
					{
						title: 'en cualquier caso.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000004',
				title: 'Si el camión está parado, ¿puede rebasarle?',
				answers: [
					{
						title: 'Sí, cuando se le pueda rebasar sin peligro.',
						value: true,
						selected: false
					},
					{
						title: 'No, porque tiene que invadir el sentido contrario.',
						value: false,
						selected: false
					},
					{
						title: 'No, porque la marca vial lo prohíbe.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000005',
				title: '¿Qué idica esta señal?',
				answers: [
					{
						title: 'Calzada obligatoria para motocicletas sin sidecar.',
						value: true,
						selected: false
					},
					{
						title: 'Via obligatoria para cualquier motocicleta y prohibición de circular a los demás usuarios.',
						value: false,
						selected: false
					},
					{
						title: 'Vía reservada a veículos de dos ruedas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000006',
				title: 'Esta señal indica la...',
				answers: [
					{
						title: 'proximidad de un paso a nivel, puente móvil o muelle.',
						value: false,
						selected: false
					},
					{
						title: 'cercanía de un paso a nivel, puente móvil o muelle.',
						value: false,
						selected: false
					},
					{
						title: 'aproximación a un paso a nivel, puente móvil o muelle.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000007',
				title: 'Está prohibido adelantar en...',
				answers: [
					{
						title: 'las intersecciones con vías para ciclistas.',
						value: true,
						selected: false
					},
					{
						title: 'todas las intersecciones, aunque la señalización lo permita.',
						value: false,
						selected: false
					},
					{
						title: 'las glorietas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000008',
				title: 'El conductor de una motocicleta, que lleva una persona en el asiento trasero...',
				answers: [
					{
						title: 'debe utilizar el casco protector y será responsable de que lo utilice el acompañante, pero sólo en vías interurbanas.',
						value: false,
						selected: false
					},
					{
						title: 'debe utilizar el casco protector y será responsable de que lo utilice el acompañante.',
						value: true,
						selected: false
					},
					{
						title: 'debe utilizar el casco protector y aconsejar al acompañante que lo utilice.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000009',
				title: 'El vehículo derivado de turismo etá destinado...',
				answers: [
					{
						title: 'a servicios o a transporte exclusivo de mercancías.',
						value: true,
						selected: false
					},
					{
						title: 'a transporte de personas.',
						value: false,
						selected: false
					},
					{
						title: 'a transporte, simultáneo o no, de personas y mercancías.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000010',
				title: 'Si un turismo queda inmovilizado en una autopista por una avería, ¿puede ser remolcado por otro turismo?',
				answers: [
					{
						title: 'Sí, hasta llegar a la primera área de descanso.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, excepcionalmente, hasta el lugar más próximo donde pueda quedar inmovilizado sin entorpecer la circulación.',
						value: false,
						selected: false
					},
					{
						title: 'No.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000011',
				title: '¿Qué indica esta señal?',
				answers: [
					{
						title: 'Paso a nivel provisto de barreras o semibarreras.',
						value: true,
						selected: false
					},
					{
						title: 'Cruce de tranvía.',
						value: false,
						selected: false
					},
					{
						title: 'Paso a nivel sin barreras.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000012',
				title: '¿Es obligatorio llevar iluminada la placa posterior de la matrícula durante la noche?',
				answers: [
					{
						title: 'No.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, pero sólamente en vías interurbanas.',
						value: false,
						selected: false
					},
					{
						title: 'Sí.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000013',
				title: 'La señal indica la existencia de peligro por...',
				answers: [
					{
						title: 'estrechamiento de calzada.',
						value: false,
						selected: false
					},
					{
						title: 'la proximidad de una zona donde la circulación se realiza en los dos sentidos.',
						value: true,
						selected: false
					},
					{
						title: 'circulación en el mismo sentido.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000014',
				title: 'Las personas provistas de un certificado médico, ¿están exentas de utilizar el casco?',
				answers: [
					{
						title: 'Sí, en todas las vías.',
						value: true,
						selected: false
					},
					{
						title: 'Únicamente en vías urbanas y travesías.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, en vías de poblado, pero no en vías interurbanas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000015',
				title: 'Esta señal...',
				answers: [
					{
						title: 'indica que no se puede estacionar ni parar en el lado de la calzada donde se encuentra la señal.',
						value: false,
						selected: false
					},
					{
						title: 'indica que no se puede estacionar en el lado de la calzada donde se encuentra la señal.',
						value: false,
						selected: false
					},
					{
						title: 'indica que el estacionamiente tiene duración limitada y se debe indicar la hora de inicio del estacionamiento.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000016',
				title: 'Un cuadriciclo ligero, ¿a qué velocidad máxima puede circular fuera de poblado?',
				answers: [
					{
						title: 'A 50 km/h.',
						value: false,
						selected: false
					},
					{
						title: 'A 45 km/h.',
						value: false,
						selected: false
					},
					{
						title: 'A 70 km/h.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000017',
				title: 'Nada más producrise un accidente, antes de atender a las víctimas hay que...',
				answers: [
					{
						title: 'avisar a la policía.',
						value: false,
						selected: false
					},
					{
						title: 'proteger y señalizar lla zona del accidente.',
						value: true,
						selected: false
					},
					{
						title: 'organizar a los servicios de urgencia.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000018',
				title: 'Un turismo con remolque, ¿es obligatorio que lleve una rueda de repuesto del remolque?',
				answers: [
					{
						title: 'Sí.',
						value: false,
						selected: false
					},
					{
						title: 'Si, cuando el remolque no es ligero.',
						value: false,
						selected: false
					},
					{
						title: 'No.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000019',
				title: '¿Qué infracción de los conductores está relacionada con los atropellos a los peatones?',
				answers: [
					{
						title: 'Estacionar en los pasos para peatones.',
						value: true,
						selected: false
					},
					{
						title: 'Parar en doble fila.',
						value: false,
						selected: false
					},
					{
						title: 'Deslumbrar.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000020',
				title: 'Para girar a la izquierda, es obligatorio aproximarse al borde izquierdo de la calzada en las vías...',
				answers: [
					{
						title: 'con más de un carril para uno de los sentidos de la circulación.',
						value: false,
						selected: false
					},
					{
						title: 'de doble sentido de la circulación.',
						value: false,
						selected: false
					},
					{
						title: 'de un sólo sentido de la cierculación.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000021',
				title: '¿Cuáles son los principales grupos vulnerables en el tráfico?',
				answers: [
					{
						title: 'Los niños, los jóvenes y las personas mayores.',
						value: true,
						selected: false
					},
					{
						title: 'Sólo los niños y las personas mayores.',
						value: false,
						selected: false
					},
					{
						title: 'Los ciclistas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000022',
				title: '¿Qué está indicando este conductor?',
				answers: [
					{
						title: 'Que va a seguir de frente.',
						value: false,
						selected: false
					},
					{
						title: 'Que va a girar a la izquierda.',
						value: false,
						selected: false
					},
					{
						title: 'Que va a girar a la derecha.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000023',
				title: 'Un conjunto de vehículos no agrícolas en circulación debe llevar, entre sus accesorios...',
				answers: [
					{
						title: 'un equipo homologado de extinción de incendios, adecuado y en condiciones de uso.',
						value: true,
						selected: false
					},
					{
						title: 'una rueda de repuesto del remolque o semirremolque.',
						value: false,
						selected: false
					},
					{
						title: 'dos chalecos reflectantes de alta visibilidad.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000024',
				title: 'En un cruce se enciende la luz roja y el vehículo azul bloquea el paso. ¿Qué debe hacer?',
				answers: [
					{
						title: 'Salir del cruce, pero sin molestar a otros usuarios.',
						value: true,
						selected: false
					},
					{
						title: 'Esperar a que se encienda la luz intermitente amarilla.',
						value: false,
						selected: false
					},
					{
						title: 'Esperar a que se encienda la luz verde.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000025',
				title: 'Circulando con la calzada nevada las pendientes se deben subir...',
				answers: [
					{
						title: 'rápidamente, porque si el vehículo se detiene será difícil reanudar la marcha.',
						value: false,
						selected: false
					},
					{
						title: 'lentamente ya velocidad sostenida.',
						value: true,
						selected: false
					},
					{
						title: 'con la relación de marchas más corta posible.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000026',
				title: 'En los vehículos de anchura inferior a un metro la carga no debe sobresalir lateralmente más de...',
				answers: [
					{
						title: '0.40 metros a cada lado del vehículo.',
						value: false,
						selected: false
					},
					{
						title: '0.50 metros a cada lado del vehículo.',
						value: false,
						selected: false
					},
					{
						title: '0.50 metros a cada lado del eje longitudinal.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000027',
				title: 'El carril que se observa a la izquierda está abierto para circular en sentido contrario.' +
					'¿Cuál es la velocidad máxima permitida en ese carril?',
				answers: [
					{
						title: '90 kilómetros por hora.',
						value: false,
						selected: false
					},
					{
						title: '80 kilómetros por hora.',
						value: true,
						selected: false
					},
					{
						title: '100 kilómetros por hora.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000028',
				title: '¿Qué le indica este panel?',
				answers: [
					{
						title: 'Carretera intransitable para todo tipo de vehículos.',
						value: true,
						selected: false
					},
					{
						title: 'Circulación cerrada permanentemente a toda clase de vehículos.',
						value: false,
						selected: false
					},
					{
						title: 'Que continuemos la marcha como si nada.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000029',
				title: '¿Cómo debe señalizar la carga que sobresale de una motocicleta?',
				answers: [
					{
						title: 'En las motocicletas la carga no es necesario señalizarla.',
						value: true,
						selected: false
					},
					{
						title: 'Con un panel reglamentario en el extremo de la carga.',
						value: false,
						selected: false
					},
					{
						title: 'De noche con una luz roja por la parte trasera.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000030',
				title: 'Durante el día, con niebla o lluvia intensa, ¿se puede circular con la luz de largo alcance?',
				answers: [
					{
						title: 'No, sólo puede encenderse la luz de corto alcance.',
						value: false,
						selected: false
					},
					{
						title: 'No, la luz de largo alcance sólo puede encenderse de noche.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, pero es aconsejable encender la luz de cruce.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000031',
				title: '¿Está oblida una motocicleta de menos de 125cc a llevar luz de largo alcance?',
				answers: [
					{
						title: 'No.',
						value: false,
						selected: false
					},
					{
						title: 'Sí.',
						value: true,
						selected: false
					},
					{
						title: 'Únicamente las que lleven sidecar.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000032',
				title: 'El viento sopla desde el lado derecho a ráfagas. ¿Cuándo es más peligroso?',
				answers: [
					{
						title: 'Cuando circulo detrás de un vehículo grande.',
						value: false,
						selected: false
					},
					{
						title: 'Cuando un vehículo grande me adelanta.',
						value: false,
						selected: false
					},
					{
						title: 'Cuando adelanto a un vehículo grande.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000033',
				title: 'Un semáforo de carril con una luz roja en forma de aspa, ¿qué indica?',
				answers: [
					{
						title: 'Que está prohibido ocupar el carril sobre el que se encuentra situado.',
						value: true,
						selected: false
					},
					{
						title: 'Que la calzada está cerrada al tráfico.',
						value: false,
						selected: false
					},
					{
						title: 'Que, temporalmente, no se puede circular por la vía así señalizada.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000034',
				title: 'Para girar a la izquierda, en una vía en la que no hay marca que separe los dos sentidos de circulación, ¿dónde debe situarse?',
				answers: [
					{
						title: 'Obligatoriamente en el arcén, para realizar la maniobra desde allí.',
						value: false,
						selected: false
					},
					{
						title: 'Junto al eje de la calzada, sin invadir el sentido contrario.',
						value: true,
						selected: false
					},
					{
						title: 'En el centro de la calzada, invadiendo parte del sentido contrario si es preciso.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000036',
				title: 'El adelantamiento que efectía el turismo a la motocicleta, ¿es correcto?',
				answers: [
					{
						title: 'No, porque invade el sentido contrario.',
						value: true,
						selected: false
					},
					{
						title: 'Sí, porque deja la separación adecuada y ocupa el carril contiguo.',
						value: false,
						selected: false
					},
					{
						title: 'No, porque deja más de 1,50 metros de separación y tiene que ocupar el carril de sentido contrario.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000037',
				title: 'En una vía urbana de sentido único está permitido estacionar en el lado...',
				answers: [
					{
						title: 'derecho.',
						value: false,
						selected: false
					},
					{
						title: 'derecho o izquierdo, fuera de la calzada o el arcén.',
						value: false,
						selected: false
					},
					{
						title: 'derecho o izquierdo.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000038',
				title: '¿Tiene alguna obligación cuando observe que otro vehículo tiene el propósito de adelantarle?',
				answers: [
					{
						title: 'Indicarle con el intermitente derecho que puede adelantar con seguridad.',
						value: false,
						selected: false
					},
					{
						title: 'Ceñirme al borde derecho de la calzada.',
						value: true,
						selected: false
					},
					{
						title: 'Disminuir la velocidad.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000039',
				title: '¿Está permitida la circulación de animales por una carretera convencional?',
				answers: [
					{
						title: 'Sí, excepto cuando circulen enrebaño.',
						value: false,
						selected: false
					},
					{
						title: 'No.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, únicamente cuando no exista vía pecuaria.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000040',
				title: 'Los accidentes de tráfico...',
				answers: [
					{
						title: 'son la causa principal de muerte a nivel mundial.',
						value: false,
						selected: false
					},
					{
						title: 'No tienen una gran importancia.',
						value: false,
						selected: false
					},
					{
						title: 'Son una de las principales causas de mortalidad en nuestro país.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000041',
				title: 'El conductor de un vehículo extiende el brazo horizontalmente con la palma de la mano hacia atrás, ¿qué indica?',
				answers: [
					{
						title: 'Que va a girar a la izquierda.',
						value: false,
						selected: false
					},
					{
						title: 'Que tiene intención de inmovilizar el vehículo o de frenar su marcha de modo considerable.',
						value: false,
						selected: false
					},
					{
						title: 'Que va a circular marcha atrás.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000042',
				title: '¿Qué indica un semáforo con una franja blanca vertical intermintente?',
				answers: [
					{
						title: 'Detención.',
						value: true,
						selected: false
					},
					{
						title: 'Pasar.',
						value: false,
						selected: false
					},
					{
						title: 'Pasar con precaución.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000043',
				title: '¿Cuál es la distancia ideal a la que debe colocarse con respexto al airbag?',
				answers: [
					{
						title: '25 cm.',
						value: true,
						selected: false
					},
					{
						title: '10 cm.',
						value: false,
						selected: false
					},
					{
						title: 'La distancia que le permita conducir en una postura cómoda.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000044',
				title: 'Una motocicleta que arrastra un remolque, ¿puede transportar una persona en él?',
				answers: [
					{
						title: 'Sí, si se trata de un niño mayor de 7 años.',
						value: false,
						selected: false
					},
					{
						title: 'No, en ningún caso.',
						value: true,
						selected: false
					},
					{
						title: 'Sí, igual que si se tratara de un sidecar.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000045',
				title: 'Un niño de ocho años de edad con una estatura de 120 cm viaja en un turismo que no dispone de ' +
					'dispositivos de seguridad, ¿puede hacerlo?',
				answers: [
					{
						title: 'No.',
						value: true,
						selected: false
					},
					{
						title: 'Sí, en los asientos traseros.',
						value: false,
						selected: false
					},
					{
						title: 'No, porque no alcanza los 135 cm de estatura.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000046',
				title: 'El conductor de un conjunto de vehículos de más de 3.500 kg de MMA que circula por un túnel y no pretende ' +
					'adelantar debe dejar con el vehículo que le precede una separación de la menos...',
				answers: [
					{
						title: '50 metros.',
						value: false,
						selected: false
					},
					{
						title: '100 metros.',
						value: false,
						selected: false
					},
					{
						title: '150 metros.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000047',
				title: 'La tasa máxima de alcoholemia permitida en sangre para conductores profesionales es...',
				answers: [
					{
						title: '0,30 gramos por litro.',
						value: true,
						selected: false
					},
					{
						title: '0,30 miligramos por litro.',
						value: false,
						selected: false
					},
					{
						title: '0,50 gramos por litro.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000048',
				title: 'Antes de iniciar un adelantamiento, el conductor está obligado a comprobar que...',
				answers: [
					{
						title: 'no hay nada de circulación en sentido contrario.',
						value: false,
						selected: false
					},
					{
						title: 'dispone de velocidad suficiente.',
						value: true,
						selected: false
					},
					{
						title: 'el vehículo que circule delante nos avise con señales acústicas de la posibilidad de hacerlo.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000049',
				title: 'Mediante el empleo de la correspondiente señalización, las velocidades máximas en autovías dentro de poblado podrán ser...',
				answers: [
					{
						title: 'ampliadas sin rebasar, en ningún caso, los límites genéricos establecidos para dichas vías fuera de poblado.',
						value: true,
						selected: false
					},
					{
						title: 'únicamente rebajadas en autovías especialmente peligrosas.',
						value: false,
						selected: false
					},
					{
						title: 'rebajadas o ampliadas rebasando incluso los límites genéricos establecidos para dichas vías fuera de poblado.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000050',
				title: 'Los accidentes de ciclistas ¿dónde se producen con mayor frecuencia?',
				answers: [
					{
						title: 'En las vías urbanas.',
						value: false,
						selected: false
					},
					{
						title: 'En las carreteras convencionales.',
						value: true,
						selected: false
					},
					{
						title: 'En las autopistas.',
						value: false,
						selected: false
					}
				]
			},

			{
				id: '000051',
				title: 'La señal significa...',
				answers: [
					{
						title: 'vía obligatoria para los autobuses.',
						value: false,
						selected: false
					},
					{
						title: 'parada de autobuses.',
						value: false,
						selected: false
					},
					{
						title: 'carril reservado para autobuses.',
						value: true,
						selected: false
					}
				]
			},

			{
				id: '000052',
				title: '¿Está permitido realizar competiciones de velocidad en las vías públicas?',
				answers: [
					{
						title: 'Sí, siempre.',
						value: false,
						selected: false
					},
					{
						title: 'Sí, pero todas las pruebas autorizadas irán precedidas por un agente de la autoridad con una bandera de color verde.',
						value: false,
						selected: false
					},
					{
						title: 'No, como norma general.',
						value: true,
						selected: false
					}
				]
			}
		];
		return tests;
	}

}
