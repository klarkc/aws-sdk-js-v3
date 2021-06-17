import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInternetGatewayRequest, CreateInternetGatewayResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInternetGatewayCommandInput extends CreateInternetGatewayRequest {
}
export interface CreateInternetGatewayCommandOutput extends CreateInternetGatewayResult, __MetadataBearer {
}
/**
 * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway,
 * 			you attach it to a VPC using <a>AttachInternetGateway</a>.</p>
 *          <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInternetGatewayCommand extends $Command<CreateInternetGatewayCommandInput, CreateInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateInternetGatewayCommandInput;
    constructor(input: CreateInternetGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInternetGatewayCommandInput, CreateInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
