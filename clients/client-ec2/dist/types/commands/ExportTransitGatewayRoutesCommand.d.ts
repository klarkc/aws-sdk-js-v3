import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportTransitGatewayRoutesCommandInput extends ExportTransitGatewayRoutesRequest {
}
export interface ExportTransitGatewayRoutesCommandOutput extends ExportTransitGatewayRoutesResult, __MetadataBearer {
}
/**
 * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
 *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
 *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
 *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables
 *                 to Amazon S3</a> in <i>Transit Gateways</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ExportTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportTransitGatewayRoutesCommand extends $Command<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportTransitGatewayRoutesCommandInput;
    constructor(input: ExportTransitGatewayRoutesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
