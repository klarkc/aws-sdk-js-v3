import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetEventSelectorsRequest, GetEventSelectorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEventSelectorsCommandInput extends GetEventSelectorsRequest {
}
export interface GetEventSelectorsCommandOutput extends GetEventSelectorsResponse, __MetadataBearer {
}
/**
 * <p>Describes the settings for the event selectors that you configured for your trail.
 *          The information returned for your event selectors includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>If your event selector includes read-only events, write-only events, or
 *             all events. This applies to both management events and data events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes management events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions
 *             that you are logging for data events.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
 *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEventSelectorsCommand extends $Command<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: GetEventSelectorsCommandInput;
    constructor(input: GetEventSelectorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput>;
    private serialize;
    private deserialize;
}
