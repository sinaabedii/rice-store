import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiCalendar, FiUser, FiTag, FiMessageSquare, FiHeart } from 'react-icons/fi';

// نمونه یک پست بلاگ
const BLOG_POST = {
  id: 1,
  title: 'معرفی انواع برنج ایرانی و ویژگی‌های هر کدام',
  content: `<p>برنج یکی از اصلی‌ترین مواد غذایی در سبد خانوارهای ایرانی است و بخش مهمی از فرهنگ غذایی ما را تشکیل می‌دهد. ایران با داشتن اقلیم مناسب در استان‌های شمالی، یکی از تولیدکنندگان برنج با کیفیت در جهان است.</p>
  
  <p>در این مقاله قصد داریم انواع مختلف برنج ایرانی را معرفی کنیم و ویژگی‌های هر کدام را بررسی کنیم تا شما بتوانید آگاهانه‌تر برنج مورد نیاز خود را انتخاب کنید.</p>
  
  <h2>برنج طارم</h2>
  
  <p>برنج طارم یکی از مرغوب‌ترین و خوش‌عطرترین برنج‌های ایرانی است که در مناطق مختلف استان‌های شمالی کشت می‌شود. این برنج به دلیل دانه‌های بلند و باریک، عطر و طعم منحصر به فرد، و خاصیت کشیدگی عالی در هنگام پخت، از محبوبیت زیادی برخوردار است.</p>
  
  <p>ویژگی‌های برنج طارم:</p>
  <ul>
    <li>دانه‌های بلند و باریک</li>
    <li>عطر بسیار مطبوع و شاخص</li>
    <li>رنگ سفید روشن</li>
    <li>پخت آسان و کشیدگی مناسب</li>
    <li>چسبندگی کم و جدا ماندن دانه‌ها پس از پخت</li>
  </ul>
  
  <h2>برنج هاشمی</h2>
  
  <p>برنج هاشمی یکی دیگر از ارقام مرغوب برنج ایرانی است که نام خود را از مهندس هاشمی، اصلاح‌کننده این رقم، گرفته است. برنج هاشمی از تلاقی بین برنج‌های محلی شمال ایران به دست آمده و از نظر کیفیت، در رده‌های بالای برنج ایرانی قرار دارد.</p>
  
  <p>ویژگی‌های برنج هاشمی:</p>
  <ul>
    <li>دانه‌های متوسط تا بلند</li>
    <li>عطر ملایم و دلپذیر</li>
    <li>رنگ سفید مایل به کرم</li>
    <li>قابلیت جذب عطر و طعم ادویه‌ها</li>
    <li>قوام مناسب برای استفاده در انواع پلو و چلو</li>
    </ul>
  
  <h2>برنج دم سیاه</h2>
  
  <p>برنج دم سیاه یکی از برنج‌های اصیل و مرغوب شمال ایران است که نام آن به دلیل وجود نقطه‌ی سیاه رنگ در انتهای دانه برنج است. این برنج بیشتر در مناطق کوهپایه‌ای استان گیلان کشت می‌شود و به دلیل طعم خاص و منحصر به فرد خود، طرفداران بسیاری دارد.</p>
  
  <p>ویژگی‌های برنج دم سیاه:</p>
  <ul>
    <li>دانه‌های متوسط با انتهای تیره</li>
    <li>عطر قوی و دلپذیر</li>
    <li>طعم مخصوص و متمایز</li>
    <li>قابلیت نگهداری طولانی مدت</li>
    <li>مناسب برای مجالس و مهمانی‌های خاص</li>
  </ul>
  
  <h2>برنج علی کاظمی</h2>
  
  <p>برنج علی کاظمی یکی از ارقام نسبتاً جدیدتر برنج ایرانی است که در استان مازندران کشت می‌شود. این برنج که نام خود را از منطقه‌ای در مازندران گرفته، به دلیل قیمت مناسب‌تر نسبت به برخی ارقام دیگر و همچنین عطر و طعم خوب، مورد توجه بسیاری از خانواده‌های ایرانی قرار گرفته است.</p>
  
  <p>ویژگی‌های برنج علی کاظمی:</p>
  <ul>
    <li>دانه‌های متوسط</li>
    <li>عطر ملایم</li>
    <li>قیمت مناسب‌تر نسبت به برخی ارقام دیگر</li>
    <li>پخت آسان و مقرون به صرفه</li>
    <li>مناسب برای مصرف روزانه</li>
  </ul>
  
  <h2>جمع‌بندی</h2>
  
  <p>هر یک از انواع برنج ایرانی، ویژگی‌ها و طعم خاص خود را دارند و انتخاب بین آن‌ها به سلیقه شخصی و کاربرد مورد نظر بستگی دارد. برای مثال، برخی افراد ترجیح می‌دهند برای مهمانی‌های ویژه از برنج طارم یا دم سیاه استفاده کنند، در حالی که برای مصرف روزانه، برنج هاشمی یا علی کاظمی مناسب‌تر است.</p>
  
  <p>برای خرید برنج با کیفیت، همیشه به اصالت و تازگی محصول توجه کنید و از فروشندگان معتبر خرید نمایید. برنج تازه، عطر بیشتر و پخت بهتری دارد و در نگهداری آن نیز باید به نکات خاصی توجه کرد.</p>`,
  image: '/images/blog/types-of-rice.jpg',
  author: 'زهرا احمدی',
  authorImage: '/images/team/person3.jpg',
  date: '۱۴۰۲/۰۳/۱۵',
  category: 'آموزشی',
  tags: ['برنج ایرانی', 'طارم', 'هاشمی', 'دم سیاه'],
  views: 2450,
  likes: 124,
  comments: 18
};

const RELATED_POSTS = [
  {
    id: 2,
    title: 'روش‌های تشخیص برنج اصل از تقلبی',
    excerpt: 'چگونه برنج اصل و با کیفیت را از نمونه‌های تقلبی تشخیص دهیم؟',
    image: '/images/blog/authentic-rice.jpg',
    date: '۱۴۰۲/۰۲/۲۲',
  },
  {
    id: 3,
    title: 'دستور پخت کته برنج ایرانی به روش حرفه‌ای‌ها',
    excerpt: 'آموزش گام به گام پخت کته برنج ایرانی به روشی که دانه‌ها کاملاً جدا از هم باشند.',
    image: '/images/blog/rice-cooking.jpg',
    date: '۱۴۰۲/۰۱/۱۸',
  },
  {
    id: 5,
    title: 'خواص تغذیه‌ای برنج و جایگاه آن در سبد غذایی خانواده‌ها',
    excerpt: 'برنج چه ارزش غذایی دارد و چرا هنوز پس از قرن‌ها، یکی از اصلی‌ترین مواد غذایی است؟',
    image: '/images/blog/rice-nutrition.jpg',
    date: '۱۴۰۱/۱۱/۰۵',
  },
];

const BlogPostPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={BLOG_POST.image}
                    alt={BLOG_POST.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                
                <div className="p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-accent mb-4">{BLOG_POST.title}</h1>
                  
                  <div className="flex flex-wrap text-sm text-gray-500 mb-6">
                    <div className="flex items-center ml-4 mb-2">
                      <FiCalendar size={14} className="ml-1" />
                      <span>{BLOG_POST.date}</span>
                    </div>
                    <div className="flex items-center ml-4 mb-2">
                      <FiUser size={14} className="ml-1" />
                      <span>{BLOG_POST.author}</span>
                    </div>
                    <div className="flex items-center ml-4 mb-2">
                      <FiTag size={14} className="ml-1" />
                      <span>{BLOG_POST.category}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FiMessageSquare size={14} className="ml-1" />
                      <span>{BLOG_POST.comments} نظر</span>
                    </div>
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none mb-6"
                    dangerouslySetInnerHTML={{ __html: BLOG_POST.content }}
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {BLOG_POST.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        href={`/blog/tag/${tag}`} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-b py-4">
                    <div className="flex items-center">
                      <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                        <FiHeart size={18} className="ml-1" />
                        <span>پسندیدم ({BLOG_POST.likes})</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="ml-2">اشتراک‌گذاری:</span>
                      <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-primary transition-colors mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-primary transition-colors mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-primary transition-colors mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-primary transition-colors mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden ml-4">
                        <Image
                          src={BLOG_POST.authorImage}
                          alt={BLOG_POST.author}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-accent">{BLOG_POST.author}</h3>
                        <p className="text-gray-600 text-sm">کارشناس کنترل کیفیت برنج</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      متخصص در زمینه کنترل کیفیت محصولات کشاورزی با بیش از ۱۵ سال سابقه در صنعت برنج. دارای مدرک کارشناسی ارشد علوم و صنایع غذایی و عضو انجمن متخصصان صنایع غذایی ایران.
                    </p>
                  </div>
                </div>
              </article>
              
              {/* Comments Section */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h2 className="text-xl font-semibold text-accent mb-6">نظرات ({BLOG_POST.comments})</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="border-b pb-6">
                    <div className="flex items-start">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden ml-4">
                        <Image
                          src="/images/testimonials/person1.jpg"
                          alt="محمد احمدی"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">محمد احمدی</h4>
                          <span className="text-sm text-gray-500">۱۴۰۲/۰۳/۱۶</span>
                        </div>
                        <p className="text-gray-700">
                          مقاله بسیار مفیدی بود. من همیشه در انتخاب نوع برنج مناسب سردرگم بودم اما با خواندن این مقاله، تفاوت‌های انواع برنج ایرانی را بهتر متوجه شدم. ممنون از اطلاعات کاربردی.
                        </p>
                        <button className="text-primary text-sm mt-2 hover:underline">پاسخ</button>
                      </div>
                    </div>
                    
                    <div className="flex items-start mr-16 mt-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden ml-4">
                        <Image
                          src={BLOG_POST.authorImage}
                          alt={BLOG_POST.author}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{BLOG_POST.author}</h4>
                          <span className="text-sm text-gray-500">۱۴۰۲/۰۳/۱۶</span>
                        </div>
                        <p className="text-gray-700">
                          سلام محمد عزیز، خوشحالم که مقاله برای شما مفید بوده است. امیدوارم با این اطلاعات بتوانید انتخاب بهتری داشته باشید.
                        </p>
                        <button className="text-primary text-sm mt-2 hover:underline">پاسخ</button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden ml-4">
                        <Image
                          src="/images/testimonials/person2.jpg"
                          alt="سارا محمدی"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">سارا محمدی</h4>
                          <span className="text-sm text-gray-500">۱۴۰۲/۰۳/۱۷</span>
                        </div>
                        <p className="text-gray-700">
                          آیا می‌توانید در مورد نحوه نگهداری انواع مختلف برنج هم مقاله‌ای بنویسید؟ مثلاً اینکه چه مدت می‌توان برنج را نگهداری کرد و بهترین شرایط نگهداری چیست؟
                        </p>
                        <button className="text-primary text-sm mt-2 hover:underline">پاسخ</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-4">ارسال نظر</h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="comment-name" className="block text-gray-700 mb-1">نام و نام خانوادگی</label>
                        <input
                          type="text"
                          id="comment-name"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>
                      <div>
                        <label htmlFor="comment-email" className="block text-gray-700 mb-1">ایمیل</label>
                        <input
                          type="email"
                          id="comment-email"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                          placeholder="ایمیل خود را وارد کنید"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="comment-text" className="block text-gray-700 mb-1">متن نظر</label>
                      <textarea
                        id="comment-text"
                        rows={4}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="نظر خود را بنویسید..."
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary">
                      ارسال نظر
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div>
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Search */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">جستجو در بلاگ</h3>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="جستجو..."
                      className="flex-grow border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Related Posts */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">مطالب مرتبط</h3>
                  <div className="space-y-4">
                    {RELATED_POSTS.map((post) => (
                      <div key={post.id} className="flex">
                        <div className="relative h-16 w-16 rounded overflow-hidden ml-3">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <Link 
                            href={`/blog/${post.id}`} 
                            className="font-medium text-gray-700 hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-4">برچسب‌ها</h3>
                  <div className="flex flex-wrap gap-2">
                    {BLOG_POST.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        href={`/blog/tag/${tag}`} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-primary/10 rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-semibold text-accent mb-2">عضویت در خبرنامه</h3>
                  <p className="text-gray-600 mb-4">
                    برای دریافت آخرین مقالات و تخفیف‌های ویژه در خبرنامه ما عضو شوید.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className="flex-grow border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-l-md hover:bg-primary/90 transition-colors">
                      عضویت
                    </button>
                  </div>
                </div>
                
                {/* Buy Rice Banner */}
                <div className="bg-accent text-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">برنج مرغوب شمال</h3>
                  <p className="mb-4">برنج‌های اصیل و خوش عطر شمال را با کیفیت تضمینی، مستقیم از کشاورز خریداری کنید.</p>
                  <Link 
                    href="/products" 
                    className="block bg-white text-accent text-center py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    مشاهده محصولات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
