import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteFunctionEventInvokeConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFunctionEventInvokeConfigCommandInput extends DeleteFunctionEventInvokeConfigRequest {
}
export interface DeleteFunctionEventInvokeConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFunctionEventInvokeConfigCommand extends $Command<DeleteFunctionEventInvokeConfigCommandInput, DeleteFunctionEventInvokeConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteFunctionEventInvokeConfigCommandInput;
    constructor(input: DeleteFunctionEventInvokeConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFunctionEventInvokeConfigCommandInput, DeleteFunctionEventInvokeConfigCommandOutput>;
    private serialize;
    private deserialize;
}
