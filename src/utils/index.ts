export function formatNumber(value: number) {
  if (value === 0) return '0';
  if (!value) return '';
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function getPathParamsByName(name?: string): string {
    if (!name) return '';
    return name
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '-')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '-')
      .replace(/--+/g, '-');
  }