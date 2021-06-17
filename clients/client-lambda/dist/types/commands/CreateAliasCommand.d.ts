import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AliasConfiguration, CreateAliasRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAliasCommandInput extends CreateAliasRequest {
}
export interface CreateAliasCommandOutput extends AliasConfiguration, __MetadataBearer {
}
/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a
 *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
 *       different version.</p>
 *          <p>You can also map an alias to split invocation requests between two versions. Use the
 *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
 *       it receives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAliasCommand extends $Command<CreateAliasCommandInput, CreateAliasCommandOutput, LambdaClientResolvedConfig> {
    readonly input: CreateAliasCommandInput;
    constructor(input: CreateAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAliasCommandInput, CreateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
