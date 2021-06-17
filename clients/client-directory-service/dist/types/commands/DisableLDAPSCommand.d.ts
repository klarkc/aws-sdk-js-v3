import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DisableLDAPSRequest, DisableLDAPSResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableLDAPSCommandInput extends DisableLDAPSRequest {
}
export interface DisableLDAPSCommandOutput extends DisableLDAPSResult, __MetadataBearer {
}
/**
 * <p>Deactivates LDAP secure calls for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DisableLDAPSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableLDAPSCommandInput} for command's `input` shape.
 * @see {@link DisableLDAPSCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableLDAPSCommand extends $Command<DisableLDAPSCommandInput, DisableLDAPSCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DisableLDAPSCommandInput;
    constructor(input: DisableLDAPSCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableLDAPSCommandInput, DisableLDAPSCommandOutput>;
    private serialize;
    private deserialize;
}
