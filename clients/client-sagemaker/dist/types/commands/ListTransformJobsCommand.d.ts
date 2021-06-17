import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTransformJobsRequest, ListTransformJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTransformJobsCommandInput extends ListTransformJobsRequest {
}
export interface ListTransformJobsCommandOutput extends ListTransformJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists transform jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTransformJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTransformJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTransformJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTransformJobsCommandInput} for command's `input` shape.
 * @see {@link ListTransformJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTransformJobsCommand extends $Command<ListTransformJobsCommandInput, ListTransformJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTransformJobsCommandInput;
    constructor(input: ListTransformJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTransformJobsCommandInput, ListTransformJobsCommandOutput>;
    private serialize;
    private deserialize;
}
