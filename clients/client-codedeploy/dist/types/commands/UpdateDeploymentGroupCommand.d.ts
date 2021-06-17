import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { UpdateDeploymentGroupInput, UpdateDeploymentGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeploymentGroupCommandInput extends UpdateDeploymentGroupInput {
}
export interface UpdateDeploymentGroupCommandOutput extends UpdateDeploymentGroupOutput, __MetadataBearer {
}
/**
 * <p>Changes information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, UpdateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, UpdateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new UpdateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeploymentGroupCommand extends $Command<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: UpdateDeploymentGroupCommandInput;
    constructor(input: UpdateDeploymentGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
