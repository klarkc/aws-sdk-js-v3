import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { PutResourcePolicyInput, PutResourcePolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutResourcePolicyCommandInput extends PutResourcePolicyInput {
}
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyOutput, __MetadataBearer {
}
/**
 * <p> Stores a resource policy for the ARN of a <code>Project</code> or
 *                 <code>ReportGroup</code> object. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, PutResourcePolicyCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, PutResourcePolicyCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutResourcePolicyCommand extends $Command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: PutResourcePolicyCommandInput;
    constructor(input: PutResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
