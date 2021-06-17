import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { RetryBuildInput, RetryBuildOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetryBuildCommandInput extends RetryBuildInput {
}
export interface RetryBuildCommandOutput extends RetryBuildOutput, __MetadataBearer {
}
/**
 * <p>Restarts a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, RetryBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, RetryBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new RetryBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryBuildCommandInput} for command's `input` shape.
 * @see {@link RetryBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetryBuildCommand extends $Command<RetryBuildCommandInput, RetryBuildCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: RetryBuildCommandInput;
    constructor(input: RetryBuildCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetryBuildCommandInput, RetryBuildCommandOutput>;
    private serialize;
    private deserialize;
}
