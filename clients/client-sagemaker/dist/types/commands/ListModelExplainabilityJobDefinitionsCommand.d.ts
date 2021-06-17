import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelExplainabilityJobDefinitionsRequest, ListModelExplainabilityJobDefinitionsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListModelExplainabilityJobDefinitionsCommandInput extends ListModelExplainabilityJobDefinitionsRequest {
}
export interface ListModelExplainabilityJobDefinitionsCommandOutput extends ListModelExplainabilityJobDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Lists model explainability job definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelExplainabilityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelExplainabilityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelExplainabilityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListModelExplainabilityJobDefinitionsCommand extends $Command<ListModelExplainabilityJobDefinitionsCommandInput, ListModelExplainabilityJobDefinitionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListModelExplainabilityJobDefinitionsCommandInput;
    constructor(input: ListModelExplainabilityJobDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelExplainabilityJobDefinitionsCommandInput, ListModelExplainabilityJobDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
