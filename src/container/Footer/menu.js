import * as React from 'react';
import * as Ariakit from '@ariakit/react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

export const Menu = React.forwardRef(({ open, setOpen, label, children, animate, transition, variants, initial, exit, ...props }, ref) => {
  const menu = Ariakit.useMenuStore({ open, setOpen });
  /* const currentPlacement = menu.useState('currentPlacement'); */
  const mounted = menu.useState('mounted');
  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton store={menu} ref={ref} className="button" {...props}>
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            // Make sure the menu is always visible during animation
            hidden={false}
            // We'll use this data attribute to style the transform-origin
            // property based on the menu's placement. See style.css.
            /* data-placement={currentPlacement} */
            className="menu"
            as={motion.div}
            initial={initial}
            exit={exit}
            animate={animate}
            variants={variants}
            transition={transition}
          >
            <Ariakit.MenuArrow className="menu-arrow" />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
});

export const MenuItem = React.forwardRef(({ label, variants, animate, ...props }, ref) => {
  return <Ariakit.MenuItem as={motion.div} ref={ref} className="menu-item" children={label} animate={animate} variants={variants} {...props} />;
});
