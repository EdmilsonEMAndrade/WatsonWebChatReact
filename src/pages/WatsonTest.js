import { useEffect } from 'react';
import { withWebChat } from '@ibm-watson/assistant-web-chat-react';

const WatsonTest = ({ createWebChatInstance }) => {

  useEffect(() => {
    async function onWebChatLoad(instance) {
      console.log('WebChat instance loaded');
      await instance.updateLocale('pt-br');
      instance.restartConversation();
      // Inform a user to start a conversation
      instance.updateUserID('L12345');
      instance.updateCSSVariables({
        'BASE-z-index': '5',
        'BASE-font-family': '"Times New Roman", Times, serif',
        '$focus': '#ff0000'
      });
      // It shows or doesn't show the chat input
      instance.updateAssistantInputFieldVisibility(true);
      instance.render();
    }

    // A web chat configuration options object as documented at https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject
    const webChatOptions = {
      integrationID: "", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "", // The ID of your service instance.
      
        openChatByDefault: true, // Whether to open the chat window by default.
        showLauncher: true, // Whether to show the chat launcher.
        hideCloseButton:false, // Whether to hide the close button.
      onLoad: onWebChatLoad,
    };

    createWebChatInstance(webChatOptions);
  }, []);

};

// Wrap the component with the method returned by `withWebChat`.
export default withWebChat()(WatsonTest);

// https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-instance-methods#theming
// https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=tutorials-react-portals