import { IOrder } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
};
const updatePaymentStatus = async (id: string) => {
  const result = await Order.updateOne(
    { transactionId: id },
    {
      $set: {
        isPaid: true,
      },
    },
  );

  if (result.modifiedCount === 0) {
    return { success: false, message: 'Order not found or already paid', result };
  }

  return { success: true, message: 'Payment status updated', result };
};

const getOrders = async () => {
  const orders = await Order.find();

  return orders;
};

const getUserOrdersFromDB = async (userId: string) => {
  const result = await Order.find({ userId: userId });
  return result;
};

const getOrderById = async (id: string) => {
  const order = await Order.findById(id);
  return order;
};

const updateOrder = async (id: string, data: Partial<IOrder>) => {
  const result = await Order.findByIdAndUpdate(id, { $set: { ...data } }, { new: true });

  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  updatePaymentStatus,
  getOrders,
  getUserOrdersFromDB,
  getOrderById,
  updateOrder,
  deleteOrder,
};
