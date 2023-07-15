<script setup>
import { brief_character } from "../controller/home";
defineProps({
  title: String,
  Opening_paragraph: String,
  Directors: Array,
  Producers: Array,
  Release_date: Date,
  Planets: Array,
});
</script>
<template>
  <div class="charapterCard">
    <div class="col-sm-5 left">{{ title }}<br />{{ Release_date }}</div>
    <div class="col-sm-7 right">
      <ul>
        <li>
          <span class="starWarsFont">Producers</span>
          <div>
            <span v-for="producer in Producers" :key="producer"
              >{{ producer }},
            </span>
          </div>
        </li>
        <li>
          <span class="starWarsFont">Directors</span>
          <div>
            <span v-for="director in Directors" :key="director"
              >{{ director }},
            </span>
          </div>
        </li>
        <li>
          <span class="starWarsFont">opening Paragraph</span>
          {{ Opening_paragraph }}
        </li>
        <li>
          <span class="starWarsFont">Planets</span>
          <div>
            <span v-for="planet in Planets" :key="planet"
              >{{ planet.name }},
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
