import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInternetGatewaysRequest, DescribeInternetGatewaysResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInternetGatewaysCommandInput extends DescribeInternetGatewaysRequest {
}
export interface DescribeInternetGatewaysCommandOutput extends DescribeInternetGatewaysResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInternetGatewaysCommand extends $Command<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInternetGatewaysCommandInput;
    constructor(input: DescribeInternetGatewaysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInternetGatewaysCommandInput, DescribeInternetGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
