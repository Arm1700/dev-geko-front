import { useForm } from "react-hook-form";
import { useState } from "react";
import { postData } from "../contacts/api/fetchMessage";
import Notification from "../shared/contact/Notification";
import Input from "../shared/contact/Input";
import Button from "../shared/contact/Button";
import { useTranslation } from "react-i18next";
import { CountryDropdown } from "react-country-region-selector";

export default function RegisterForm() {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();
    const [showNotify, setShowNotify] = useState(false);
    const [status, setStatus] = useState(null);

    const triggerNotification = () => {
        setShowNotify(true);
        setTimeout(() => setShowNotify(false), 3000);
    };

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await postData(data);
            triggerNotification();
            setStatus({
                status: "success",
                message: "Message was sent successfully",
            });
            reset();
            console.log("Data posted successfully:", response);
        } catch (error) {
            reset();
            triggerNotification();
            setStatus({
                status: "error",
                message: error.message,
            });
            console.error("Error occurred while posting context:", error);
        }
    };

    return (
        <div className="relative top-0 h-auto flex flex-col justify-center items-center z-30 overflow-hidden">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            >
                <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
                    ԱՆՎՃԱՐ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻ ԳՐԱՆՑՈւՄ
                </h2>
                <div className="space-y-4">
                    <Input
                        placeholder="Full name"
                        name="fullName"
                        {...register("fullName", { required: "fullName is required" })}
                        error={errors.fullName && errors.fullName.message}
                    />
                    <div className="mb-4">
                        <CountryDropdown
                            id="country"
                            value=""
                            onChange={(value) => setValue("country", value, { shouldValidate: true })}
                            className="w-full p-3 border border-gray-300 rounded-lg text-primaryDark"
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                    </div>
                    <Input
                        placeholder="WhatsApp Number"
                        type="tel"
                        name="whatsapp"
                        {...register("whatsapp", { required: "WhatsApp number is required", pattern: { value: /^\+?\d+$/, message: "Please enter a valid phone number" } })}
                        error={errors.whatsapp && errors.whatsapp.message}
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        {...register("email", { required: "Email is required" })}
                        error={errors.email && errors.email.message}
                    />
                    <Input
                        placeholder="Category"
                        name="category"
                        {...register("category", { required: "Category is required" })}
                        error={errors.category && errors.category.message}
                    />
                    <Input
                        placeholder="Message"
                        name="message"
                        {...register("message", { required: "Message is required" })}
                        error={errors.message && errors.message.message}
                    />

                    <Button type="submit" text={t("confirm")} />
                </div>
            </form>

            {showNotify && (
                <Notification status={status.status} message={status.message} />
            )}
        </div>
    );
}
