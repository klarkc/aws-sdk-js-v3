import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { SendCommandRequest, SendCommandResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendCommandCommandInput extends SendCommandRequest {
}
export interface SendCommandCommandOutput extends SendCommandResult, __MetadataBearer {
}
/**
 * <p>Runs commands on one or more managed instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendCommandCommand extends $Command<SendCommandCommandInput, SendCommandCommandOutput, SSMClientResolvedConfig> {
    readonly input: SendCommandCommandInput;
    constructor(input: SendCommandCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendCommandCommandInput, SendCommandCommandOutput>;
    private serialize;
    private deserialize;
}
