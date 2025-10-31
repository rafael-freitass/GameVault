import React from "react";

export default function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </form>
  );
}