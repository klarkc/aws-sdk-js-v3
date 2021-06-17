import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPlatformApplicationsCommandInput extends ListPlatformApplicationsInput {
}
export interface ListPlatformApplicationsCommandOutput extends ListPlatformApplicationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the platform application objects for the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging). The results for
 *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
 *             applications, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListPlatformApplications</code> using the NextToken string received from the
 *             previous call. When there are no more records to return, <code>NextToken</code> will be
 *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 15 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPlatformApplicationsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPlatformApplicationsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListPlatformApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformApplicationsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPlatformApplicationsCommand extends $Command<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListPlatformApplicationsCommandInput;
    constructor(input: ListPlatformApplicationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
