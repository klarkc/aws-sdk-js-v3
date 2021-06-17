import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkInterfacePermissionCommandInput extends CreateNetworkInterfacePermissionRequest {
}
export interface CreateNetworkInterfacePermissionCommandOutput extends CreateNetworkInterfacePermissionResult, __MetadataBearer {
}
/**
 * <p>Grants an AWS-authorized account permission to attach the specified network interface to
 *             an instance in their account.</p>
 * 		       <p>You can grant permission to a single AWS account only, and only one account at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkInterfacePermissionCommand extends $Command<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkInterfacePermissionCommandInput;
    constructor(input: CreateNetworkInterfacePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
