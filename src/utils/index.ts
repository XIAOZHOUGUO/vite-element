/**
 * 动态获取图片 src
 * @param imgName 图片名，`eg: logo.png`
 * @param dir 第二级目录
 * @returns
 */
export const getImgSrc = (imgName: string, dir?: string) => {
  let path = ''
  if (dir) {
    path = `/src/assets/img/${dir}/${imgName}`
  } else {
    path = `/src/assets/img/${imgName}`
  }
  const modules = import.meta.globEager('/src/assets/img/*')
  return modules[path].default
}
