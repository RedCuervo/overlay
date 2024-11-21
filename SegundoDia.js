//Para segundo dia
/* cambios:
Se agregan estados para los modales y el menu dentro del modal
se agregan metodos para manejar los modales
se agregan los multimodales, justo despues de pressable con texto "Detalles Adicionales" 
*/
    //estados para el multimodal
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    //Manejan los modales 
    const openModal = (modalName) => {
        setIsMenuModalOpen(false);
        setActiveModal(modalName);
    };
    const closeModal = () => setActiveModal(null);
    const returnToMenu = () => {
        setActiveModal(null);
        setIsMenuModalOpen(true);
    }
//boton para abrir el multimodal (este ya se encuentra en el codigo)
                    <Pressable onPress={() => setIsMenuModalOpen(true)}>  //Se agrega onpress para abir los multimodales
                        <Text fontSize="md" color="blue.500">
                            Detalles adicionales <Badge bg={"blue.500"} borderRadius={20}>WIP</Badge>
                        </Text>
                    </Pressable>
      //Modales(van justo despues del pressable)
 <Modal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)}>
                        <Modal.Content>
                            <Modal.CloseButton />
                            <Modal.Header>Detalles Adicionales</Modal.Header>
                            {/* Menu dentro de modal */}
                            <Modal.Body>
                                <VStack space={4}>
                                    <Button variant="ghost" onPress={() => openModal("terms")}>
                                        Términos y Condiciones
                                    </Button>
                                    <Button variant="ghost" onPress={() => openModal("privacy")}>
                                        Política de Privacidad
                                    </Button>
                                    <Button variant="ghost" onPress={() => openModal("license")}>
                                        Licencia
                                    </Button>
                                </VStack>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>
                    {/* 1er modal */}
                    {activeModal === "terms" && (
                        <Modal isOpen onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Términos y Condiciones</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <Text>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                                        blandit porta sem vestibulum tristique suscipit non ultrices, 
                                        cursus gravida pellentesque nascetur natoque aliquet. Mollis 
                                        commodo suspendisse id himenaeos justo enim magna, sed phasellus 
                                        nec lectus volutpat rutrum litora, bibendum rhoncus fusce per aliquam magnis. 
                                        Metus et molestie lectus etiam malesuada donec curae ultricies egestas quis, 
                                        sed duis massa phasellus aenean blandit enim lacus sociis, mattis magnis at 
                                        integer interdum gravida libero parturient suscipit.
                                        Auctor etiam blandit tempor magnis ultrices sem a non, vitae nam sociosqu 
                                        ridiculus inceptos facilisi praesent ultricies, proin suspendisse quisque 
                                        odio senectus id curabitur. Tristique pretium pellentesque iaculis ad primis 
                                        etiam feugiat, cubilia ultricies ultrices erat sem sodales. Himenaeos mollis 
                                        metus potenti purus tempus vitae tempor ridiculus morbi, eu faucibus non sodales 
                                        bibendum aliquet porta fermentum, suscipit iaculis imperdiet cubilia vel curabitur fusce id.
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                                        blandit porta sem vestibulum tristique suscipit non ultrices, 
                                        cursus gravida pellentesque nascetur natoque aliquet. Mollis 
                                        commodo suspendisse id himenaeos justo enim magna, sed phasellus 
                                        nec lectus volutpat rutrum litora, bibendum rhoncus fusce per aliquam magnis. 
                                        Metus et molestie lectus etiam malesuada donec curae ultricies egestas quis, 
                                        sed duis massa phasellus aenean blandit enim lacus sociis, mattis magnis at 
                                        integer interdum gravida libero parturient suscipit.
                                        Auctor etiam blandit tempor magnis ultrices sem a non, vitae nam sociosqu 
                                        ridiculus inceptos facilisi praesent ultricies, proin suspendisse quisque 
                                        odio senectus id curabitur. Tristique pretium pellentesque iaculis ad primis 
                                        etiam feugiat, cubilia ultricies ultrices erat sem sodales. Himenaeos mollis 
                                        metus potenti purus tempus vitae tempor ridiculus morbi, eu faucibus non sodales 
                                        bibendum aliquet porta fermentum, suscipit iaculis imperdiet cubilia vel curabitur fusce id.
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                                        blandit porta sem vestibulum tristique suscipit non ultrices, 
                                        cursus gravida pellentesque nascetur natoque aliquet. Mollis 
                                        commodo suspendisse id himenaeos justo enim magna, sed phasellus 
                                        nec lectus volutpat rutrum litora, bibendum rhoncus fusce per aliquam magnis. 
                                        Metus et molestie lectus etiam malesuada donec curae ultricies egestas quis, 
                                        sed duis massa phasellus aenean blandit enim lacus sociis, mattis magnis at 
                                        integer interdum gravida libero parturient suscipit.
                                        Auctor etiam blandit tempor magnis ultrices sem a non, vitae nam sociosqu 
                                        ridiculus inceptos facilisi praesent ultricies, proin suspendisse quisque 
                                        odio senectus id curabitur. Tristique pretium pellentesque iaculis ad primis 
                                        etiam feugiat, cubilia ultricies ultrices erat sem sodales. Himenaeos mollis 
                                        metus potenti purus tempus vitae tempor ridiculus morbi, eu faucibus non sodales 
                                        bibendum aliquet porta fermentum, suscipit iaculis imperdiet cubilia vel curabitur fusce id.
                                        <Text color={"red.500"}>Pozole Wort wort wort</Text>
                                        </Text>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>Cerrar</Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}
                    {/* 2do modal */}
                    {activeModal === "privacy" && (
                        <Modal isOpen onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Política de Privacidad</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <VStack space={2}>
                                            <Text bold>1. Datos Recopilados:</Text>
                                            <Text>Los datos recopilados por la aplicacion incluyen y no se limitan a: cuenta bancaria, numero telefonico, contactos, contraseñas y todo lo peligroso :D</Text>
                                            <Text bold>2. Uso de Datos:</Text>
                                            <Text>Tus datos se venden a empresarios en taiwan o al mejor postor, nunca se sabe.</Text>
                                            <Text bold>3. Derechos del Usuario:</Text>
                                            <Text>Al aceptar los terminos aceptaste no tener ni un solo derecho sobre tus datos y podemos hacer lo que se nos de la gana con ellos.</Text>
                                        </VStack>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>Cerrar</Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}
                    {/* 3er modal */}
                    {activeModal === "license" && (
                        <Modal isOpen onClose={closeModal}>
                            <Modal.Content>
                                <Modal.CloseButton />
                                <Modal.Header>Licencia</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                        <Text>
                                            La licencia de esta aplicacion es totalmente revocable y no se dara ningun tipo de aviso al momento de realizar dicha accion, ademas esta licencia gratuita tiene una duracion de un año pero no se especifica que año.
                                        </Text>
                                    </ScrollView>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="outline" onPress={returnToMenu}>
                                            Regresar al menú
                                        </Button>
                                        <Button onPress={closeModal}>Cerrar</Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    )}
//aqui sigue el codigo como ya estaba anteriormente.
