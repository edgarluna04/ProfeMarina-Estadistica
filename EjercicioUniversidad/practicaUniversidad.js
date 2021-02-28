function probarEjercicio()
{
	var nombreAlumno;
	var edad;
	var sexo;
	var carrera;
	var estadoCarrera;
	var nota;

	var contadorProgramacion=0;
	var contadorProgramacionMujeres=0;
	var contadorPsicologia=0;
	var contadorDiseGraf=0;
	var contadorNoBinarios=0;

	var edadMayor=18;
	var sexoMayor;
	var nombreMayor;

	var enCurso=0;
	var abandonado=0;
	var finalizado=0;

	var continuar;


	do{
		nombreAlumno=prompt("Ingrese su nombre");	

		do{
			edad=parseInt(prompt("Ingrese su edad"));

			if(isNaN(edad) == true){
				alert("Ingrese un numero valido");
			}		

			do{
				sexo=prompt("Ingrese su sexo: masculino/ femenino/ no binario");
				if(sexo=="no binario"){
					contadorNoBinarios++;
				}

			

				do{
					carrera=prompt("Ingrese su carrera: ");

					if(carrera=="programacion"){
						contadorProgramacion++;

						if(sexo=="femenino"){
							//B. Cantidad total de mujeres que cursan la carrera de programación
							contadorProgramacionMujeres++;
						}
					}
					else if(carrera=="psicologia"){
						contadorPsicologia++;

						if(edad> edadMayor){
							//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
							edadMayor=edad;
							nombreMayor=nombreAlumno;
							sexoMayor=sexo;
						}

					}
					else{
						contadorDiseGraf++;
					}
					
					do{
						estadoCarrera=prompt("Especifique el estado de su carrera");

						if(estadoCarrera=="en curso"){
							enCurso++;
						}
						else if(estadoCarrera==abandonado){
							abandonado++;
						}
						else{
							finalizado++;
						}

					}while(isNaN(estadoCarrera)==false)
						
					do{
						nota=parseInt(prompt("Ingrese su nota (1-10)"));

					}while(isNaN(nota)==true)


					//G. ¿Cuál es la carrera que tiene más alumnos?*/ //para este solo voy a usar un array
					var cantidadAlumnosCarrera = [contadorProgramacion , contadorPsicologia, contadorDiseGraf];
					var CarreraMasConcurrida = 0;
 
					for(i = 0; i < cantidadAlumnosCarrera.length; i++){
    					if (cantidadAlumnosCarrera[i] > CarreraMasConcurrida)
    					{
    					    CarreraMasConcurrida = cantidadAlumnosCarrera[i];
    					}
					}
				
				}while(carrera!="programacion" && carrera!="psicologia" && carrera!="diseño grafico")


			}while(isNaN(sexo)==false)


		}while(edad<18)
		
		if(sexo == "no binario" && carrera == "psicologia"){
			//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
			var notaNoBinaro=0;
			var nombreNoBinario;
			var estadoCarreraNoBinario;

			if(notaNoBinaro<nota){
				notaNoBinaro=nota;
				nombreNoBinario=nombreAlumno;
				estadoCarreraNoBinario=estadoCarrera;
			}
		}

	console.log("Nombre: " + nombreAlumno);
	console.log("Edad: " + edad);
	console.log("Sexo: " +sexo);
	console.log("Carrera: " + carrera);
	console.log("Estado carrera: " + estadoCarrera);
	console.log("Nota: " +nota);

		
	
	}while(continuar = confirm("Desea agregar mas datos?") ==true)

	console.log("Alumnos programacion:" + contadorProgramacion);
	console.log("Programadores mujeres:" + contadorProgramacionMujeres);
	console.log("Alumnos psicologia: " +contadorPsicologia);
	console.log("Alumnos diseño grafico: " +contadorDiseGraf);
	console.log("Alumnos no binarios: " +contadorNoBinarios);
	console.log("La carrera mas concurrida es "+ CarreraMasConcurrida);	
	console.log("El alumno no binario "+ nombreNoBinario+" estudiante de psicologia, con estado "+estadoCarreraNoBinario+" tiene la siguiente nota: "+ notaNoBinaro);
	console.log("la cantidad de alumnos que finalizaron es "+ finalizado);


	do{
		nota++;
		if(estadoCarrera==finalizado){
			var promedioFinalizantes=0;
				
				promedioFinalizantes= nota/finalizado;
		//D. Promedio de notas de los alumnos finalizantes.
		}
		
		
		console.log("El promedio de notas de los alumnos finalizantes es: "+ promedioFinalizantes);
	}while(promedioFinalizantes<11)
	

}
