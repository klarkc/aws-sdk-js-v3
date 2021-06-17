import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ListAvailableManagementCidrRangesRequest, ListAvailableManagementCidrRangesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAvailableManagementCidrRangesCommandInput extends ListAvailableManagementCidrRangesRequest {
}
export interface ListAvailableManagementCidrRangesCommandOutput extends ListAvailableManagementCidrRangesResult, __MetadataBearer {
}
/**
 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
 *
 *          <p>This operation can be run only by AWS accounts that are enabled for BYOL. If your account
 *          isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p>
 *
 *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
 *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAvailableManagementCidrRangesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ListAvailableManagementCidrRangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagementCidrRangesCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagementCidrRangesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAvailableManagementCidrRangesCommand extends $Command<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ListAvailableManagementCidrRangesCommandInput;
    constructor(input: ListAvailableManagementCidrRangesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableManagementCidrRangesCommandInput, ListAvailableManagementCidrRangesCommandOutput>;
    private serialize;
    private deserialize;
}
