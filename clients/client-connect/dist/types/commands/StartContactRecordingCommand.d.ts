import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartContactRecordingRequest, StartContactRecordingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartContactRecordingCommandInput extends StartContactRecordingRequest {
}
export interface StartContactRecordingCommandOutput extends StartContactRecordingResponse, __MetadataBearer {
}
/**
 * <p>Starts recording the contact when the agent joins the call. StartContactRecording is a
 *    one-time action. For example, if you use StopContactRecording to stop recording an ongoing call,
 *    you can't use StartContactRecording to restart it. For scenarios where the recording has started
 *    and you want to suspend and resume it, such as when collecting sensitive information (for
 *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
 *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
 *     behavior</a> block.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StartContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartContactRecordingCommand extends $Command<StartContactRecordingCommandInput, StartContactRecordingCommandOutput, ConnectClientResolvedConfig> {
    readonly input: StartContactRecordingCommandInput;
    constructor(input: StartContactRecordingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartContactRecordingCommandInput, StartContactRecordingCommandOutput>;
    private serialize;
    private deserialize;
}
