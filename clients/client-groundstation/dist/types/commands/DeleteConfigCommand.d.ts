import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, DeleteConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConfigCommandInput extends DeleteConfigRequest {
}
export interface DeleteConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {
}
/**
 * <p>Deletes a <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new DeleteConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConfigCommand extends $Command<DeleteConfigCommandInput, DeleteConfigCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteConfigCommandInput;
    constructor(input: DeleteConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigCommandInput, DeleteConfigCommandOutput>;
    private serialize;
    private deserialize;
}
