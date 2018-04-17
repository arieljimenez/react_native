# Pomodoro React Native App

App made for the react native training.

## Dependencies

- react-native (installed globally)
- yarn (it is muuuuch more faster than npm installing/downloading/calculating stuff)
- Xcode
- Android Studio properly configurated with:
  - SDK Platforms: Android 6.0 (Marshmallow) SDK
    - Google APIs
    - Android SDK Platform 23
    - Sources for Android 23
    - Intel x86 Atom_64 System Image
    - Google APIs Intel x86 Atom_64 System Image
  - SDK Tools:
    - 23.0.1
  - An Android Virtual Device (AVD) runing the _Marshmallow/23_ image.

## Development

- First, install dependencies: `$ yarn install`
- To start the metro builder: `$ yarn start`
- For mobile development:
  - iOS `$ react-native run-ios`
  - Android:
    - Open the project in Android Studio
    - Open our configurated _AVD_.
    - Run `$ react-native run-android`
