# VolumeBullsBears v1.1 2020-07-11 JackieW
#
#HINT: This indicator graphs an estimated amount of volume from bulls vs bears.\n\nThe default location is the volume subgraph. Be sure you have "show volume subgraph" checked under chart settings for the asset.
#OPTIONS:
#    "FixedScale": Drawn Unscaled by default using the full volume range.
#        Changing the "FixedScale" input to "Scaled" will limit the range from 0 - 100.
#    "VolumeAverage": enable/disable volume average plot line
#    "VolAvgLength": number of bars for volume average
#

declare on_volume; #default location is the volume subgraph
declare zerobase;

input FixedScale = {default Unscaled, Scaled};

def scale;
if FixedScale == FixedScale.Unscaled {
    scale =  volume;
} else {
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

#
# VolumeAverage
# TD Ameritrade IP Company, Inc. (c) 2007-2020
#

input VolumeAverage = no;
input VolAvgLength = 50;

plot VolAvg = Average(volume, VolAvgLength);
VolAvg.SetDefaultColor(GetColor(8));
VolAvg.SetHiding(!VolumeAverage);
