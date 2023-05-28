import React, {useState} from "react";
import AssetTable from "./asset/AssetTable";
import ModalContainer from "./employee/ModalContainer";

const ASSETS = [
  {id: 0, name: "Opcion 1", description: "Descripcion 1"},
  {id: 1, name: "Opcion 2", description: "Descripcion 2"},
  {id: 2, name: "Opcion 3", description: "Descripcion 3"},
];

const Asset = () => {
  const [showModal, setShowModal] = useState(false);
  const [assets, setAssets] = useState(ASSETS);
  const [newAsset, setNewAsset] = useState({});
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("")

  const handleEditEmployeeName = (newName) => {
    setNewName(newName);
    setNewAsset((prevEmployee) => ({
      ...prevEmployee,
      name: newName,
    }));
  };

  const handleEditAssetDescription = (newDescription) => {
    setNewDescription(newDescription);
    setNewAsset((prevEmployee) => ({
      ...prevEmployee,
      description: newDescription,
    }));
  };

  const handleCreateAsset = (newAsset) => {
    console.log(newAsset);
  };


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseShowModal = () => {
    setShowModal(false);
  };

    // const getAsset = () => {}

  return (
    <React.Fragment>
      <div className="container" style={{marginTop: "2rem"}}>
        <div className="row">
          <div className="col">
            <h3>Activos</h3>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleShowModal}
            >
              Nuevo
            </button>
          </div>
        </div>
        <AssetTable assets={assets} />
      </div>
      {showModal && (
        <ModalContainer
          onClose={handleCloseShowModal}
          onSucces={() => handleCreateAsset(newAsset)}
        >
          <div className="input-form-content row full">
            <div className="label-normal">
              <p>
                <b>Nombre:</b>
              </p>
            </div>
            <div className="column full">
              <input
                className="form-control"
                type="text"
                placeholder="Escribe un nombre"
                value={newName}
                onChange={(e) => handleEditEmployeeName(e.target.value)}
              />
            </div>
          </div>
          <div className="input-form-content row full">
            <div className="label-normal">
              <p>
                <b>Descripcion</b>
              </p>
            </div>
            <div className="column full">
              <input
                className="form-control"
                type="text"
                placeholder="Escribe un nombre"
                value={newDescription}
                onChange={(e) => handleEditAssetDescription(e.target.value)}
              />
            </div>
          </div>
        </ModalContainer>
      )}
    </React.Fragment>
  );
};

export default Asset;