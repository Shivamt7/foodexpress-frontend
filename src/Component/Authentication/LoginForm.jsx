import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const location = useLocation();
    const navigate = useNavigate();

  return (
    <>
      <Modal open={
        location.pathname === "/account/register"
        || location.pathname === "/accound/login"
      }>

        <Box>

        </Box>

      </Modal>
    </>
  )
}

export default LoginForm
