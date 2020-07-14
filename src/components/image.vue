<template>
  <div class="container">
      <h3 class="mb-4 mt-4">PERSONNALISER L'IMAGE</h3>

      <img :style="{borderStyle: style, borderColor: couleur, borderWidth: borderheight + 'px' , opacity: transparance, width: width+'px', height: height+'px'}"  src="https://tong.visitkorea.or.kr/cms/resource_etc/44/2593244_image_1.jpg" />

      <hr style="background-color: rgba(0, 0, 255, 0.541); height: 2px;">
      <div role="modify image">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Transparence</label>
              <div class="col-sm-3">
                <input type="range" class="form-control" id="inputEmail3"  min="0" max="1" step="0.1" v-model="transparance"  >
                    <span> {{ transparance }} </span>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Width</label>
              <div class="col-sm-3">
                <input type="range" class="form-control" id="inputEmail3" min="50" max="800" value="200" v-model="width" >
                <span>{{ width }} px</span> 
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
        </div>
  
</template>



<script>

export default{
    components:{
        
    },

        data(){
            return{
                transparance: 1,
                width: 200,
                height: 200,
                style: 'none',
                borderheight: 1,
                couleur: 'black'
  

            }
        }
        
    }


</script>