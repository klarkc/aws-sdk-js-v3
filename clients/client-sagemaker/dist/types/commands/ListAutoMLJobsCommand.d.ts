import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAutoMLJobsRequest, ListAutoMLJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAutoMLJobsCommandInput extends ListAutoMLJobsRequest {
}
export interface ListAutoMLJobsCommandOutput extends ListAutoMLJobsResponse, __MetadataBearer {
}
/**
 * <p>Request a list of jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAutoMLJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAutoMLJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListAutoMLJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoMLJobsCommandInput} for command's `input` shape.
 * @see {@link ListAutoMLJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAutoMLJobsCommand extends $Command<ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAutoMLJobsCommandInput;
    constructor(input: ListAutoMLJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput>;
    private serialize;
    private deserialize;
}
