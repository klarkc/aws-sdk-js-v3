import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AliasConfiguration, GetAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAliasCommandInput extends GetAliasRequest {
}
export interface GetAliasCommandOutput extends AliasConfiguration, __MetadataBearer {
}
/**
 * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAliasCommandInput} for command's `input` shape.
 * @see {@link GetAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAliasCommand extends $Command<GetAliasCommandInput, GetAliasCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetAliasCommandInput;
    constructor(input: GetAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAliasCommandInput, GetAliasCommandOutput>;
    private serialize;
    private deserialize;
}
