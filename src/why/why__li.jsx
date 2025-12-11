export default function whyLi({title, dsc, icon}) {
    return (
        <article className="WhyLi">
      <div className="whyLi__h">
        <h3>{title}</h3>
      </div>
      <div className="whyLi__wrap">
        { icon }
        <p>{ dsc }</p>
      </div>
    </article>
    )
}