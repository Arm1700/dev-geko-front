import { useForm } from 'react-hook-form'
import contactArray from '../../../entities/contactArray'
import ContactInfo from '../shared/contact/ContactInfo'
import Input from '../shared/contact/Input'
import Button from '../shared/contact/Button'
import { postData } from './api/fetchMessage'
import { useState } from 'react'
import Notification from '../shared/contact/Notification'
export default function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [showNotify, setShowNotify] = useState(false)
  const [status, setStatus] = useState(null)

  const triggerNotification = () => {
    setShowNotify(true)
    setTimeout(() => setShowNotify(false), 3000)
  }

  const onSubmit = async data => {
    console.log(data)
    try {
      const response = await postData(data)
      triggerNotification()
      setStatus({
        status: 'success',
        message: 'Message was sent successfully',
      })
      reset()
      console.log('Data posted successfully:', response)
    } catch (error) {
      reset()
      triggerNotification()
      setStatus({
        status: 'errorr',
        message: error.message,
      })
      console.error('Error occurred while posting data:', error)
    }
  }

  return (
    <main className="flex px-5 py-5 flex-col items-center">
      <div className="grid mid:grid-cols-3 w-full md:w-[auto] grid-cols-1 gap-[15px] items-center justify-items-center">
        {contactArray.map(({ id, color, title, description, Icon }) => (
          <ContactInfo
            key={id}
            color={color}
            title={title}
            description={description}
            Icon={Icon}
          />
        ))}
      </div>
      <div className="flex mt-20 flex-col items-center flex-wrap justify-center">
        <h1 className="text-[22px] pb-5 sm:w-[70%] w-[100%] text-center font-roboto-slab font-bold text-primaryDark">
          Fill the form below so we can get to know you and your needs better.
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center w-full"
        >
          <Input
            placeholder="Name"
            name="name"
            {...register('name', { required: true })}
            error={errors.name && 'Name is required'}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            {...register('email', { required: true })}
            error={errors.email && 'Email is required'}
          />
          <Input
            placeholder="Message"
            name="message"
            {...register('message', { required: true })}
            error={errors.message && 'Message is required'}
          />
          <Button type="submit" text="Submit" />
        </form>
      </div>
      {showNotify && (
        <Notification status={status.status} message={status.message} />
      )}
    </main>
  )
}
