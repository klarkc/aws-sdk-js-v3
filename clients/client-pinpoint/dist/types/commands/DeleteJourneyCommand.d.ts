import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteJourneyRequest, DeleteJourneyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJourneyCommandInput extends DeleteJourneyRequest {
}
export interface DeleteJourneyCommandOutput extends DeleteJourneyResponse, __MetadataBearer {
}
/**
 * <p>Deletes a journey from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJourneyCommandInput} for command's `input` shape.
 * @see {@link DeleteJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJourneyCommand extends $Command<DeleteJourneyCommandInput, DeleteJourneyCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteJourneyCommandInput;
    constructor(input: DeleteJourneyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJourneyCommandInput, DeleteJourneyCommandOutput>;
    private serialize;
    private deserialize;
}
