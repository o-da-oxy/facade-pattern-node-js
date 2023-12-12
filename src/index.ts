// FACADE
// Скрывает за простым фасадом сложную систему заказа товаров

class NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending notification: ${message}`);
  }
}

class PaymentService {
  processPayment(amount: number): void {
    console.log(`Processing payment of ${amount}`);
  }
}

class ShippingService {
  shipProduct(productId: string, address: string): void {
    console.log(`Shipping product ${productId} to address ${address}`);
  }
}

class OrderFacade {
  private notificationService: NotificationService;
  private paymentService: PaymentService;
  private shippingService: ShippingService;

  constructor() {
    this.notificationService = new NotificationService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }

  public placeOrder(productId: string, address: string, amount: number): void {
    console.log('Placing order...');
    this.paymentService.processPayment(amount);
    this.notificationService.sendNotification(
      `Your order for product ${productId} has been placed`
    );
    this.shippingService.shipProduct(productId, address);
    console.log('Order placed successfully!');
  }
}

const orderFacade = new OrderFacade();
orderFacade.placeOrder('1', '50 New Arbat Street', 1000);
