"use client";
import React, { useEffect } from "react";
import styled from "styled-components";

import usemodal from "../../_Utils/hooks/useModal";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;

  //overwrites the Cell component styles
  word-break: initial;
  font-size: 16px;
  cursor: default;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

/**
 *
 * @param {{
 *  disableBackdropClick: boolean;
 *  children: ({ openModal: Function }) => JSX.Element;
 *  onCloseModal: Function;
 *  componentToShow: ({ closeModal: Function }) => JSX.Element;
 * }} param0
 * @returns {JSX.Element}
 */
function ModalHook({
  children,
  componentToShow,
  onCloseModal = () => null,
  disableBackdropClick = false,
}) {
  const { isopen, openmodal, closemodal, data } = usemodal({
    onClose: onCloseModal,
  });

  return (
    <>
      {isopen ? (
        <Modal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ModalBg
            onClick={(e) => (!disableBackdropClick ? closemodal(e) : null)}
          />
          {React.cloneElement(componentToShow, {
            closemodal,
            modaldata: data,
            isopen,
          })}
        </Modal>
      ) : null}

      {children({ openmodal })}
    </>
  );
}

export default ModalHook;
