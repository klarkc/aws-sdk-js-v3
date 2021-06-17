import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBulkDeploymentStatusCommandInput extends GetBulkDeploymentStatusRequest {
}
export interface GetBulkDeploymentStatusCommandOutput extends GetBulkDeploymentStatusResponse, __MetadataBearer {
}
/**
 * Returns the status of a bulk deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetBulkDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetBulkDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetBulkDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetBulkDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBulkDeploymentStatusCommand extends $Command<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetBulkDeploymentStatusCommandInput;
    constructor(input: GetBulkDeploymentStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
