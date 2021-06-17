import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {
}
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a token for federation.</p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *      Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFederationTokenCommand extends $Command<GetFederationTokenCommandInput, GetFederationTokenCommandOutput, ConnectClientResolvedConfig> {
    readonly input: GetFederationTokenCommandInput;
    constructor(input: GetFederationTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput>;
    private serialize;
    private deserialize;
}
