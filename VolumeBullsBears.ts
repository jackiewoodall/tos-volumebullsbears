# VolumeBullsBears v1.0 2020-07-07 JackieW
#
# This indicator graphs an estimated amount of volume from bulls vs bears.
# OPTION: Drawn Unscaled by default using the full volume range. 
#         Changing to the "FixedScale" input to "Scaled" will limi the range from 0 - 100.
#

declare lower;
declare zerobase;

input FixedScale = {default Unscaled, Scaled};

def scale;
switch (FixedScale) {
case Unscaled:
    scale = volume;
case Scaled:
    scale = If(volume > 0, 100, 0);
}

def range =  high - low;
plot Bulls = Round(scale * ((close - low) / range), 0);
plot Bears = Round(scale * ((high - close) / range), 0);

# BearsShadow: this is a trick used to get the histograms to overlap correctly.
# BearsShadow renders the full volume bar in the background (in red) 
# with the Bulls bar painted ontop (in green)
# the actual Bears plot is then "hidden".
plot BearsShadow = scale;

Bulls.SetDefaultColor(Color.UPTICK);
Bulls.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Bulls.HideBubble();

BearsShadow.SetDefaultColor(Color.DOWNTICK);
BearsShadow.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
BearsShadow.HideTitle(); # we dont want to show this in the subgraph title bar as it will show total volume
BearsShadow.HideBubble();

Bears.SetDefaultColor(Color.DOWNTICK);
Bears.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Bears.HideBubble();
