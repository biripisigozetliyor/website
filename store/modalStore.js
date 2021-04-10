import { makeObservable, observable } from "mobx";
class ModalStore {
    showModal = false;
    dateObj = {pet:"", startDate:"", endDate: "", location: ""}
}
const modalStore = makeObservable(new ModalStore(), {
  showModal: observable,
});
export { modalStore };
