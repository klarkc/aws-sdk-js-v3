import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateJourneyRequest, UpdateJourneyResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJourneyCommandInput extends UpdateJourneyRequest {
}
export interface UpdateJourneyCommandOutput extends UpdateJourneyResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJourneyCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJourneyCommand extends $Command<UpdateJourneyCommandInput, UpdateJourneyCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateJourneyCommandInput;
    constructor(input: UpdateJourneyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJourneyCommandInput, UpdateJourneyCommandOutput>;
    private serialize;
    private deserialize;
}
