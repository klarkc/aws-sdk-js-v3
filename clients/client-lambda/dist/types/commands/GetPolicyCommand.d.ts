import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPolicyCommandInput extends GetPolicyRequest {
}
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetPolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPolicyCommand extends $Command<GetPolicyCommandInput, GetPolicyCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetPolicyCommandInput;
    constructor(input: GetPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPolicyCommandInput, GetPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
