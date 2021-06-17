import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { AccessPointDescription, CreateAccessPointRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccessPointCommandInput extends CreateAccessPointRequest {
}
export interface CreateAccessPointCommandOutput extends AccessPointDescription, __MetadataBearer {
}
/**
 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS
 *       file system that applies an operating system user and group, and a file system path, to any
 *       file system request made through the access point. The operating system user and group
 *       override any identity information provided by the NFS client. The file system path is exposed
 *       as the access point's root directory. Applications using the access point can only access data
 *       in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access
 *         points</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccessPointCommand extends $Command<CreateAccessPointCommandInput, CreateAccessPointCommandOutput, EFSClientResolvedConfig> {
    readonly input: CreateAccessPointCommandInput;
    constructor(input: CreateAccessPointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessPointCommandInput, CreateAccessPointCommandOutput>;
    private serialize;
    private deserialize;
}
