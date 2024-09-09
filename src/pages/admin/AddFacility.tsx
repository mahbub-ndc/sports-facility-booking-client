/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateFacilityMutation } from "../../redux/features/admin/facilityApi";
import { toast } from "sonner";

const AddFacility = () => {
  // const { data } = useGetAllfacilitiesQuery(undefined);
  // console.log(data);

  type Inputs = {
    name: string;
    description: string;
    location: string;
    pricePerHour: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [addFacilitydata] = useCreateFacilityMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data);

    const facilityData = {
      name: data.name,
      description: data.description,
      pricePerHour: Number(data.pricePerHour),
      location: data.location,
    };

    console.log(facilityData);

    try {
      const res = await addFacilitydata(facilityData);
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Facility added succesfully!");
      }
    } catch (err) {
      toast.error("something went wrong!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <input
              className="p-2"
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
            />
            {errors.name && (
              <span className="text-sm text-red-500 flex items-center">
                Name is required
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <input
              className="p-2"
              {...register("description", { required: true })}
              type="text"
              placeholder="description"
            />
            {errors.description && (
              <span className="text-sm text-red-500 flex items-center">
                Description is required
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <input
              className="p-2"
              {...register("location", { required: true })}
              type="text"
              placeholder="location"
            />
            {errors.location && (
              <span className="text-sm text-red-500 flex items-center">
                Location is required
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <input
              className="p-2"
              {...register("pricePerHour", { required: true })}
              type="number"
              placeholder="pricePerHour"
            />
            {errors.location && (
              <span className="text-sm text-red-500 flex items-center">
                Price Per Hour is required
              </span>
            )}
          </div>

          <Button block type="primary" htmlType="submit">
            Create Facility
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddFacility;
