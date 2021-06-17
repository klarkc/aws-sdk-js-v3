import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTableRestoreStatusCommandInput extends DescribeTableRestoreStatusMessage {
}
export interface DescribeTableRestoreStatusCommandOutput extends TableRestoreStatusMessage, __MetadataBearer {
}
/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTableRestoreStatusCommand extends $Command<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeTableRestoreStatusCommandInput;
    constructor(input: DescribeTableRestoreStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput>;
    private serialize;
    private deserialize;
}
