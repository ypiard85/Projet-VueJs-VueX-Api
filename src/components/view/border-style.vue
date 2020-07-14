<template>
    <div style="display: flex;">
        <legend class="col-form-label col-sm-2 pt-0">Height : {{ borderheight }}</legend>
              <div class="col-sm-2">                    
                <input type="range" class="form-control" id="inputEmail3" value="1" min="1" max="10" step="0.5" v-model="borderheight"  >                                           
              </div>                          

              <legend class="col-form-label col-sm-2 pt-0">Style : {{style}}</legend>
              <div class="col-sm-2" >
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios1" value="solid" checked v-model="style">
                  <label class="form-check-label" for="gridRadios1">
                    Solid
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="dotted" v-model="style" >
                  <label class="form-check-label" for="gridRadios2">
                    dotted 
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="dashed" v-model="style">
                  <label class="form-check-label" for="gridRadios2">
                    dashed  
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="double" v-model="style">
                  <label class="form-check-label" for="gridRadios2">
                    double   
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="ridge" v-model="style" >
                  <label class="form-check-label" for="gridRadios2">
                    ridge    
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="groove" v-model="style">
                  <label class="form-check-label" for="gridRadios2">
                    groove    
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="inset" v-model="style">
                  <label class="form-check-label" for="gridRadios2">
                    inset     
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="style" id="gridRadios2" value="outset" v-model="style">
                  <label class="form-check-label" for="gridRadios2">
                    outset
                  </label> 
                                               
                </div>
              </div>

              <legend class="col-form-label col-sm-2 pt-0">Color : {{ color  }} </legend>
              <div class="col-sm-2">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="color" id="gridRadios1" value="black"  v-model="color">
                  <label class="form-check-label" for="gridRadios1">
                    noir
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="color" id="gridRadios1" value="green" checked v-model="color">
                  <label class="form-check-label" for="gridRadios1">
                    vert
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="red" v-model="color">
                  <label class="form-check-label" for="gridRadios2">
                    rouge
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="yellow" v-model="color">
                  <label class="form-check-label" for="gridRadios2">
                    jaune
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="color" id="gridRadios2" value="bleu" v-model="color">
                  <label class="form-check-label" for="gridRadios2">
                    bleu
                  </label>
                </div>
              </div>
        </div>
</template>


<script>
    export default{}
</script>