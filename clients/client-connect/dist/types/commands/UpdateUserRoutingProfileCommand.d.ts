import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserRoutingProfileRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserRoutingProfileCommandInput extends UpdateUserRoutingProfileRequest {
}
export interface UpdateUserRoutingProfileCommandOutput extends __MetadataBearer {
}
/**
 * <p>Assigns the specified routing profile to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserRoutingProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserRoutingProfileCommand extends $Command<UpdateUserRoutingProfileCommandInput, UpdateUserRoutingProfileCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateUserRoutingProfileCommandInput;
    constructor(input: UpdateUserRoutingProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserRoutingProfileCommandInput, UpdateUserRoutingProfileCommandOutput>;
    private serialize;
    private deserialize;
}
