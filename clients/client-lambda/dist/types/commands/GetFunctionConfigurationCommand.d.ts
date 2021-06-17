import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, GetFunctionConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFunctionConfigurationCommandInput extends GetFunctionConfigurationRequest {
}
export interface GetFunctionConfigurationCommandOutput extends FunctionConfiguration, __MetadataBearer {
}
/**
 * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that
 *       can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFunctionConfigurationCommand extends $Command<GetFunctionConfigurationCommandInput, GetFunctionConfigurationCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetFunctionConfigurationCommandInput;
    constructor(input: GetFunctionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionConfigurationCommandInput, GetFunctionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
