import { makeObservable, observable } from "mobx";
class ModalStore {
    showModal = true;
}
const modalStore = makeObservable(new ModalStore(), {
  showModal: observable,
});
export { modalStore };
