const express = require('express')
//crear el objeto express

const app = express()

//url de prueba:
app.get('/prueba', (request, response ) =>{

    //EJEEMPLO DE RESPONSE BASICO
    response.send("Hola")
})

//URI DE BOOTCAMPS


//1 SELECCIONAR TODOS LOS BOOTCAMPS
app.get(('/bootcamps'),
          (req, res ) =>{
                return res.json({
                    success: true,
                    msg: "seleccionano todos los bootcamps"
                })
          })


//2 SELECCIONA EL BOOTCAMP CUYO ID SE PASE POR UN PARA METRO    
app.get('/bootcamps/:id', 
        (req , res) =>{
            bootcmapId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando bootcamp cuyo i es: ${bootcmapId}`
             }
            )   
        })
        
//3 Crear bootamp
app.post(('/bootcamps'),
          (req, res ) =>{
                return res.json({
                    success: true,
                    msg: "Crear bootcamp"
                })
          })

 //4 Actualizar bootcamp por id    
app.put('/bootcamps/:id', 
(req , res) =>{
    bootcmapId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando bootcamp cuyo id es:  ${bootcmapId}`
     }
    )   
})   

//5. borrar  
app.delete('/bootcamps/:id', 
        (req , res) =>{
            bootcmapId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando bootcamp cuyo id es: ${bootcmapId}`
             }
            )   
        })

//definir puerto de servidor
const PUERTO = 4500

//definit servidor
app.listen( PUERTO ,
            console.log(`servidor ejecutando en ${ PUERTO }`))


//------------------------------CURSOS------------------------------------------//
//1 SELECCIONAR TODOS LOS CURSOS
app.get(('/cursos'),
          (req, res ) =>{
                return res.json({
                    success: true,
                    msg: "seleccionano todos los cursos"
                })
          })

//2 SELECCIONA EL CURSO CUYO ID SE PASE POR UN PARA METRO    

app.get('/cursos/:id', 
        (req , res) =>{
            cursoId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando curso cuyo i es: ${cursoId}`
             }
            )   
        })

//3 Crear curso
app.post(('/cursos'),
          (req, res ) =>{
                return res.json({
                    success: true,
                    msg: "Crear curso"
                })
          })

          //4 Actualizar curso por id    
app.put('/cursos/:id', 
(req , res) =>{
    cursosId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando cursos cuyo id es:  ${cursosId}`
     }
    )   
})

//5. borrar  
app.delete('/cursos/:id', 
        (req , res) =>{
            cursosId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando cursos cuyo id es: ${cursosId}`
             }
            )   
        })
 //--------------------------------REVIEW------------------------------------//

//1 SELECCIONAR TODOS LOS CURSOS
app.get(('/review'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "seleccionano todos las review"
      })
})

//2 SELECCIONA EL CURSO CUYO ID SE PASE POR UN PARA METRO    

app.get('/review/:id', 
        (req , res) =>{
            reviewId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando curso cuyo i es: ${reviewId}`
             }
            )   
        })

 //3 Crear curso
app.post(('/review'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "Crear review"
      })
})

//4 Actualizar review por id    
app.put('/review/:id', 
(req , res) =>{
    reviewId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando review cuyo id es:  ${reviewId}`
     }
    )   
})

//5. borrar  
app.delete('/review/:id', 
        (req , res) =>{
            reviewId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando review cuyo id es: ${reviewId}`
             }
            )   
        })


//------------------------------USERS------------------------------//

//1 SELECCIONAR TODOS LOS USERS
app.get(('/user'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "seleccionando todos los users"
      })
})

//2 SELECCIONA EL USER CUYO ID SE PASE POR UN PARA METRO    

app.get('/user/:id', 
        (req , res) =>{
            userId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando user cuyo i es: ${userId}`
             }
            )   
        })

 //3 CREAR USER 
app.post(('/user'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "Crear nuevo user"
      })
})

//4 Actualizar USER por id    
app.put('/user/:id', 
(req , res) =>{
    userId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando user cuyo id es:  ${userId}`
     }
    )   
})

//5. borrar USER POR ID  
app.delete('/user/:id', 
        (req , res) =>{
            userId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando user cuyo id es: ${userId}`
             }
            )   
        })


        
