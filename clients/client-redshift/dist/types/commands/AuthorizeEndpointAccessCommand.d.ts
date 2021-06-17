import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeEndpointAccessMessage, EndpointAuthorization } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeEndpointAccessCommandInput extends AuthorizeEndpointAccessMessage {
}
export interface AuthorizeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {
}
/**
 * <p>Grants access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AuthorizeEndpointAccessCommand extends $Command<AuthorizeEndpointAccessCommandInput, AuthorizeEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: AuthorizeEndpointAccessCommandInput;
    constructor(input: AuthorizeEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeEndpointAccessCommandInput, AuthorizeEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
