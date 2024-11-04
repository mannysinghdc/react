import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const RoomLive = () => {
    const { roomId } = useParams()

   const user=JSON.parse(localStorage.getItem("user")) // Localstroge value

    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 785029668;
        const serverSecret = "9e94f398c6ce75156357a6996334ae9c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), user.name)

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken)

        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `http://localhost:5173/room/${roomId}`

                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });
    }
    return (
        <>
            <div
                ref={myMeeting}
                style={{ width: '100vw', height: '100vh' }}
            >

            </div>
        </>
    )
}

export default RoomLive