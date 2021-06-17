import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, PublishVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PublishVersionCommandInput extends PublishVersionRequest {
}
export interface PublishVersionCommandOutput extends FunctionConfiguration, __MetadataBearer {
}
/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the
 *       current code and configuration of a function. Use versions to create a snapshot of your function code and
 *       configuration that doesn't change.</p>
 *
 *          <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last
 *       version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the
 *       function before publishing a version.</p>
 *
 *          <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PublishVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishVersionCommandInput} for command's `input` shape.
 * @see {@link PublishVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PublishVersionCommand extends $Command<PublishVersionCommandInput, PublishVersionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: PublishVersionCommandInput;
    constructor(input: PublishVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishVersionCommandInput, PublishVersionCommandOutput>;
    private serialize;
    private deserialize;
}
