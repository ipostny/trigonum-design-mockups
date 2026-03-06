#!/bin/bash
# Inject shared interactivity (video bg, JS, CSS, prototype badge) into all HTML mockups.
# Safe to re-run — checks if already injected.

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

INJECT_CSS='<link rel="stylesheet" href="shared-interactive.css">'
INJECT_JS='<script src="shared-interactive.js"><\/script>'
INJECT_VIDEO='<div class="video-bg-container"><video src="video-header.mp4" autoplay muted loop playsinline><\/video><\/div>'
INJECT_BADGE='<div class="prototype-badge">PROTOTYPE<\/div>'

count=0
for f in *.html; do
  # Skip _system.html and investor-redesign-* (reference files, not mockups)
  case "$f" in
    _system.html|investor-redesign-*.html) continue ;;
  esac

  # Check if already injected
  if grep -q 'shared-interactive.js' "$f" 2>/dev/null; then
    echo "SKIP $f (already injected)"
    continue
  fi

  # Inject CSS before </head>
  sed -i "s|</head>|${INJECT_CSS}\n</head>|" "$f"

  # Inject video background + prototype badge right after <body> (or after <body ...>)
  sed -i "s|<body>|<body>\n${INJECT_VIDEO}\n${INJECT_BADGE}|" "$f"
  # Handle <body class="..."> variant
  sed -i 's|<body \(class="[^"]*"\)>|<body \1>\n'"${INJECT_VIDEO}"'\n'"${INJECT_BADGE}"'|' "$f"

  # Inject JS before </body>
  sed -i "s|</body>|${INJECT_JS}\n</body>|" "$f"

  echo "OK   $f"
  count=$((count + 1))
done

echo ""
echo "Injected interactivity into $count files."
echo "Shared files: shared-interactive.css, shared-interactive.js, video-header.mp4"
