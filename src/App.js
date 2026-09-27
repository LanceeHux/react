export const styles = {
    header: `
      h-[70px] px-[5%]
      flex items-center justify-between
      bg-white border-b border-gray-200
      sticky top-0 z-10
    `,

    logo: `
      m-0
      text-[22px] font-extrabold text-pink-500 [letter-spacing:3px]
      tracking-[-0.5px]
    `,

    nav: `
      flex gap-2 hidden md:block
    `,

    navMobile: `block md:hidden`,

    navBtn: `
      px-3.5 py-2
      rounded-lg
      text-sm font-medium text-gray-500
      transition-all duration-200
      hover:bg-black hover:text-white
      w-full
    `,

    mobileNavBtn: `
      px-3.5 py-2
      rounded-lg
      text-sm font-medium text-white
      transition-all duration-200
      hover:bg-black hover:text-white
      w-full
    `,

    main: `
      w-[90%]
      mx-auto
      py-[60px]
    `,

    sectionHeader: `
      mb-7
    `,

    eyebrow: `
      mb-1.5
      text-[11px] font-bold
      tracking-[2px]
      text-gray-400
    `,

    title: `
      m-0
      text-[clamp(26px,4vw,38px)]
      font-extrabold text-pink-500 [letter-spacing:3px]
      tracking-[-1.5px]
    `,

    subtitle: `
      mt-2
      text-sm text-gray-500
    `,

    itemGrid: `
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-[18px]
    `,

    itemCard: `
      overflow-hidden
      bg-white
      border border-gray-200
      rounded-[14px]
      transition-all duration-300
      hover:-translate-y-1.5
      hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
    `,

    imageContainer: `
      w-full h-[210px]
      overflow-hidden
      bg-gray-100
    `,

    itemImg: `
      w-full h-full
      block
      object-cover
      transition-transform duration-500
      hover:scale-105
    `,

    itemContent: `
      p-[17px]
    `,

    itemTop: `
      flex items-start justify-between
      gap-2.5
    `,

    itemName: `
      m-0
      text-base font-bold
    `,

    itemPrice: `
      text-[15px]
      font-extrabold
      text-pink-500
      whitespace-nowrap
    `,

    itemDesc: `
      mt-2 mb-[18px]
      min-h-[40px]
      text-[13px]
      leading-[1.55]
      text-gray-500
    `,

    itemBottom: `
      flex items-center justify-between
    `,

    itemSold: `
      text-[11px]
      text-gray-400
    `,

    viewBtn: `
      px-3.5 py-1.5
      rounded-md
      border-0
      bg-black text-white
      text-xs font-semibold
      cursor-pointer
      transition-all duration-200
      hover:bg-gray-700
      hover:-translate-y-px
    `,
    profile: {
      activeProfile: {
        main: `
          w-full
          max-w-5xl
          mx-auto
          overflow-hidden
          bg-white
          rounded-[30px]
          border border-gray-200
          shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        `,

        hero: `
          relative
        `,

        banner: `
          h-44
          w-full
          bg-gradient-to-br
          from-pink-500
          via-fuchsia-500
          to-purple-600
        `,

        profileHolder: `
          relative
          px-6
          md:px-10
          pb-5
        `,

        profileImg: `
          absolute
          -top-14
          left-6
          md:left-10
          size-28
          rounded-[30px]
          object-cover
          bg-gray-100
          border-[6px]
          border-white
          shadow-[0_15px_35px_rgba(0,0,0,0.18)]
        `,

        identity: `
          pt-20
          flex
          flex-col
          sm:flex-row
          sm:items-end
          sm:justify-between
          gap-5
        `,

        eyebrow: `
          mb-1
          text-[10px]
          font-black
          tracking-[3px]
          text-pink-500
        `,

        name: `
          m-0
          text-3xl
          md:text-4xl
          font-black
          tracking-[-1.5px]
          text-gray-950
        `,

        role: `
          mt-1
          text-sm
          font-medium
          text-gray-400
        `,

        statusBadge: `
          w-fit
          px-4
          py-2
          rounded-full
          bg-green-50
          text-green-600
          border border-green-100
          text-xs
          font-bold
          uppercase
          tracking-wider
        `,

        dashboard: `
          px-6
          md:px-10
          pb-8
        `,

        stats: `
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mt-6
        `,

        statCard: `
          flex
          items-center
          gap-4
          p-5
          rounded-2xl
          bg-gray-50
          border border-gray-100
          transition-all
          duration-300
          hover:bg-white
          hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]
          hover:-translate-y-1
        `,

        statIcon: `
          flex
          items-center
          justify-center
          size-12
          rounded-xl
          bg-pink-100
          text-pink-600
          text-lg
          font-black
        `,

        statLabel: `
          m-0
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-gray-400
        `,

        statValue: `
          mt-1
          text-2xl
          font-black
          text-gray-950
        `,

        overview: `
          mt-5
          p-6
          rounded-2xl
          bg-gray-950
          text-white
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-8
        `,

        sectionLabel: `
          m-0
          text-[10px]
          font-black
          tracking-[3px]
          text-pink-400
          uppercase
        `,

        sectionTitle: `
          mt-2
          text-xl
          font-extrabold
          tracking-tight
        `,

        sectionDescription: `
          mt-2
          max-w-md
          text-sm
          leading-relaxed
          text-gray-400
        `,

        accountDetails: `
          grid
          grid-cols-2
          sm:grid-cols-3
          gap-5
          lg:min-w-[380px]
        `,

        accountDetailsItem: `
          flex
          flex-col
          gap-1
        `,

        accountDetailsLabel: `
          text-[10px]
          uppercase
          tracking-wider
          text-gray-500
          font-bold
        `,

        accountDetailsValue: `
          text-sm
          font-bold
          text-gray-100
        `,

        actions: `
          mt-6
          pt-6
          border-t border-gray-100
          flex
          flex-col-reverse
          sm:flex-row
          sm:justify-end
          gap-3
        `,

        actionBtn: `
          px-5
          py-3
          rounded-xl
          bg-white
          border border-gray-200
          text-sm
          font-bold
          text-gray-600
          transition-all
          duration-200
          hover:bg-gray-50
          hover:-translate-y-0.5
        `,

        primaryBtn: `
          px-5
          py-3
          rounded-xl
          bg-gray-950
          text-white
          text-sm
          font-bold
          transition-all
          duration-200
          hover:bg-pink-500
          hover:-translate-y-0.5
          hover:shadow-[0_10px_25px_rgba(236,72,153,0.25)]
        `
      },
  inactiveProfile: {
    unregisteredDiv: {
      div: `
        min-h-[420px]
        p-8
        flex
        flex-col
        justify-center
        items-center
        gap-5
        text-center
        rounded-[28px]
        bg-white
        border border-gray-100
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        [letter-spacing:1px]
      `,

      btn: `
        px-6
        py-3
        rounded-xl
        bg-gray-950
        text-white
        font-bold
        text-sm
        border border-gray-950
        shadow-lg
        transition-all
        duration-300
        hover:bg-pink-500
        hover:border-pink-500
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(236,72,153,0.25)]
      `
    }
  },

  accountHandler: {
    nav: `
      mt-5
      p-1
      rounded-xl
      bg-gray-100
      flex
      w-full
      max-w-md
      justify-between
      gap-1
    `,

    navBtn: `
      flex-1
      py-2.5
      rounded-lg
      text-center
      cursor-pointer
      text-sm
      font-bold
      text-gray-400
      transition-all
      duration-200
      hover:text-gray-700
      hover:bg-white
      focus:bg-white
      focus:text-pink-500
      focus:shadow-sm
    `,

    title: `
      m-0
      text-[clamp(24px,4vw,38px)]
      font-black
      text-gray-950
      tracking-[-1.5px]
    `,

    main: `
      flex
      flex-col
      justify-center
      items-center
      w-full
      py-8
      px-2
      transition-all
      duration-500
    `,

    form: `
      flex
      flex-col
      w-full
      max-w-xl
      gap-2
      mt-3
    `,

    subtitle: `
      mt-3
      text-xs
      font-bold
      uppercase
      tracking-wider
      text-gray-400
    `,

    inputs: `
      w-full
      p-3.5
      mt-1
      rounded-xl
      bg-gray-50
      border border-gray-200
      outline-none
      text-sm
      text-gray-900
      transition-all
      duration-200
      placeholder:text-gray-300
      focus:bg-white
      focus:border-pink-400
      focus:ring-4
      focus:ring-pink-100
    `,

    submitBtn: `
      mt-5
      p-3.5
      rounded-xl
      bg-gray-950
      text-white
      font-bold
      text-sm
      border border-gray-950
      shadow-lg
      transition-all
      duration-300
      hover:bg-pink-500
      hover:border-pink-500
      hover:-translate-y-0.5
      hover:shadow-[0_10px_25px_rgba(236,72,153,0.25)]
      active:translate-y-0
      disabled:opacity-50
      disabled:cursor-not-allowed
    `
  }
}
  }