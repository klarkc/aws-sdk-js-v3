import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { UpdateServerRequest, UpdateServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateServerCommandInput extends UpdateServerRequest {
}
export interface UpdateServerCommandOutput extends UpdateServerResponse, __MetadataBearer {
}
/**
 * <p>
 *       Updates settings for a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, UpdateServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, UpdateServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new UpdateServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateServerCommand extends $Command<UpdateServerCommandInput, UpdateServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: UpdateServerCommandInput;
    constructor(input: UpdateServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerCommandInput, UpdateServerCommandOutput>;
    private serialize;
    private deserialize;
}
