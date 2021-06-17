import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, UpdateFunctionCodeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFunctionCodeCommandInput extends UpdateFunctionCodeRequest {
}
export interface UpdateFunctionCodeCommandOutput extends FunctionConfiguration, __MetadataBearer {
}
/**
 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed
 *       by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p>
 *
 *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
 *       only the unpublished version.</p>
 *          <note>
 *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if
 *         you update the image tag to a new image, Lambda does not automatically update the function.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionCodeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionCodeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCodeCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCodeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFunctionCodeCommand extends $Command<UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput, LambdaClientResolvedConfig> {
    readonly input: UpdateFunctionCodeCommandInput;
    constructor(input: UpdateFunctionCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput>;
    private serialize;
    private deserialize;
}
