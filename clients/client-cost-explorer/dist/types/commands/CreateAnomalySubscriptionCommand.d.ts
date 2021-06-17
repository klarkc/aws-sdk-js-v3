import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateAnomalySubscriptionRequest, CreateAnomalySubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAnomalySubscriptionCommandInput extends CreateAnomalySubscriptionRequest {
}
export interface CreateAnomalySubscriptionCommandOutput extends CreateAnomalySubscriptionResponse, __MetadataBearer {
}
/**
 * <p>Adds a subscription to a cost anomaly detection monitor. You can use each subscription to
 *       define subscribers with email or SNS notifications. Email subscribers can set a dollar
 *       threshold and a time frequency for receiving notifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalySubscriptionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalySubscriptionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalySubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalySubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalySubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAnomalySubscriptionCommand extends $Command<CreateAnomalySubscriptionCommandInput, CreateAnomalySubscriptionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: CreateAnomalySubscriptionCommandInput;
    constructor(input: CreateAnomalySubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAnomalySubscriptionCommandInput, CreateAnomalySubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
