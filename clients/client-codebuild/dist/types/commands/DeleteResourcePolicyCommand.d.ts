import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteResourcePolicyInput, DeleteResourcePolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyInput {
}
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyOutput, __MetadataBearer {
}
/**
 * <p> Deletes a resource policy that is identified by its resource ARN. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourcePolicyCommand extends $Command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteResourcePolicyCommandInput;
    constructor(input: DeleteResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
