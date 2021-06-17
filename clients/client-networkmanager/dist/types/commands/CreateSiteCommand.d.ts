import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateSiteRequest, CreateSiteResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSiteCommandInput extends CreateSiteRequest {
}
export interface CreateSiteCommandOutput extends CreateSiteResponse, __MetadataBearer {
}
/**
 * <p>Creates a new site in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSiteCommandInput} for command's `input` shape.
 * @see {@link CreateSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSiteCommand extends $Command<CreateSiteCommandInput, CreateSiteCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: CreateSiteCommandInput;
    constructor(input: CreateSiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSiteCommandInput, CreateSiteCommandOutput>;
    private serialize;
    private deserialize;
}
