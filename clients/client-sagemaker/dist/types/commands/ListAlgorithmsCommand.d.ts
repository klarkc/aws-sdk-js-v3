import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAlgorithmsCommandInput extends ListAlgorithmsInput {
}
export interface ListAlgorithmsCommandOutput extends ListAlgorithmsOutput, __MetadataBearer {
}
/**
 * <p>Lists the machine learning algorithms that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAlgorithmsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAlgorithmsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAlgorithmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlgorithmsCommandInput} for command's `input` shape.
 * @see {@link ListAlgorithmsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAlgorithmsCommand extends $Command<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAlgorithmsCommandInput;
    constructor(input: ListAlgorithmsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput>;
    private serialize;
    private deserialize;
}
