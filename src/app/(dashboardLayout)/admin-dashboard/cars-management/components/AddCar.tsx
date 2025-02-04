/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import AddCarForm from "./AddCarForm";
import { Button } from "@heroui/button";
import { ModalHeader, useDisclosure } from "@heroui/modal";
import CustomModal from "@/app/(dashboardLayout)/components/modal/CustomModal";

const AddCar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <div className="my-3">
      <CustomModal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalHeader className="p-4">Add A Car</ModalHeader>
        <AddCarForm onClose={onClose} />
      </CustomModal>

      <Button size="md" variant="faded" onClick={onOpen}>
        Add Car
      </Button>
    </div>
  );
};

export default AddCar;
