import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetCodeSigningConfigRequest, GetCodeSigningConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCodeSigningConfigCommandInput extends GetCodeSigningConfigRequest {
}
export interface GetCodeSigningConfigCommandOutput extends GetCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified code signing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCodeSigningConfigCommand extends $Command<GetCodeSigningConfigCommandInput, GetCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetCodeSigningConfigCommandInput;
    constructor(input: GetCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCodeSigningConfigCommandInput, GetCodeSigningConfigCommandOutput>;
    private serialize;
    private deserialize;
}
