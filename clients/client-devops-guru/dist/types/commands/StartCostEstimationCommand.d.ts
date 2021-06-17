import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { StartCostEstimationRequest, StartCostEstimationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartCostEstimationCommandInput extends StartCostEstimationRequest {
}
export interface StartCostEstimationCommandOutput extends StartCostEstimationResponse, __MetadataBearer {
}
/**
 * <p>Starts the creation of an estimate of the monthly cost to analyze your AWS resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, StartCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, StartCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new StartCostEstimationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCostEstimationCommandInput} for command's `input` shape.
 * @see {@link StartCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartCostEstimationCommand extends $Command<StartCostEstimationCommandInput, StartCostEstimationCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: StartCostEstimationCommandInput;
    constructor(input: StartCostEstimationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCostEstimationCommandInput, StartCostEstimationCommandOutput>;
    private serialize;
    private deserialize;
}
