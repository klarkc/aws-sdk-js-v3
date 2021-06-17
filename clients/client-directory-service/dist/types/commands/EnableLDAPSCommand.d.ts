import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableLDAPSRequest, EnableLDAPSResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableLDAPSCommandInput extends EnableLDAPSRequest {
}
export interface EnableLDAPSCommandOutput extends EnableLDAPSResult, __MetadataBearer {
}
/**
 * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableLDAPSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableLDAPSCommandInput} for command's `input` shape.
 * @see {@link EnableLDAPSCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableLDAPSCommand extends $Command<EnableLDAPSCommandInput, EnableLDAPSCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableLDAPSCommandInput;
    constructor(input: EnableLDAPSCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableLDAPSCommandInput, EnableLDAPSCommandOutput>;
    private serialize;
    private deserialize;
}
