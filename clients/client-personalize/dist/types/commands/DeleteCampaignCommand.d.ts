import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteCampaignRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCampaignCommandInput extends DeleteCampaignRequest {
}
export interface DeleteCampaignCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a campaign by deleting the solution deployment. The solution that
 *       the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no
 *       longer be specified in a
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       request.
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCampaignCommand extends $Command<DeleteCampaignCommandInput, DeleteCampaignCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteCampaignCommandInput;
    constructor(input: DeleteCampaignCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCampaignCommandInput, DeleteCampaignCommandOutput>;
    private serialize;
    private deserialize;
}
