import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListRoutingProfilesRequest, ListRoutingProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRoutingProfilesCommandInput extends ListRoutingProfilesRequest {
}
export interface ListRoutingProfilesCommandOutput extends ListRoutingProfilesResponse, __MetadataBearer {
}
/**
 * <p>Provides summary information about the routing profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
 *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoutingProfilesCommand extends $Command<ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListRoutingProfilesCommandInput;
    constructor(input: ListRoutingProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
