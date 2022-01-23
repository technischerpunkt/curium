import { Component } from "vue"

export interface Option {
  choice: string,
  postText?: string,
  subOptions?: Option[],
}

export interface Step {
  desc: string,
  alt?: string,
  component?: Component,
  imgSrc?: string,
  link?: string,
}
