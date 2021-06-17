import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetConnectionsRequest, GetConnectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConnectionsCommandInput extends GetConnectionsRequest {
}
export interface GetConnectionsCommandOutput extends GetConnectionsResponse, __MetadataBearer {
}
/**
 * <p>Gets information about one or more of your connections in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetConnectionsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetConnectionsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionsCommandInput} for command's `input` shape.
 * @see {@link GetConnectionsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConnectionsCommand extends $Command<GetConnectionsCommandInput, GetConnectionsCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: GetConnectionsCommandInput;
    constructor(input: GetConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionsCommandInput, GetConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
