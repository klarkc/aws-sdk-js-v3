import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventCategoriesCommandInput extends DescribeEventCategoriesMessage {
}
export interface DescribeEventCategoriesCommandOutput extends EventCategoriesMessage, __MetadataBearer {
}
/**
 * <p>Displays a list of categories for all event source types, or, if specified, for a
 *             specified source type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventCategoriesCommand extends $Command<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeEventCategoriesCommandInput;
    constructor(input: DescribeEventCategoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
