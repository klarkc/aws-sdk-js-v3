import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EndpointAuthorization } from "../models/models_0";
import { RevokeEndpointAccessMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeEndpointAccessCommandInput extends RevokeEndpointAccessMessage {
}
export interface RevokeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {
}
/**
 * <p>Revokes access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeEndpointAccessCommand extends $Command<RevokeEndpointAccessCommandInput, RevokeEndpointAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RevokeEndpointAccessCommandInput;
    constructor(input: RevokeEndpointAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeEndpointAccessCommandInput, RevokeEndpointAccessCommandOutput>;
    private serialize;
    private deserialize;
}
