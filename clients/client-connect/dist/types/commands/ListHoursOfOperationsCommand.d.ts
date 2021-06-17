import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListHoursOfOperationsRequest, ListHoursOfOperationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHoursOfOperationsCommandInput extends ListHoursOfOperationsRequest {
}
export interface ListHoursOfOperationsCommandOutput extends ListHoursOfOperationsResponse, __MetadataBearer {
}
/**
 * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
 *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
 *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link ListHoursOfOperationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHoursOfOperationsCommand extends $Command<ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListHoursOfOperationsCommandInput;
    constructor(input: ListHoursOfOperationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
