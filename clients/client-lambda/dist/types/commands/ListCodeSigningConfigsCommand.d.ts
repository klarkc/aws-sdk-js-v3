import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCodeSigningConfigsCommandInput extends ListCodeSigningConfigsRequest {
}
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCodeSigningConfigsCommand extends $Command<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListCodeSigningConfigsCommandInput;
    constructor(input: ListCodeSigningConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
