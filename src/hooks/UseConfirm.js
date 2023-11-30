
const useConfirm = (message="", onConfirm, onCancel) => {
    if((!onConfirm || typeof onConfirm !== "function") || (onCancel && typeof onCancel !== "function")) {
        return;
    }
    const confirmAction = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

function UseConfirm() {
    const deleteWorld = () => {
        console.log("delete world");
    }
    const abort = () => { console.log("Abort") };
    const confirmDelete = useConfirm("삭제하시겠습니까?",deleteWorld, abort)
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}
export default UseConfirm;
