import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteBuildBatchInput, DeleteBuildBatchOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBuildBatchCommandInput extends DeleteBuildBatchInput {
}
export interface DeleteBuildBatchCommandOutput extends DeleteBuildBatchOutput, __MetadataBearer {
}
/**
 * <p>Deletes a batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBuildBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBuildBatchCommand extends $Command<DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteBuildBatchCommandInput;
    constructor(input: DeleteBuildBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput>;
    private serialize;
    private deserialize;
}
