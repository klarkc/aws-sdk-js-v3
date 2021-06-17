import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ResumeContactRecordingRequest, ResumeContactRecordingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResumeContactRecordingCommandInput extends ResumeContactRecordingRequest {
}
export interface ResumeContactRecordingCommandOutput extends ResumeContactRecordingResponse, __MetadataBearer {
}
/**
 * <p>When a contact is being recorded, and the recording has been suspended using
 *    SuspendContactRecording, this API resumes recording the call.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ResumeContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ResumeContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ResumeContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeContactRecordingCommandInput} for command's `input` shape.
 * @see {@link ResumeContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResumeContactRecordingCommand extends $Command<ResumeContactRecordingCommandInput, ResumeContactRecordingCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ResumeContactRecordingCommandInput;
    constructor(input: ResumeContactRecordingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeContactRecordingCommandInput, ResumeContactRecordingCommandOutput>;
    private serialize;
    private deserialize;
}
