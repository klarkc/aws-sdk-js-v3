import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateJourneyRequest, CreateJourneyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateJourneyCommandInput extends CreateJourneyRequest {
}
export interface CreateJourneyCommandOutput extends CreateJourneyResponse, __MetadataBearer {
}
/**
 * <p>Creates a journey for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJourneyCommandInput} for command's `input` shape.
 * @see {@link CreateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateJourneyCommand extends $Command<CreateJourneyCommandInput, CreateJourneyCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateJourneyCommandInput;
    constructor(input: CreateJourneyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateJourneyCommandInput, CreateJourneyCommandOutput>;
    private serialize;
    private deserialize;
}
