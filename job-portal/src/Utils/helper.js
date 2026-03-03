export const validateEmail = (email) => {
    if(!email.trim()) {
      return 'Email is required';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };

  export const validatePassword = (password) => {

    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])/.test(password))
      return "Password must contain one at least one lowercase letter";
     if (!/(?=.*[A-Z])/.test(password))
      return "Password must contain one at least one uppercase letter";
     if (!/(?=.*\d)/.test(password))
      return "Password must contain one at least one number";
    return "";
  };

  export const validateAvatar = (file) => {
    if (!file) return "";

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(!allowedTypes.includes(file.type)){
      return "Picture must be a JPG or PNG file";
    }

    const maxSize = 5 * 1024 * 1024;
    if(file.size > maxSize) return "Picture must be less than 5MB";

    return "";

  };