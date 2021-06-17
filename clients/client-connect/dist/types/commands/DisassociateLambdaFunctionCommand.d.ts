import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateLambdaFunctionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateLambdaFunctionCommandInput extends DisassociateLambdaFunctionRequest {
}
export interface DisassociateLambdaFunctionCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Remove the Lambda function from the dropdown options available in the relevant contact flow
 *    blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateLambdaFunctionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateLambdaFunctionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateLambdaFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLambdaFunctionCommandInput} for command's `input` shape.
 * @see {@link DisassociateLambdaFunctionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateLambdaFunctionCommand extends $Command<DisassociateLambdaFunctionCommandInput, DisassociateLambdaFunctionCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DisassociateLambdaFunctionCommandInput;
    constructor(input: DisassociateLambdaFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateLambdaFunctionCommandInput, DisassociateLambdaFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
