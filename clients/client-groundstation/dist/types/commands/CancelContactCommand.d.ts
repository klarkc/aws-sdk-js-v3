import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CancelContactRequest, ContactIdResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelContactCommandInput extends CancelContactRequest {
}
export interface CancelContactCommandOutput extends ContactIdResponse, __MetadataBearer {
}
/**
 * <p>Cancels a contact with a specified contact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CancelContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CancelContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CancelContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelContactCommandInput} for command's `input` shape.
 * @see {@link CancelContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelContactCommand extends $Command<CancelContactCommandInput, CancelContactCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CancelContactCommandInput;
    constructor(input: CancelContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelContactCommandInput, CancelContactCommandOutput>;
    private serialize;
    private deserialize;
}
