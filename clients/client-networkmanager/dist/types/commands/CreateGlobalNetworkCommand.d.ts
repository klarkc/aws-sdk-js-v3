import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateGlobalNetworkRequest, CreateGlobalNetworkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGlobalNetworkCommandInput extends CreateGlobalNetworkRequest {
}
export interface CreateGlobalNetworkCommandOutput extends CreateGlobalNetworkResponse, __MetadataBearer {
}
/**
 * <p>Creates a new, empty global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGlobalNetworkCommand extends $Command<CreateGlobalNetworkCommandInput, CreateGlobalNetworkCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: CreateGlobalNetworkCommandInput;
    constructor(input: CreateGlobalNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGlobalNetworkCommandInput, CreateGlobalNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
