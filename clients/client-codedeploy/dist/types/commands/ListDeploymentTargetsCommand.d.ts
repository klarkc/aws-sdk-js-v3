import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeploymentTargetsCommandInput extends ListDeploymentTargetsInput {
}
export interface ListDeploymentTargetsCommandOutput extends ListDeploymentTargetsOutput, __MetadataBearer {
}
/**
 * <p> Returns an array of target IDs that are associated a deployment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeploymentTargetsCommand extends $Command<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentTargetsCommandInput;
    constructor(input: ListDeploymentTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
