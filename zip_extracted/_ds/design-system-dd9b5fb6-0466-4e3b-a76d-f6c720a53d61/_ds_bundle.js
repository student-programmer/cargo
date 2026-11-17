/* @ds-bundle: {"format":4,"namespace":"DesignSystem_dd9b5f","components":[{"name":"FLOW_STAGES","sourcePath":"components/brand/EnergyFlow.jsx"},{"name":"EnergyFlow","sourcePath":"components/brand/EnergyFlow.jsx"},{"name":"FeatureTile","sourcePath":"components/brand/FeatureTile.jsx"},{"name":"FlowDivider","sourcePath":"components/brand/FlowDivider.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/EnergyFlow.jsx":"de828ae106e5","components/brand/FeatureTile.jsx":"08875b76f608","components/brand/FlowDivider.jsx":"3d879676b5cb","components/core/Badge.jsx":"5d867239e298","components/core/Button.jsx":"2cef2a879f72","components/core/Card.jsx":"4f76bf86a9f6","components/core/Icon.jsx":"9b60d638668e","components/core/IconButton.jsx":"8e990edfa983","components/core/Logo.jsx":"2c2ae2e7f009","components/core/StatTile.jsx":"578c4cc09f5e","components/core/Tag.jsx":"331b015a7e0e","components/feedback/Alert.jsx":"3fc9971bb211","components/feedback/Dialog.jsx":"2911436a224c","components/feedback/ProgressBar.jsx":"29bde60abed6","components/feedback/Tooltip.jsx":"c03b58f9e466","components/forms/Checkbox.jsx":"cdaaec91f8d1","components/forms/Input.jsx":"bdd7699ba4f4","components/forms/Radio.jsx":"29f51edfbe71","components/forms/Select.jsx":"ffb12c613c42","components/forms/Switch.jsx":"6fcf89e7954b","components/forms/Textarea.jsx":"57f5c5c7ef28","components/navigation/Footer.jsx":"6903040c3cae","components/navigation/NavBar.jsx":"aa42ef8abcd3","components/navigation/SideNav.jsx":"fed03e5fb940","components/navigation/Tabs.jsx":"f7830488d236","guidelines/lucide-init.js":"f130c7933702","ui_kits/app/Screens.jsx":"d29e0ff23028","ui_kits/website/Sections.jsx":"c88187288a6e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_dd9b5f = window.DesignSystem_dd9b5f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
const TONES = {
  light: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  subtle: {
    background: 'var(--surface-subtle)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  navy: {
    background: 'var(--surface-inverse)',
    color: 'var(--n-0)',
    border: '1px solid var(--border-inverse)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--navy-900)',
    border: '1px solid var(--solar-300)'
  }
};
function Card({
  children,
  tone = 'light',
  pad = 'md',
  elevation = 1,
  hoverable,
  topLine,
  style,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = ['var(--sh-none)', 'var(--sh-1)', 'var(--sh-2)', 'var(--sh-3)', 'var(--sh-4)'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--r-card)',
      overflow: 'hidden',
      padding: pad === 'none' ? 0 : pad === 'lg' ? 'var(--card-pad-lg)' : pad === 'sm' ? 'var(--sp-4)' : 'var(--card-pad)',
      boxShadow: hoverable && hover ? shadows[Math.min(4, elevation + 2)] : shadows[elevation],
      transform: hoverable && hover ? 'translateY(-2px)' : 'none',
      transition: 'var(--t-hover)',
      cursor: onClick ? 'pointer' : undefined,
      ...TONES[tone],
      ...style
    }
  }, topLine ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: 'var(--grad-sun)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js';
let loading = null;
function ensureLucide() {
  if (window.lucide) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise(resolve => {
    const s = document.createElement('script');
    s.src = LUCIDE_SRC;
    s.onload = resolve;
    s.onerror = resolve;
    document.head.appendChild(s);
  });
  return loading;
}

/** Lucide icon (real inline SVG, injected from the pinned CDN build) tinted by currentColor. */
function Icon({
  name = 'sun',
  size = 20,
  color,
  strokeWidth = 2,
  style,
  className,
  title
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let dead = false;
    const draw = () => {
      if (dead || !ref.current || !window.lucide) return;
      ref.current.innerHTML = '';
      const ph = document.createElement('i');
      ph.setAttribute('data-lucide', name);
      ref.current.appendChild(ph);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        }
      });
    };
    if (window.lucide) draw();else ensureLucide().then(draw);
    return () => {
      dead = true;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    role: "img",
    "aria-label": title || name,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color: color || 'currentColor',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/EnergyFlow.jsx
try { (() => {
const FLOW_STAGES = [{
  key: 'sun',
  icon: 'sun',
  label: 'Солнце'
}, {
  key: 'panels',
  icon: 'grid-2x2',
  label: 'Панели'
}, {
  key: 'inverter',
  icon: 'plug-zap',
  label: 'Инвертор'
}, {
  key: 'battery',
  icon: 'battery-charging',
  label: 'Аккумулятор'
}, {
  key: 'house',
  icon: 'house',
  label: 'Дом'
}];

/** The brand's signature graphic line: Солнце → Панели → Инвертор → Аккумулятор → Дом. */
function EnergyFlow({
  stages = FLOW_STAGES,
  activeIndex = -1,
  size = 'md',
  orientation = 'horizontal',
  showLabels = true,
  animated = true,
  tone = 'light',
  style
}) {
  const dim = size === 'sm' ? 36 : size === 'lg' ? 64 : 48;
  const inverse = tone === 'navy';
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      alignItems: vertical ? 'flex-start' : 'flex-start',
      gap: 0,
      ...style
    }
  }, stages.map((s, i) => {
    const active = i <= activeIndex;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.key
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: vertical ? 'row' : 'column',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: dim,
        height: dim,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: active ? 'var(--solar-500)' : inverse ? 'rgba(255,255,255,.07)' : 'var(--n-0)',
        border: '2px solid ' + (active ? 'var(--solar-500)' : inverse ? 'var(--border-inverse)' : 'var(--border-default)'),
        color: active ? 'var(--navy-900)' : inverse ? 'var(--n-0)' : 'var(--navy-700)',
        transition: 'background-color var(--dur-slow) var(--ease-out), border-color var(--dur-slow) var(--ease-out)',
        animation: animated && i === activeIndex ? 'eu-sun-pulse 2s var(--ease-in-out) infinite' : undefined
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon,
      size: Math.round(dim * 0.46)
    })), showLabels ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-eyebrow)',
        fontSize: 'var(--fs-micro)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-eyebrow)',
        whiteSpace: 'nowrap',
        color: active ? inverse ? 'var(--solar-400)' : 'var(--solar-700)' : inverse ? 'rgba(255,255,255,.55)' : 'var(--text-muted)'
      }
    }, s.label) : null), i < stages.length - 1 ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: vertical ? '0 0 auto' : '1 1 auto',
        width: vertical ? 2 : 'auto',
        height: vertical ? 28 : 2,
        minWidth: vertical ? undefined : 24,
        margin: vertical ? `var(--sp-2) 0 var(--sp-2) ${dim / 2 - 1}px` : `${dim / 2 - 1}px var(--sp-2) 0`,
        background: i < activeIndex ? 'var(--flow-line)' : 'var(--flow-line-dim)',
        transition: 'background-color var(--dur-slow) var(--ease-out)'
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { FLOW_STAGES, EnergyFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EnergyFlow.jsx", error: String((e && e.message) || e) }); }

// components/brand/FeatureTile.jsx
try { (() => {
function FeatureTile({
  icon = 'sun',
  title,
  children,
  tone = 'light',
  step,
  style
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      padding: 'var(--card-pad)',
      borderRadius: 'var(--r-card)',
      background: inverse ? 'var(--surface-inverse-alt)' : 'var(--surface-card)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      color: inverse ? 'var(--n-0)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--r-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: inverse ? 'rgba(254,184,19,.14)' : 'var(--solar-100)',
      color: 'var(--solar-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), step != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--fs-body-sm)',
      color: inverse ? 'rgba(255,255,255,.45)' : 'var(--text-faint)'
    }
  }, String(step).padStart(2, '0')) : null), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: inverse ? 'var(--n-0)' : 'var(--text-strong)',
      fontSize: 'var(--fs-h4)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-loose)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FeatureTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/FlowDivider.jsx
try { (() => {
/** Thin section transition: the energy line reduced to a rule with one node. */
function FlowDivider({
  icon = 'sun',
  tone = 'light',
  align = 'center',
  style
}) {
  const inverse = tone === 'navy';
  const rule = {
    flex: 1,
    height: 1,
    background: inverse ? 'var(--border-inverse)' : 'var(--border-default)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      width: '100%',
      ...style
    }
  }, align !== 'left' ? /*#__PURE__*/React.createElement("span", {
    style: rule
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--solar-500)',
      color: 'var(--navy-900)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: rule
  }));
}
Object.assign(__ds_scope, { FlowDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FlowDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  solar: {
    background: 'var(--solar-100)',
    color: 'var(--solar-700)'
  },
  navy: {
    background: 'var(--navy-800)',
    color: 'var(--n-0)'
  },
  neutral: {
    background: 'var(--n-100)',
    color: 'var(--n-700)'
  },
  ok: {
    background: 'var(--ok-100)',
    color: 'var(--ok-500)'
  },
  warn: {
    background: 'var(--warn-100)',
    color: 'var(--warn-500)'
  },
  err: {
    background: 'var(--err-100)',
    color: 'var(--err-500)'
  },
  info: {
    background: 'var(--info-100)',
    color: 'var(--info-500)'
  }
};
function Badge({
  children,
  tone = 'solar',
  icon,
  dot,
  style
}) {
  const t = TONES[tone] || TONES.solar;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      height: 26,
      padding: '0 var(--sp-3)',
      borderRadius: 'var(--r-badge)',
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...t,
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--sp-4)',
    fontSize: 'var(--fs-body-sm)',
    icon: 16
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 var(--sp-6)',
    fontSize: 'var(--fs-body-sm)',
    icon: 18
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--sp-8)',
    fontSize: 'var(--fs-body)',
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--solar-500)',
    color: 'var(--navy-900)',
    border: '1px solid var(--solar-500)',
    boxShadow: 'var(--sh-solar)'
  },
  secondary: {
    background: 'var(--navy-800)',
    color: 'var(--n-0)',
    border: '1px solid var(--navy-800)',
    boxShadow: 'var(--sh-2)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy-800)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--navy-800)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  inverse: {
    background: 'var(--n-0)',
    color: 'var(--navy-900)',
    border: '1px solid var(--n-0)',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: {
    background: 'var(--solar-400)'
  },
  secondary: {
    background: 'var(--navy-700)'
  },
  outline: {
    background: 'var(--n-50)',
    borderColor: 'var(--navy-400)'
  },
  ghost: {
    background: 'var(--n-50)'
  },
  inverse: {
    background: 'var(--solar-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  loading,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-2)',
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--r-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--t-hover)',
      whiteSpace: 'nowrap',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      transform: down && !disabled ? 'translateY(1px)' : 'none',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: s.icon
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon = 'x',
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  disabled,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const tones = {
    ghost: {
      background: hover ? 'var(--n-50)' : 'transparent',
      color: 'var(--navy-800)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--n-50)' : 'var(--n-0)',
      color: 'var(--navy-800)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: hover ? 'var(--solar-400)' : 'var(--solar-500)',
      color: 'var(--navy-900)',
      border: '1px solid transparent'
    },
    inverse: {
      background: hover ? 'rgba(255,255,255,.14)' : 'transparent',
      color: 'var(--n-0)',
      border: '1px solid var(--border-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label || icon,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--r-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--t-hover)',
      opacity: disabled ? 0.45 : 1,
      ...tones[variant],
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 24 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  lockup: 'logo-lockup.png',
  'lockup-inverse': 'logo-lockup-inverse.png',
  mark: 'logo-mark.png',
  'mark-inverse': 'logo-mark-inverse.png',
  wordmark: 'logo-wordmark.png'
};

/** Renders the supplied brand lockup. assetBase must point at the design system's assets/ folder. */
function Logo({
  variant = 'lockup',
  height = 48,
  assetBase = '../../assets/',
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + (SRC[variant] || SRC.lockup),
    alt: "\u042D\u043D\u0435\u0440\u0433\u0438\u044F \u042E\u0433\u0430",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  unit,
  icon,
  delta,
  tone = 'light',
  style
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-5)',
      borderRadius: 'var(--r-card)',
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      boxShadow: inverse ? 'var(--sh-inset-top)' : 'var(--sh-1)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      color: inverse ? 'rgba(255,255,255,.62)' : 'var(--text-muted)'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: 'var(--solar-500)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      fontSize: 'var(--fs-micro)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h2)',
      letterSpacing: 'var(--ls-display)',
      color: inverse ? 'var(--n-0)' : 'var(--text-strong)'
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-sm)',
      color: inverse ? 'rgba(255,255,255,.62)' : 'var(--text-muted)'
    }
  }, unit) : null), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: delta.startsWith('-') ? 'var(--err-500)' : 'var(--ok-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: delta.startsWith('-') ? 'trending-down' : 'trending-up',
    size: 14
  }), delta) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  active,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      height: 32,
      padding: '0 var(--sp-3)',
      borderRadius: 'var(--r-control)',
      background: active ? 'var(--navy-800)' : 'var(--n-50)',
      color: active ? 'var(--n-0)' : 'var(--navy-800)',
      border: '1px solid ' + (active ? 'var(--navy-800)' : 'var(--border-default)'),
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      ...style
    }
  }, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: 'var(--info-100)',
    fg: 'var(--info-500)',
    icon: 'info'
  },
  ok: {
    bg: 'var(--ok-100)',
    fg: 'var(--ok-500)',
    icon: 'circle-check'
  },
  warn: {
    bg: 'var(--warn-100)',
    fg: 'var(--warn-500)',
    icon: 'triangle-alert'
  },
  err: {
    bg: 'var(--err-100)',
    fg: 'var(--err-500)',
    icon: 'circle-alert'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      padding: 'var(--sp-4)',
      borderRadius: 'var(--r-card)',
      background: t.bg,
      color: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    style: {
      color: t.fg,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, children)), onClose ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(6,28,54,.55)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--sp-6)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh-4)',
      overflow: 'hidden',
      animation: 'eu-rise var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-5) var(--sp-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-6)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--sp-3)',
      padding: 'var(--sp-4) var(--sp-6)',
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  label,
  valueLabel,
  tone = 'solar',
  height = 8,
  style
}) {
  const fill = tone === 'navy' ? 'var(--navy-700)' : tone === 'ok' ? 'var(--ok-500)' : 'var(--grad-sun)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label || valueLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-caption)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--text-strong)'
    }
  }, valueLabel)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--r-pill)',
      background: 'var(--n-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, value)) + '%',
      height: '100%',
      background: fill,
      borderRadius: 'var(--r-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--navy-900)',
      color: 'var(--n-0)',
      padding: '6px var(--sp-3)',
      borderRadius: 'var(--r-xs)',
      fontSize: 'var(--fs-caption)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--sh-3)',
      zIndex: 40,
      animation: 'eu-rise var(--dur-fast) var(--ease-out)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--r-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--solar-500)' : 'var(--n-0)',
      border: '1px solid ' + (checked ? 'var(--solar-500)' : 'var(--border-strong)'),
      color: 'var(--navy-900)',
      transition: 'var(--t-hover)',
      flex: '0 0 auto'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  icon,
  suffix,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'in-' + (label || placeholder || 'field');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      height: 'var(--control-h)',
      padding: '0 var(--sp-3)',
      background: disabled ? 'var(--n-50)' : 'var(--n-0)',
      border: '1px solid ' + (error ? 'var(--err-500)' : focus ? 'var(--solar-500)' : 'var(--border-default)'),
      borderRadius: 'var(--r-control)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--t-hover)'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: 'var(--text-faint)'
    }
  }) : null, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--text-muted)'
    }
  }, suffix) : null), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--err-500)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": !!checked,
    "data-name": name,
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--n-0)',
      border: '1px solid ' + (checked ? 'var(--solar-500)' : 'var(--border-strong)'),
      transition: 'var(--t-hover)',
      flex: '0 0 auto'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--solar-500)'
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sel-' + (label || 'field');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: fid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-h)',
      padding: '0 var(--sp-8) 0 var(--sp-3)',
      appearance: 'none',
      border: '1px solid ' + (focus ? 'var(--solar-500)' : 'var(--border-default)'),
      borderRadius: 'var(--r-control)',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--n-50)' : 'var(--n-0)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--t-hover)'
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--r-pill)',
      padding: 2,
      display: 'inline-flex',
      background: checked ? 'var(--solar-500)' : 'var(--n-200)',
      transition: 'var(--t-hover)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--n-0)',
      boxShadow: 'var(--sh-1)',
      transform: checked ? 'translateX(20px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  rows = 4,
  value,
  onChange,
  placeholder,
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'ta-' + (label || 'field');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    id: fid,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: 'var(--sp-3)',
      border: '1px solid ' + (focus ? 'var(--solar-500)' : 'var(--border-default)'),
      borderRadius: 'var(--r-control)',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--n-50)' : 'var(--n-0)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'var(--t-hover)'
    }
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  phone = '8 800 555-01-24',
  email = 'info@energiya-yuga.ru',
  assetBase = '../../assets/',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--grad-night)',
      color: 'rgba(255,255,255,.72)',
      padding: 'var(--sp-16) 0 var(--sp-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)',
      display: 'flex',
      gap: 'var(--sp-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup-inverse",
    height: 54,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      maxWidth: 280
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C, \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043D\u0430 \u044E\u0433\u0435 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441 2014 \u0433\u043E\u0434\u0430.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--solar-400)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.72)',
      cursor: 'pointer'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--solar-400)'
    }
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 'var(--sp-2)',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h4)',
      color: 'var(--n-0)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 18,
    style: {
      color: 'var(--solar-500)'
    }
  }), phone), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)'
    }
  }, email))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: 'var(--sp-12) auto 0',
      padding: 'var(--sp-6) var(--page-pad) 0',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-caption)',
      color: 'rgba(255,255,255,.45)',
      flexWrap: 'wrap',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u042D\u043D\u0435\u0440\u0433\u0438\u044F \u042E\u0433\u0430"), /*#__PURE__*/React.createElement("span", null, "\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = [],
  activeItem,
  onNavigate,
  tone = 'light',
  phone = '8 800 555-01-24',
  cta = 'Рассчитать систему',
  onCta,
  assetBase = '../../assets/',
  sticky,
  style
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 20,
      background: inverse ? 'var(--glass-dark)' : 'var(--glass-light)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: inverse ? 'lockup-inverse' : 'lockup',
    height: 40,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const active = it === activeItem;
    return /*#__PURE__*/React.createElement("span", {
      key: it,
      onClick: () => onNavigate && onNavigate(it),
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: active ? inverse ? 'var(--solar-400)' : 'var(--solar-700)' : inverse ? 'rgba(255,255,255,.82)' : 'var(--navy-800)',
        cursor: 'pointer',
        paddingBottom: 2,
        borderBottom: '2px solid ' + (active ? 'var(--solar-500)' : 'transparent'),
        transition: 'var(--t-hover)'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body-sm)',
      color: inverse ? 'var(--n-0)' : 'var(--navy-900)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16,
    style: {
      color: 'var(--solar-500)'
    }
  }), phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inverse ? 'primary' : 'primary',
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function SideNav({
  items = [],
  activeKey,
  onNavigate,
  footer,
  assetBase = '../../assets/',
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: '0 0 244px',
      minHeight: '100%',
      background: 'var(--surface-inverse)',
      borderRight: '1px solid var(--border-inverse)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--sp-6) var(--sp-4)',
      gap: 'var(--sp-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark-inverse",
    height: 34,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const active = it.key === activeKey;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onNavigate && onNavigate(it.key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        height: 42,
        padding: '0 var(--sp-3)',
        border: 'none',
        borderRadius: 'var(--r-control)',
        cursor: 'pointer',
        textAlign: 'left',
        background: active ? 'rgba(254,184,19,.14)' : 'transparent',
        color: active ? 'var(--solar-400)' : 'rgba(255,255,255,.72)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        transition: 'var(--t-hover)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label, it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        font: 'var(--type-mono)',
        fontSize: 'var(--fs-micro)',
        color: 'var(--solar-400)'
      }
    }, it.badge) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  style
}) {
  const inverse = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-1)',
      padding: 4,
      borderRadius: 'var(--r-sm)',
      background: inverse ? 'rgba(255,255,255,.06)' : 'var(--n-50)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      width: 'fit-content',
      ...style
    }
  }, items.map(it => {
    const active = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onChange && onChange(it),
      style: {
        height: 34,
        padding: '0 var(--sp-4)',
        border: 'none',
        borderRadius: 'var(--r-xs)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        background: active ? inverse ? 'var(--solar-500)' : 'var(--n-0)' : 'transparent',
        color: active ? 'var(--navy-900)' : inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
        boxShadow: active && !inverse ? 'var(--sh-1)' : 'none',
        transition: 'var(--t-hover)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// guidelines/lucide-init.js
try { (() => {
(function () {
  function run() {
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        'stroke-width': 2
      }
    });
  }
  function ready() {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);else run();
  }
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js';
  s.onload = ready;
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/lucide-init.js", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
const {
  Card,
  StatTile,
  Badge,
  Button,
  IconButton,
  Icon,
  Tabs,
  ProgressBar,
  Alert,
  EnergyFlow,
  Switch,
  Select,
  Input,
  Tooltip,
  Tag
} = window.DesignSystem_dd9b5f;
const SERIES = [1.2, 2.8, 4.1, 5.6, 6.4, 7.1, 7.4, 6.9, 6.1, 5.2, 3.6, 1.9, 0.6];
const HOURS = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
function Chart({
  data = SERIES,
  height = 180,
  tone = 'solar'
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement(Tooltip, {
    key: i,
    label: HOURS[i] + ':00 — ' + v.toFixed(1).replace('.', ',') + ' кВт',
    style: {
      flex: 1,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: Math.max(4, v / max * height) + 'px',
      borderRadius: '4px 4px 2px 2px',
      background: tone === 'navy' ? 'var(--navy-600)' : 'var(--grad-sun)',
      transition: 'height var(--dur-slow) var(--ease-out)'
    }
  }))));
}
function TopBar({
  title,
  subtitle,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-6) var(--sp-8)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), right, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    variant: "outline"
  }));
}
function Dashboard() {
  const [range, setRange] = React.useState('День');
  const [i, setI] = React.useState(2);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % 5), 1600);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u041E\u0431\u0437\u043E\u0440 \u0441\u0442\u0430\u043D\u0446\u0438\u0438",
    subtitle: "\u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443 \xB7 10 \u043A\u0412\u0442 \xB7 \u0433\u0438\u0431\u0440\u0438\u0434",
    right: /*#__PURE__*/React.createElement(Tabs, {
      items: ['День', 'Неделя', 'Месяц'],
      value: range,
      onChange: setRange
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u044B\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442",
    value: "6,1",
    unit: "\u043A\u0412\u0442",
    icon: "sun",
    delta: "+8%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0412\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    value: "42,8",
    unit: "\u043A\u0412\u0442\xB7\u0447",
    icon: "trending-up",
    delta: "+12%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0417\u0430\u0440\u044F\u0434 \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430",
    value: "68",
    unit: "%",
    icon: "battery-charging"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "navy",
    label: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0437\u0430 \u043C\u0435\u0441\u044F\u0446",
    value: "9 640",
    unit: "\u20BD",
    icon: "wallet"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow"
  }, "\u041F\u043E\u0442\u043E\u043A \u044D\u043D\u0435\u0440\u0433\u0438\u0438"), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 6
    }
  }, "\u0421\u043E\u043B\u043D\u0446\u0435 \u043F\u043E\u043A\u0440\u044B\u0432\u0430\u0435\u0442 74% \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F")), /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    dot: true
  }, "\u0412 \u0441\u0435\u0442\u0438")), /*#__PURE__*/React.createElement(EnergyFlow, {
    activeIndex: i,
    size: "lg",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u0412\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u043E \u0447\u0430\u0441\u0430\u043C"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--text-muted)'
    }
  }, "\u043A\u0412\u0442")), /*#__PURE__*/React.createElement(Chart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'var(--sp-3)'
    }
  }, HOURS.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      flex: 1,
      textAlign: 'center',
      font: 'var(--type-mono)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-faint)'
    }
  }, h)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u0411\u0430\u043B\u0430\u043D\u0441"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 74,
    label: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435",
    valueLabel: "74%"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    tone: "ok",
    label: "\u0417\u0430\u0440\u044F\u0434 \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430",
    valueLabel: "6,8 \u043A\u0412\u0442\xB7\u0447"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 26,
    tone: "navy",
    label: "\u041E\u0442\u0434\u0430\u043D\u043E \u0432 \u0441\u0435\u0442\u044C",
    valueLabel: "11,2 \u043A\u0412\u0442\xB7\u0447"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "warn",
    title: "\u0418\u043D\u0432\u0435\u0440\u0442\u043E\u0440 INV-2"
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0441 13:40.")))));
}
function Production() {
  const [range, setRange] = React.useState('Неделя');
  const rows = [['21 авг', '46,2', '9,1', '512 ₽'], ['20 авг', '44,8', '8,4', '498 ₽'], ['19 авг', '39,1', '7,9', '441 ₽'], ['18 авг', '42,6', '8,8', '470 ₽']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0412\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
    subtitle: "\u0414\u0435\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E \u0434\u043D\u044F\u043C \u0438 \u0438\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u0430\u043C",
    right: /*#__PURE__*/React.createElement(Tabs, {
      items: ['День', 'Неделя', 'Месяц'],
      value: range,
      onChange: setRange
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      marginBottom: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    active: true
  }, "\u0412\u0441\u0435 \u0438\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u044B"), /*#__PURE__*/React.createElement(Tag, null, "INV-1"), /*#__PURE__*/React.createElement(Tag, null, "INV-2")), /*#__PURE__*/React.createElement(Chart, {
    data: [28, 34, 41, 46, 39, 44, 46],
    height: 150
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: 'var(--sp-4) var(--sp-6)',
      background: 'var(--surface-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, ['Дата', 'Выработка, кВт·ч', 'Пик, кВт', 'Экономия'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-muted)'
    }
  }, h))), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: 'var(--sp-4) var(--sp-6)',
      borderBottom: '1px solid var(--border-subtle)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--text-muted)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ok-500)'
    }
  }, r[3]))))));
}
function Battery() {
  const [night, setNight] = React.useState(true);
  const [grid, setGrid] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0410\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440",
    subtitle: "Hybrid Pack 10 \u043A\u0412\u0442\xB7\u0447 \xB7 SN 4429-EY",
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "ok",
      dot: true
    }, "\u0417\u0430\u0440\u044F\u0434 68%")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--gutter)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u0426\u0438\u043A\u043B \u0437\u0430\u0440\u044F\u0434\u0430 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438"), /*#__PURE__*/React.createElement(Chart, {
    data: [30, 38, 52, 66, 78, 86, 92, 88, 74, 68, 55, 44, 36],
    tone: "navy",
    height: 160
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0401\u043C\u043A\u043E\u0441\u0442\u044C",
    value: "10,0",
    unit: "\u043A\u0412\u0442\xB7\u0447",
    icon: "battery-charging"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0426\u0438\u043A\u043B\u043E\u0432",
    value: "412",
    unit: "\u0438\u0437 6000",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    value: "28,4",
    unit: "\xB0C",
    icon: "thermometer"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u0420\u0435\u0436\u0438\u043C\u044B"), /*#__PURE__*/React.createElement(Switch, {
    label: "\u041D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0437\u0435\u0440\u0432 30%",
    checked: night,
    onChange: setNight
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u041E\u0442\u0434\u0430\u0432\u0430\u0442\u044C \u0438\u0437\u043B\u0438\u0448\u043A\u0438 \u0432 \u0441\u0435\u0442\u044C",
    checked: grid,
    onChange: setGrid
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
    options: ['Дом → аккумулятор → сеть', 'Аккумулятор → дом → сеть']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "save"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C\u044B")), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437"
  }, "\u0417\u0430\u0432\u0442\u0440\u0430 \u044F\u0441\u043D\u043E \u2014 \u043E\u0436\u0438\u0434\u0430\u0435\u043C 48 \u043A\u0412\u0442\xB7\u0447 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0438."))));
}
function Settings() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    subtitle: "\u041E\u0431\u044A\u0435\u043A\u0442 \u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u041E\u0431\u044A\u0435\u043A\u0442"), /*#__PURE__*/React.createElement(Input, {
    label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    value: "\u0414\u043E\u043C, \u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0410\u0434\u0440\u0435\u0441",
    value: "\u0443\u043B. \u0414\u043E\u043D\u0441\u043A\u0430\u044F, 14",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",
    suffix: "\u043A\u0412\u0442",
    value: "10",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(Switch, {
    label: "\u0410\u0432\u0430\u0440\u0438\u044F \u0438\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u0430",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u0417\u0430\u0440\u044F\u0434 \u043D\u0438\u0436\u0435 20%",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u041C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "phone"
  }, "\u0421\u0435\u0440\u0432\u0438\u0441"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "download"
  }, "\u041E\u0442\u0447\u0451\u0442 PDF")))));
}
Object.assign(window, {
  Dashboard,
  Production,
  Battery,
  Settings,
  Chart,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  StatTile,
  Tag,
  Icon,
  FeatureTile,
  EnergyFlow,
  FlowDivider,
  Input,
  Select,
  Checkbox,
  Radio,
  ProgressBar,
  Alert,
  Tooltip,
  Tabs,
  Logo
} = window.DesignSystem_dd9b5f;
const A = '../../assets/';
const wrap = {
  maxWidth: 'var(--page-max)',
  margin: '0 auto',
  padding: '0 var(--page-pad)'
};
function Hero({
  onCta,
  onFlow
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % 5), 1200);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-night)',
      color: 'var(--n-0)',
      padding: 'var(--sp-24) 0 var(--sp-16)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--sp-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow",
    style: {
      color: 'var(--solar-400)'
    }
  }, "\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-xl)',
      color: 'var(--n-0)',
      maxWidth: 620
    }
  }, "\u0421\u043E\u043B\u043D\u0446\u0435 \u0443\u0436\u0435", /*#__PURE__*/React.createElement("br", null), "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0432\u0430\u0448 \u0434\u043E\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'rgba(255,255,255,.72)',
      maxWidth: 520,
      lineHeight: 'var(--lh-loose)'
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C, \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u043D\u0430 \u044E\u0433\u0435 \u0420\u043E\u0441\u0441\u0438\u0438. \u0421\u0447\u0438\u0442\u0430\u0435\u043C \u043E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0441\u0447\u0435\u0442\u0430\u043C, \u0430 \u043D\u0435 \u043F\u043E \u0441\u0440\u0435\u0434\u043D\u0438\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onCta
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    icon: "phone"
  }, "8 800 555-01-24")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-8)',
      marginTop: 'var(--sp-4)'
    }
  }, [['640+', 'объектов'], ['12 лет', 'гарантия'], ['4,2 года', 'окупаемость']].map(([v, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--solar-400)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'rgba(255,255,255,.6)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'logo-mark-inverse.png',
    alt: "",
    style: {
      width: '100%',
      maxWidth: 380,
      opacity: .96
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      marginTop: 'var(--sp-16)',
      paddingTop: 'var(--sp-8)',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement(EnergyFlow, {
    tone: "navy",
    size: "lg",
    activeIndex: i,
    style: {
      width: '100%'
    }
  })));
}
function HowItWorks() {
  const steps = [['sun', 'Замер и расчёт', 'Приезжаем на объект, снимаем данные по крыше и потреблению.'], ['grid-2x2', 'Проект и смета', 'Подбираем панели и инвертор под нагрузку. Фиксируем цену.'], ['plug-zap', 'Монтаж за 2 дня', 'Работаем своей бригадой, без субподряда.'], ['battery-charging', 'Запуск и мониторинг', 'Настраиваем приложение и следим за станцией удалённо.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow"
  }, "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--sp-3)',
      marginBottom: 'var(--sp-10)',
      maxWidth: 560
    }
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u0448\u0430\u0433\u0430 \u043E\u0442 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E \u043F\u0435\u0440\u0432\u043E\u0439 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)'
    }
  }, steps.map(([ic, t, d], n) => /*#__PURE__*/React.createElement(FeatureTile, {
    key: t,
    icon: ic,
    title: t,
    step: n + 1
  }, d)))));
}
function Systems({
  onSelect
}) {
  const [tab, setTab] = React.useState('Для дома');
  const cards = [{
    name: 'Сетевая 5 кВт',
    price: 'от 420 000 ₽',
    tag: null,
    items: ['12 панелей 460 Вт', 'Инвертор 5 кВт', 'Монтаж и пусконаладка'],
    out: '5,1 года'
  }, {
    name: 'Гибридная 10 кВт',
    price: 'от 890 000 ₽',
    tag: 'Хит',
    items: ['22 панели 460 Вт', 'Гибридный инвертор 10 кВт', 'Аккумулятор 10 кВт·ч'],
    out: '4,2 года'
  }, {
    name: 'Автономная 15 кВт',
    price: 'от 1 480 000 ₽',
    tag: null,
    items: ['32 панели 460 Вт', 'Инвертор 15 кВт', 'Аккумулятор 30 кВт·ч'],
    out: '4,8 года'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-8)',
      marginBottom: 'var(--sp-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow"
  }, "\u0420\u0435\u0448\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447")), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Для дома', 'Для бизнеса', 'Для фермы'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    hoverable: true,
    topLine: !!c.tag,
    pad: "lg",
    onClick: () => onSelect && onSelect(c)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)'
    }
  }, c.name), c.tag ? /*#__PURE__*/React.createElement(Badge, {
    tone: "solar"
  }, c.tag) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-strong)',
      marginBottom: 'var(--sp-4)'
    }
  }, c.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      marginBottom: 'var(--sp-5)'
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      alignItems: 'center',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: 'var(--ok-500)'
    }
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, "\u041E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u044C ", /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--type-mono)'
    }
  }, c.out)), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconRight: "arrow-right"
  }, "\u0421\u043C\u0435\u0442\u0430")))))));
}
function Calculator({
  onSubmit
}) {
  const [bill, setBill] = React.useState('9 400');
  const [type, setType] = React.useState('hybrid');
  const [roof, setRoof] = React.useState('Металлочерепица');
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow"
  }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), /*#__PURE__*/React.createElement("h2", null, "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0432\u0430\u0448\u0443 \u0441\u0442\u0430\u043D\u0446\u0438\u044E \u0437\u0430 \u043C\u0438\u043D\u0443\u0442\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-loose)'
    }
  }, "\u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0447\u0451\u0442\u0430 \u0437\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0442\u0438\u043F\u0430 \u043A\u0440\u044B\u0448\u0438. \u0422\u043E\u0447\u043D\u0443\u044E \u0441\u043C\u0435\u0442\u0443 \u043F\u0440\u0438\u0432\u0435\u0437\u0451\u0442 \u0438\u043D\u0436\u0435\u043D\u0435\u0440 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043C\u0435\u0440\u0430."), /*#__PURE__*/React.createElement(EnergyFlow, {
    activeIndex: 4,
    size: "sm",
    showLabels: false
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "\u0420\u0430\u0441\u0447\u0451\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439"
  }, "\u041F\u043E\u0433\u0440\u0435\u0448\u043D\u043E\u0441\u0442\u044C \u0434\u043E 12% \u2014 \u0443\u0442\u043E\u0447\u043D\u044F\u0435\u043C \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u0435\u0437\u0434\u0430.")), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    elevation: 3
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0421\u0447\u0451\u0442 \u0437\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u043C\u0435\u0441\u044F\u0446",
    suffix: "\u20BD",
    value: bill,
    onChange: e => setBill(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0422\u0438\u043F \u043A\u0440\u044B\u0448\u0438",
    options: ['Металлочерепица', 'Профлист', 'Мягкая кровля', 'Плоская'],
    value: roof,
    onChange: e => setRoof(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, "\u0422\u0438\u043F \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "\u0421\u0435\u0442\u0435\u0432\u0430\u044F",
    checked: type === 'grid',
    onChange: () => setType('grid')
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "\u0413\u0438\u0431\u0440\u0438\u0434\u043D\u0430\u044F",
    checked: type === 'hybrid',
    onChange: () => setType('hybrid')
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F",
    checked: type === 'off',
    onChange: () => setType('off')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C",
    value: type === 'off' ? '15' : type === 'hybrid' ? '10' : '5',
    unit: "\u043A\u0412\u0442",
    icon: "sun"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "\u041E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u044C",
    value: type === 'hybrid' ? '4,2' : '5,1',
    unit: "\u0433\u043E\u0434\u0430",
    icon: "trending-up"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    checked: ok,
    onChange: setOk
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onSubmit
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043C\u0435\u0442\u0443")))));
}
function Projects() {
  const rows = [['Ростов-на-Дону', 'Частный дом 180 м²', '10 кВт · гибрид', '9 640 ₽/мес'], ['Краснодар', 'Автосервис', '30 кВт · сетевая', '31 200 ₽/мес'], ['Ставрополь', 'Фермерское хозяйство', '45 кВт · гибрид', '48 700 ₽/мес']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface-inverse)',
      color: 'var(--n-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    className: "eu-eyebrow",
    style: {
      color: 'var(--solar-400)'
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--n-0)',
      marginTop: 'var(--sp-3)',
      marginBottom: 'var(--sp-10)'
    }
  }, "640 \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043D\u0430 \u044E\u0433\u0435 \u0420\u043E\u0441\u0441\u0438\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr 1fr auto',
      gap: 'var(--sp-6)',
      alignItems: 'center',
      padding: 'var(--sp-5) 0',
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h4)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--solar-400)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043F\u043E \u0441\u0447\u0435\u0442\u0430\u043C \u0437\u0430 2025"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--n-0)'
    }
  }, r[3])), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    style: {
      color: 'var(--solar-500)'
    }
  })))))));
}
function CtaBand({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--sp-16) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(FlowDivider, {
    icon: "sun",
    style: {
      marginBottom: 'var(--sp-12)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    pad: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, "\u041F\u0440\u0438\u0435\u0434\u0435\u043C \u043D\u0430 \u0437\u0430\u043C\u0435\u0440 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--navy-700)'
    }
  }, "\u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u0438 \u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: onCta
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
}
Object.assign(window, {
  Hero,
  HowItWorks,
  Systems,
  Calculator,
  Projects,
  CtaBand,
  EU_WRAP: wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FLOW_STAGES = __ds_scope.FLOW_STAGES;

__ds_ns.EnergyFlow = __ds_scope.EnergyFlow;

__ds_ns.FeatureTile = __ds_scope.FeatureTile;

__ds_ns.FlowDivider = __ds_scope.FlowDivider;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
