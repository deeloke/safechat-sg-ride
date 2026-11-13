import { useState } from "react";

const A = "/assets";

// ─── asset references ────────────────────────────────────────────────────────
// Disclaimer
const imgInfoIcon = `${A}/51f78.svg`;
const imgShieldIcon = `${A}/251b0.svg`;
const imgArrowRight = `${A}/d3302.svg`;
const imgPhoneScreenshot = `${A}/3430e.png`;
const imgShieldSmall = `${A}/2894d.svg`;

// Select Destination
const imgPickupDot = `${A}/e320c.svg`;
const imgDestinationPin = `${A}/a8296.svg`;
const imgCloseX = `${A}/21efe.svg`;
const imgLocationPin2 = `${A}/21ea6.svg`;
const imgLocationTarget = `${A}/8b043.svg`;
const imgBackArrow = `${A}/375a7.svg`;
const imgMapBg = `${A}/ebf74.png`;

// Home
const imgSearchIcon = `${A}/39383.svg`;
const iconTransport = `${A}/5bb23.svg`;
const iconFood = `${A}/8419b.svg`;
const iconMart = `${A}/acae1.svg`;
const iconExpress = `${A}/67ab4.svg`;
const iconBills = `${A}/66b09.svg`;
const iconInsurance = `${A}/a370c.svg`;
const iconGifts = `${A}/a95eb.svg`;
const iconMore = `${A}/3b36c.svg`;
const iconMapFab = `${A}/ffcd3.svg`;
const imgHamburger = `${A}/ec39c.svg`;
const imgHomeActive = `${A}/f2793.svg`;
const imgActivity = `${A}/65909.svg`;
const imgPayment = `${A}/df1ff.svg`;
const imgAccount = `${A}/e951a.svg`;
const imgPromo1 = `${A}/468b8.png`;
const imgPromo2 = `${A}/e0110.png`;
const imgCoffeeClub = `${A}/41670.png`;
const imgSushiHiro = `${A}/4e8b1.png`;
const imgUserAvatar = `${A}/8635d.png`;
const imgStarRating = `${A}/4c290.svg`;

// Transport Booking
const imgGreenCircle = `${A}/d0cdd.svg`;
const imgRedPin = `${A}/1a852.svg`;
const imgCarJustGrab = `${A}/6e273.png`;
const imgCarGrabCar = `${A}/8d4a0.png`;
const imgCarGrabTaxi = `${A}/d55e4.png`;
const imgPaymentCard = `${A}/f7d10.svg`;
const imgInfoCircle = `${A}/88eb9.svg`;
const imgPayNowIcon = `${A}/9b525.svg`;

// Booking Confirmed
const imgMapConfirmed = `${A}/8498a.png`;
const imgDriverPhoto = `${A}/20c2a.png`;
const imgCarIcon = `${A}/857db.svg`;
const imgCheckmark = `${A}/1b468.svg`;
const imgStarSmall = `${A}/1c2d8.svg`;
const imgChatBtn = `${A}/818df.svg`;
const imgCallBtn = `${A}/523df.svg`;
const imgPickupCircle = `${A}/6d132.svg`;
const imgShareIcon = `${A}/5024a.svg`;
const imgActivityActive = `${A}/6eaf4.svg`;
const imgPaymentIcon2 = `${A}/004f2.svg`;

// Guidance
const imgInfoIconGuidance = `${A}/af066.svg`;
const imgCheckCircle = `${A}/1af07.svg`;
const imgCloseGuidance = `${A}/e56ba.svg`;

// Activity History
const imgTransportIconGreen = `${A}/730c8.svg`;
const imgLocationPinGreen = `${A}/0f4e8.svg`;
const imgChevronRight = `${A}/879ff.svg`;
const imgActivityTabActive = `${A}/6eaf4.svg`;
const imgActivityIconTab = `${A}/ef768.svg`;
const imgFoodIconTab = `${A}/6ae30.svg`;
const imgMartIconTab = `${A}/a4054.svg`;
const imgFabMap2 = `${A}/c273f.svg`;

// Payment
const imgDbsCard = `${A}/f1237.png`;
const imgPayNowLogo = `${A}/e2a38.png`;
const imgPayPalLogo = `${A}/5f9e4.png`;
const imgUserAvatarPayment = `${A}/7f5a7.png`;
const imgCheckSelected = `${A}/e013f.svg`;
const imgChevronRightPayment = `${A}/6f161.svg`;
const imgCardIcon = `${A}/35261.svg`;
const imgStarPoints = `${A}/e01a3.svg`;
const imgHamburgerPayment = `${A}/0182b.svg`;
const imgPaymentActiveIcon = `${A}/ac002.svg`;
const imgAccountIcon2 = `${A}/db6a7.svg`;

// Payment Method (30:112)
const imgCheckWhite = `${A}/e0f80.svg`;
const imgBankIcon = `${A}/c9926.svg`;
const imgBackChevron = `${A}/fff80.svg`;

// Ride Details
const imgMapRideDetails = `${A}/9e967.png`;
const imgDriverPhotoRide = `${A}/712a1.png`;
const imgStarIconRide = `${A}/15402.svg`;
const imgChatIconRide = `${A}/818df.svg`;
const imgLocationDotRide = `${A}/d3abf.svg`;
const imgDestPinRide = `${A}/4b713.svg`;
const imgPaymentCardRide = `${A}/1816a.svg`;
const imgReceiptIcon = `${A}/a1509.svg`;
const imgHelpIcon = `${A}/2c416.svg`;

type Screen =
  | "disclaimer"
  | "home"
  | "selectDestination"
  | "transportBooking"
  | "bookingConfirmed"
  | "guidance"
  | "activityHistory"
  | "payment"
  | "paymentMethod"
  | "rideDetails";

interface BookingState {
  destination: string;
  destinationSub: string;
  payment: "dbs" | "paynow";
  dropOff: string;
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────
function BottomNav({
  active,
  onHome,
  onActivity,
  onPayment,
}: {
  active: "home" | "activity" | "payment" | "account";
  onHome?: () => void;
  onActivity?: () => void;
  onPayment?: () => void;
}) {
  const tabs = [
    {
      id: "home",
      label: "Home",
      w: 16, h: 18,
      src: active === "home" ? imgHomeActive : imgPaymentIcon2,
      action: onHome,
    },
    {
      id: "activity",
      label: "Activity",
      w: 18, h: 20,
      src: active === "activity" ? imgActivityTabActive : imgActivity,
      action: onActivity,
    },
    {
      id: "payment",
      label: "Payment",
      w: 22, h: 16,
      src: active === "payment" ? imgPaymentActiveIcon : imgPayment,
      action: onPayment,
    },
    {
      id: "account",
      label: "Account",
      w: 16, h: 16,
      src: imgAccount,
      action: undefined,
    },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[6px] bg-[rgba(248,249,250,0.8)] border-t border-[#bccbb9] pb-8 pt-px shadow-[0px_-4px_15px_-3px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center h-14 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={tab.action}
            className="flex flex-col items-center justify-center gap-0.5 relative"
          >
            {tab.id === active && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#006e2e] rounded-full" />
            )}
            <img src={tab.src} alt={tab.label} className="block" style={{ width: tab.w, height: tab.h }} />
            <span
              className="text-[12px] font-medium leading-4"
              style={{ color: tab.id === active ? "#006e2e" : "#5d5e61" }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN: Disclaimer ───────────────────────────────────────────────────────
function DisclaimerScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="flex flex-col size-full bg-[#f8f9fa] relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute bg-[rgba(0,177,79,0.1)] blur-[32px] rounded-full" style={{ top: "-10%", right: "-10%", left: "44%", bottom: "62%" }} />
      <div className="absolute bg-[rgba(0,110,46,0.05)] blur-[32px] rounded-full" style={{ top: "35%", left: "-15%", right: "33%", bottom: "5%" }} />

      {/* Main scroll area */}
      <div className="flex-1 overflow-auto flex flex-col items-center px-5 pt-16 pb-4">
        {/* Icon */}
        <div className="mb-6">
          <div className="bg-[rgba(0,177,79,0.1)] rounded-full w-24 h-24 flex items-center justify-center">
            <img src={imgInfoIcon} alt="" style={{ width: 53, height: 53 }} />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-[28px] font-bold text-[#191c1d] tracking-[-0.7px] leading-[34px]">
            Important: Practice<br />Prototype
          </h1>
        </div>

        {/* Body */}
        <div className="text-center text-[16px] text-[#3d4a3d] leading-6 px-2 mb-8">
          <p>This application is a prototype created for training purposes only. Please note that any bookings made within this app are <strong className="text-[#191c1d]">NOT real</strong> and will not result in an actual Grab ride being scheduled or charged.</p>
        </div>

        {/* Phone image */}
        <div className="w-full max-w-xs mb-2">
          <div className="relative rounded-xl overflow-hidden border border-[rgba(188,203,185,0.3)] shadow-sm">
            <img src={imgPhoneScreenshot} alt="App screenshot" className="w-full h-44 object-cover" />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.05)]" />
            <div className="absolute bottom-3 left-3 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm rounded-full px-3 py-1 border border-[rgba(188,203,185,0.2)] flex items-center gap-2">
              <img src={imgShieldSmall} alt="" style={{ width: 9.3, height: 11.7 }} />
              <span className="text-[12px] font-medium text-[#006e2e]">Training Environment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-8 pt-4 bg-[rgba(248,249,250,0.5)] backdrop-blur-sm flex flex-col gap-4">
        <div className="bg-[#f3f4f5] border border-[rgba(188,203,185,0.2)] rounded-xl p-4 flex gap-3 items-start">
          <img src={imgShieldIcon} alt="" className="shrink-0 mt-0.5" style={{ width: 13.3, height: 16.7 }} />
          <p className="text-[12px] font-medium text-[#636467] leading-4">
            No personal data or payment credentials will be processed or stored during this training session.
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full h-14 rounded-xl flex items-center justify-center gap-2 text-white text-[18px] font-semibold shadow-[0px_10px_15px_-3px_rgba(0,110,46,0.2)]"
          style={{ background: "linear-gradient(135deg, #00b14f 0%, #006e2e 100%)" }}
        >
          I Understand
          <img src={imgArrowRight} alt="" style={{ width: 16, height: 16 }} />
        </button>
      </div>
    </div>
  );
}

// ─── SCREEN: Home ─────────────────────────────────────────────────────────────
function HomeScreen({
  onTransport,
  onGuidance,
  onActivity,
  onPayment,
}: {
  onTransport: () => void;
  onGuidance: () => void;
  onActivity?: () => void;
  onPayment?: () => void;
}) {
  const services = [
    { icon: iconTransport, label: "Transport", action: onTransport },
    { icon: iconFood, label: "Food", action: onGuidance },
    { icon: iconMart, label: "Mart", action: onGuidance },
    { icon: iconExpress, label: "Express", action: onGuidance },
    { icon: iconBills, label: "Bills", action: onGuidance },
    { icon: iconInsurance, label: "Insurance", action: onGuidance },
    { icon: iconGifts, label: "Gifts", action: onGuidance },
    { icon: iconMore, label: "More", action: onGuidance, muted: true },
  ];

  return (
    <div className="flex flex-col size-full bg-[#f8f9fa] relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[10px] bg-[rgba(248,249,250,0.8)] flex items-center justify-between px-5 z-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <img src={imgHamburger} alt="menu" style={{ width: 18, height: 12 }} />
          <span className="text-[28px] font-bold text-[#006e2e] tracking-[-0.7px] leading-[34px]">SG Ride</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#bccbb9] bg-[#e1e3e4] overflow-hidden">
          <img src={imgUserAvatar} alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto pt-14 pb-24">
        <div className="flex flex-col gap-6 px-5 pt-4">
          {/* Search bar */}
          <div className="h-14 bg-[#f3f4f5] border border-[rgba(188,203,185,0.3)] rounded-xl flex items-center px-4 gap-2 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <img src={imgSearchIcon} alt="" style={{ width: 34, height: 18 }} />
            <span className="text-[16px] text-[#3d4a3d]">Offers, food, and more</span>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-4 gap-1">
            {services.map((s) => (
              <button key={s.label} onClick={s.action} className="flex flex-col items-center gap-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: s.muted ? "#e1e3e4" : "rgba(0,177,79,0.1)" }}
                >
                  <img src={s.icon} alt={s.label} className="block" style={{ maxWidth: 29, maxHeight: 27 }} />
                </div>
                <span className="text-[12px] font-medium text-[#191c1d]">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Promos section */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-end justify-between">
              <span className="text-[22px] font-semibold text-[#191c1d] leading-7">Promos for you</span>
              <button className="text-[14px] font-semibold text-[#006e2e] tracking-[0.1px]">See all</button>
            </div>
            <div className="flex gap-3 overflow-x-auto -mx-5 px-5 pb-1">
              {[
                { img: imgPromo1, badge: "LIMITED TIME", title: "50% Off Your First Food Order" },
                { img: imgPromo2, badge: "ECO-FRIENDLY", title: "Ride Green, Save 20% Today" },
              ].map((p) => (
                <div key={p.badge} className="flex-shrink-0 w-80 h-44 rounded-2xl overflow-hidden relative shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <img src={p.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent flex flex-col justify-end p-6">
                    <div className="mb-1">
                      <span className="bg-[#006e2e] text-white text-[10px] font-bold tracking-[0.5px] uppercase px-2 py-1 rounded-full">{p.badge}</span>
                    </div>
                    <p className="text-white text-[18px] font-semibold leading-6">{p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Favorites */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-end justify-between">
              <span className="text-[22px] font-semibold text-[#191c1d] leading-7">Nearby Favorites</span>
              <button className="text-[14px] font-semibold text-[#006e2e] tracking-[0.1px]">View map</button>
            </div>
            <div className="flex flex-col gap-4">
              {/* Coffee Club */}
              <div className="bg-[#f8f9fa] rounded-2xl flex gap-4 p-2">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={imgCoffeeClub} alt="The Coffee Club" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <div className="flex items-start justify-between">
                    <span className="text-[18px] font-semibold text-[#191c1d]">The Coffee Club</span>
                    <div className="flex items-center gap-1">
                      <img src={imgStarRating} alt="" style={{ width: 17.3, height: 12.7 }} />
                      <span className="text-[12px] font-medium text-[#006e2e]">4.8</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#5d5e61]">Coffee, Breakfast • 1.2 km</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e1e3e4] text-[#3d4a3d] text-[10px] font-bold px-2 py-0.5 rounded">PROMO</span>
                    <span className="text-[12px] font-medium text-[#006e2e]">Free delivery</span>
                  </div>
                </div>
              </div>
              {/* Sushi Hiro */}
              <div className="bg-[#f8f9fa] rounded-2xl flex gap-4 p-2">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={imgSushiHiro} alt="Sushi Hiro" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <div className="flex items-start justify-between">
                    <span className="text-[18px] font-semibold text-[#191c1d]">Sushi Hiro</span>
                    <div className="flex items-center gap-1">
                      <img src={imgStarRating} alt="" style={{ width: 17.3, height: 12.7 }} />
                      <span className="text-[12px] font-medium text-[#006e2e]">4.9</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#5d5e61]">Japanese, Sushi • 0.8 km</p>
                  <p className="text-[12px] font-medium text-[#3d4a3d]">25 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map FAB */}
      <button className="absolute right-5 bottom-24 w-14 h-14 bg-[#006e2e] rounded-full flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] z-10">
        <img src={iconMapFab} alt="map" style={{ width: 21, height: 21 }} />
      </button>

      <BottomNav active="home" onActivity={onActivity} onPayment={onPayment} />
    </div>
  );
}

// ─── SCREEN: Select Destination ───────────────────────────────────────────────
const destinations = [
  { name: "SGH Block 4", addr1: "Outram Rd, Singapore", addr2: "169608", dist: "650m", dropOff: "SGH Block 4" },
  { name: "Singapore General\nHospital (SGH)", addr1: "5 Hospital Dr, Singapore", addr2: "169609", dist: "800m", dropOff: "Singapore General Hospital (SGH)" },
  { name: "SGH Block 7", addr1: "Outram Rd, Singapore", addr2: "169608", dist: "950m", dropOff: "SGH Block 7" },
];

function SelectDestinationScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void;
  onSelect: (dest: (typeof destinations)[0]) => void;
}) {
  return (
    <div className="size-full relative overflow-hidden bg-[#f8f9fa]">
      {/* Map background */}
      <div className="absolute inset-0" style={{ top: -49.7, left: -25 }}>
        <div className="relative" style={{ width: 429, height: 972.4, transform: "scale(1.1)", transformOrigin: "top left" }}>
          <div className="w-[390px] h-[884px] relative">
            <div className="absolute inset-0" style={{ backgroundImage: `url("${imgMapBg}")`, backgroundSize: "512px 512px" }} />
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] mix-blend-saturation" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 backdrop-blur-[10px] bg-[rgba(248,249,250,0.8)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] z-10">
        <div className="flex items-center gap-4 h-14 px-5">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full">
            <img src={imgBackArrow} alt="back" style={{ width: 16, height: 16 }} />
          </button>
          <span className="text-[22px] font-semibold text-[#191c1d]">Select Destination</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute top-14 left-0 right-0 bottom-0 pt-5 px-5 flex flex-col gap-4">
        {/* Input card */}
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <img src={imgPickupDot} alt="" style={{ width: 16.7, height: 16.7 }} />
              <div className="w-px h-6 bg-[#bccbb9]" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-medium text-[#5d5e61] tracking-[0.6px] uppercase leading-4">PICKUP</p>
              <p className="text-[16px] text-[#191c1d] leading-6">Current Location</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="shrink-0">
              <img src={imgDestinationPin} alt="" style={{ width: 13.3, height: 16.7 }} />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-medium text-[#5d5e61] tracking-[0.6px] uppercase leading-4">DESTINATION</p>
            </div>
            <img src={imgCloseX} alt="" style={{ width: 14, height: 14 }} />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-1 overflow-auto">
          {destinations.map((d) => (
            <button
              key={d.name}
              onClick={() => onSelect(d)}
              className="backdrop-blur-sm bg-[rgba(255,255,255,0.9)] border-2 border-transparent flex gap-4 items-center p-[18px] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] active:border-[#006e2e] text-left"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(0,110,46,0.1)] flex items-center justify-center shrink-0">
                <img src={imgLocationPin2} alt="" style={{ width: 16, height: 20 }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-bold text-[#191c1d] leading-6 whitespace-pre-line">{d.name}</p>
                <p className="text-[14px] text-[#5d5e61] leading-5">{d.addr1}</p>
                <p className="text-[14px] text-[#5d5e61] leading-5">{d.addr2}</p>
              </div>
              <span className="text-[14px] font-semibold text-[#006e2e] tracking-[0.1px] shrink-0">{d.dist}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Location button */}
      <button className="absolute right-5 bg-[#f8f9fa] w-12 h-12 rounded-full flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]" style={{ bottom: 200 }}>
        <img src={imgLocationTarget} alt="" style={{ width: 21.9, height: 21.9 }} />
      </button>
    </div>
  );
}

// ─── SCREEN: Transport Booking ────────────────────────────────────────────────
function TransportBookingScreen({
  booking,
  onBack,
  onBook,
  onGuidance,
}: {
  booking: BookingState;
  onBack: () => void;
  onBook: () => void;
  onGuidance: () => void;
}) {
  const [selectedCar, setSelectedCar] = useState<"justgrab" | "grabcar" | "grabtaxi">("justgrab");
  const isDbs = booking.payment === "dbs";

  const cars = [
    {
      id: "justgrab" as const,
      name: "JustGrab",
      sub: "3 mins away • Near you",
      price: "S$12.50",
      strike: "S$15.80",
      img: imgCarJustGrab,
    },
    {
      id: "grabcar" as const,
      name: "GrabCar",
      sub: "5 mins away",
      price: "S$18.00",
      strike: null,
      img: imgCarGrabCar,
    },
    {
      id: "grabtaxi" as const,
      name: "GrabTaxi",
      sub: "Standard metered fare",
      price: "Metered",
      strike: null,
      img: imgCarGrabTaxi,
    },
  ];

  return (
    <div className="size-full relative bg-[#f8f9fa] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[6px] bg-[rgba(248,249,250,0.8)] flex items-center justify-between px-5 z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full">
          <img src={imgBackArrow} alt="back" style={{ width: 16, height: 16 }} />
        </button>
        <span className="text-[18px] font-semibold text-[#191c1d]">Transport</span>
        <button onClick={onGuidance} className="w-10 h-10 flex items-center justify-center rounded-full">
          <img src={imgInfoCircle} alt="info" style={{ width: 20, height: 20 }} />
        </button>
      </div>

      {/* Bottom sheet */}
      <div className="absolute left-0 right-0 top-14 bottom-0 bg-white rounded-t-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden">
        {/* Drag handle */}
        <div className="flex justify-center py-2 shrink-0">
          <div className="w-10 h-1 bg-[#bccbb9] rounded-full" />
        </div>

        {/* Route labels */}
        <div className="px-5 pb-3 flex flex-col gap-2 shrink-0">
          <div className="bg-white border border-[rgba(188,203,185,0.3)] rounded-xl flex gap-4 items-center p-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <img src={imgGreenCircle} alt="" style={{ width: 16.4, height: 16.4 }} />
            <span className="text-[14px] text-[#191c1d]">Current Location</span>
          </div>
          <div className="bg-white border border-[rgba(188,203,185,0.3)] rounded-xl flex gap-4 items-center p-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <img src={imgRedPin} alt="" style={{ width: 12, height: 15 }} />
            <div>
              <p className="text-[14px] text-[#191c1d] leading-5">{booking.destination}</p>
              <p className="text-[12px] font-medium text-[#5d5e61] leading-4">{booking.destinationSub}</p>
            </div>
          </div>
        </div>

        {/* Vehicle list */}
        <div className="flex-1 overflow-auto px-5 py-1 flex flex-col gap-2">
          <p className="text-[18px] font-semibold text-[#191c1d] leading-6 mb-1">Recommended</p>
          {cars.map((car) => {
            const isSelected = selectedCar === car.id;
            return (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car.id)}
                className="flex items-center justify-between rounded-xl p-[18px] border-2 transition-all"
                style={{
                  background: isSelected ? "rgba(0,110,46,0.04)" : "#f3f4f5",
                  borderColor: isSelected ? "#006e2e" : "transparent",
                  paddingTop: isSelected ? 26 : 18,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#edeeef] rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={car.img} alt={car.name} className="w-12 object-contain" style={{ height: 26 }} />
                  </div>
                  <div>
                    <p className="text-[18px] font-semibold text-[#191c1d] leading-6">{car.name}</p>
                    <p className="text-[12px] font-medium text-[#5d5e61] leading-4">{car.sub}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[18px] font-semibold text-[#191c1d] leading-6">{car.price}</p>
                  {car.strike && (
                    <p className="text-[12px] font-medium text-[#5d5e61] leading-4 line-through">{car.strike}</p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 pt-5 pb-8 border-t border-[rgba(188,203,185,0.3)] flex flex-col gap-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#00b14f] rounded flex items-center justify-center">
                <img src={imgPaymentCard} alt="" style={{ width: 16.7, height: 13.3 }} />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#191c1d] tracking-[0.1px]">{isDbs ? "DBS Visa Card" : "PayNow"}</p>
                <p className="text-[12px] font-medium text-[#5d5e61]">{isDbs ? "**** 1234" : "Linked and active"}</p>
              </div>
            </div>
            <button className="text-[14px] font-semibold text-[#006e2e] tracking-[0.1px]">Change</button>
          </div>
          <button
            onClick={onBook}
            className="w-full h-14 bg-[#006e2e] rounded-xl text-white text-[18px] font-semibold shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
          >
            Book {selectedCar === "justgrab" ? "JustGrab" : selectedCar === "grabcar" ? "GrabCar" : "GrabTaxi"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN: Booking Confirmed ────────────────────────────────────────────────
function BookingConfirmedScreen({
  booking,
  onHome,
  onActivity,
  onPayment,
}: {
  booking: BookingState;
  onHome: () => void;
  onActivity?: () => void;
  onPayment?: () => void;
}) {
  const isDbs = booking.payment === "dbs";
  return (
    <div className="size-full relative overflow-hidden bg-[#f8f9fa]">
      {/* Map background */}
      <div className="absolute inset-x-0 top-0" style={{ height: 580 }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={imgMapConfirmed} alt="" className="absolute" style={{ width: "149.49%", height: "110%", left: "-24.74%", top: "-5%" }} />
        </div>
        {/* Map pin */}
        <div className="absolute w-8 h-8 bg-[#006e2e] border-2 border-white rounded-full flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]" style={{ left: 196, top: 182 }}>
          <img src={imgCarIcon} alt="" style={{ width: 13.5, height: 12 }} />
        </div>
        <div className="absolute w-5 h-5 bg-[#00b14f] border-2 border-white rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" style={{ left: 137, top: 277 }} />
      </div>

      {/* Scrollable content */}
      <div className="absolute inset-0 overflow-auto flex flex-col">
        <div className="flex flex-col items-center gap-6 pt-10 pb-8 px-5">
          {/* Confirmation banner */}
          <div className="w-full max-w-sm backdrop-blur-[10px] bg-[rgba(248,249,250,0.8)] border border-[rgba(255,255,255,0.2)] rounded-xl p-4 flex flex-col items-center shadow-sm">
            <div className="mb-2">
              <div className="w-14 h-14 bg-[#00b14f] rounded-full flex items-center justify-center">
                <img src={imgCheckmark} alt="" style={{ width: 26.7, height: 26.7 }} />
              </div>
            </div>
            <h1 className="text-[28px] font-bold text-[#006e2e] tracking-[-0.28px] leading-[34px] text-center">Booking Confirmed</h1>
            <p className="text-[16px] text-[#3d4a3d] text-center leading-6">Your driver is on the way!</p>
          </div>

          {/* Details sheet */}
          <div className="w-full bg-[#f8f9fa] rounded-t-[32px] shadow-[0px_-8px_15px_rgba(0,0,0,0.08)] flex flex-col gap-6 pt-4 pb-8 px-5 mt-auto">
            {/* Drag handle */}
            <div className="flex justify-center">
              <div className="w-10 h-1 bg-[rgba(188,203,185,0.3)] rounded-full" />
            </div>

            {/* Driver */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-2 border-[#00b14f] overflow-hidden">
                    <img src={imgDriverPhoto} alt="Driver" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#e1e3e4] rounded-full flex items-center px-1 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                    <img src={imgStarSmall} alt="" style={{ width: 10, height: 9.5 }} />
                    <span className="text-[10px] font-bold text-[#191c1d] pl-0.5">4.9</span>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-[#191c1d] leading-6">Tan Ah Teck</p>
                  <p className="text-[12px] font-medium text-[#3d4a3d] leading-4">Toyota Camry • SJP 8888 Z</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 bg-[#e7e8e9] border border-[rgba(188,203,185,0.2)] rounded-full flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                  <img src={imgChatBtn} alt="chat" style={{ width: 20, height: 20 }} />
                </button>
                <button className="w-12 h-12 bg-[#e7e8e9] border border-[rgba(188,203,185,0.2)] rounded-full flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                  <img src={imgCallBtn} alt="call" style={{ width: 18, height: 18 }} />
                </button>
              </div>
            </div>

            <div className="border-t border-[rgba(188,203,185,0.3)]" />

            {/* Trip route */}
            <div className="flex gap-4 items-start">
              <div className="flex flex-col items-center pt-1.5">
                <img src={imgPickupCircle} alt="" style={{ width: 16.7, height: 16.7 }} />
                <div className="w-0.5 h-8 bg-[rgba(188,203,185,0.5)] my-1" />
                <img src={imgDestinationPin} alt="" style={{ width: 13.3, height: 16.7 }} />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <p className="text-[10px] font-bold text-[rgba(61,74,61,0.6)] tracking-[0.5px] uppercase leading-[15px]">PICKUP</p>
                  <p className="text-[18px] font-semibold text-[#191c1d] leading-6">Current Location</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[rgba(61,74,61,0.6)] tracking-[0.5px] uppercase leading-[15px]">DROP-OFF</p>
                  <p className="text-[18px] font-semibold text-[#191c1d] leading-6">{booking.dropOff}</p>
                </div>
              </div>
            </div>

            {/* Payment card */}
            <div className="bg-[#f3f4f5] border border-[rgba(188,203,185,0.2)] rounded-xl flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[rgba(0,110,46,0.1)] rounded-lg flex items-center justify-center">
                  {isDbs ? (
                    <img src={imgPaymentCard} alt="" style={{ width: 20, height: 16 }} />
                  ) : (
                    <div className="flex flex-col items-center leading-[10px]">
                      <span className="text-[10px] font-bold text-[#006e2e] tracking-[-0.5px]">PAY</span>
                      <span className="text-[10px] font-bold text-[#006e2e] tracking-[-0.5px]">NOW</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#191c1d] tracking-[0.1px]">{isDbs ? "Paid via DBS Visa Card" : "Paid via PayNow"}</p>
                  <p className="text-[12px] font-medium text-[#3d4a3d]">Transaction successful</p>
                </div>
              </div>
              <span className="text-[22px] font-semibold text-[#191c1d]">S$12.50</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={onHome}
                className="w-full h-14 bg-[#006e2e] rounded-xl text-white text-[18px] font-semibold shadow-[0px_10px_15px_-3px_rgba(0,110,46,0.2)]"
              >
                Back to Home
              </button>
              <button className="w-full h-14 bg-white border-2 border-[#6d7b6c] rounded-xl flex items-center justify-center gap-2 text-[#191c1d] text-[18px] font-semibold">
                <img src={imgShareIcon} alt="" style={{ width: 18, height: 20 }} />
                Share Trip Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav active="activity" onHome={onHome} onActivity={onActivity} onPayment={onPayment} />
    </div>
  );
}

// ─── SCREEN: Guidance (Off-task) ──────────────────────────────────────────────
function GuidanceScreen({ onReturn }: { onReturn: () => void }) {
  return (
    <div className="size-full bg-[#f8f9fa] flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-[#f8f9fa] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center px-3 gap-4 z-10">
        <button onClick={onReturn} className="w-8 h-8 flex items-center justify-center rounded-full">
          <img src={imgCloseGuidance} alt="close" style={{ width: 16, height: 16 }} />
        </button>
        <span className="text-[28px] font-bold text-[#006e2e] tracking-[-0.28px] leading-[34px]">SG Ride</span>
      </div>

      {/* Main card */}
      <div className="flex-1 flex items-center justify-center px-5 pt-14">
        <div className="bg-white border border-[#e7e8e9] rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-8 w-full max-w-md relative overflow-hidden">
          {/* Accent blob */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00b14f] opacity-10 blur-[20px] rounded-full" />

          <div className="flex flex-col items-center gap-4">
            {/* Icon */}
            <div className="mb-2">
              <div className="w-24 h-24 bg-[rgba(0,177,79,0.1)] border border-[rgba(0,110,46,0.2)] rounded-full flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img src={imgInfoIconGuidance} alt="" style={{ width: 40, height: 40 }} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[40px] font-bold text-[#191c1d] tracking-[-0.8px] leading-[48px] text-center">
              {`Whoops! Let's`}<br />get back on<br />track.
            </h1>

            {/* Body */}
            <p className="text-[16px] text-[#3d4a3d] text-center leading-[26px]">
              This button isn&apos;t part of your current task. Please go back to continue your practice session.
            </p>

            {/* Button */}
            <button
              onClick={onReturn}
              className="w-full mt-4 h-14 bg-[#006e2e] rounded-2xl flex items-center justify-center gap-2 text-white text-[18px] font-semibold shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            >
              Return to Task
              <img src={imgCheckCircle} alt="" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN: Activity History ─────────────────────────────────────────────────
function ActivityHistoryScreen({
  onHome,
  onActivity,
  onPayment,
  onTripCard,
  onBookNow,
}: {
  onHome: () => void;
  onActivity: () => void;
  onPayment: () => void;
  onTripCard: (dest: string) => void;
  onBookNow: () => void;
}) {
  const trips = [
    { dest: "Singapore General Hospital", date: "15 May, 10:42 AM", amount: "S$12.50", status: "COMPLETED", dropOff: "Singapore General Hospital" },
    { dest: "SGH Block 4", date: "15 May, 10:42 AM", amount: "S$12.50", status: "COMPLETED", dropOff: "SGH Block 4" },
    { dest: "Singapore General Hospital", date: "10 May, 08:45 AM", amount: "S$18.20", status: "CANCELLED", dropOff: "Singapore General Hospital", muted: true },
    { dest: "Singapore General Hospital", date: "08 May, 11:30 PM", amount: "S$24.80", status: "COMPLETED", dropOff: "Singapore General Hospital" },
  ];

  return (
    <div className="size-full bg-[#f8f9fa] relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[6px] bg-[rgba(248,249,250,0.8)] flex items-center justify-between px-5 z-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <img src={imgHamburger} alt="menu" style={{ width: 18, height: 12 }} />
          <span className="text-[28px] font-bold text-[#006e2e] tracking-[-0.7px] leading-[34px]">SG Ride</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#bccbb9] bg-[#e1e3e4] overflow-hidden">
          <img src={imgUserAvatar} alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto pt-14 pb-24">
        {/* Title + tabs */}
        <div className="px-5 pt-6 pb-2 flex flex-col gap-6">
          <h1 className="text-[22px] font-semibold text-[#191c1d]">Activity History</h1>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button className="flex items-center gap-1 bg-[#006e2e] text-white text-[14px] font-semibold px-6 py-2 rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] shrink-0">
              <img src={imgActivityIconTab} alt="" style={{ width: 15, height: 13.3 }} />
              Transport
            </button>
            <button className="flex items-center gap-1 bg-[#e7e8e9] text-[#3d4a3d] text-[14px] font-semibold px-6 py-2 rounded-full shrink-0">
              <img src={imgFoodIconTab} alt="" style={{ width: 12.5, height: 16.7 }} />
              Food
            </button>
            <button className="flex items-center gap-1 bg-[#e7e8e9] text-[#3d4a3d] text-[14px] font-semibold px-6 py-2 rounded-full shrink-0">
              <img src={imgMartIconTab} alt="" style={{ width: 13.3, height: 16.7 }} />
              Mart
            </button>
          </div>
        </div>

        {/* Trip cards */}
        <div className="flex flex-col gap-4 px-5">
          {trips.map((trip, i) => {
            const isCompleted = trip.status === "COMPLETED";
            return (
              <button
                key={i}
                onClick={() => onTripCard(trip.dropOff)}
                className={`bg-white rounded-xl p-[25px] flex flex-col gap-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] text-left w-full ${trip.muted ? "opacity-80" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(0,177,79,0.1)] flex items-center justify-center shrink-0">
                      <img src={imgTransportIconGreen} alt="" style={{ width: 24, height: 24 }} />
                    </div>
                    <div>
                      <p className="text-[18px] font-semibold text-[#191c1d] leading-6">JustGrab</p>
                      <p className="text-[14px] text-[#5d5e61] leading-5">{trip.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-[18px] font-semibold text-[#191c1d] leading-6">{trip.amount}</p>
                    <span
                      className="text-[12px] font-medium px-2 py-1 rounded-lg"
                      style={{
                        background: isCompleted ? "#00b14f" : "#ffdad6",
                        color: isCompleted ? "#003a15" : "#93000a",
                      }}
                    >
                      {trip.status}
                    </span>
                  </div>
                </div>
                <div className="border-t border-[rgba(188,203,185,0.3)] pt-4 flex items-center gap-4">
                  <img src={imgLocationPinGreen} alt="" style={{ width: 13.3, height: 16.7 }} />
                  <p className="flex-1 text-[16px] text-[#191c1d] leading-6">{trip.dest}</p>
                  <img src={imgChevronRight} alt="" style={{ width: 7.4, height: 12 }} />
                </div>
              </button>
            );
          })}

          {/* Planning a trip promo */}
          <div className="bg-[#00b14f] rounded-xl overflow-hidden h-32 flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center px-4">
              <p className="text-[18px] font-semibold text-[#003a15]">Planning a trip?</p>
              <p className="text-[14px] text-[rgba(0,58,21,0.8)] pb-2">Schedule a ride up to 7 days in advance</p>
              <button onClick={onBookNow} className="bg-[#003a15] text-white text-[14px] font-semibold px-6 py-1 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map FAB */}
      <button className="absolute right-5 bottom-24 w-14 h-14 bg-[#003a15] rounded-2xl flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] z-10">
        <img src={imgFabMap2} alt="map" style={{ width: 23.3, height: 21 }} />
      </button>

      <BottomNav active="activity" onHome={onHome} onActivity={onActivity} onPayment={onPayment} />
    </div>
  );
}

// ─── SCREEN: Payment ──────────────────────────────────────────────────────────
function PaymentScreen({
  booking,
  onHome,
  onActivity,
  onPayment,
  onChangeMethod,
}: {
  booking: BookingState;
  onHome: () => void;
  onActivity: () => void;
  onPayment: () => void;
  onChangeMethod: () => void;
}) {
  const isPayNow = booking.payment === "paynow";

  return (
    <div className="size-full bg-[#f8f9fa] relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[6px] bg-[rgba(248,249,250,0.8)] flex items-center justify-between px-5 z-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <img src={imgHamburgerPayment} alt="menu" style={{ width: 18, height: 12 }} />
          <span className="text-[22px] font-semibold text-[#191c1d]">Payment</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#bccbb9] bg-[#e7e8e9] overflow-hidden">
          <img src={imgUserAvatarPayment} alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto pt-14 pb-24">
        <div className="flex flex-col gap-6 px-5 pt-6">
          {/* Wallet balance card */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-[#5d5e61] tracking-[0.7px] uppercase">CURRENT BALANCE</p>
            <div className="bg-[#00b14f] rounded-xl p-6 relative overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <div className="absolute top-[-32px] right-[-32px] w-32 h-32 bg-[rgba(0,58,21,0.1)] blur-[32px] rounded-full" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px] text-[#003a15] opacity-90">GrabPay Wallet</p>
                  <p className="text-[40px] font-bold text-[#003a15] tracking-[-0.8px] leading-[48px]">S$142.50</p>
                </div>
                <button className="bg-[rgba(255,255,255,0.2)] px-4 py-2 rounded-full text-[#003a15] text-[16px]">
                  Top Up
                </button>
              </div>
            </div>
          </div>

          {/* Linked methods — dynamic based on booking.payment */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-[#5d5e61] tracking-[0.7px] uppercase">LINKED METHODS</p>
            <div className="flex flex-col gap-2">
              {/* Primary selected method */}
              <div className="bg-white border-2 border-[#006e2e] rounded-xl p-[18px] flex items-center justify-between shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-[#edeeef] border border-[#bccbb9] rounded-lg overflow-hidden flex items-center justify-center p-1">
                    {isPayNow ? (
                      <img src={imgPayNowLogo} alt="PayNow" className="w-full h-full object-contain" />
                    ) : (
                      <img src={imgDbsCard} alt="DBS" className="w-full h-full object-contain" />
                    )}
                  </div>
                  <div>
                    <p className="text-[16px] text-[#191c1d]">{isPayNow ? "PayNow" : "DBS Visa Card"}</p>
                    <p className="text-[14px] text-[#5d5e61]">{isPayNow ? "Linked and active" : "•••• 4291"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={onChangeMethod} className="text-[#006e2e] text-[16px] px-2 py-1">Change</button>
                  <img src={imgCheckSelected} alt="" style={{ width: 20, height: 20 }} />
                </div>
              </div>
              {/* Secondary linked method (only shown in paynow variant) */}
              {isPayNow && (
                <div className="bg-white border border-[rgba(188,203,185,0.3)] rounded-xl p-[18px] flex items-center justify-between shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-[#edeeef] border border-[#bccbb9] rounded-lg overflow-hidden flex items-center justify-center p-1">
                      <img src={imgDbsCard} alt="DBS" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#191c1d]">DBS Visa Card</p>
                      <p className="text-[14px] text-[#5d5e61]">•••• 4291</p>
                    </div>
                  </div>
                  <button onClick={onChangeMethod} className="text-[#006e2e] text-[16px] px-2 py-1">Change</button>
                </div>
              )}
            </div>
          </div>

          {/* Add payment method */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-[#5d5e61] tracking-[0.7px] uppercase">ADD PAYMENT METHOD</p>
            <div className="bg-white border border-[rgba(188,203,185,0.3)] rounded-xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              {/* PayNow — only shown in DBS variant as "linked and active" */}
              {!isPayNow && (
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-[#edeeef] rounded-lg overflow-hidden flex items-center justify-center p-1">
                      <img src={imgPayNowLogo} alt="PayNow" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-[#191c1d]">PayNow</p>
                      <p className="text-[12px] font-medium text-[#006e2e]">Linked and active</p>
                    </div>
                  </div>
                  <img src={imgChevronRightPayment} alt="" style={{ width: 7.4, height: 12 }} />
                </div>
              )}
              <div className={`${!isPayNow ? "border-t border-[rgba(188,203,185,0.3)]" : ""} flex items-center justify-between p-4`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-[#edeeef] border border-[#bccbb9] rounded-lg flex items-center justify-center">
                    <img src={imgCardIcon} alt="" style={{ width: 20, height: 16 }} />
                  </div>
                  <p className="text-[16px] text-[#191c1d]">Credit / Debit Card</p>
                </div>
                <img src={imgChevronRightPayment} alt="" style={{ width: 7.4, height: 12 }} />
              </div>
              <div className="border-t border-[rgba(188,203,185,0.3)] flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-[#edeeef] border border-[#bccbb9] rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img src={imgPayPalLogo} alt="PayPal" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[16px] text-[#191c1d]">PayPal</p>
                </div>
                <img src={imgChevronRightPayment} alt="" style={{ width: 7.4, height: 12 }} />
              </div>
            </div>
          </div>

          {/* Promo banner */}
          <div className="bg-[#edeeef] border border-[rgba(188,203,185,0.2)] rounded-xl p-4 flex gap-6 items-center">
            <div className="w-16 h-16 bg-[rgba(0,110,46,0.1)] rounded-lg flex items-center justify-center shrink-0">
              <img src={imgStarPoints} alt="" style={{ width: 25, height: 23.75 }} />
            </div>
            <div>
              <p className="text-[16px] text-[#191c1d]">Earn 2x Points</p>
              <p className="text-[16px] text-[#5d5e61]">When you top up using</p>
              <p className="text-[16px] text-[#5d5e61]">Mastercard.</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="payment" onHome={onHome} onActivity={onActivity} onPayment={onPayment} />
    </div>
  );
}

// ─── SCREEN: Payment Method ───────────────────────────────────────────────────
function PaymentMethodScreen({
  currentMethod,
  onBack,
  onSelectMethod,
}: {
  currentMethod: "dbs" | "paynow";
  onBack: () => void;
  onSelectMethod: (method: "dbs" | "paynow") => void;
}) {
  const [selected, setSelected] = useState<"dbs" | "paynow">(currentMethod);

  const handleSelect = (method: "dbs" | "paynow") => {
    setSelected(method);
    onSelectMethod(method);
    onBack();
  };

  return (
    <div className="size-full bg-[#f8f9fa] relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[6px] bg-[rgba(248,249,250,0.8)] flex items-center gap-4 px-5 z-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full">
          <img src={imgBackChevron} alt="back" style={{ width: 16, height: 16 }} />
        </button>
        <span className="text-[22px] font-semibold text-[#191c1d]">Payment Method</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto pt-14 pb-24">
        <div className="flex flex-col gap-6 px-5 pt-6">
          {/* Wallet balance */}
          <div className="bg-[#00b14f] rounded-xl px-6 pt-6 pb-10 relative overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[16px] text-[#003a15] opacity-90">GrabPay Wallet</p>
                <p className="text-[40px] font-bold text-[#003a15] tracking-[-0.8px] leading-[48px]">S$142.50</p>
              </div>
              <button className="bg-[rgba(255,255,255,0.2)] px-4 py-2 rounded-full text-[#003a15] text-[16px]">Top Up</button>
            </div>
          </div>

          {/* Linked Methods header */}
          <div className="flex items-center justify-between">
            <p className="text-[18px] font-bold text-[#191c1d]">LINKED METHODS</p>
            <button className="text-[12px] font-medium text-[#006e2e]">Edit</button>
          </div>

          {/* DBS Option */}
          <button
            onClick={() => handleSelect("dbs")}
            className="bg-white border-2 rounded-2xl p-[18px] flex items-center justify-between shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all"
            style={{ borderColor: selected === "dbs" ? "#006e2e" : "transparent" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-[#edeeef] rounded-lg overflow-hidden flex items-center justify-center p-1">
                <img src={imgDbsCard} alt="DBS" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#191c1d]">DBS Visa Card</p>
                <p className="text-[12px] font-medium text-[#3d4a3d]">•••• 4291</p>
              </div>
            </div>
            {selected === "dbs" && (
              <div className="w-6 h-6 bg-[#006e2e] rounded-full flex items-center justify-center">
                <img src={imgCheckWhite} alt="" style={{ width: 12.2, height: 9 }} />
              </div>
            )}
          </button>

          {/* PayNow — shown in linked methods when already active, else in add section */}
          <button
            onClick={() => handleSelect("paynow")}
            className="bg-white border-2 rounded-2xl p-[18px] flex items-center justify-between shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all"
            style={{ borderColor: selected === "paynow" ? "#006e2e" : "transparent" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-[#edeeef] rounded-lg overflow-hidden flex items-center justify-center p-1">
                <img src={imgPayNowLogo} alt="PayNow" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-[#191c1d]">PayNow</p>
                <p className="text-[12px] font-medium text-[#006e2e]">Linked and active</p>
              </div>
            </div>
            {selected === "paynow" && (
              <div className="w-6 h-6 bg-[#006e2e] rounded-full flex items-center justify-center">
                <img src={imgCheckWhite} alt="" style={{ width: 12.2, height: 9 }} />
              </div>
            )}
          </button>

          {/* Add methods header */}
          <p className="text-[18px] font-bold text-[#191c1d]">ADD PAYMENT METHOD</p>

          <div className="flex flex-col gap-4">
            {/* Credit/Debit */}
            <button className="bg-white border border-[rgba(188,203,185,0.2)] rounded-2xl p-[17px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-[#edeeef] rounded-lg flex items-center justify-center">
                  <img src={imgCardIcon} alt="" style={{ width: 20, height: 16 }} />
                </div>
                <p className="text-[16px] font-semibold text-[#191c1d]">Credit / Debit Card</p>
              </div>
              <img src={imgChevronRightPayment} alt="" style={{ width: 7.4, height: 12 }} />
            </button>

            {/* Bank account */}
            <button className="bg-white border border-[rgba(188,203,185,0.2)] rounded-2xl p-[17px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-[#edeeef] rounded-lg flex items-center justify-center">
                  <img src={imgBankIcon} alt="" style={{ width: 20, height: 20 }} />
                </div>
                <p className="text-[16px] font-semibold text-[#191c1d]">Bank Account</p>
              </div>
              <img src={imgChevronRightPayment} alt="" style={{ width: 7.4, height: 12 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN: Ride Details ─────────────────────────────────────────────────────
function RideDetailsScreen({
  dropOff,
  onBack,
}: {
  dropOff: string;
  onBack: () => void;
}) {
  const isSghBlock4 = dropOff.includes("Block 4");
  const payLabel = isSghBlock4 ? "Paid via Visa Card" : "Paid via DBS Visa Card";

  return (
    <div className="size-full bg-[#f8f9fa] relative overflow-hidden flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-14 backdrop-blur-[10px] bg-[rgba(248,249,250,0.8)] flex items-center gap-4 px-5 z-10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full -ml-2">
          <img src={imgCloseGuidance} alt="back" style={{ width: 16, height: 16 }} />
        </button>
        <span className="text-[22px] font-semibold text-[#006e2e]">Ride Details</span>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto pt-14">
        {/* Map */}
        <div className="h-[300px] relative overflow-hidden -mb-8">
          <img
            src={imgMapRideDetails}
            alt=""
            className="absolute w-full object-cover"
            style={{ height: "130%", top: "-15%" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(248,249,250,0.8) 0%, rgba(248,249,250,0) 20%, rgba(248,249,250,0) 80%, rgb(248,249,250) 100%)" }}
          />
          {/* Trip Completed pill */}
          <div className="absolute top-4 right-4 backdrop-blur-[6px] bg-[rgba(248,249,250,0.9)] flex items-center gap-2 px-3 py-1.5 rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="w-2 h-2 bg-[#006e2e] rounded-full" />
            <span className="text-[12px] font-medium text-[#191c1d]">Trip Completed</span>
          </div>
        </div>

        {/* Content cards */}
        <div className="flex flex-col gap-4 px-5 pb-8">
          {/* Driver card */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#00b14f] overflow-hidden bg-[#edeeef] p-0.5">
                  <img src={imgDriverPhotoRide} alt="Driver" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-[#191c1d]">Michael Tan</p>
                  <div className="flex items-center gap-1">
                    <img src={imgStarIconRide} alt="" style={{ width: 11.7, height: 11.1 }} />
                    <span className="text-[12px] font-medium text-[#5d5e61]">4.9 stars</span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 bg-[#e7e8e9] rounded-full flex items-center justify-center">
                <img src={imgChatIconRide} alt="chat" style={{ width: 20, height: 20 }} />
              </button>
            </div>
            <div className="border-t border-[rgba(188,203,185,0.3)] pt-4 flex items-center justify-between">
              <div>
                <p className="text-[12px] font-medium text-[#5d5e61] tracking-[0.6px] uppercase">VEHICLE</p>
                <p className="text-[16px] font-semibold text-[#191c1d]">Toyota Camry</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-medium text-[#5d5e61] tracking-[0.6px] uppercase">PLATE NO.</p>
                <p className="text-[16px] font-semibold text-[#191c1d]">SGA 1234 G</p>
              </div>
            </div>
          </div>

          {/* Route card */}
          <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-6 relative">
              <div className="absolute bg-[#bccbb9] w-0.5" style={{ left: 11, top: 24, bottom: 24 }} />
              {/* Pickup */}
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-[#006e2e] rounded-full flex items-center justify-center shrink-0">
                  <img src={imgLocationDotRide} alt="" style={{ width: 11.7, height: 11.7 }} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#5d5e61] leading-4">Pickup • 10:15 AM</p>
                  <p className="text-[16px] font-medium text-[#191c1d] leading-6">Current Location</p>
                </div>
              </div>
              {/* Drop-off */}
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-[#2e3132] rounded-full flex items-center justify-center shrink-0">
                  <img src={imgDestPinRide} alt="" style={{ width: 9.3, height: 11.7 }} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#5d5e61] leading-4">Drop-off • 10:42 AM • Outram Rd, Singapore 169608</p>
                  <p className="text-[16px] font-medium text-[#191c1d] leading-6">{dropOff}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment summary */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <p className="text-[18px] font-semibold text-[#191c1d] mb-2">Payment Summary</p>
            <div className="flex justify-between">
              <span className="text-[14px] text-[#3d4a3d]">Ride Fare</span>
              <span className="text-[14px] text-[#3d4a3d]">S$10.80</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] text-[#3d4a3d]">Tolls &amp; Parking</span>
              <span className="text-[14px] text-[#3d4a3d]">S$1.70</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] text-[#3d4a3d]">Promo</span>
              <span className="text-[14px] text-[#006e2e]">-S$0.00</span>
            </div>
            <div className="border-t border-dashed border-[#bccbb9] pt-4 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={imgPaymentCardRide} alt="" style={{ width: 20, height: 16 }} />
                  <span className="text-[22px] font-semibold text-[#191c1d]">Total Paid</span>
                </div>
                <span className="text-[28px] font-bold text-[#191c1d] tracking-[-0.28px]">S$12.50</span>
              </div>
              <p className="text-[12px] font-medium text-[#5d5e61] text-right mt-1">{payLabel}</p>
            </div>
          </div>

          {/* View Receipt / Get Help */}
          <div className="flex gap-4">
            <button className="flex-1 bg-[#edeeef] rounded-xl py-4 flex flex-col items-center gap-2">
              <img src={imgReceiptIcon} alt="" style={{ width: 18, height: 20 }} />
              <span className="text-[14px] font-semibold text-[#3d4a3d] tracking-[0.1px]">View Receipt</span>
            </button>
            <button className="flex-1 bg-[#edeeef] rounded-xl py-4 flex flex-col items-center gap-2">
              <img src={imgHelpIcon} alt="" style={{ width: 20, height: 20 }} />
              <span className="text-[14px] font-semibold text-[#3d4a3d] tracking-[0.1px]">Get Help</span>
            </button>
          </div>

          {/* Back to Activity */}
          <button
            onClick={onBack}
            className="w-full h-14 bg-[#006e2e] rounded-xl text-white text-[18px] font-semibold shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          >
            Back to Activity
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("disclaimer");
  const [prevScreen, setPrevScreen] = useState<Screen>("home");
  const [rideDetailsDestination, setRideDetailsDestination] = useState("Singapore General Hospital");
  const [booking, setBooking] = useState<BookingState>({
    destination: "Singapore General Hospital (SGH)",
    destinationSub: "Outram Rd, Singapore 169608",
    payment: "dbs",
    dropOff: "Singapore General Hospital (SGH)",
  });
  const [rideDropOff, setRideDropOff] = useState<string>("Singapore General Hospital");

  const navigate = (to: Screen) => {
    setPrevScreen(screen);
    setScreen(to);
  };

  const handleSelectDestination = (dest: (typeof destinations)[0]) => {
    const isDbs = dest.dropOff.includes("Block 4") ? false : true;
    setBooking({
      destination: dest.name.replace("\n", " "),
      destinationSub: `${dest.addr1} ${dest.addr2}`,
      payment: isDbs ? "dbs" : "paynow",
      dropOff: dest.dropOff,
    });
    navigate("transportBooking");
  };

  const handleTripCard = (dropOff: string) => {
    setRideDropOff(dropOff);
    navigate("rideDetails");
  };

  switch (screen) {
    case "disclaimer":
      return <DisclaimerScreen onContinue={() => navigate("home")} />;

    case "home":
      return (
        <HomeScreen
          onTransport={() => navigate("selectDestination")}
          onGuidance={() => navigate("guidance")}
          onActivity={() => navigate("activityHistory")}
          onPayment={() => navigate("payment")}
        />
      );

    case "selectDestination":
      return (
        <SelectDestinationScreen
          onBack={() => navigate("home")}
          onSelect={handleSelectDestination}
        />
      );

    case "transportBooking":
      return (
        <TransportBookingScreen
          booking={booking}
          onBack={() => navigate("selectDestination")}
          onBook={() => navigate("bookingConfirmed")}
          onGuidance={() => navigate("guidance")}
        />
      );

    case "bookingConfirmed":
      return (
        <BookingConfirmedScreen
          booking={booking}
          onHome={() => navigate("home")}
          onActivity={() => navigate("activityHistory")}
          onPayment={() => navigate("payment")}
        />
      );

    case "guidance":
      return <GuidanceScreen onReturn={() => setScreen(prevScreen)} />;

    case "activityHistory":
      return (
        <ActivityHistoryScreen
          onHome={() => navigate("home")}
          onActivity={() => navigate("activityHistory")}
          onPayment={() => navigate("payment")}
          onTripCard={handleTripCard}
          onBookNow={() => navigate("selectDestination")}
        />
      );

    case "payment":
      return (
        <PaymentScreen
          booking={booking}
          onHome={() => navigate("home")}
          onActivity={() => navigate("activityHistory")}
          onPayment={() => navigate("payment")}
          onChangeMethod={() => navigate("paymentMethod")}
        />
      );

    case "paymentMethod":
      return (
        <PaymentMethodScreen
          currentMethod={booking.payment}
          onBack={() => navigate("payment")}
          onSelectMethod={(method) => setBooking((b) => ({ ...b, payment: method }))}
        />
      );

    case "rideDetails":
      return (
        <RideDetailsScreen
          dropOff={rideDropOff}
          onBack={() => navigate("activityHistory")}
        />
      );

    default:
      return <DisclaimerScreen onContinue={() => navigate("home")} />;
  }
}
