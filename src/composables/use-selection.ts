import { MaybeRef } from '@vueuse/core';

export function useSelection(ref: MaybeRef<HTMLElement>) {
  const selected = $ref<number[]>([]);
  let selectionMode = $ref(false);

  function handleClick(id: number, evtName = '') {
    if (evtName === 'click' && !selectionMode && selected.length) {
      return (selectionMode = true);
    }

    if (selected.length || evtName === 'onLongPress') {
      selected.includes(id)
        ? selected.splice(selected.indexOf(id), 1)
        : selected.push(id);
    }

    if (!selected.length) selectionMode = false;
  }

  const isSelected = (i: number) => selected.includes(i);

  function selectAll() {
    selected.splice(0, selected.length);

    Array(unref(ref).children.length)
      .fill(1)
      .map((x, y) => x + y)
      .forEach((i) => handleClick(i - 1, 'onLongPress'));
  }

  function deselectAll() {
    selected.splice(0, selected.length);
    selectionMode = false;
  }

  const useLong = () =>
    unref(ref)?.childNodes.forEach((ref, i) =>
      onLongPress(ref as HTMLElement, () => handleClick(i - 1, 'onLongPress'))
    );

  useLong();
  onMounted(() => useLong());

  return {
    useLong,
    isSelected,
    handleClick,
    selectAll,
    deselectAll,

    selected: $$(selected),
  };
}
