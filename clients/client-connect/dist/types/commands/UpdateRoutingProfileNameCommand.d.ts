import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateRoutingProfileNameRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRoutingProfileNameCommandInput extends UpdateRoutingProfileNameRequest {
}
export interface UpdateRoutingProfileNameCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format.
 *    At least <code>Name</code> or <code>Description</code> must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRoutingProfileNameCommand extends $Command<UpdateRoutingProfileNameCommandInput, UpdateRoutingProfileNameCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateRoutingProfileNameCommandInput;
    constructor(input: UpdateRoutingProfileNameCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoutingProfileNameCommandInput, UpdateRoutingProfileNameCommandOutput>;
    private serialize;
    private deserialize;
}
