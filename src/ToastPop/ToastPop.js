import { Bounce, toast } from "react-toastify"

const warn_toast = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

const UserAlreadyExist = () => {
    toast.info('User Already Exist. Already have Account? Please Login!', warn_toast);
}

const InvalidUserOrPass = () => {
    toast.error('The User or Password Incorrect. Try Again', warn_toast);
}

const ProvideValidEmailPassword = () => {
    toast.warn('Please provide a Valid Email and Password', warn_toast);
}

const ProvideAllData = () => {
    toast.info('Please Provide a Valid Name, Email, Photo URL , Password', warn_toast);
}

const InvalidEmail = () => {
    toast.warn('Please provide a Valid Email Address',warn_toast);
}

const AccountCreated = () => {
    toast.info('User Account Created Successfully. Redirecting to Homepage',warn_toast);
}

const RemoveFromCartToast = () => {
    toast.info('Product Removed from Cart',warn_toast);
}

export {
    UserAlreadyExist,
    InvalidUserOrPass,
    ProvideValidEmailPassword,
    ProvideAllData,
    InvalidEmail,
    AccountCreated,
    RemoveFromCartToast
};