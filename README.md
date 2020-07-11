# VolumeBullsBears

<img width="50%" alt="sample shot" src="https://user-images.githubusercontent.com/3299770/87215923-e479d100-c375-11ea-97c0-3e5daa3d4c7b.png">

A ThinkOrSwim script (thinkscript) volume indictor which renders an estimated number of contracts/shares bought vs sold. For a given time slice of an asset, the contracts "bought" are rendered in green while the number of contracts "sold" are rendered in red.

TOS Shared Link: http://tos.mx/rLFLIDo

# Installation

1. Open the TOS Shared Link above in Thinkorswim by selecting from the upper right "Setup" -> "Open Shared Item".
2. Paste the above URL into "Shared item URL" and click "Preview" then "Open".
3. This will import the study and give you the option to rename it. Give it a friendly name such as "VolumeBullsBears". Click "OK".

The study has now been imported into your library and can be added to a chart. 

On a chart you wish to add the study to:

1. Click the "Edit Studies" button on the chart's toolbar.
2. In the left panel, find the newly imported study. IE., search for "VolumeBullsBears".
3. Click "Add Selected".
4. You should be seeing:

<img width="75%" alt="edit studies and strategies" src="https://user-images.githubusercontent.com/3299770/87215489-ea6db300-c371-11ea-86d9-4734e9a603be.png">

By default the study is added to the "Volume" subgraph.

5. Hit "OK".

You should then see the study below the asset's price chart. 

### If you do not see the study

If you do not see the study, be sure you have enabled the chart's volume subgraph for that asset type.

1. Click the "Chart Settings" gear icon on the chart's toolbar.
2. Select the tab page with the asset type being displayed: "Equities", "Options", "Futures", or "Forex". 
3. Check "Show volume subgraph". Example:

<img width="75%" alt="chart settings" src="https://user-images.githubusercontent.com/3299770/87215514-2c96f480-c372-11ea-89ef-18f01212ae62.png">

# Details

<img width="75%" alt="labels" src="https://user-images.githubusercontent.com/3299770/87215478-d5911f80-c371-11ea-89a1-8c2e2df99b95.png">

On the chart above at 13:50 there was a total of 2,141 contracts traded. Of that, there was an estimation of 483 buyers and 1,658 sellers.

The number of **Buyers** + **Sellers** should always equal **Total Volume**.

**Buyers** and **Sellers** is an guestimation based upon the close of the candle relative to the total range of the candle. That is, this is **not** by any means a direct reflection of the actual number of units bought and sold.

# Inputs and Options:

By double clicking on one of the bars of the study, you can bring up its customization page. 

<img width="75%" alt="customization" src="https://user-images.githubusercontent.com/3299770/87215874-a11f6280-c375-11ea-9f07-21191743a610.png">

* FixedScale: `Unscaled` by default to render the full volume range. Changing to `Scaled` will limit the range from 0 to 100.
* VolumeAverage: enable/disable volume average plot line
* VolAvgLength: number of bars for volume average

### Unscaled

<img alt="Unscaled" src="https://user-images.githubusercontent.com/3299770/86858289-55618480-c0fb-11ea-9414-96ddf88ff74f.png" width="50%"/>

### Scaled

<img alt="Scaled" src="https://user-images.githubusercontent.com/3299770/86858587-e20c4280-c0fb-11ea-8d1f-a90c65e62e2d.png" width="50%">

### VolumeAverage:

<img width="50%" alt="volume average" src="https://user-images.githubusercontent.com/3299770/87215571-c9f22880-c372-11ea-9be4-7a650e6757fb.png">

# Known Issues

See the [issues](/../../issues) page.

# Acknowledgements

This is a collaborative product of the [TheoTrade](https://theotrade.com/) Futures community.
