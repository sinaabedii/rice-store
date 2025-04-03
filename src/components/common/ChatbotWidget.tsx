"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend, FiChevronDown } from "react-icons/fi";

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "سلام! من دستیار فروشگاه برنج شمال هستم. چطور می‌توانم به شما کمک کنم؟",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQuestions = [
    "قیمت انواع برنج چقدر است؟",
    "زمان ارسال سفارش چقدر طول می‌کشد؟",
    "آیا امکان خرید عمده وجود دارد؟",
    "شرایط ارسال رایگان چیست؟",
    "نحوه پرداخت چگونه است؟",
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: botResponse,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    inputRef.current.focus();
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("قیمت") ||
      lowerCaseMessage.includes("هزینه")
    ) {
      return "قیمت برنج‌های ما بر اساس نوع و کیفیت متفاوت است. برنج طارم اعلا از کیلویی ۲۰۰ هزار تومان، برنج هاشمی از کیلویی ۱۸۰ هزار تومان و برنج دم سیاه از کیلویی ۲۵۰ هزار تومان شروع می‌شود. برای اطلاعات بیشتر می‌توانید به صفحه محصولات مراجعه کنید.";
    } else if (
      lowerCaseMessage.includes("ارسال") ||
      lowerCaseMessage.includes("زمان تحویل")
    ) {
      return "زمان ارسال سفارش‌های ما معمولاً بین ۲ تا ۵ روز کاری است، بسته به منطقه شما. سفارش‌های تهران و کرج معمولاً زودتر به دست شما می‌رسند. همچنین، برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال رایگان خواهد بود.";
    } else if (
      lowerCaseMessage.includes("عمده") ||
      lowerCaseMessage.includes("تخفیف")
    ) {
      return "بله، ما امکان خرید عمده برای رستوران‌ها، هتل‌ها و فروشگاه‌ها را فراهم کرده‌ایم. برای سفارش‌های بالای ۱۰۰ کیلوگرم، تخفیف ویژه در نظر گرفته شده است. برای اطلاعات بیشتر و هماهنگی می‌توانید با شماره ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید.";
    } else if (lowerCaseMessage.includes("رایگان")) {
      return "برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال به صورت رایگان انجام می‌شود. همچنین در برخی از مناسبت‌های خاص نیز کد تخفیف ارسال رایگان ارائه می‌شود که از طریق خبرنامه یا پیامک به اطلاع مشتریان می‌رسد.";
    } else if (lowerCaseMessage.includes("پرداخت")) {
      return "شما می‌توانید از روش‌های مختلف پرداخت استفاده کنید: پرداخت آنلاین با کارت‌های شتاب، پرداخت در محل (فقط برای تهران و کرج) و یا واریز به حساب. ما همچنین امکان پرداخت اقساطی را برای خریدهای بالای یک میلیون تومان فراهم کرده‌ایم.";
    } else if (
      lowerCaseMessage.includes("سلام") ||
      lowerCaseMessage.includes("درود")
    ) {
      return "سلام! خوش آمدید به فروشگاه برنج شمال. چطور می‌توانم به شما کمک کنم؟";
    } else {
      return "متأسفانه من نتوانستم پاسخ دقیقی برای سؤال شما پیدا کنم. لطفاً با پشتیبانی ما از طریق شماره ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید یا از طریق فرم تماس با ما پیام خود را ارسال کنید.";
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleChat}
        className={`
          w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg
          hover:bg-primary/90 transition-all duration-300
          ${isChatOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
        `}
        aria-label="چت با پشتیبانی"
      >
        <FiMessageSquare size={24} />
      </button>

      <div
        className={`
          bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 transform
          flex flex-col overflow-hidden
          ${
            isChatOpen
              ? "scale-100 opacity-100 h-[500px]"
              : "scale-95 opacity-0 h-0 pointer-events-none"
          }
        `}
      >
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="برنج شمال"
              className="w-8 h-8 ml-2 bg-white rounded-full p-1"
            />
            <div>
              <h3 className="font-semibold">پشتیبانی فروشگاه برنج شمال</h3>
              <p className="text-xs">پاسخگوی سوالات شما هستیم</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="بستن چت"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                max-w-[80%] rounded-lg p-3 
                ${
                  message.type === "user"
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none"
                }
              `}
              >
                <p className="text-sm">{message.content}</p>
                <span
                  className={`text-xs mt-1 block text-left ${
                    message.type === "user" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="bg-white text-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm max-w-[80%]">
                <div className="flex space-x-2 space-x-reverse">
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="bg-white border-t border-gray-200 px-4 py-2">
          <details className="text-sm">
            <summary className="flex items-center text-primary cursor-pointer">
              <FiChevronDown className="ml-1" />
              <span>سوالات متداول</span>
            </summary>
            <div className="mt-2 space-y-2 pb-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="w-full text-right block bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </details>
        </div>

        <div className="bg-white border-t border-gray-200 p-3">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="پیام خود را بنویسید..."
              className="flex-grow border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <button
              onClick={handleSendMessage}
              disabled={inputMessage.trim() === ""}
              className={`
                ml-2 p-2 rounded-md
                ${
                  inputMessage.trim() === ""
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90"
                }
              `}
              aria-label="ارسال پیام"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
