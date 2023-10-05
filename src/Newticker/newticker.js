const newsItems = [
    {
        key: "Important announcement"
    },
    {
        key: "Another important announcement"
    },
    {
        key: "Excella Nursing Academy lunches"
    },
    {
        key: "You can enroll for your Nursing certificate for Uk and EU Visa"
    },
    {
        key: "Dont wait till the alarm goes off. take action now!"
    },

]

export const Element = (props) => {
    const {title} = props;
    
    return (
      <div className="element">{title}</div>
    )
  }


export default newsItems;