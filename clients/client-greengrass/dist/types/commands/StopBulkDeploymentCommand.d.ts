import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StopBulkDeploymentRequest, StopBulkDeploymentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopBulkDeploymentCommandInput extends StopBulkDeploymentRequest {
}
export interface StopBulkDeploymentCommandOutput extends StopBulkDeploymentResponse, __MetadataBearer {
}
/**
 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StopBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StopBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new StopBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopBulkDeploymentCommand extends $Command<StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: StopBulkDeploymentCommandInput;
    constructor(input: StopBulkDeploymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
