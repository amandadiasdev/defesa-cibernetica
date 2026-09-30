/**
 * Prefixa um caminho interno com o `base` configurado em astro.config.mjs.
 * No GitHub Pages o site vive em /<repositorio>/, então todo link interno
 * precisa passar por aqui. Links externos (http...) são devolvidos como estão.
 */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Diz se `current` está dentro da seção `path` (para marcar o item ativo do menu). */
export function isActive(current: string, path: string): boolean {
  const target = url(path).replace(/\/$/, '');
  const now = current.replace(/\/$/, '');
  if (target === url('/').replace(/\/$/, '')) return now === target;
  return now === target || now.startsWith(`${target}/`);
}
