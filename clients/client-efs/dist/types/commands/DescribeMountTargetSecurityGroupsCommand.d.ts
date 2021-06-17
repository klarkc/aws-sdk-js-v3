import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeMountTargetSecurityGroupsRequest, DescribeMountTargetSecurityGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMountTargetSecurityGroupsCommandInput extends DescribeMountTargetSecurityGroupsRequest {
}
export interface DescribeMountTargetSecurityGroupsCommandOutput extends DescribeMountTargetSecurityGroupsResponse, __MetadataBearer {
}
/**
 * <p>Returns the security groups currently in effect for a mount target. This operation
 *       requires that the network interface of the mount target has been created and the lifecycle
 *       state of the mount target is not <code>deleted</code>.</p>
 *          <p>This operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's
 *           network interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMountTargetSecurityGroupsCommand extends $Command<DescribeMountTargetSecurityGroupsCommandInput, DescribeMountTargetSecurityGroupsCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeMountTargetSecurityGroupsCommandInput;
    constructor(input: DescribeMountTargetSecurityGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMountTargetSecurityGroupsCommandInput, DescribeMountTargetSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
