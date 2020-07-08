# VolumeBullsBears

A ThinkOrSwim script (thinkscript) volume indictor which renders an estimated number of contracts/shares bought vs sold. For a given time slice of an asset, the contracts bought are rendered in green while the number of contracts sold are rendered in red.

TOS Shared Link: http://tos.mx/fNrtzTD

## Options:

* FixedScale: `Unscaled` by default to render the full volume range. Changing to `Scaled` will limit the range from 0 to 100.
* VolumeAverage: enable/disable volume average plot line
* VolAvgLength: number of bars for volume average

## Screenshots

### Unscaled

<img alt="Unscaled" src="https://user-images.githubusercontent.com/3299770/86858289-55618480-c0fb-11ea-9414-96ddf88ff74f.png" width="50%"/>

## Scaled

<img alt="Scaled" src="https://user-images.githubusercontent.com/3299770/86858587-e20c4280-c0fb-11ea-8d1f-a90c65e62e2d.png" width="50%">

## VolumeAverage:

<img alt="VolumeAverage" src="https://user-images.githubusercontent.com/3299770/86863965-44b70b80-c107-11ea-87e9-bbce84e7f5c3.PNG" width="75%">
