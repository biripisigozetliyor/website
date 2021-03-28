import { makeObservable, observable } from "mobx";
class ModalStore {
    showModal = false;
}
const modalStore = makeObservable(new ModalStore(), {
  showModal: observable,
});
export { modalStore };
