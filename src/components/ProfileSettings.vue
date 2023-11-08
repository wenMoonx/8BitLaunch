<template>
  <div flex justify-between items-center relative>
    <div flex items-center>
      <div
        bg-accent
        w-max
        p-2
        rounded-2xl
        relative
        class="profile-wrapper"
        un-before="content-empty absolute h-4 w-1 rounded-xl transform -translate-y-1/2 left-0 top-1/2 bg-warning"
      >
        <q-avatar size="lg" rounded-xl>
          <q-img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </q-avatar>
      </div>
      <div fc ml-2>
        <span text-xl font-700>John</span>
        <span text-xs font-300>{{ user?.email }}</span>
      </div>
    </div>
    <HBtn
      h-max
      size="sm"
      color="accent"
      icon="i-uil-angle-down"
      :class="{ 'rotate-180': dropdown }"
      @click="dropdown = !dropdown"
    />
    <div
      v-show="dropdown"
      absolute
      top-15
      z-2
      left-0
      bg-accent
      w-full
      rounded-xl
      p-2
      fc
      class="shadow-24"
    >
      <q-item
        class="rounded-borders"
        active-class="active-bg"
        to="/admin"
        clickable
        v-ripple
        mb-1
      >
        <q-item-section avatar>
          <q-icon i-uil-link color-defaultText size="sm" />
        </q-item-section>
        <q-item-section>My items</q-item-section>
      </q-item>
      <q-item class="rounded-borders" to="/help" clickable v-ripple mb-1>
        <q-item-section avatar>
          <q-icon i-uil-edit-alt color-defaultText size="sm" />
        </q-item-section>
        <q-item-section>Edit profile</q-item-section>
      </q-item>
      <q-item class="rounded-borders" to="/help" clickable v-ripple mb-1>
        <q-item-section avatar>
          <q-icon i-uil-question-circle color-defaultText size="sm" />
        </q-item-section>
        <q-item-section>Help & support</q-item-section>
      </q-item>
      <q-item
        @click="$emit('logout')"
        class="rounded-borders"
        clickable
        v-ripple
        mb-1
      >
        <q-item-section avatar>
          <q-icon i-uil-signout color-defaultText size="sm" />
        </q-item-section>
        <q-item-section>Log out</q-item-section>
      </q-item>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { User } from '@supabase/gotrue-js';

  defineProps<{
    user?: User;
  }>();
  const dropdown = $ref(false);
</script>

<style lang="scss" scoped></style>
