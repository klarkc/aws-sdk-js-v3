import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelQualityJobDefinitionsRequest, ListModelQualityJobDefinitionsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListModelQualityJobDefinitionsCommandInput extends ListModelQualityJobDefinitionsRequest {
}
export interface ListModelQualityJobDefinitionsCommandOutput extends ListModelQualityJobDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of model quality monitoring job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListModelQualityJobDefinitionsCommand extends $Command<ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListModelQualityJobDefinitionsCommandInput;
    constructor(input: ListModelQualityJobDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
