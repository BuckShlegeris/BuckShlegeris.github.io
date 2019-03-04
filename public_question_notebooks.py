import glob
import json
import tomd
import bleach

outfile = open("/Users/buck/repos/bshlgrs.github.io/idk.md", 'w')

outfile.write("""---
layout: post
title:  "Frontiers of my knowledge"
date:   ""
---

Here are some non-exhaustive notes on the frontiers of my understanding of various topics.
I read about [Feynman](http://calnewport.com/blog/2015/11/25/the-feynman-notebook-method/) doing something
similar; I've found that keeping these notes has been helpful for me since I started in late 2017.

If you know a lot about something that I list here and you want to tell me about it, I'd love to hear your
explanation!

Contents:

""")

subjects = {}

for qfilename in glob.glob("/Users/buck/Dropbox (Personal)/quiver-notebooks/Questions.qvnotebook/*.qvnote"):
    content = json.loads(open(qfilename+"/content.json").read())
    meta = json.loads(open(qfilename+"/meta.json").read())
#     print(content)
#     print(meta)

    if 'public' in meta['tags']:
        html = content['cells'][0]['data']

        subjects[meta['title']] = bleach.clean(html, ['li', 'ul', 'p', 'div', 'br', 'a', 'span', 'font'])

for idx, subject_name in enumerate(sorted(subjects)):
    outfile.write("- [%s](#%d)\n" % (subject_name, idx))

outfile.write("\n\n---\n\n<div>")

for idx, subject_name in enumerate(sorted(subjects)):
    outfile.write("\n\n\n<h2 id='%d'>%s</h2>\n\n" % (idx, subject_name))
    outfile.write(subjects[subject_name])
outfile.write("</div>")
