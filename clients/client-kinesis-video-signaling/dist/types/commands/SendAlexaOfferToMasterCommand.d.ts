import { KinesisVideoSignalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoSignalingClient";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendAlexaOfferToMasterCommandInput extends SendAlexaOfferToMasterRequest {
}
export interface SendAlexaOfferToMasterCommandOutput extends SendAlexaOfferToMasterResponse, __MetadataBearer {
}
/**
 * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 *             The offer is delivered as soon as the master is connected to the specified signaling
 *             channel. This API returns the SDP answer from the connected master. If the master is not
 *             connected to the signaling channel, redelivery requests are made until the message
 *             expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const command = new SendAlexaOfferToMasterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAlexaOfferToMasterCommandInput} for command's `input` shape.
 * @see {@link SendAlexaOfferToMasterCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendAlexaOfferToMasterCommand extends $Command<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput, KinesisVideoSignalingClientResolvedConfig> {
    readonly input: SendAlexaOfferToMasterCommandInput;
    constructor(input: SendAlexaOfferToMasterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoSignalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput>;
    private serialize;
    private deserialize;
}
