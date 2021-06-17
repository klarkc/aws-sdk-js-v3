import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GenerateChangeSetRequest, GenerateChangeSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GenerateChangeSetCommandInput extends GenerateChangeSetRequest {
}
export interface GenerateChangeSetCommandOutput extends GenerateChangeSetResponse, __MetadataBearer {
}
/**
 * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
 *             object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateChangeSetCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateChangeSetCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GenerateChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateChangeSetCommandInput} for command's `input` shape.
 * @see {@link GenerateChangeSetCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateChangeSetCommand extends $Command<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput, SMSClientResolvedConfig> {
    readonly input: GenerateChangeSetCommandInput;
    constructor(input: GenerateChangeSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
