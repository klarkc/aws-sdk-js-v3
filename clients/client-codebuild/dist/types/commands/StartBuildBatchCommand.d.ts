import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StartBuildBatchInput, StartBuildBatchOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartBuildBatchCommandInput extends StartBuildBatchInput {
}
export interface StartBuildBatchCommandOutput extends StartBuildBatchOutput, __MetadataBearer {
}
/**
 * <p>Starts a batch build for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StartBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StartBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartBuildBatchCommand extends $Command<StartBuildBatchCommandInput, StartBuildBatchCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: StartBuildBatchCommandInput;
    constructor(input: StartBuildBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartBuildBatchCommandInput, StartBuildBatchCommandOutput>;
    private serialize;
    private deserialize;
}
