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
- FacebookSDK.

## Development

- First, install dependencies: `$ yarn install`
- Run `$ react-native link`, lo link the libraries to the project. If icons dont show up, run `$ react-native link react-native-vector-icons`.
- To start the metro builder: `$ yarn start`
- For mobile development:
  - iOS `$ react-native run-ios`
  - Android:
    - Open the project in Android Studio
    - Open our configurated _AVD_.
    - Run `$ react-native run-android`
    - Or, after create your AVD, crete an alias, like: `alias ${YOUR_AWESOME_ALIAS}='~/Library/Android/sdk/tools/emulator -avd ${AVD_NAME} &'`. So, to run android _simulator_ just run your alias.
