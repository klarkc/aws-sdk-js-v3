import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListEdgePackagingJobsRequest, ListEdgePackagingJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEdgePackagingJobsCommandInput extends ListEdgePackagingJobsRequest {
}
export interface ListEdgePackagingJobsCommandOutput extends ListEdgePackagingJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgePackagingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgePackagingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListEdgePackagingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEdgePackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListEdgePackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEdgePackagingJobsCommand extends $Command<ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListEdgePackagingJobsCommandInput;
    constructor(input: ListEdgePackagingJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
