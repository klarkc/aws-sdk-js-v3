import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { AddTagsToOnPremisesInstancesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddTagsToOnPremisesInstancesCommandInput extends AddTagsToOnPremisesInstancesInput {
}
export interface AddTagsToOnPremisesInstancesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds tags to on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new AddTagsToOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link AddTagsToOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddTagsToOnPremisesInstancesCommand extends $Command<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: AddTagsToOnPremisesInstancesCommandInput;
    constructor(input: AddTagsToOnPremisesInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
