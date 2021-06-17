import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionConcurrencyRequest, GetFunctionConcurrencyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFunctionConcurrencyCommandInput extends GetFunctionConcurrencyRequest {
}
export interface GetFunctionConcurrencyCommandOutput extends GetFunctionConcurrencyResponse, __MetadataBearer {
}
/**
 * <p>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a
 *       function, use <a>PutFunctionConcurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link GetFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFunctionConcurrencyCommand extends $Command<GetFunctionConcurrencyCommandInput, GetFunctionConcurrencyCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetFunctionConcurrencyCommandInput;
    constructor(input: GetFunctionConcurrencyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionConcurrencyCommandInput, GetFunctionConcurrencyCommandOutput>;
    private serialize;
    private deserialize;
}
