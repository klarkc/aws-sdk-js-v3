import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SuspendContactRecordingRequest, SuspendContactRecordingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SuspendContactRecordingCommandInput extends SuspendContactRecordingRequest {
}
export interface SuspendContactRecordingCommandOutput extends SuspendContactRecordingResponse, __MetadataBearer {
}
/**
 * <p>When a contact is being recorded, this API suspends recording the call. For example, you
 *    might suspend the call recording while collecting sensitive information, such as a credit card
 *    number. Then use ResumeContactRecording to restart recording. </p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final
 *    recording. </p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SuspendContactRecordingCommand extends $Command<SuspendContactRecordingCommandInput, SuspendContactRecordingCommandOutput, ConnectClientResolvedConfig> {
    readonly input: SuspendContactRecordingCommandInput;
    constructor(input: SuspendContactRecordingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SuspendContactRecordingCommandInput, SuspendContactRecordingCommandOutput>;
    private serialize;
    private deserialize;
}
