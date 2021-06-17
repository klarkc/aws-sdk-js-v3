import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, UpdateFunctionConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFunctionConfigurationCommandInput extends UpdateFunctionConfigurationRequest {
}
export interface UpdateFunctionConfigurationCommandOutput extends FunctionConfiguration, __MetadataBearer {
}
/**
 * <p>Modify the version-specific settings of a Lambda function.</p>
 *
 *          <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If
 *       your function connects to a VPC, this process can take a minute. During this time, you can't modify the function,
 *       but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and
 *         <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
 *       indicate when the update is complete and the function is processing events with the new configuration. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function
 *       States</a>.</p>
 *
 *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
 *       modify the configuration of a published version, only the unpublished version.</p>
 *
 *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
 *       to an account or AWS service, use <a>AddPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFunctionConfigurationCommand extends $Command<UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput, LambdaClientResolvedConfig> {
    readonly input: UpdateFunctionConfigurationCommandInput;
    constructor(input: UpdateFunctionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
