import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreAddressToClassicCommandInput extends RestoreAddressToClassicRequest {
}
export interface RestoreAddressToClassicCommandOutput extends RestoreAddressToClassicResult, __MetadataBearer {
}
/**
 * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreAddressToClassicCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreAddressToClassicCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreAddressToClassicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreAddressToClassicCommandInput} for command's `input` shape.
 * @see {@link RestoreAddressToClassicCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreAddressToClassicCommand extends $Command<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RestoreAddressToClassicCommandInput;
    constructor(input: RestoreAddressToClassicCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput>;
    private serialize;
    private deserialize;
}
