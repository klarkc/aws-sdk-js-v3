import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTransitGatewayRequest, ModifyTransitGatewayResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyTransitGatewayCommandInput extends ModifyTransitGatewayRequest {
}
export interface ModifyTransitGatewayCommandOutput extends ModifyTransitGatewayResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyTransitGatewayCommand extends $Command<ModifyTransitGatewayCommandInput, ModifyTransitGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTransitGatewayCommandInput;
    constructor(input: ModifyTransitGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTransitGatewayCommandInput, ModifyTransitGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
