import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeEventTrackerRequest, DescribeEventTrackerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventTrackerCommandInput extends DescribeEventTrackerRequest {
}
export interface DescribeEventTrackerCommandOutput extends DescribeEventTrackerResponse, __MetadataBearer {
}
/**
 * <p>Describes an event tracker. The response includes the <code>trackingId</code> and
 *       <code>status</code> of the event tracker.
 *       For more information on event trackers, see <a>CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeEventTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventTrackerCommand extends $Command<DescribeEventTrackerCommandInput, DescribeEventTrackerCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeEventTrackerCommandInput;
    constructor(input: DescribeEventTrackerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventTrackerCommandInput, DescribeEventTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
