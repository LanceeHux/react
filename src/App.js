export const styles = {
    header: `
      h-[70px] px-[5%]
      flex items-center justify-between
      bg-white border-b border-gray-200
      sticky top-0 z-10
    `,
    main: `
            w-[92%]
            max-w-7xl
            mx-auto
            py-10
            md:py-14
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
    dashboard: {

        main: `
            w-[92%]
            max-w-7xl
            mx-auto
            py-10
            md:py-14
        `,


        /* HEADER */

        sectionHeader: `
            mb-9
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-5
        `,

        eyebrow: `
            mb-2
            text-[10px]
            font-black
            tracking-[3px]
            text-pink-500
        `,

        title: `
            m-0
            max-w-xl
            text-[clamp(28px,5vw,46px)]
            font-black
            leading-[1.05]
            tracking-[-2px]
            text-gray-950
        `,

        subtitle: `
            mt-3
            max-w-lg
            text-sm
            leading-relaxed
            text-gray-400
        `,

        headerBadge: `
            flex
            items-center
            gap-2
            w-fit
            px-4
            py-2
            rounded-full
            bg-white
            border border-gray-200
            text-xs
            font-bold
            text-gray-500
            shadow-sm
        `,

        headerBadgeDot: `
            size-1.5
            rounded-full
            bg-pink-500
        `,


        /* GRID */

        itemGrid: `
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
        `,


        /* CARD */

        itemCard: `
            group
            overflow-hidden
            flex
            flex-col
            bg-white
            rounded-[24px]
            border border-gray-200
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-y-1.5
            hover:border-gray-300
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        `,


        /* IMAGE */

        imageContainer: `
            relative
            w-full
            h-[230px]
            overflow-hidden
            bg-gray-100
        `,

        itemImg: `
            w-full
            h-full
            object-cover
            block
            transition-transform
            duration-700
            group-hover:scale-[1.06]
        `,

        productTag: `
            absolute
            top-4
            left-4
            px-3
            py-1.5
            rounded-full
            bg-white/90
            backdrop-blur-md
            text-[9px]
            font-black
            tracking-[1.5px]
            text-gray-700
            shadow-sm
        `,


        /* CONTENT */

        itemContent: `
            flex
            flex-col
            flex-1
            p-5
        `,

        itemTop: `
            flex
            items-start
            justify-between
            gap-4
        `,

        productType: `
            m-0
            mb-1
            text-[9px]
            font-black
            tracking-[1.5px]
            text-gray-300
        `,

        itemName: `
            m-0
            text-lg
            font-extrabold
            tracking-tight
            text-gray-950
            transition-colors
            duration-200
            group-hover:text-pink-500
        `,

        itemPrice: `
            shrink-0
            text-base
            font-black
            text-gray-950
        `,


        /* DESCRIPTION */

        itemDesc: `
            mt-3
            min-h-[44px]
            text-[13px]
            leading-[1.6]
            text-gray-400
        `,


        /* FOOTER */

        itemBottom: `
            mt-auto
            pt-5
            flex
            items-center
            justify-between
            border-t
            border-gray-100
        `,

        soldInfo: `
            flex
            items-center
            gap-2
            text-[11px]
            font-semibold
            text-gray-400
        `,

        soldDot: `
            size-1.5
            rounded-full
            bg-pink-400
        `,

        viewBtn: `
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-gray-950
            text-white
            text-xs
            font-bold
            border
            border-gray-950
            transition-all
            duration-200
            group-hover:bg-pink-500
            group-hover:border-pink-500
            group-hover:shadow-[0_8px_20px_rgba(236,72,153,0.2)]
        `,
        openItem: {

          overlay: `
              fixed inset-0 z-[999]
              flex items-center justify-center
              bg-black/60
              backdrop-blur-sm
              p-4 sm:p-6
          `,
      
          modal: `
              relative
              w-full
              max-w-4xl
              max-h-[92vh]
              overflow-y-auto
              overflow-hidden
              rounded-2xl sm:rounded-3xl
              bg-white
              shadow-2xl
          `,
      
          close: `
              absolute
              right-3 top-3 sm:right-5 sm:top-5
              z-10
              flex
              h-9 w-9 sm:h-10 sm:w-10
              items-center justify-center
              rounded-full
              bg-white/90
              text-xl
              text-gray-500
              shadow-sm
              transition
              hover:bg-gray-100
              hover:text-black
          `,
      
          grid: `
              grid
              grid-cols-1
              md:grid-cols-2
          `,
      
          imageSection: `
              flex
              min-h-[220px]
              sm:min-h-[300px]
              md:min-h-[420px]
              items-center
              justify-center
              bg-gray-100
              p-6
              sm:p-8
              md:p-10
          `,
      
          image: `
              max-h-[200px]
              sm:max-h-[260px]
              md:max-h-[350px]
              max-w-full
              rounded-xl
              sm:rounded-2xl
              object-contain
              shadow-sm
          `,
      
          info: `
              flex
              flex-col
              justify-between
              p-6
              sm:p-8
              md:p-10
          `,
      
          category: `
              mb-2 sm:mb-3
              text-[10px] sm:text-xs
              font-bold
              tracking-[0.18em]
              sm:tracking-[0.2em]
              text-gray-400
          `,
      
          name: `
              text-3xl
              sm:text-4xl
              font-bold
              tracking-tight
              text-gray-900
          `,
      
          price: `
              mt-3 sm:mt-5
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
          `,
      
          description: `
              mt-4 sm:mt-6
              text-sm sm:text-base
              leading-6 sm:leading-7
              text-gray-500
          `,
      
          stats: `
              mt-6 sm:mt-8
              flex gap-2 sm:gap-3
          `,
      
          stat: `
              min-w-[90px]
              rounded-xl
              bg-gray-50
              px-4 py-3
      
              [&_p]:text-[10px] sm:[&_p]:text-xs
              [&_p]:text-gray-400
      
              [&_strong]:mt-1
              [&_strong]:block
              [&_strong]:text-sm sm:[&_strong]:text-base
              [&_strong]:font-semibold
              [&_strong]:text-gray-900
          `,
      
          purchase: `
              mt-8 sm:mt-10
          `,
      
          purchaseButton: `
              w-full
              rounded-xl
              bg-black
              px-5 py-3.5
              sm:px-6 sm:py-4
              text-sm sm:text-base
              font-semibold
              text-white
              transition
              hover:bg-gray-800
              active:scale-[0.98]
          `,
      
          note: `
              mt-2 sm:mt-3
              text-center
              text-[10px] sm:text-xs
              text-gray-400
          `
      }
    },

    profile: {
      activeProfile: {

        /* ================================
           MAIN PROFILE CONTAINER
        ================================= */
      
        main: `
          w-[94%]
          max-w-6xl
          mx-auto
          my-8
          grid
          grid-cols-1
          lg:grid-cols-[240px_1fr]
          overflow-hidden
          rounded-[30px]
          border
          border-gray-200
          bg-white
          shadow-[0_30px_90px_rgba(0,0,0,0.06)]
        `,
      
      
        /* ================================
           SIDEBAR
        ================================= */
      
        sidebar: `
          relative
          flex
          flex-col
          min-h-[520px]
          lg:min-h-[680px]
          p-6
          bg-gray-950
          text-white
        `,
      
        avatarWrapper: `
          relative
          w-fit
          mx-auto
          lg:mx-0
        `,
      
        profileImg: `
          size-20
          rounded-[22px]
          object-cover
          border-[3px]
          border-gray-800
          bg-gray-900
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        `,
      
        onlineDot: `
          absolute
          right-0
          bottom-0
          size-4
          rounded-full
          bg-emerald-400
          border-[3px]
          border-gray-950
          shadow-[0_0_0_2px_rgba(52,211,153,0.15)]
        `,
      
        identity: `
          mt-5
          text-center
          lg:text-left
        `,
      
        name: `
          m-0
          text-xl
          font-black
          tracking-tight
          text-white
          break-all
        `,
      
        role: `
          mt-1
          text-xs
          font-medium
          text-gray-500
        `,
      
        memberBadge: `
          mx-auto
          lg:mx-0
          mt-5
          flex
          items-center
          gap-2
          w-fit
          px-3
          py-1.5
          rounded-full
          bg-white/[0.06]
          border
          border-white/[0.08]
          text-[9px]
          font-bold
          uppercase
          tracking-[1.5px]
          text-gray-400
        `,
      
        memberBadgeIcon: `
          text-pink-400
        `,
      
      
        /* ================================
           SIDEBAR NAVIGATION
        ================================= */
      
        sideNav: `
          mt-10
          flex
          flex-col
          gap-1
        `,
      
        sideNavActive: `
          relative
          flex
          items-center
          gap-3
          w-full
          px-3
          py-3
          rounded-xl
          bg-white
          text-gray-950
          text-sm
          font-bold
          text-left
          shadow-[0_8px_20px_rgba(0,0,0,0.12)]
        `,
      
        sideNavBtn: `
          flex
          items-center
          gap-3
          w-full
          px-3
          py-3
          rounded-xl
          bg-transparent
          text-gray-500
          text-sm
          font-semibold
          text-left
          transition-all
          duration-200
          hover:bg-white/[0.06]
          hover:text-white
          hover:translate-x-0.5
        `,
      
      
        /* ================================
           EDIT PROFILE
        ================================= */
      
        editBtn: `
          mt-auto
          w-full
          py-3
          rounded-xl
          bg-pink-500
          text-white
          text-xs
          font-bold
          transition-all
          duration-200
          hover:bg-pink-400
          hover:-translate-y-0.5
          hover:shadow-[0_12px_30px_rgba(236,72,153,0.3)]
          active:translate-y-0
        `,
      
      
        /* ================================
           MAIN CONTENT
        ================================= */
      
        content: `
          min-w-0
          p-5
          sm:p-7
          md:p-9
          bg-[#fafafa]
        `,
      
        header: `
          flex
          flex-col
          sm:flex-row
          sm:items-end
          sm:justify-between
          gap-5
        `,
      
        eyebrow: `
          mb-2
          text-[9px]
          font-black
          uppercase
          tracking-[3px]
          text-pink-500
        `,
      
        title: `
          m-0
          text-[clamp(26px,4vw,38px)]
          font-black
          leading-none
          tracking-[-1.8px]
          text-gray-950
        `,
      
        subtitle: `
          mt-3
          max-w-xl
          text-sm
          leading-6
          text-gray-400
        `,
      
        statusBadge: `
          shrink-0
          w-fit
          px-3
          py-1.5
          rounded-full
          bg-emerald-50
          border
          border-emerald-100
          text-[9px]
          font-bold
          uppercase
          tracking-[1.5px]
          text-emerald-600
        `,
      
      
        /* ================================
           STAT CARDS
        ================================= */
      
        stats: `
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mt-8
        `,
      
        statCard: `
          relative
          overflow-hidden
          p-5
          rounded-2xl
          bg-white
          border
          border-gray-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-gray-300
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
        `,
      
        statTop: `
          flex
          items-center
          justify-between
          text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-gray-400
        `,
      
        statValue: `
          mt-2
          text-2xl
          font-black
          tracking-tight
          text-gray-950
        `,
      
        statSmall: `
          mt-1
          text-[11px]
          text-gray-400
        `,
      
      
        /* ================================
           ACCOUNT CARD
        ================================= */
      
        accountCard: `
          mt-4
          p-5
          sm:p-6
          rounded-2xl
          bg-white
          border
          border-gray-200
          shadow-[0_4px_20px_rgba(0,0,0,0.02)]
        `,
      
        cardHeader: `
          flex
          items-center
          justify-between
          gap-4
          pb-5
          border-b
          border-gray-100
        `,
      
        cardHeaderLabel: `
          text-[9px]
          font-black
          uppercase
          tracking-[2px]
          text-pink-500
        `,
      
        cardHeaderTitle: `
          mt-1
          text-lg
          font-extrabold
          tracking-tight
          text-gray-950
        `,
      
        cardHeaderBtn: `
          shrink-0
          px-3
          py-1.5
          rounded-lg
          bg-gray-50
          border
          border-gray-200
          text-[10px]
          font-bold
          text-gray-600
          transition-all
          duration-200
          hover:bg-gray-950
          hover:border-gray-950
          hover:text-white
        `,
      
      
        /* ================================
           ACCOUNT DETAILS
        ================================= */
      
        detailsGrid: `
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-x-10
          gap-y-6
          pt-6
        `,
      
        detail: `
          min-w-0
          flex
          flex-col
          gap-1.5
        `,
      
        detailLabel: `
          text-[9px]
          font-bold
          uppercase
          tracking-[1.5px]
          text-gray-400
        `,
      
        detailValue: `
          truncate
          text-sm
          font-bold
          text-gray-900
        `,
      
        activeText: `
          flex
          items-center
          gap-2
          text-emerald-500
        `,
      
      
        /* ================================
           PURCHASE HISTORY
        ================================= */
      
        purchaseCard: `
          mt-4
          p-5
          sm:p-6
          rounded-2xl
          bg-white
          border
          border-gray-200
          shadow-[0_4px_20px_rgba(0,0,0,0.02)]
        `,
      
        purchaseHeader: `
          flex
          items-end
          justify-between
          gap-4
          pb-5
          border-b
          border-gray-100
        `,
      
        purchaseLabel: `
          text-[9px]
          font-black
          uppercase
          tracking-[2px]
          text-pink-500
        `,
      
        purchaseTitle: `
          mt-1
          text-xl
          font-black
          tracking-tight
          text-gray-950
        `,
      
        purchaseCount: `
          shrink-0
          text-xs
          font-semibold
          text-gray-400
        `,
      
        purchaseList: `
          mt-5
          flex
          flex-col
          gap-3
        `,
      
        purchaseItem: `
          group
          flex
          items-center
          gap-4
          p-3
          rounded-2xl
          border
          border-gray-100
          bg-gray-50
          transition-all
          duration-200
          hover:bg-white
          hover:border-gray-200
          hover:-translate-y-0.5
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]
        `,
      
        purchaseImage: `
          size-16
          shrink-0
          rounded-xl
          object-cover
          bg-gray-200
          transition-transform
          duration-300
          group-hover:scale-105
        `,
      
        purchaseInfo: `
          min-w-0
          flex-1
        `,
      
        purchaseItemName: `
          truncate
          text-sm
          font-bold
          text-gray-900
        `,
      
        purchaseItemDescription: `
          mt-1
          line-clamp-1
          text-xs
          leading-5
          text-gray-400
        `,
      
        purchaseMeta: `
          mt-2
          flex
          items-center
          gap-2
        `,
      
        purchasePrice: `
          text-xs
          font-black
          text-gray-950
        `,
      
        purchaseStatus: `
          rounded-full
          bg-emerald-50
          px-2
          py-1
          text-[9px]
          font-bold
          uppercase
          tracking-wider
          text-emerald-600
        `,
      
        purchaseArrow: `
          hidden
          size-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-gray-400
          transition-all
          duration-200
          sm:flex
          group-hover:bg-gray-950
          group-hover:text-white
        `,
      
        purchaseBtn: `
          mt-5
          w-full
          px-4
          py-3
          rounded-xl
          bg-gray-950
          text-white
          text-xs
          font-bold
          transition-all
          duration-200
          hover:bg-pink-500
          hover:-translate-y-0.5
          hover:shadow-[0_10px_25px_rgba(236,72,153,0.2)]
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