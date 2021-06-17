import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListApiDestinationsRequest, ListApiDestinationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListApiDestinationsCommandInput extends ListApiDestinationsRequest {
}
export interface ListApiDestinationsCommandOutput extends ListApiDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of API destination in the account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListApiDestinationsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListApiDestinationsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListApiDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListApiDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApiDestinationsCommand extends $Command<ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ListApiDestinationsCommandInput;
    constructor(input: ListApiDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
