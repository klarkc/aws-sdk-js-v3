import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { SkipWaitTimeForInstanceTerminationInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SkipWaitTimeForInstanceTerminationCommandInput extends SkipWaitTimeForInstanceTerminationInput {
}
export interface SkipWaitTimeForInstanceTerminationCommandOutput extends __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
 *             instances immediately after the traffic routing is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new SkipWaitTimeForInstanceTerminationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SkipWaitTimeForInstanceTerminationCommandInput} for command's `input` shape.
 * @see {@link SkipWaitTimeForInstanceTerminationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SkipWaitTimeForInstanceTerminationCommand extends $Command<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: SkipWaitTimeForInstanceTerminationCommandInput;
    constructor(input: SkipWaitTimeForInstanceTerminationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput>;
    private serialize;
    private deserialize;
}
