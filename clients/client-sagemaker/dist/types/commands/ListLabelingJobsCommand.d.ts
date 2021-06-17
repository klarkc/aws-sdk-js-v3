import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListLabelingJobsRequest, ListLabelingJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLabelingJobsCommandInput extends ListLabelingJobsRequest {
}
export interface ListLabelingJobsCommandOutput extends ListLabelingJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of labeling jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListLabelingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLabelingJobsCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLabelingJobsCommand extends $Command<ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListLabelingJobsCommandInput;
    constructor(input: ListLabelingJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
