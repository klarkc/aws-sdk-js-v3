import { PinpointSMSVoiceClient } from "./PinpointSMSVoiceClient";
import { CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { GetConfigurationSetEventDestinationsCommandInput, GetConfigurationSetEventDestinationsCommandOutput } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput } from "./commands/ListConfigurationSetsCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "./commands/SendVoiceMessageCommand";
import { UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 */
export declare class PinpointSMSVoice extends PinpointSMSVoiceClient {
    /**
     * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
     */
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetCommandOutput>;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
    /**
     * Create a new event destination in a configuration set.
     */
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * Deletes an existing configuration set.
     */
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetCommandOutput>;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    /**
     * Deletes an event destination in a configuration set.
     */
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
     */
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void): void;
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void): void;
    /**
     * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
     */
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationSetsCommandOutput>;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    /**
     * Create a new voice message and send it to a recipient's phone number.
     */
    sendVoiceMessage(args: SendVoiceMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendVoiceMessageCommandOutput>;
    sendVoiceMessage(args: SendVoiceMessageCommandInput, cb: (err: any, data?: SendVoiceMessageCommandOutput) => void): void;
    sendVoiceMessage(args: SendVoiceMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendVoiceMessageCommandOutput) => void): void;
    /**
     * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
     */
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
}
