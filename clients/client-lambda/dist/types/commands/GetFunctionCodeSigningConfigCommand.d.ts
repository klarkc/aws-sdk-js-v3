import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionCodeSigningConfigRequest, GetFunctionCodeSigningConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFunctionCodeSigningConfigCommandInput extends GetFunctionCodeSigningConfigRequest {
}
export interface GetFunctionCodeSigningConfigCommandOutput extends GetFunctionCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns the code signing configuration for the specified function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFunctionCodeSigningConfigCommand extends $Command<GetFunctionCodeSigningConfigCommandInput, GetFunctionCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetFunctionCodeSigningConfigCommandInput;
    constructor(input: GetFunctionCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionCodeSigningConfigCommandInput, GetFunctionCodeSigningConfigCommandOutput>;
    private serialize;
    private deserialize;
}
