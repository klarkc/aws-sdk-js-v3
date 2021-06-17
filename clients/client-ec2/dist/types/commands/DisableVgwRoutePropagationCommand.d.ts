import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVgwRoutePropagationRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableVgwRoutePropagationCommandInput extends DisableVgwRoutePropagationRequest {
}
export interface DisableVgwRoutePropagationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableVgwRoutePropagationCommand extends $Command<DisableVgwRoutePropagationCommandInput, DisableVgwRoutePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableVgwRoutePropagationCommandInput;
    constructor(input: DisableVgwRoutePropagationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableVgwRoutePropagationCommandInput, DisableVgwRoutePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
