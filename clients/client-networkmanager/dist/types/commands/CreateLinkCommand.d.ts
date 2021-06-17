import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateLinkRequest, CreateLinkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLinkCommandInput extends CreateLinkRequest {
}
export interface CreateLinkCommandOutput extends CreateLinkResponse, __MetadataBearer {
}
/**
 * <p>Creates a new link for a specified site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLinkCommand extends $Command<CreateLinkCommandInput, CreateLinkCommandOutput, NetworkManagerClientResolvedConfig> {
    readonly input: CreateLinkCommandInput;
    constructor(input: CreateLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLinkCommandInput, CreateLinkCommandOutput>;
    private serialize;
    private deserialize;
}
