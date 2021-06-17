import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListEventTrackersRequest, ListEventTrackersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventTrackersCommandInput extends ListEventTrackersRequest {
}
export interface ListEventTrackersCommandOutput extends ListEventTrackersResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of event trackers associated with the account.
 *       The response provides the properties for each event tracker, including the Amazon Resource
 *       Name (ARN) and tracking ID. For more
 *       information on event trackers, see <a>CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListEventTrackersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListEventTrackersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListEventTrackersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventTrackersCommandInput} for command's `input` shape.
 * @see {@link ListEventTrackersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventTrackersCommand extends $Command<ListEventTrackersCommandInput, ListEventTrackersCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListEventTrackersCommandInput;
    constructor(input: ListEventTrackersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventTrackersCommandInput, ListEventTrackersCommandOutput>;
    private serialize;
    private deserialize;
}
