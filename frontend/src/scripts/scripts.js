//This file contain all the logic for matching order for buyer and seller

export const checkSeller = (
  dispatch,
  seller,
  formData,
  initialQty,
  postOrder,
  postCompletedOrder,
  updateAll,
  audio,
  toast
) => {
  //sorting seller[] in descending order so that buyer price>=seller[i] price executed first
  let sortedSeller = seller.sort((b, a) => a.price - b.price);

  //modifying sortedSeller based on the condition matched with single formData (data from input form)
  let updatedSeller = sortedSeller.map((el) => {
    //if formData.price is greater than or eq to sortedSeller[i]
    if (el.price <= formData.price) {
      //and if sortedSeller[i].quantity is less than or eq to single formData (data from input form)
      if (el.quantity >= initialQty) {
        //storing the initialQty of formData
        let temp = initialQty;
        initialQty = 0;
        //setting the initialQty to 0 because it is less the sortedSeller[i].quantity
        return {
          //updating the sortedSeller Data
          ...el,
          quantity: el.quantity - temp,
        };
      } else {
        //or if sortedSeller[i].quantity is less than  single formData (data from input form)
        initialQty = initialQty - el.quantity;
        //decreasing the initialQty by the available sortedSeller[i].quantity
        return {
          ...el,
          quantity: 0,
        };
      }
    }

    return el;
  });

  //now if the order is partially executed means all the quantity is not matched
  if (initialQty > 0) {
    //posting the remaining incompleted order to the buyer[] db
    dispatch(
      postOrder({
        quantity: initialQty,
        price: formData.price,
        status: "pending",
        type: formData.type,
      })
    )
      .then(() => {
        //posting the partially completed order to the completed[] db
        let temp = formData.quantity - initialQty;
        if (temp > 0) {
          dispatch(
            postCompletedOrder({
              quantity: temp,
              price: formData.price,
              status: "completed",
              type: "completed",
            })
          ).then(() => {
            //playing ticking sound on partial order complete
            audio.play();

            //alert
            toast({
              title: "Buy order partially executed",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          });
        }
      })
      .then(() => {
        //dispatching action to update the changes
        dispatch(updateAll(updatedSeller));
      });
  } else {
    //if the order is fully executed
    let temp = formData.quantity - initialQty;
    if (temp > 0) {
      //dispatching action to update the changes in completed[] db
      dispatch(
        postCompletedOrder({
          quantity: temp,
          price: formData.price,
          status: "completed",
          type: "completed",
        })
      ).then(() => {
        //playing ticking sound on fully executed order
        audio.play();

        //alert
        toast({
          title: "Buy order fully executed",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });

        //dispatching action to update the changes
        dispatch(updateAll(updatedSeller));
      });
    } else {
      //if the order didn't matched
      dispatch(updateAll(updatedSeller));
    }
  }
};

export const checkBuyer = (
  dispatch,
  buyer,
  formData,
  initialQty,
  postOrder,
  postCompletedOrder,
  updateAll,
  audio,
  toast
) => {
  //sorting buyer[] in ascending order so that buyer price<=seller[i] price executed first
  let sortedBuyer = buyer.sort((a, b) => a.price - b.price);
  //modifying sortedBuyer based on the condition matched with single formData (data from input form)
  let updatedBuyer = sortedBuyer.map((el) => {
    //if formData.price is less than or eq to sortedBuyer[i]
    if (el.price >= formData.price) {
      //and if sortedBuyer[i].quantity is greater than or eq to single formData (data from input form)
      if (el.quantity >= initialQty) {
        //storing the initialQty of formData
        let temp = initialQty;
        //setting the initialQty to 0 because it is less the sortedBuyer[i].quantity
        initialQty = 0;

        //updating the sortedBuyer Data
        return {
          ...el,
          quantity: el.quantity - temp,
        };
      } else {
        //or if sortedBuyer[i].quantity is less than  single formData (data from input form)
        initialQty = initialQty - el.quantity;
        //decreasing the initialQty by the available sortedBuyer[i].quantity
        return {
          ...el,
          quantity: 0,
        };
      }
    }

    return el;
  });
  //now if the order is partially executed means all the quantity is not matched
  if (initialQty > 0) {
    //posting the remaining incompleted order to the seller[]/ db
    dispatch(
      postOrder({
        quantity: initialQty,
        price: formData.price,
        status: "pending",
        type: formData.type,
      })
    )
      .then(() => {
        let temp = formData.quantity - initialQty;
        if (temp > 0) {
          //posting the partially completed order to the completed[] db
          dispatch(
            postCompletedOrder({
              quantity: temp,
              price: formData.price,
              status: "completed",
              type: "completed",
            })
          ).then(() => {
            //playing ticking sound on partial order complete
            audio.play();
            toast({
              title: "Sell order partially executed",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          });
        }
      })
      .then(() => {
        //dispatching action to update the changes
        dispatch(updateAll(updatedBuyer));
      });
  } else {
    let temp = formData.quantity - initialQty;

    if (temp > 0) {
      //if the order is fully executed
      //playing ticking sound on partial order complete
      audio.play();
      //alert
      toast({
        title: "Sell order fully executed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

      //posting the fully completed order to the completed[] db
      dispatch(
        postCompletedOrder({
          quantity: temp,
          price: formData.price,
          status: "completed",
          type: "completed  ",
        })
      ).then(() => {
        //dispatching action to update the changes
        dispatch(updateAll(updatedBuyer));
      });
    } else {
      //if the order didn't matched
      //dispatching action to update the changes
      dispatch(updateAll(updatedBuyer));
    }
  }
};
