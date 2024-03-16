import Modal from "./Modal";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import Settings from "./Settings";

type SettingsModalProps = {
    workTime: number;

  };

function SettingsModal({ workTime }: SettingsModalProps) {

  console.log(workTime)
  return (
    <div>
      <Modal>
        <Modal.Open openModalName='settings-name'>
            <HiOutlineCog8Tooth className="text-5xl mt-4 text-gray-400 cursor-pointer"/>
        </Modal.Open>
        <Modal.Window name='settings-name'>
            <Settings />
        </Modal.Window>
      </Modal>
    </div>
  )
}

export default SettingsModal