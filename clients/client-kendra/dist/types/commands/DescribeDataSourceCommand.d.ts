import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSourceCommandInput extends DescribeDataSourceRequest {
}
export interface DescribeDataSourceCommandOutput extends DescribeDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a Amazon Kendra data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSourceCommand extends $Command<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput, KendraClientResolvedConfig> {
    readonly input: DescribeDataSourceCommandInput;
    constructor(input: DescribeDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
