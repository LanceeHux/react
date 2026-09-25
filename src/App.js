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
      flex gap-2
    `,

    navBtn: `
      px-3.5 py-2
      rounded-lg
      text-sm font-medium text-gray-500
      transition-all duration-200
      hover:bg-black hover:text-white
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
      main: `
        relative
        overflow-hidden
        w-full
        bg-white
        border border-gray-200
        shadow-xl
      `,
    
      banner: `
        h-32
        w-full
        bg-gradient-to-r
        from-pink-500
        via-rose-500
        to-red-500
      `,
    
      profileHolder: `
        relative
        px-6 pb-6
      `,
    
      profileImg: `
        absolute
        -top-12 left-6
        size-24
        rounded-full
        object-cover
        border-4 border-white
        shadow-lg
        bg-gray-100
      `,
    
      userInfo: `
        pt-16
        flex
        items-end
        justify-between
        gap-4
      `,
    
      name: `
        text-2xl
        font-extrabold
        tracking-tight
        text-gray-900
      `,
    
      role: `
        mt-1
        text-sm
        text-gray-500
      `,
    
      statusBadge: `
        px-3 py-1
        rounded-full
        bg-pink-100
        text-pink-600
        text-xs
        font-bold
      `,
    
      stats: `
        grid
        grid-cols-2
        gap-3
        mt-6
      `,
    
      statCard: `
        p-4
        rounded-xl
        bg-gray-50
        border border-gray-100
      `,
    
      statValue: `
        text-2xl
        font-extrabold
        text-gray-900
      `,
    
      statLabel: `
        mt-1
        text-xs
        font-medium
        text-gray-400
      `,
    
      actions: `
        mt-6
        pt-5
        border-t border-gray-100
        flex
        justify-end
        gap-2
      `,
    
      actionBtn: `
        px-4 py-2
        rounded-lg
        text-sm
        font-semibold
        transition-all duration-200
        border border-gray-200
        hover:bg-gray-100
      `,
    
      primaryBtn: `
        px-4 py-2
        rounded-lg
        text-sm
        font-semibold
        bg-black
        text-white
        transition-all duration-200
        hover:bg-gray-700
        hover:-translate-y-px
      `,
      unregisteredDiv: {
        div: `p-5 flex flex-col gap-3 items-center [letter-spacing:2px]`,
        btn: `bg-pink-500 text-white p-5 rounded-xl hover:bg-pink-800 [transition:0.6s_ease] border`
      }
    }
  }