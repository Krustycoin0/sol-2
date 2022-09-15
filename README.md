# How to Deploy

  - `git clone https://github.com/graceful-coder/Freqs-swap.git`
  - `cd Freqs-swap`
  - Modify the .env FEE_ADDRESS variables with Your Wallet Pub Key
  - `set "SWAP_PROGRAM_OWNER_FEE_ADDRESS=Your Wallet Pub Key"`
  - `set "SWAP_HOST_FEE_ADDRESS=Your Wallet Pub Key"`
  - `npx browserslist@latest --update-db`
  - `sudo npm install -g serve`
  - `npm install --force @craco/craco --save`
  If any dependency issues arise, run:
  - `npm install --legacy-peer-deps`
  - `npm run build`
  - `serve -s build`
