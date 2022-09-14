# How to Deploy

  - `git clone https://github.com/graceful-coder/Freqs-swap.git`
  - `cd Freqs-swap`
  - `set SWAP_PROGRAM_OWNER_FEE_ADDRESS='Your Wallet Pub Key'`
  - `set SWAP_HOST_FEE_ADDRESS='Your Wallet Pub Key'`
  - `npx browserslist@latest --update-db`
  - `sudo npm install -g serve`
  - `npm install --force @craco/craco --save`
  - `npm run build`
  - `serve -s build`
