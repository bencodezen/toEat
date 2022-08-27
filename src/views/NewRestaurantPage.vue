<script setup lang="ts"></script>

<template>
  <main class="section">
    <nav class="breadcrumb">
      <ul>
        <li><a href="#">Restaurants</a></li>
        <li class="is-active"><a href="#">New Restaurant</a></li>
      </ul>
    </nav>
    <form>
      <div class="field">
        <div class="field">
          <label for="title" class="label">Title</label>
          <div class="control">
            <input type="text" class="input is-large" placeholder="e.g. Eat Here" required />
          </div>
        </div>
        <div class="columns is-desktop">
          <div class="column">
            <label for="price" class="label">Price</label>
            <div class="control has-icons-left">
              <input type="number" class="input" placeholder="e.g. 22.99" required />
              <span class="icon is-small is-left">
                <i class="fa fa-dollar"></i>
              </span>
            </div>
          </div>
          <div class="column">
            <label for="pages" class="label">Pages</label>
            <div class="control">
              <input type="number" class="input" placeholder="e.g., 270" />
            </div>
          </div>
          <div class="column">
            <label for="" class="label">ISBN</label>
            <div class="control">
              <input type="text" class="input" placeholder="e.g., 912873289" required />
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Cover image</label>
          <div class="control">
            <div class="file has-name">
              <label class="file-label">
                <input type="file" class="file-input" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fa fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
                <span class="file-name"> No file chosen </span>
              </label>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="buttons">
            <button class="button is-medium is-success">Create</button>
            <button class="button is-medium is-light">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<style></style>
