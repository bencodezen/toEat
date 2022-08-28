<script setup lang="ts">
const list = [
  {
    name: 'El Burrito Mercado',
    address: '175 Cesar Chavez St, St Paul, MN 55107',
    website: 'https://elburritomercado.com/',
    status: {
      level: 'Want to Try',
      priority: 0,
    },
  },
  {
    name: 'El Cubano',
    address: '870 Dodd Rd, St Paul, MN 55118',
    website: 'http://elcubanorestaurante.com/',
    status: {
      level: 'Want to Try',
      priority: 0,
    },
  },
  {
    name: "Brunson's Pub",
    address: '956 Payne Ave, St Paul, MN 55130',
    status: 'Visit Website',
    status: {
      level: 'Want to Try',
      priority: 0,
    },
  },
]
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <div class="column is-4-tablet is-3-desktop is-2-widescreen">
        <nav class="menu">
          <p class="menu-label">Menu</p>
          <ul class="menu-list">
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Dishes</a></li>
          </ul>
        </nav>
      </div>
      <div class="column">
        <h1 class="title">Restaurants</h1>
        <!-- CTA Bar -->
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5"><strong>6</strong> restaurants</p>
            </div>

            <p class="level-item">
              <a href="#" class="button is-success">New</a>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Restaurant name" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">Order by</div>
            <div class="level-item">
              <div class="select">
                <select>
                  <option>Price</option>
                  <option>Location</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
        <!-- Display Results -->
        <div class="columns is-multiline">
          <div v-for="item in list" class="column is-12-tablet is-6-desktop is-4-widescreen" :key="`item-${item}`">
            <article class="box">
              <div class="media">
                <aside class="media-left">
                  <img src="https://via.placeholder.com/80x120" alt="" />
                </aside>
                <div class="media-content">
                  <p class="title is-4 is-spaced mb-1">
                    <a href="#"> {{ item.name }} </a>
                  </p>
                  <p class="subtitle mb-2">
                    <span class="tag is-info">Want to Try</span>
                  </p>
                  <div class="content is-small">
                    {{ item.address }}
                    <br />
                    <a href="#">Edit</a>.
                    <a href="#">Delete</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- Pagination -->
        <nav class="pagination">
          <a class="pagination-previous" href="#">Previous</a>
          <a class="pagination-next" href="#">Next page</a>
          <ul class="pagination-list">
            <li><a href="#" class="pagination-link is-current">1</a></li>
            <li><a href="#" class="pagination-link">2</a></li>
            <li><a href="#" class="pagination-link">3</a></li>
            <li><a href="#" class="pagination-link">4</a></li>
            <li><a href="#" class="pagination-link">5</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link">15</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>
