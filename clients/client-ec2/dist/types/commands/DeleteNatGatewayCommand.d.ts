import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNatGatewayCommandInput extends DeleteNatGatewayRequest {
}
export interface DeleteNatGatewayCommandOutput extends DeleteNatGatewayResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNatGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNatGatewayCommand extends $Command<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNatGatewayCommandInput;
    constructor(input: DeleteNatGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
