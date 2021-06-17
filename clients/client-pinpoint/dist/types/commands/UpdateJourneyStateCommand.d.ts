import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateJourneyStateRequest, UpdateJourneyStateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJourneyStateCommandInput extends UpdateJourneyStateRequest {
}
export interface UpdateJourneyStateCommandOutput extends UpdateJourneyStateResponse, __MetadataBearer {
}
/**
 * <p>Cancels (stops) an active journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyStateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyStateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateJourneyStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJourneyStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyStateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJourneyStateCommand extends $Command<UpdateJourneyStateCommandInput, UpdateJourneyStateCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateJourneyStateCommandInput;
    constructor(input: UpdateJourneyStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJourneyStateCommandInput, UpdateJourneyStateCommandOutput>;
    private serialize;
    private deserialize;
}
