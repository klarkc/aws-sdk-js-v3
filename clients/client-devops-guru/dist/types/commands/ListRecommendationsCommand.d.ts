import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {
}
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>
 *    		Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListRecommendationsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListRecommendationsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRecommendationsCommand extends $Command<ListRecommendationsCommandInput, ListRecommendationsCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: ListRecommendationsCommandInput;
    constructor(input: ListRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecommendationsCommandInput, ListRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
