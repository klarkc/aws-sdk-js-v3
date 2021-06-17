import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { StopBuildInput, StopBuildOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopBuildCommandInput extends StopBuildInput {
}
export interface StopBuildCommandOutput extends StopBuildOutput, __MetadataBearer {
}
/**
 * <p>Attempts to stop running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StopBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBuildCommandInput} for command's `input` shape.
 * @see {@link StopBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopBuildCommand extends $Command<StopBuildCommandInput, StopBuildCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: StopBuildCommandInput;
    constructor(input: StopBuildCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBuildCommandInput, StopBuildCommandOutput>;
    private serialize;
    private deserialize;
}
