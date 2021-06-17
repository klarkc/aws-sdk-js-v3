import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcAttributeRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpcAttributeCommandInput extends ModifyVpcAttributeRequest {
}
export interface ModifyVpcAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Modifies the specified attribute of the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpcAttributeCommand extends $Command<ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcAttributeCommandInput;
    constructor(input: ModifyVpcAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
