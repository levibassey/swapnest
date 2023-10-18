<div class="font-body text-sm">
  <header class="hidden bg-gray-100 px-20 py-6 md:flex md:justify-between">
    <a
      href="#home"
      class="inline-flex items-center font-[Montserrat] text-xl leading-normal"
    >
      <svg viewBox="0 0 52 22" aria-hidden class="h-4 fill-none">
        <g stroke-linecap="round" stroke-linejoin="round" stroke-width="4.117">
          <path
            stroke="#000"
            d="M21.84 9.995c-1.401-2.144-2.382-6.432 4.902-6.432C35.848 3.563 38.65 15.14 49.156 19"
          />
          <path
            stroke="#94C69D"
            d="M30.16 12.005c1.402 2.144 2.382 6.432-4.902 6.432C16.152 18.437 13.35 6.86 2.844 3"
          />
        </g>
      </svg>
      <span class="ml-2 font-semibold">swap</span>nest
    </a>
    <div class="text-center text-gray-500">
      Already have an account?
      <a href="#signin" class="text-brand-500">Log in</a>
    </div>
  </header>
  <main class="px-4 py-12 md:py-20">
    <div class="mx-auto grid max-w-sm gap-y-8">
      <div class="grid justify-items-center gap-y-6">
        <a href="#home" class="md:hidden">
          <svg viewBox="0 0 52 22" class="h-5 fill-none">
            <g
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4.117"
            >
              <path
                stroke="#000"
                d="M21.84 9.995c-1.401-2.144-2.382-6.432 4.902-6.432C35.848 3.563 38.65 15.14 49.156 19"
              />
              <path
                stroke="#94C69D"
                d="M30.16 12.005c1.402 2.144 2.382 6.432-4.902 6.432C16.152 18.437 13.35 6.86 2.844 3"
              />
            </g>
          </svg>
        </a>
        <h1 class="font-display text-2xl text-gray-900">Create an account</h1>
      </div>
      <form class="grid gap-y-6">
        <div class="grid gap-y-5">
          <div class="grid gap-y-1.5">
            <label for="email" class="font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-600"
            />
          </div>
          <div class="grid gap-y-1.5">
            <label for="password" class="font-medium text-gray-700">
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-600"
            />
          </div>
        </div>
        <p class="text-gray-500">
          By creating an account, I agree to Swapnest's
          <a href="#terms" class="font-medium text-gray-700">Terms of Service</a
          >
          and
          <a href="#privacy" class="font-medium text-gray-700">Privacy Policy</a
          >
        </p>
        <div class="grid gap-y-4">
          <button
            type="submit"
            class="rounded-lg bg-gray-900 px-4 py-2.5 font-medium text-brand-400"
          >
            Get started
          </button>
          <button
            class="rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700"
          >
            <span class="flex items-center justify-center gap-x-3">
              <svg viewBox="0 0 25 24" class="h-5 fill-none">
                <g clip-path="url(#a)">
                  <path
                    fill="#4285F4"
                    d="M24.266 12.277c0-.816-.066-1.636-.207-2.439H12.74v4.621h6.482a5.554 5.554 0 0 1-2.399 3.647v2.998h3.867c2.271-2.09 3.576-5.177 3.576-8.827Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12.74 24c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0 0 10.723 6.61Z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M6.003 14.3a7.188 7.188 0 0 1 0-4.594V6.615H2.017a12.01 12.01 0 0 0 0 10.776l3.986-3.09Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12.74 4.75a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.533 11.533 0 0 0 12.74 0 11.998 11.998 0 0 0 2.017 6.615l3.986 3.09C6.95 6.863 9.609 4.75 12.74 4.75Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.5 0h24v24H.5z" />
                  </clipPath>
                </defs>
              </svg>
              Sign up with Google
            </span>
          </button>
        </div>
      </form>
      <div class="text-center text-gray-500 md:hidden">
        Already have an account?
        <a href="#signin" class="text-brand-500">Log in</a>
      </div>
    </div>
  </main>
</div>
