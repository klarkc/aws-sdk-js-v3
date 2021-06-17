import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeLoggingStatusMessage, LoggingStatus } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLoggingStatusCommandInput extends DescribeLoggingStatusMessage {
}
export interface DescribeLoggingStatusCommandOutput extends LoggingStatus, __MetadataBearer {
}
/**
 * <p>Describes whether information, such as queries and connection attempts, is being
 *             logged for the specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeLoggingStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeLoggingStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeLoggingStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLoggingStatusCommand extends $Command<DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeLoggingStatusCommandInput;
    constructor(input: DescribeLoggingStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput>;
    private serialize;
    private deserialize;
}
