---
title: "VCS - Tips and Tricks"
lesson: 9
chapter: 1
cover: ""
date: "23/01/2018"
type: "lesson"
slug: "/week-one/version-control/tips-and-tricks"
---

## Git Aliases

`git status`, `git add`, `git commit`, and `git checkout` are such common commands that it is useful to have abbreviations for them.

Add the following to the `.gitconfig` file in your $HOME directory.
```shell
$ atom ~/.gitconfig
```

```shell
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
  type = cat-file -t
  dump = cat-file -p
```

Now you can use the abbreviations instead for full git commands. That can be pretty handy since you will be working a lot with git during this course and in your profession as a developer.
