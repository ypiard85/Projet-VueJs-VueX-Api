<template>
  <div class="container">
      <h3 class="mb-4 mt-4">PERSONNALISER VOTRE IMAGE</h3>

      <img v-if="urlImg != '' " :style="{borderStyle: style, borderColor: couleur, borderWidth: borderheight+'px' , opacity: transparance, width: width+sizeChoix, height: height+'px'}"  :src="urlImg" />
      <h2 v-else class="imgempty"> Selectionner une image </h2>
      <hr style="background-color: rgba(0, 0, 255, 0.541); height: 2px;">
      <div role="modify image">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Link de l'image</label>
              <div class="col-sm-3">
                <input type="url" class="form-control" id="inputEmail3"  v-model="urlImg" placeholder="httt://image.com" >
        
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Transparence</label>
              <div class="col-sm-3">
                <input type="range" class="form-control" id="inputEmail3"  min="0" max="1" step="0.1" v-model="transparance"  >
                    <span> {{ transparance }} </span>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Width <br>
              <input type="radio" v-model="sizeChoix" value="px" name="size"> px
              <input class="ml-3" v-model="sizeChoix" type="radio" value="%" name="size"> %
              </label>
              <div class="col-sm-3">
                <input v-if="sizeChoix == 'px' " type="range" class="form-control" id="inputEmail3" min="50" max="800" value="200" v-model="width" >
                <input v-else type="range" class="form-control" id="inputEmail3" min="5" max="100" value="5" v-model="width" >
                <span>{{ width+sizeChoix }} </span> 
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Height</label>
              <div class="col-sm-3">
                <input type="range" class="form-control" id="inputEmail3" min="50" max="800" value="200" v-model="height" >
                <span>{{ height }} px</span>
              </div>
            </div>
            <!--BORDER-->
            <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-1 pt-0">Border</legend>
                  <div class="col-sm-1">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios1" value="none" checked v-model="style" >
                      <label class="form-check-label" for="border">
                        none
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="border" value="solid"  v-model="style">
                      <label class="form-check-label" for="border">
                        solid
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="dotted"  v-model="style">
                      <label class="form-check-label" for="border">
                        dotted 
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="dashed"  v-model="style">
                      <label class="form-check-label" for="border">
                        dashed  
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="double"  v-model="style">
                      <label class="form-check-label" for="gridRadios2">
                        double   
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="ridge "  v-model="style">
                      <label class="form-check-label" for="gridRadios2">
                        ridge    
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="groove "  v-model="style">
                      <label class="form-check-label" for="gridRadios2">
                        groove    
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="inset"  v-model="style">
                      <label class="form-check-label" for="gridRadios2">
                        inset     
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="border" id="gridRadios2" value="outset"  v-model="style">
                      <label class="form-check-label" for="gridRadios2">
                        outset     
                      </label>
                    </div>
                    <span>{{ style }}</span>
                  </div>

                  <div style="display: flex;" v-if="style != 'none' ">
                    <legend class="col-form-label col-sm-3 pt-0">Height : {{ borderheight }}</legend>
                          <div class="col-sm-4">                    
                            <input type="range" name="borderheight" class="form-control" id="inputEmail3" value="1" min="1" max="10" step="0.5" v-model="borderheight" >                                           
                          </div>                          
            
                          <legend class="col-form-label col-sm-3 pt-0">Color : {{ couleur  }} </legend>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="color" id="gridRadios1" value="black"  v-model="couleur">
                              <label class="form-check-label" for="gridRadios1">
                                noir
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="color" id="gridRadios1" value="green" checked v-model="couleur">
                              <label class="form-check-label" for="gridRadios1">
                                vert
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="red" v-model="couleur">
                              <label class="form-check-label" for="gridRadios2">
                                rouge
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="yellow" v-model="couleur">
                              <label class="form-check-label" for="gridRadios2">
                                jaune
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="blue" v-model="couleur">
                              <label class="form-check-label" for="gridRadios2">
                                bleu
                              </label>
                            </div>
                          </div>
                    </div>
                </div>
              </fieldset>
            </div>  
            <button class="btn btn-info" @click="sourceTrue">Voir code source</button>

            <div class="container mt-4 mb-4 source" v-if="source" >
              <div class="card" style="width: 18rem;background-color: aquamarine;">                
                <div class="card-body" >
                  <div class="code_link">   
                    <span @click="sourceFalse" style="position: absolute; right: 10px; top: 10px; cursor: pointer;">X</span>                                    
                    <h4>Html</h4>                                        
                      <xmp>&ltimg class="image" src="{{urlImg}}" /></xmp>
                    </div>                    
                </div>
              </div>              
              <div class="card" style="width: 18rem; background-color: rgba(127, 255, 212, 0.425);">
                  <div class="card-body">
                    <div class="code_link">                       
                      <h4>Css</h4>
                      <div id="css_copy">
                        .image{
                          <div class="ml-4">
                            <span v-if="transparance > 0" >opacity: {{ transparance }};</span><br>
                            <span>width: {{ width+sizeChoix }};</span><br>
                            <span>border: {{borderheight + ' ' + style + ' ' + couleur  }};</span>
                          </div>
                      }
                      </div>                
                  </div>
                </div>
              </div> 
            </div> 
      </div>
</template>



<script>

export default{
    components:{
        
    },

        data(){
            return{
                urlImg: '',
                transparance: 1,
                sizeChoix: 'px',
                width: 0,
                height: 200,
                style: 'none',
                borderheight: 1,
                couleur: 'black',
                source: false,
            }
        },

        methods:{
          sourceTrue(){
            this.source = true
          },
          sourceFalse(){
            this.source = false
          },
        }
        
    }


</script>

<style scoped>
  .imgempty{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgba(128, 128, 128, 0.493);
    text-align: center;
  }

  .code_link{
    overflow: hidden;
  }
  
  .code_link button{
    position: absolute;
    right: 10px;
    background-image: url('https://cdn.icon-icons.com/icons2/931/PNG/512/copy_paste_icon-icons.com_72426.png');
    background-size: cover;
    width: 30px;
    height: 30px;
  }





</style>