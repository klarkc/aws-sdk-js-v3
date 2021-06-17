import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ContactIdResponse, ReserveContactRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReserveContactCommandInput extends ReserveContactRequest {
}
export interface ReserveContactCommandOutput extends ContactIdResponse, __MetadataBearer {
}
/**
 * <p>Reserves a contact using specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ReserveContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ReserveContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ReserveContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReserveContactCommandInput} for command's `input` shape.
 * @see {@link ReserveContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReserveContactCommand extends $Command<ReserveContactCommandInput, ReserveContactCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ReserveContactCommandInput;
    constructor(input: ReserveContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReserveContactCommandInput, ReserveContactCommandOutput>;
    private serialize;
    private deserialize;
}
