import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StartBulkDeploymentRequest, StartBulkDeploymentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartBulkDeploymentCommandInput extends StartBulkDeploymentRequest {
}
export interface StartBulkDeploymentCommandOutput extends StartBulkDeploymentResponse, __MetadataBearer {
}
/**
 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StartBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StartBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new StartBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartBulkDeploymentCommand extends $Command<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: StartBulkDeploymentCommandInput;
    constructor(input: StartBulkDeploymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
