import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
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
 * import { SESv2Client, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListDeliverabilityTestReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeliverabilityTestReportsCommandInput} for command's `input` shape.
 * @see {@link ListDeliverabilityTestReportsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeliverabilityTestReportsCommand extends $Command<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListDeliverabilityTestReportsCommandInput;
    constructor(input: ListDeliverabilityTestReportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput>;
    private serialize;
    private deserialize;
}
