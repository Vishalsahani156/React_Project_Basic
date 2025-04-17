const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
      // Here you can add your form submission logic (e.g., API call)
    };
  }
  export default {RegistrationForm}