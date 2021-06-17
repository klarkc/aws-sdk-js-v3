import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTransitGatewayPrefixListReferenceRequest, ModifyTransitGatewayPrefixListReferenceResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyTransitGatewayPrefixListReferenceCommandInput extends ModifyTransitGatewayPrefixListReferenceRequest {
}
export interface ModifyTransitGatewayPrefixListReferenceCommandOutput extends ModifyTransitGatewayPrefixListReferenceResult, __MetadataBearer {
}
/**
 * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyTransitGatewayPrefixListReferenceCommand extends $Command<ModifyTransitGatewayPrefixListReferenceCommandInput, ModifyTransitGatewayPrefixListReferenceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTransitGatewayPrefixListReferenceCommandInput;
    constructor(input: ModifyTransitGatewayPrefixListReferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTransitGatewayPrefixListReferenceCommandInput, ModifyTransitGatewayPrefixListReferenceCommandOutput>;
    private serialize;
    private deserialize;
}
