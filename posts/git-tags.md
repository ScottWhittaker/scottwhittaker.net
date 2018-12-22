---
date:   2018-11-23
layout: layouts/post.njk
tags:
    - post
    - git
    - tags
title:  git - tags
---

## List tags

```bash
git tag
```

## Remove all local tags

```bash
git tag -d $(git tag -l)
```
