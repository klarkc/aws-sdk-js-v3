import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetBuildBatchesInput, BatchGetBuildBatchesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetBuildBatchesCommandInput extends BatchGetBuildBatchesInput {
}
export interface BatchGetBuildBatchesCommandOutput extends BatchGetBuildBatchesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves information about one or more batch builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetBuildBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link BatchGetBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetBuildBatchesCommand extends $Command<BatchGetBuildBatchesCommandInput, BatchGetBuildBatchesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetBuildBatchesCommandInput;
    constructor(input: BatchGetBuildBatchesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetBuildBatchesCommandInput, BatchGetBuildBatchesCommandOutput>;
    private serialize;
    private deserialize;
}
