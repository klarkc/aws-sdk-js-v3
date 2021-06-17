import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeregisterOnPremisesInstanceInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterOnPremisesInstanceCommandInput extends DeregisterOnPremisesInstanceInput {
}
export interface DeregisterOnPremisesInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deregisters an on-premises instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeregisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeregisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeregisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterOnPremisesInstanceCommand extends $Command<DeregisterOnPremisesInstanceCommandInput, DeregisterOnPremisesInstanceCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeregisterOnPremisesInstanceCommandInput;
    constructor(input: DeregisterOnPremisesInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterOnPremisesInstanceCommandInput, DeregisterOnPremisesInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
