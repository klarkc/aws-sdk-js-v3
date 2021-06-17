import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildBatchInput, StopBuildBatchOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopBuildBatchCommandInput extends StopBuildBatchInput {
}
export interface StopBuildBatchCommandOutput extends StopBuildBatchOutput, __MetadataBearer {
}
/**
 * <p>Stops a running batch build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StopBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StopBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopBuildBatchCommand extends $Command<StopBuildBatchCommandInput, StopBuildBatchCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: StopBuildBatchCommandInput;
    constructor(input: StopBuildBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBuildBatchCommandInput, StopBuildBatchCommandOutput>;
    private serialize;
    private deserialize;
}
