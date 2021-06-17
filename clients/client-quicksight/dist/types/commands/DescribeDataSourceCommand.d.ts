import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSourceCommandInput extends DescribeDataSourceRequest {
}
export interface DescribeDataSourceCommandOutput extends DescribeDataSourceResponse, __MetadataBearer {
}
/**
 * <p>Describes a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSourceCommand extends $Command<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeDataSourceCommandInput;
    constructor(input: DescribeDataSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
