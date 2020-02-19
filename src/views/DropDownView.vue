<template>
  <section class="view">
    <header class="view__header">
      <h1 class="view__title">DropDown demo</h1>
      <DropDownControl v-model="isDropDownOpen" />
    </header>

    <DropDown :is-open="isDropDownOpen" content-tag="ul">
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum placeat aperiam nihil labore tenetur,
        praesentium tempora modi deserunt perspiciatis?
      </li>

      <li>
        Placeat deleniti fugiat dolor totam aliquid distinctio, cum ex iusto quis fuga est quibusdam. Quod cupiditate
        aliquam expedita velit fugit.
      </li>

      <li>
        Recusandae natus mollitia, sint distinctio fugiat, officia, quasi deleniti ea assumenda eius sapiente blanditiis
        corrupti possimus saepe aut. Autem, tenetur!
      </li>

      <li>
        Tempore odio perferendis incidunt possimus eius minus facilis consectetur, obcaecati reiciendis ab, repellendus
        numquam saepe nemo aliquid assumenda quidem beatae!
      </li>

      <li>
        Exercitationem dolorum aperiam esse ea nam sint suscipit similique sed, itaque sit ratione sunt aspernatur eos
        quibusdam! Aspernatur, laboriosam impedit.
      </li>

      <li>
        Mollitia atque, rerum veritatis animi itaque reiciendis, nulla repellat accusamus recusandae debitis nostrum,
        quos vel modi sequi in? Dolores, deleniti.
      </li>

      <li>
        Odit neque maiores velit tempora libero dignissimos, possimus nam inventore sint in soluta blanditiis magnam
        quod reprehenderit molestias reiciendis voluptate?
      </li>

      <li>
        Odit, id vel quas iusto blanditiis, unde, dolore incidunt esse quae labore quibusdam dignissimos? Non optio
        consectetur perferendis esse tempora.
      </li>

      <li>
        Assumenda aliquid fugiat, nobis ducimus minus sapiente exercitationem expedita voluptate dolores eligendi
        placeat culpa deleniti dignissimos dolorum harum ullam debitis?
      </li>

      <li>
        Quasi, voluptates dolorem mollitia doloribus laborum quod tempore eaque aliquid obcaecati tenetur vitae qui
        similique quia sed neque doloremque debitis.
      </li>
    </DropDown>
  </section>
</template>

<script>
import { DropDown, DropDownControl } from '@/components'

export default {
  name: 'DropDownView',
  route: { name: 'dropdown', path: '/dropdown', label: 'DropDown' },
  components: { DropDown, DropDownControl },
  data() {
    return { isDropDownOpen: true }
  }
}
</script>

<style lang="scss" scoped>
li + li {
  margin-top: 1rem;
}
</style>
