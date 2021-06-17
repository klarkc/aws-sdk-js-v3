import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListLayersRequest, ListLayersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLayersCommandInput extends ListLayersRequest {
}
export interface ListLayersCommandOutput extends ListLayersResponse, __MetadataBearer {
}
/**
 * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers
 *       that indicate that they're compatible with that runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLayersCommandInput} for command's `input` shape.
 * @see {@link ListLayersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLayersCommand extends $Command<ListLayersCommandInput, ListLayersCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListLayersCommandInput;
    constructor(input: ListLayersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLayersCommandInput, ListLayersCommandOutput>;
    private serialize;
    private deserialize;
}
