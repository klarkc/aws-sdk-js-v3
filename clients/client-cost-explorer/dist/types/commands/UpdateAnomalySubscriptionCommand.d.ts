import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { UpdateAnomalySubscriptionRequest, UpdateAnomalySubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAnomalySubscriptionCommandInput extends UpdateAnomalySubscriptionRequest {
}
export interface UpdateAnomalySubscriptionCommandOutput extends UpdateAnomalySubscriptionResponse, __MetadataBearer {
}
/**
 * <p> Updates an existing cost anomaly monitor subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAnomalySubscriptionCommand extends $Command<UpdateAnomalySubscriptionCommandInput, UpdateAnomalySubscriptionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: UpdateAnomalySubscriptionCommandInput;
    constructor(input: UpdateAnomalySubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAnomalySubscriptionCommandInput, UpdateAnomalySubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
