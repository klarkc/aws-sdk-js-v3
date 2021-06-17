import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCampaignsCommandInput extends ListCampaignsRequest {
}
export interface ListCampaignsCommandOutput extends ListCampaignsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of campaigns that use the given solution.
 *       When a solution is not specified, all the campaigns associated with the account are listed.
 *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListCampaignsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListCampaignsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCampaignsCommand extends $Command<ListCampaignsCommandInput, ListCampaignsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListCampaignsCommandInput;
    constructor(input: ListCampaignsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCampaignsCommandInput, ListCampaignsCommandOutput>;
    private serialize;
    private deserialize;
}
