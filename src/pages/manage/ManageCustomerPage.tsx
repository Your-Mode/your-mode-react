import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcPrev from "@shared/assets/icon/ic_prev.svg";

export const ManageCustomerPage = () => {
  const leftHeaderAction: HeaderAction = { icon: IcPrev, onClick: () => {} };

  return (
    <>
      <AppBar leftHeaderAction={leftHeaderAction} title='나의 고객' />
    </>
  );
}
