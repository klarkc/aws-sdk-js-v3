import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEndpointAccessMessage, EndpointAccessList } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEndpointAccessCommandInput extends DescribeEndpointAccessMessage {
}
export interface DescribeEndpointAccessCommandOutput extends EndpointAccessList, __MetadataBearer {
}
/**
 * <p>Describes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEndpointAccessCommand extends $Command<DescribeEndpointAccessCommandInput, DescribeEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeEndpointAccessCommandInput;
    constructor(input: DescribeEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointAccessCommandInput, DescribeEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
