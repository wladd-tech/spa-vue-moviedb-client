<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="border-b-2 border-red-800 font-semibold">
    <div class="w-4/6 m-auto flex justify-between items-center py-6">
      <div>
        <h2 class="text-xl">Vue Hollywood</h2>
      </div>

      <ul class="flex gap-8 px-10">
        <li class="hover:text-red-600">
          <RouterLink to="/">Главная</RouterLink>
        </li>
        <li class="hover:text-red-600">
          <RouterLink to="/catalog">Каталог</RouterLink>
        </li>
        <li class="hover:text-red-600">
          <RouterLink to="/search">Поиск</RouterLink>
        </li>
        <li class="hover:text-red-600">
          <RouterLink to="/users">Пользователи</RouterLink>
        </li>
      </ul>

      <ul class="flex gap-8">
        <li class="hover:text-red-600">
          <RouterLink to="/sign-in">Войти</RouterLink>
        </li>
        <li class="hover:text-red-600">
          <RouterLink to="/profile">Профиль</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
