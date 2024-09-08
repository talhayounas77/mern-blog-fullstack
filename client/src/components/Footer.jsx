// "use client";

// import { Footer } from "flowbite-react";
// import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

// function FooterSite() {
//   return (
//     <>
//     <Footer bgLight>
//     <div className="w-full">
//       <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
//         <div>
//           <Footer.Title title="Company" />
//           <Footer.LinkGroup col>
//             <Footer.Link href="#">About</Footer.Link>
//             <Footer.Link href="#">Careers</Footer.Link>
//             <Footer.Link href="#">Brand Center</Footer.Link>
//             <Footer.Link href="#">Blog</Footer.Link>
//           </Footer.LinkGroup>
//         </div>
//         <div>
//           <Footer.Title title="help center" />
//           <Footer.LinkGroup col>
//             <Footer.Link href="#">Discord Server</Footer.Link>
//             <Footer.Link href="#">Twitter</Footer.Link>
//             <Footer.Link href="#">Facebook</Footer.Link>
//             <Footer.Link href="#">Contact Us</Footer.Link>
//           </Footer.LinkGroup>
//         </div>
//         <div>
//           <Footer.Title title="legal" />
//           <Footer.LinkGroup col>
//             <Footer.Link href="#">Privacy Policy</Footer.Link>
//             <Footer.Link href="#">Licensing</Footer.Link>
//             <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
//           </Footer.LinkGroup>
//         </div>
//         <div>
//           <Footer.Title title="download" />
//           <Footer.LinkGroup col>
//             <Footer.Link href="#">iOS</Footer.Link>
//             <Footer.Link href="#">Android</Footer.Link>
//             <Footer.Link href="#">Windows</Footer.Link>
//             <Footer.Link href="#">MacOS</Footer.Link>
//           </Footer.LinkGroup>
//         </div>
//       </div>
//       <div className="w-full bgLight px-4 py-6 sm:flex sm:items-center sm:justify-between">
//         <Footer.Copyright href="#" by="Flowbite™" year={2022} />
//         <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
//           <Footer.Icon href="#" icon={BsFacebook} />
//           <Footer.Icon href="#" icon={BsInstagram} />
//           <Footer.Icon href="#" icon={BsTwitter} />
//           <Footer.Icon href="#" icon={BsGithub} />
//           <Footer.Icon href="#" icon={BsDribbble} />
//         </div>
//       </div>
//     </div>
//   </Footer>
//     </>
//   )
// }

// export default FooterSite






import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Blogger
              </span>
            
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                 Java Script
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blooger
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="blogger"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}

