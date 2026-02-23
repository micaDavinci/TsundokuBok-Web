import { Container, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

import "./login.css"

export const LoginInvitado = () => {
    return(

        <div className="login-wrapper">
            <Container className="login-container">
                <div className="kindle p-4">
                    {/* Botón superior tipo Kindle */}
                    <div className="d-flex justify-content-center mb-3">
                        <div className="kindle-button" />
                    </div>

                    {/* Pantalla Kindle */}
                    <div className="kindle-screen p-3 d-flex flex-column">
                        <div className="e-ink-texture" />

                        {/* Status bar */}
                        <div className="d-flex justify-content-end align-items-center text-muted small mb-4 z-10">
                            <div className="d-flex align-items-center gap-2">
                                <svg width="16"
                                    height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                                </svg>
                                <div className="battery-indicator" />
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="flex-grow d-flex flex-column justify-content-center align-items-center z-10">
                            <div className="text-center mb-4">
                                <h1 className="login-title">
                                    <span className="tsundoku">Tsundoku</span>
                                    <span className="bok">Bok</span>
                                </h1>
                                <p className="subtitle">Biblioteca digital</p>
                            </div>

                            <div className="login-form w-100">
                                <h2 className="text-center mb-4">Iniciar sesión</h2>

                                <Form>
                                    <Form.Group className="mt-4 mb-2">
                                        <Form.Label>Mail</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="nombre@example.com"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Biblioteca</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>


                                    <Button
                                        className="w-100 mt-4 mb-4"
                                    >
                                        Ingresar
                                    </Button>
                                </Form>
                            </div>
                        </div>

                        {/* Footer Kindle */}
                        <div className="d-flex justify-content-between small opacity-50 mt-4 z-10">
                            <span>TsundokuBok v1.0</span>
                            <span>Guest  Edition</span>
                        </div>
                    </div>

                    {/* Botón inferior Kindle */}
                    <div className="d-flex justify-content-center mt-3">
                        <div className="kindle-button" />
                    </div>
                </div>
            </Container>
        </div>
    )
}