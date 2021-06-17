import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteFunctionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFunctionCommandInput extends DeleteFunctionRequest {
}
export interface DeleteFunctionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter.
 *       Otherwise, all versions and aliases are deleted.</p>
 *
 *          <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>.
 *       For AWS services and resources that invoke your function directly, delete the trigger in the service where you
 *       originally configured it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFunctionCommand extends $Command<DeleteFunctionCommandInput, DeleteFunctionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: DeleteFunctionCommandInput;
    constructor(input: DeleteFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFunctionCommandInput, DeleteFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
