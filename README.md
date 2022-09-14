# How to Deploy

  - `git clone https://github.com/solana-labs/oyster-swap`
  - `cd oyster-swap`
  - `set SWAP_PROGRAM_OWNER_FEE_ADDRESS='Your Wallet`
  - `set SWAP_HOST_FEE_ADDRESS='Your Wallet`
  - `npx browserslist@latest --update-db`
  - `sudo npm install -g serve`
  - `npm install --force @craco/craco --save`
  - `npm run build`
  - `serve -s build`
