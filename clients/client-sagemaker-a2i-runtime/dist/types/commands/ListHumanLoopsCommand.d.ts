import { SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerA2IRuntimeClient";
import { ListHumanLoopsRequest, ListHumanLoopsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHumanLoopsCommandInput extends ListHumanLoopsRequest {
}
export interface ListHumanLoopsCommandOutput extends ListHumanLoopsResponse, __MetadataBearer {
}
/**
 * <p>Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new ListHumanLoopsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHumanLoopsCommandInput} for command's `input` shape.
 * @see {@link ListHumanLoopsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHumanLoopsCommand extends $Command<ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput, SageMakerA2IRuntimeClientResolvedConfig> {
    readonly input: ListHumanLoopsCommandInput;
    constructor(input: ListHumanLoopsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerA2IRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput>;
    private serialize;
    private deserialize;
}
