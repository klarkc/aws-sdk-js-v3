import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLayerVersionPolicyCommandInput extends GetLayerVersionPolicyRequest {
}
export interface GetLayerVersionPolicyCommandOutput extends GetLayerVersionPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionPolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionPolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLayerVersionPolicyCommand extends $Command<GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetLayerVersionPolicyCommandInput;
    constructor(input: GetLayerVersionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
