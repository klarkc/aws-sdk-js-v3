import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSecurityProfilesCommandInput extends ListSecurityProfilesRequest {
}
export interface ListSecurityProfilesCommandOutput extends ListSecurityProfilesResponse, __MetadataBearer {
}
/**
 * <p>Provides summary information about the security profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSecurityProfilesCommand extends $Command<ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListSecurityProfilesCommandInput;
    constructor(input: ListSecurityProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
