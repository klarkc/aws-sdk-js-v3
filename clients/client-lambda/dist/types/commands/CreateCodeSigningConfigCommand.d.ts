import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateCodeSigningConfigRequest, CreateCodeSigningConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCodeSigningConfigCommandInput extends CreateCodeSigningConfigRequest {
}
export interface CreateCodeSigningConfigCommandOutput extends CreateCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * <p>Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">code signing configuration</a> defines a list of
 *       allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment
 *       validation checks fail). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link CreateCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCodeSigningConfigCommand extends $Command<CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: CreateCodeSigningConfigCommandInput;
    constructor(input: CreateCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput>;
    private serialize;
    private deserialize;
}
