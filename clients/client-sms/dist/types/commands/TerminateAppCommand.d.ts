import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { TerminateAppRequest, TerminateAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateAppCommandInput extends TerminateAppRequest {
}
export interface TerminateAppCommandOutput extends TerminateAppResponse, __MetadataBearer {
}
/**
 * <p>Terminates the stack for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, TerminateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, TerminateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new TerminateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateAppCommandInput} for command's `input` shape.
 * @see {@link TerminateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateAppCommand extends $Command<TerminateAppCommandInput, TerminateAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: TerminateAppCommandInput;
    constructor(input: TerminateAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateAppCommandInput, TerminateAppCommandOutput>;
    private serialize;
    private deserialize;
}
