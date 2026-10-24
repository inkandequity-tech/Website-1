#!/usr/bin/env python3
"""Bundle a site folder into dist/<site>/artifact.html (no doctype; for Artifact tool) and index.html (full doc; for GitHub)."""
import sys, json, glob, os
site = sys.argv[1]
src = os.path.join('/home/claude/work', site)
meta = json.load(open(os.path.join(src, 'meta.json')))
css = open(os.path.join(src, 'style.css')).read()
body = open(os.path.join(src, 'body.html')).read()
js = '\n'.join(open(p).read() for p in sorted(glob.glob(os.path.join(src, 'js', '*.js'))))
fonts = ''.join(f'<link rel="stylesheet" href="{u}">\n' for u in meta.get('fonts', []))
pre = ''.join(f'<link rel="preconnect" href="{u}" crossorigin>\n' for u in ['https://fonts.googleapis.com', 'https://fonts.gstatic.com']) if meta.get('fonts') else ''
libs = ''.join(f'<script src="{u}"></script>\n' for u in meta.get('scripts', []))
head = f'''<title>{meta['title']}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{meta.get('description','')}">
{pre}{fonts}<style>
{css}
</style>
'''
tail = f'{libs}<script>\n{js}\n</script>\n'
art = head + body + '\n' + tail
full = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
{head}</head>
<body>
{body}
{tail}</body>
</html>
'''
out = os.path.join('/home/claude/work/dist', site)
os.makedirs(out, exist_ok=True)
open(os.path.join(out, 'artifact.html'), 'w').write(art)
open(os.path.join(out, 'index.html'), 'w').write(full)
print(site, 'artifact', len(art)//1024, 'KB')
