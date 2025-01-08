'use client'

import React, { useEffect, useState } from 'react'
import { Icons } from './Icons'
import Gravity, { MatterBody } from './matter-engine'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
export function Hero() {
  return (
    <section className="relative container flex space-y-6 pb-8 md:pb-12">
      <div className="relative z-10 md:ml-10 xl:ml-0 flex flex-col items-start gap-4 pb-40">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mt-20 px-5 max-w-[50rem]"
        >
          <div className="flex mb-8 w-5/6 items-center justify-betwee">
            <div className="">
              <h1 className="text-6xl font-bold mb-4">👏 Hi, I'm kuo Zhang</h1>
              <p className="text-xl">
                I am a full-stack engineer, my main technology stack is Nextjs,
                the founder of BuouUI, and I am committed to making every
                developer make money.
              </p>
            </div>
            <Avatar className="w-20 h-20">
              <AvatarImage src="/zhangkuo.jpg" alt="@zhangkuo" />
              <AvatarFallback>BU</AvatarFallback>
            </Avatar>
          </div>
        </motion.section>
      </div>
      <div className="bg-background hidden absolute right-0 top-0 xl:flex flex-col items-end z-20 mt-20 rounded-lg w-[550px] h-[500px] border">
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
          {socialLinks.map((link, index) => {
            return (
              <MatterBody
                key={index}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x={link.x}
                y={link.y}
              >
                {link.name}
              </MatterBody>
            )
          })}
        </Gravity>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl mt-10">
            Technology Stack
          </h2>
        </div>
      </div>
    </section>
  )
}
const socialLinks = [
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
        </svg>
      </div>
    ),
    x: '10%',
    y: '0%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      </div>
    ),
    x: '25%',
    y: '10%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.framer className="h-12 w-12" />
      </div>
    ),
    x: '30%',
    y: '20%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.shadcn className="h-12 w-12 fill-current" />
      </div>
    ),
    x: '45%',
    y: '60%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      </div>
    ),
    x: '50%',
    y: '70%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-12 w-12 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Zod</title>
          <path d="M19.088 2.477 24 7.606 12.521 20.485l-.925 1.038L0 7.559l5.108-5.082h13.98Zm-17.434 5.2 6.934-4.003H5.601L1.619 7.636l.035.041Zm12.117-4.003L3.333 9.7l2.149 2.588 10.809-6.241-.2-.346 2.851-1.646-.365-.381h-4.806Zm7.52 2.834L8.257 14.034h5.101v-.4h3.667l5.346-5.998-1.08-1.128Zm-7.129 10.338H9.268l2.36 2.843 2.534-2.843Z" />
        </svg>
      </div>
    ),
    x: '65%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.post className="h-12 w-12" />
      </div>
    ),
    x: '75%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 86 86"
          className="h-12 w-12"
        >
          <circle cx="43" cy="43" r="43" fill="url(#a)" />
          <path fill="#020617" d="M39 21a4 4 0 0 1 8 0v44a4 4 0 0 1-8 0V21Z" />
          <path
            fill="#020617"
            d="M17 43a4 4 0 0 1 4-4h44a4 4 0 0 1 0 8H21a4 4 0 0 1-4-4Z"
          />
          <defs>
            <radialGradient
              id="a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(43.00005 65 -65 43.00005 33 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    ),
    x: '85%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <title>Cloudflare R2</title>
          <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
        </svg>
      </div>
    ),
    x: '15%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-20 w-20 fill-current">
          <path
            d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </div>
    ),
    x: '25%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
        </svg>
      </div>
    ),
    x: '35%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-current"
        >
          <title>Prisma</title>
          <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
        </svg>
      </div>
    ),
    x: '45%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="h-12 w-12"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
    ),
    x: '55%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
        </svg>
      </div>
    ),
    x: '65%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.paypal className="h-12 w-12" />
      </div>
    ),
    x: '65%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-current"
        >
          <title>Resend</title>
          <path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.652 7.652 0 0 0 3.316-3.016c.709-1.21 1.062-2.57 1.062-4.08 0-1.462-.353-2.767-1.062-3.91-.709-1.165-1.692-2.079-2.95-2.742C15.737.331 14.355 0 12.823 0Zm5.553 4.87h4.219c.731 0 1.349.125 1.851.376.526.252.925.618 1.2 1.098.274.457.412.994.412 1.611S15.132 9.12 14.88 9.6c-.229.48-.572.856-1.03 1.13-.434.252-.948.38-1.542.38H7.576Z" />
        </svg>
      </div>
    ),
    x: '75%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.google className="h-12 w-12 fill-current" />
      </div>
    ),
    x: '85%',
    y: '80%',
  },
  {
    name: (
      <div className="flex flex-col justify-between rounded-md p-2">
        <Icons.github className="h-12 w-12 fill-current" />
      </div>
    ),
    x: '95%',
    y: '80%',
  },
]
