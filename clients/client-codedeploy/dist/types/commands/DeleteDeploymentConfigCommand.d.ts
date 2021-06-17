import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteDeploymentConfigInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeploymentConfigCommandInput extends DeleteDeploymentConfigInput {
}
export interface DeleteDeploymentConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a deployment configuration.</p>
 *         <note>
 *             <p>A deployment configuration cannot be deleted if it is currently in use. Predefined
 *                 configurations cannot be deleted.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeploymentConfigCommand extends $Command<DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteDeploymentConfigCommandInput;
    constructor(input: DeleteDeploymentConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput>;
    private serialize;
    private deserialize;
}
