import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { AssociateIpGroupsRequest, AssociateIpGroupsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateIpGroupsCommandInput extends AssociateIpGroupsRequest {
}
export interface AssociateIpGroupsCommandOutput extends AssociateIpGroupsResult, __MetadataBearer {
}
/**
 * <p>Associates the specified IP access control group with the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AssociateIpGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIpGroupsCommandInput} for command's `input` shape.
 * @see {@link AssociateIpGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateIpGroupsCommand extends $Command<AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: AssociateIpGroupsCommandInput;
    constructor(input: AssociateIpGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
