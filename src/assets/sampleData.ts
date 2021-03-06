import { Order } from "../types";

const exampleRequest: Order[] = [
  {
    _created: "2021-07-22T20:08:02.000000Z",
    _id: "123456789",
    _updated: "2021-07-22T20:08:02.000000Z",
    account: "60bfc6dc4887c9851d5a0246",
    brandId: "60bfc6dc4887c9851d5a0245",
    by: "Deliverect",
    capacityUsages: [],
    channel: 1,
    channelLink: "60bfc70416db475a226e33d8",
    channelOrderDisplayId: "TEST1626898082",
    channelOrderId: "TEST1626898082",
    channelOrderRawId: "60f87ea2f0a2c5c61331dbea",
    courier: {
      deliveryBy: "restaurant",
    },
    customer: {
      companyName: "",
      email: "",
      name: "Bao Nguyen",
      phoneNumber: "",
    },
    decimalDigits: 2,
    deliveryAddress: {
      city: "Helsinki",
      extraAddressInfo: "",
      postalCode: "00100",
      street: "Huuvatie",
      streetNumber: "1",
    },
    deliveryCost: 0,
    deliveryIsAsap: true,
    deliveryTime: "2021-07-22T20:38:02.000000Z",
    discountTotal: 0,
    historyDriverUpdates: [],
    items: [
      {
        isInternal: true,
        name: "Hawaii Burger",
        plu: "CAT1-0001",
        price: 12,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
      {
        isInternal: true,
        name: "Sushi Set Large",
        plu: "CAT2-0001",
        price: 24,
        productType: 1,
        quantity: 2,
        sortOrder: 0,
        subItems: [],
      },
    ],
    location: "60bfc703fb00bf782b363185",
    note: "",
    numberOfCustomers: 1,
    orderIsAlreadyPaid: true,
    orderType: 2,
    packaging: {
      includeCutlery: true,
    },
    payment: {
      amount: 3500,
      due: 0,
      type: 0,
    },
    pickupTime: "2021-07-22T11:49:02.000000Z",
    pos: 10000,
    posId: "",
    posLocationId: "",
    posReceiptId: "",
    rating: [],
    recent: true,
    resolvedBy: "",
    serviceCharge: 0,
    status: 4,
    statusHistory: [
      {
        response: "",
        source: 2,
        status: 4,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
      {
        response: "",
        source: 5,
        status: 1,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
    ],
    taxes: [],
    tip: 0,
  },
  {
    _created: "2021-07-22T20:08:02.000000Z",
    _id: "6543434sad35dasd4",
    _updated: "2021-07-22T20:08:02.000000Z",
    account: "60bfc6dc4887c9851d5a0246",
    brandId: "60bfc6dc4887c9851d5a0245",
    by: "Deliverect",
    capacityUsages: [],
    channel: 1,
    channelLink: "60bfc70416db475a226e33d8",
    channelOrderDisplayId: "TEST1626898082",
    channelOrderId: "TEST1626898082",
    channelOrderRawId: "60f87ea2f0a2c5c61331dbea",
    courier: {
      deliveryBy: "restaurant",
    },
    customer: {
      companyName: "",
      email: "",
      name: "Juho Kaskashi",
      phoneNumber: "0461246434",
    },
    decimalDigits: 2,
    deliveryAddress: {
      city: "Helsinki",
      extraAddressInfo: "",
      postalCode: "00100",
      street: "Huuvatie",
      streetNumber: "1",
    },
    deliveryCost: 0,
    deliveryIsAsap: true,
    deliveryTime: "2021-07-22T16:50:02.000000Z",
    discountTotal: 0,
    historyDriverUpdates: [],
    items: [
      {
        isInternal: true,
        name: "Pizza Large #1",
        plu: "CAT1-0001",
        price: 12,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
      {
        isInternal: true,
        name: "Tiramishu",
        plu: "CAT2-0001",
        price: 24,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
      {
        isInternal: true,
        name: "Grill chicken",
        plu: "CAT2-0001",
        price: 24,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
    ],
    location: "60bfc703fb00bf782b363185",
    note: "Please keep the Tiramisu away from pizza and the chicken",
    numberOfCustomers: 1,
    orderIsAlreadyPaid: true,
    orderType: 2,
    packaging: {
      includeCutlery: true,
    },
    payment: {
      amount: 3500,
      due: 0,
      type: 0,
    },
    pickupTime: "2021-07-22T12:13.000000Z",
    pos: 10000,
    posId: "",
    posLocationId: "",
    posReceiptId: "",
    rating: [],
    recent: true,
    resolvedBy: "",
    serviceCharge: 0,
    status: 3,
    statusHistory: [
      {
        response: "",
        source: 2,
        status: 4,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
      {
        response: "",
        source: 5,
        status: 1,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
    ],
    taxes: [],
    tip: 0,
  },
  {
    _created: "2021-07-22T20:08:02.000000Z",
    _id: "12345678914213asdasd212",
    _updated: "2021-07-22T20:08:02.000000Z",
    account: "60bfc6dc4887c9851d5a0246",
    brandId: "60bfc6dc4887c9851d5a0245",
    by: "Deliverect",
    capacityUsages: [],
    channel: 1,
    channelLink: "60bfc70416db475a226e33d8",
    channelOrderDisplayId: "TEST1626898082",
    channelOrderId: "TEST1626898082",
    channelOrderRawId: "60f87ea2f0a2c5c61331dbea",
    courier: {
      deliveryBy: "restaurant",
    },
    customer: {
      companyName: "",
      email: "",
      name: "Helen",
      phoneNumber: "0461246434",
    },
    decimalDigits: 2,
    deliveryAddress: {
      city: "Helsinki",
      extraAddressInfo: "",
      postalCode: "00100",
      street: "Huuvatie",
      streetNumber: "1",
    },
    deliveryCost: 0,
    deliveryIsAsap: true,
    deliveryTime: "2021-07-22T20:38:02.000000Z",
    discountTotal: 0,
    historyDriverUpdates: [],
    items: [
      {
        isInternal: true,
        name: "Pho",
        plu: "CAT1-0001",
        price: 12,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
    ],
    location: "60bfc703fb00bf782b363185",
    note: "Please seperate the soup and the noodles",
    numberOfCustomers: 1,
    orderIsAlreadyPaid: true,
    orderType: 2,
    packaging: {
      includeCutlery: true,
    },
    payment: {
      amount: 3500,
      due: 0,
      type: 0,
    },
    pickupTime: "2021-07-22T12:30:02.000000Z",
    pos: 10000,
    posId: "",
    posLocationId: "",
    posReceiptId: "",
    rating: [],
    recent: true,
    resolvedBy: "",
    serviceCharge: 0,
    status: 2,
    statusHistory: [
      {
        response: "",
        source: 2,
        status: 4,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
      {
        response: "",
        source: 5,
        status: 1,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
    ],
    taxes: [],
    tip: 0,
  },
  {
    _created: "2021-07-22T20:08:02.000000Z",
    _id: "1234567asdasd89",
    _updated: "2021-07-22T20:08:02.000000Z",
    account: "60bfc6dc4887c9851d5a0246",
    brandId: "60bfc6dc4887c9851d5a0245",
    by: "Deliverect",
    capacityUsages: [],
    channel: 1,
    channelLink: "60bfc70416db475a226e33d8",
    channelOrderDisplayId: "TEST1626898082",
    channelOrderId: "TEST1626898082",
    channelOrderRawId: "60f87ea2f0a2c5c61331dbea",
    courier: {
      deliveryBy: "restaurant",
    },
    customer: {
      companyName: "",
      email: "",
      name: "Cam Uchiha",
      phoneNumber: "0461246434",
    },
    decimalDigits: 2,
    deliveryAddress: {
      city: "Helsinki",
      extraAddressInfo: "",
      postalCode: "00100",
      street: "Huuvatie",
      streetNumber: "1",
    },
    deliveryCost: 0,
    deliveryIsAsap: true,
    deliveryTime: "2021-07-22T20:38:02.000000Z",
    discountTotal: 0,
    historyDriverUpdates: [],
    items: [
      {
        isInternal: true,
        name: "Taco Hot",
        plu: "CAT1-0001",
        price: 12,
        productType: 1,
        quantity: 1,
        sortOrder: 0,
        subItems: [],
      },
      {
        isInternal: true,
        name: "Salmon Smoke",
        plu: "CAT2-0001",
        price: 24,
        productType: 1,
        quantity: 2,
        sortOrder: 0,
        subItems: [],
      },
    ],
    location: "60bfc703fb00bf782b363185",
    note: "",
    numberOfCustomers: 1,
    orderIsAlreadyPaid: true,
    orderType: 2,
    packaging: {
      includeCutlery: true,
    },
    payment: {
      amount: 3500,
      due: 0,
      type: 0,
    },
    pickupTime: "2021-07-22T12:35:02.000000Z",
    pos: 10000,
    posId: "",
    posLocationId: "",
    posReceiptId: "",
    rating: [],
    recent: true,
    resolvedBy: "",
    serviceCharge: 0,
    status: 1,
    statusHistory: [
      {
        response: "",
        source: 2,
        status: 4,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
      {
        response: "",
        source: 5,
        status: 1,
        timeStamp: "2021-07-22T20:08:02.000000Z",
      },
    ],
    taxes: [],
    tip: 0,
  },
];

export default exampleRequest;
