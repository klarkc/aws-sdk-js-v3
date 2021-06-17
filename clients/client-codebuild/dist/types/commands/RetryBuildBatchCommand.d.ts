import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { RetryBuildBatchInput, RetryBuildBatchOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetryBuildBatchCommandInput extends RetryBuildBatchInput {
}
export interface RetryBuildBatchCommandOutput extends RetryBuildBatchOutput, __MetadataBearer {
}
/**
 * <p>Restarts a failed batch build. Only batch builds that have failed can be retried.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, RetryBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, RetryBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new RetryBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryBuildBatchCommandInput} for command's `input` shape.
 * @see {@link RetryBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetryBuildBatchCommand extends $Command<RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: RetryBuildBatchCommandInput;
    constructor(input: RetryBuildBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput>;
    private serialize;
    private deserialize;
}
