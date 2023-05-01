export const checkSeller = (
  dispatch,
  seller,
  formData,
  initialQty,
  postOrder,
  postCompletedOrder,
  updateAll,
  audio
) => {
  let sortedSeller = seller.sort((b, a) => a.price - b.price);
  let updatedSeller = sortedSeller.map((el) => {
    if (el.price <= formData.price) {
      if (el.quantity >= initialQty) {
        let temp = initialQty;
        initialQty = 0;
        return {
          ...el,
          quantity: el.quantity - temp,
        };
      } else {
        initialQty = initialQty - el.quantity;
        return {
          ...el,
          quantity: 0,
        };
      }
    }

    return el;
  });

  if (initialQty > 0) {
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
          audio.play();
          dispatch(
            postCompletedOrder({
              quantity: temp,
              price: formData.price,
              status: "completed",
              type: "completed",
            })
          );
        }
      })
      .then(() => {
        dispatch(updateAll(updatedSeller));
      });
  } else {
    let temp = formData.quantity - initialQty;
    if (temp > 0) {
      audio.play();
      dispatch(
        postCompletedOrder({
          quantity: temp,
          price: formData.price,
          status: "completed",
          type: "completed",
        })
      ).then(() => {
        audio.play();
        dispatch(updateAll(updatedSeller));
      });
    } else {
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
  audio
) => {
  let sortedBuyer = buyer.sort((a, b) => a.price - b.price);
  let updatedBuyer = sortedBuyer.map((el) => {
    if (el.price >= formData.price) {
      if (el.quantity >= initialQty) {
        let temp = initialQty;
        initialQty = 0;
        return {
          ...el,
          quantity: el.quantity - temp,
        };
      } else {
        initialQty = initialQty - el.quantity;
        return {
          ...el,
          quantity: 0,
        };
      }
    }

    return el;
  });

  if (initialQty > 0) {
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
          audio.play()
          dispatch(
            postCompletedOrder({
              quantity: temp,
              price: formData.price,
              status: "completed",
              type: "completed",
            })
          );
        }
      })
      .then(() => {
        dispatch(updateAll(updatedBuyer));
        audio.play();
      });
  } else {
    let temp = formData.quantity - initialQty;

    if (temp > 0) {
      audio.play()
      dispatch(
        postCompletedOrder({
          quantity: temp,
          price: formData.price,
          status: "completed",
          type: "completed  ",
        })
      ).then(() => {
        dispatch(updateAll(updatedBuyer));
      });
    } else {
      dispatch(updateAll(updatedBuyer));
    }
  }
};
