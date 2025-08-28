"use client";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "./CustomSelect.module.css";

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  value: string;
  onChange: (val: string) => void;
  options: Array<string | Option>;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
};

function normalizeOptions(options: Array<string | Option>): Option[] {
  return options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : { ...opt }
  );
}

export default function CustomSelect({
  value,
  onChange,
  options: rawOptions,
  placeholder = "Seleccionar...",
  ariaLabel,
  className,
}: Props) {
  const options = useMemo(() => normalizeOptions(rawOptions), [rawOptions]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const idx = options.findIndex((o) => o.value === value);
    return idx >= 0 ? idx : 0;
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const listboxId = useId();

  useEffect(() => {
    const idx = options.findIndex((o) => o.value === value);
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [value, options]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Ensure active option visible when opening
  useEffect(() => {
    if (open && listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]') as HTMLElement | null;
      active?.scrollIntoView({ block: "nearest" });
    }
  }, [open]);

  function commit(index: number) {
    const opt = options[index];
    if (!opt || opt.disabled) return;
    onChange(opt.value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => listRef.current?.focus(), 0);
    }
  }

  function onListKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      let next = activeIndex;
      do {
        next = (next + 1) % options.length;
      } while (options[next]?.disabled && next !== activeIndex);
      setActiveIndex(next);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      let prev = activeIndex;
      do {
        prev = (prev - 1 + options.length) % options.length;
      } while (options[prev]?.disabled && prev !== activeIndex);
      setActiveIndex(prev);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(activeIndex);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    }
  }

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} ${className ?? ""}`}>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
      >
        {selected?.label ?? placeholder}
        <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-activedescendant={`${listboxId}-opt-${activeIndex}`}
          tabIndex={-1}
          ref={listRef}
          className={styles.panel}
          onKeyDown={onListKeyDown}
        >
          {options.map((opt, i) => {
            const selected = value === opt.value;
            const isActive = i === activeIndex;
            return (
              <div
                id={`${listboxId}-opt-${i}`}
                key={opt.value}
                role="option"
                aria-selected={selected}
                data-active={isActive ? "true" : undefined}
                className={`${styles.option} ${isActive ? "active" : ""} ${opt.disabled ? "disabled" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(i)}
                aria-disabled={opt.disabled}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
