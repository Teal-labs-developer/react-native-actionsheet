import { StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: '#000'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#e5e5e5'
  },
  titleBox: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titleText: {
    color: '#757575',
    fontSize: 14
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12
  },
  buttonBox: {
    height: 50,
    marginTop: hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "AvenirNext-Medium",
        fontWeight: "500"
      },
      android: {
        fontFamily: "sans-serif",
        fontWeight: "500"
      }
    })
  },
  cancelButtonBox: {
    minHeight: 56,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12
  },
  cancelButton: {
    ...Platform.select({
      ios: {
        fontFamily: "AvenirNext-DemiBold",
        fontWeight: "600"
      },
      android: {
        fontFamily: "sans-serif-light",
        fontWeight: "600"
      }
    }),
    width: "auto",
    fontSize: 18,
    color: "#007AFF"
  }
}
