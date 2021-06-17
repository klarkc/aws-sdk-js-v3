import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyRequest, GetJourneyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJourneyCommandInput extends GetJourneyRequest {
}
export interface GetJourneyCommandOutput extends GetJourneyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status, configuration, and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJourneyCommandInput} for command's `input` shape.
 * @see {@link GetJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJourneyCommand extends $Command<GetJourneyCommandInput, GetJourneyCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetJourneyCommandInput;
    constructor(input: GetJourneyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJourneyCommandInput, GetJourneyCommandOutput>;
    private serialize;
    private deserialize;
}
