import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRouteTableRequest, CreateRouteTableResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRouteTableCommandInput extends CreateRouteTableRequest {
}
export interface CreateRouteTableCommandOutput extends CreateRouteTableResult, __MetadataBearer {
}
/**
 * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteTableCommandInput} for command's `input` shape.
 * @see {@link CreateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRouteTableCommand extends $Command<CreateRouteTableCommandInput, CreateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateRouteTableCommandInput;
    constructor(input: CreateRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteTableCommandInput, CreateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
