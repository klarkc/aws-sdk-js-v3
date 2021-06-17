import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfacesRequest, DescribeNetworkInterfacesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkInterfacesCommandInput extends DescribeNetworkInterfacesRequest {
}
export interface DescribeNetworkInterfacesCommandOutput extends DescribeNetworkInterfacesResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your network interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkInterfacesCommand extends $Command<DescribeNetworkInterfacesCommandInput, DescribeNetworkInterfacesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfacesCommandInput;
    constructor(input: DescribeNetworkInterfacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfacesCommandInput, DescribeNetworkInterfacesCommandOutput>;
    private serialize;
    private deserialize;
}
