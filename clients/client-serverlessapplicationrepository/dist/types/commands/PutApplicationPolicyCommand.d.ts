import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { PutApplicationPolicyRequest, PutApplicationPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutApplicationPolicyCommandInput extends PutApplicationPolicyRequest {
}
export interface PutApplicationPolicyCommandOutput extends PutApplicationPolicyResponse, __MetadataBearer {
}
/**
 * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
 *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
 *  Permissions</a>
 *  .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new PutApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutApplicationPolicyCommand extends $Command<PutApplicationPolicyCommandInput, PutApplicationPolicyCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: PutApplicationPolicyCommandInput;
    constructor(input: PutApplicationPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutApplicationPolicyCommandInput, PutApplicationPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
