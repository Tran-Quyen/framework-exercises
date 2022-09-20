import { dataModuleList } from './constants.js'

const exerciseList = $('.exercise-list')

const render = (el) => {
  const dataId = el.dataset.id
  if (dataId) {
    const dataModule = dataModuleList.find((d) => d.version === +dataId)
    const version = dataModule.version
    const html = dataModule.data
      .map(
        (d, idx) => /* html */ `
         <li>
            <a target="_blank" href="./projects/v${version}/${d.path}/index.html">
              <img src="./assets/images/v${version}/${d.thumbnailUrl}" alt="${d.name}" />
              <h3>${idx + 1}: ${d.name}</h3>
              <span></span><span></span><span></span><span></span>
            </a>
        </li>
      `
      )
      .join('')
    $(el).html(html)
  }
}

exerciseList.each(function (_, el) {
  render(el)
})
