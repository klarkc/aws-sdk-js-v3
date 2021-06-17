import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserSecurityProfilesRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserSecurityProfilesCommandInput extends UpdateUserSecurityProfilesRequest {
}
export interface UpdateUserSecurityProfilesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Assigns the specified security profiles to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserSecurityProfilesCommand extends $Command<UpdateUserSecurityProfilesCommandInput, UpdateUserSecurityProfilesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateUserSecurityProfilesCommandInput;
    constructor(input: UpdateUserSecurityProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserSecurityProfilesCommandInput, UpdateUserSecurityProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
