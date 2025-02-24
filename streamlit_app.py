import streamlit as st

st.title("BENICHARGE")
st.write(
    "Let's start building! For help and inspiration, head over to [docs.streamlit.io](https://docs.streamlit.io/)."
)
import streamlit as st

def main():
    st.title("Sistema de Login y Registro")
    
    menu = ["Login", "Registro"]
    choice = st.sidebar.selectbox("Menu", menu)
    
    if choice == "Login":
        st.subheader("Login")
        
        username = st.text_input("Usuario")
        password = st.text_input("Contraseña", type='password')
        
        if st.button("Login"):
            # Aquí iría la lógica de autenticación
            st.success(f"Bienvenido {username}")
            
    elif choice == "Registro":
        st.subheader("Crear Nueva Cuenta")
        
        new_username = st.text_input("Usuario")
        new_password = st.text_input("Contraseña", type='password')
        confirm_password = st.text_input("Confirmar Contraseña", type='password')
        
        if st.button("Registrarse"):
            if new_password == confirm_password:
                # Aquí iría la lógica de registro
                st.success("Cuenta creada exitosamente!")
            else:
                st.error("Las contraseñas no coinciden")

if __name__ == '__main__':
    main()
