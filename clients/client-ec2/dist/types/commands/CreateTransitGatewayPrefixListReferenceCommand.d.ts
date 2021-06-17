import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayPrefixListReferenceRequest, CreateTransitGatewayPrefixListReferenceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayPrefixListReferenceCommandInput extends CreateTransitGatewayPrefixListReferenceRequest {
}
export interface CreateTransitGatewayPrefixListReferenceCommandOutput extends CreateTransitGatewayPrefixListReferenceResult, __MetadataBearer {
}
/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayPrefixListReferenceCommand extends $Command<CreateTransitGatewayPrefixListReferenceCommandInput, CreateTransitGatewayPrefixListReferenceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayPrefixListReferenceCommandInput;
    constructor(input: CreateTransitGatewayPrefixListReferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayPrefixListReferenceCommandInput, CreateTransitGatewayPrefixListReferenceCommandOutput>;
    private serialize;
    private deserialize;
}
