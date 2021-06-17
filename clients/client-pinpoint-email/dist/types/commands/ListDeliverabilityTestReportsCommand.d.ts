import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeliverabilityTestReportsCommandInput extends ListDeliverabilityTestReportsRequest {
}
export interface ListDeliverabilityTestReportsCommandOutput extends ListDeliverabilityTestReportsResponse, __MetadataBearer {
}
/**
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListDeliverabilityTestReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeliverabilityTestReportsCommandInput} for command's `input` shape.
 * @see {@link ListDeliverabilityTestReportsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeliverabilityTestReportsCommand extends $Command<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: ListDeliverabilityTestReportsCommandInput;
    constructor(input: ListDeliverabilityTestReportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput>;
    private serialize;
    private deserialize;
}
