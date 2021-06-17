import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeploymentGroupCommandInput extends DeleteDeploymentGroupInput {
}
export interface DeleteDeploymentGroupCommandOutput extends DeleteDeploymentGroupOutput, __MetadataBearer {
}
/**
 * <p>Deletes a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeploymentGroupCommand extends $Command<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteDeploymentGroupCommandInput;
    constructor(input: DeleteDeploymentGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
