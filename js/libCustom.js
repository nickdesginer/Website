tailwind.config = {
  theme: {
    extend: {
      screens: {
        mob: { max: "767px" },
        tab: { min: "768px", max: "1023px" },
        mobTab: { max: "1023px" },
      },
    },
  },
};
