import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListDataQualityJobDefinitionsRequest, ListDataQualityJobDefinitionsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataQualityJobDefinitionsCommandInput extends ListDataQualityJobDefinitionsRequest {
}
export interface ListDataQualityJobDefinitionsCommandOutput extends ListDataQualityJobDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the data quality job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListDataQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListDataQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListDataQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataQualityJobDefinitionsCommand extends $Command<ListDataQualityJobDefinitionsCommandInput, ListDataQualityJobDefinitionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListDataQualityJobDefinitionsCommandInput;
    constructor(input: ListDataQualityJobDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataQualityJobDefinitionsCommandInput, ListDataQualityJobDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
