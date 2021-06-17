import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DescribeCostCategoryDefinitionRequest, DescribeCostCategoryDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCostCategoryDefinitionCommandInput extends DescribeCostCategoryDefinitionRequest {
}
export interface DescribeCostCategoryDefinitionCommandOutput extends DescribeCostCategoryDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
 *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DescribeCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DescribeCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DescribeCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCostCategoryDefinitionCommand extends $Command<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: DescribeCostCategoryDefinitionCommandInput;
    constructor(input: DescribeCostCategoryDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
