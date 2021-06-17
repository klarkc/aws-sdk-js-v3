import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewaysRequest, DescribeLocalGatewaysResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocalGatewaysCommandInput extends DescribeLocalGatewaysRequest {
}
export interface DescribeLocalGatewaysCommandOutput extends DescribeLocalGatewaysResult, __MetadataBearer {
}
/**
 * <p>Describes one or more local gateways. By default, all local gateways are described.
 *         Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocalGatewaysCommand extends $Command<DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewaysCommandInput;
    constructor(input: DescribeLocalGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewaysCommandInput, DescribeLocalGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
