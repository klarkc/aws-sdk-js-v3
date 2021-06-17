import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteCustomerGatewayRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomerGatewayCommandInput extends DeleteCustomerGatewayRequest {
}
export interface DeleteCustomerGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomerGatewayCommand extends $Command<DeleteCustomerGatewayCommandInput, DeleteCustomerGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteCustomerGatewayCommandInput;
    constructor(input: DeleteCustomerGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomerGatewayCommandInput, DeleteCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
