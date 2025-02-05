import { useDispatch, useSelector } from "react-redux";

import s from "./ConfirmationModal.module.css";

import { closeModal } from "../../redux/modal/slice";
import { deleteContact } from "../../redux/contacts/operations";
import { selectContactId, selectOpenModal } from "../../redux/modal/selectors";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  const openModal = useSelector(selectOpenModal);
  const contactId = useSelector(selectContactId);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const handleConfirm = () => {
    dispatch(deleteContact(contactId));
    if (!isError) {
      dispatch(closeModal());
    }
    toast.success("the contact has been deleted!");
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  if (!openModal) {
    return null;
  }

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <p className={s.text}>Are you sure you want to delete this contact?</p>
        {isError && <h2>Something went wrong!</h2>}
        {isLoading ? (
          <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        ) : (
          <div className={s.btn}>
            <button className="btn btn-success" onClick={handleConfirm}>
              Yes
            </button>
            <button className="btn btn-error" onClick={handleCancel}>
              Not
            </button>
          </div>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ConfirmationModal;
