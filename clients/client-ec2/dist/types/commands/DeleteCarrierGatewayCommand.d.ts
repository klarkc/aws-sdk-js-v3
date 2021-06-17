import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteCarrierGatewayRequest, DeleteCarrierGatewayResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCarrierGatewayCommandInput extends DeleteCarrierGatewayRequest {
}
export interface DeleteCarrierGatewayCommandOutput extends DeleteCarrierGatewayResult, __MetadataBearer {
}
/**
 * <p>Deletes a carrier gateway.</p>
 *         <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCarrierGatewayCommand extends $Command<DeleteCarrierGatewayCommandInput, DeleteCarrierGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteCarrierGatewayCommandInput;
    constructor(input: DeleteCarrierGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCarrierGatewayCommandInput, DeleteCarrierGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
