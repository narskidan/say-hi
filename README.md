# say-hi
MacOS rice widget to add cute urbit fun to your desktop.

![Screenshot 2024-07-18 at 2 17 49 a m](https://github.com/user-attachments/assets/456eba94-c56e-4860-b7a7-1d9ad3f352e6)

To install it, first you need to install [Ubersicht](https://tracesof.net/uebersicht/).

Then, paste the contents of widget.jsx into GettingStarted.jsx

With this, the widget should work (maybe you have to enable it or something, but basically that's it).

Now we need to link the widget to the output of your local ship. This requires two steps.

1. Run `brew install expect`
2. Run this command: `unbuffer ./urbit lomlec-walsev-motluc-nammex | tee urbit.log 2>&1` (except using your ship name obvs)
3. Edit GettingStarted.jsx so `/Users/eliana/Documents/Code/urbit.log` points instead to the output file specified above (using absolute path)

Yes, I see that's more than two steps. Relax. Ain't ya evah hearda CALM COMPUTING?!?

There are bugs. This isn't really "software", just something I slapped together while procrastinating. If you want to make it better, PRs happily accepted!
