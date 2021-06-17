import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCarrierGatewayRequest, CreateCarrierGatewayResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCarrierGatewayCommandInput extends CreateCarrierGatewayRequest {
}
export interface CreateCarrierGatewayCommandOutput extends CreateCarrierGatewayResult, __MetadataBearer {
}
/**
 * <p>Creates a carrier gateway.   For more information about carrier gateways, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway">Carrier gateways</a> in the <i>AWS Wavelength Developer
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCarrierGatewayCommand extends $Command<CreateCarrierGatewayCommandInput, CreateCarrierGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateCarrierGatewayCommandInput;
    constructor(input: CreateCarrierGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCarrierGatewayCommandInput, CreateCarrierGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
