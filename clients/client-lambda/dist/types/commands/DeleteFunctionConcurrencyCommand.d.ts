import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteFunctionConcurrencyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFunctionConcurrencyCommandInput extends DeleteFunctionConcurrencyRequest {
}
export interface DeleteFunctionConcurrencyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a concurrent execution limit from a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFunctionConcurrencyCommand extends $Command<DeleteFunctionConcurrencyCommandInput, DeleteFunctionConcurrencyCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteFunctionConcurrencyCommandInput;
    constructor(input: DeleteFunctionConcurrencyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFunctionConcurrencyCommandInput, DeleteFunctionConcurrencyCommandOutput>;
    private serialize;
    private deserialize;
}
