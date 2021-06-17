import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVgwRoutePropagationRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableVgwRoutePropagationCommandInput extends EnableVgwRoutePropagationRequest {
}
export interface EnableVgwRoutePropagationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableVgwRoutePropagationCommand extends $Command<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableVgwRoutePropagationCommandInput;
    constructor(input: EnableVgwRoutePropagationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
