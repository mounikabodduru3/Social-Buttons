const Button = props => {
  //  Write your code here.
  const {buttonText, className} = props
  return <button className={`${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-conainer'>
    <h1 className='heading'>Socail Buttons</h1>
    <div>
      <Button buttonText='Like' className='like-button' />
      <Button buttonText='Comment' className='comment-button' />
      <Button buttonText='Share' className='share-button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
