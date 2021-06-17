import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListVersionsByFunctionRequest, ListVersionsByFunctionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVersionsByFunctionCommandInput extends ListVersionsByFunctionRequest {
}
export interface ListVersionsByFunctionCommandOutput extends ListVersionsByFunctionResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>,
 *       with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListVersionsByFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListVersionsByFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListVersionsByFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVersionsByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListVersionsByFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVersionsByFunctionCommand extends $Command<ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListVersionsByFunctionCommandInput;
    constructor(input: ListVersionsByFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput>;
    private serialize;
    private deserialize;
}
