<template>
    <AppLayout>
      <NuxtPage />
    </AppLayout>
  </template>
  
  <style>
    @font-face {
        font-family: 'Marcellus';
        src: url('assets/Marcellus-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Saira Condensed';
        /* src: url('assets/Bevan-Regular.ttf') format('truetype'); */
        /* src: url('assets/SairaCondensed-SemiBold.ttf') format('truetype'); */
        src: url('assets/JosefinSans-VariableFont_wght.ttf') format('truetype');
        /* font-weight: normal;
        font-style: normal; */
    }

  html, body, section *, p, a, ul, li {
    /* font-family: $dt('font.sans'); */
    font-family: 'Marcellus' !important;
    font-weight: normal !important;
    -moz-osx-font-smoothing: grayscale; 
    -webkit-font-smoothing: antialiased;
  }

  nav *, .logo * {
    font-family: 'Saira Condensed' !important;
    font-size: 22px;
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    /* font-weight: normal !important; */
  }

  html.dark * {
    --color-primary-500: #8dc4ff;
  }

  </style>