import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeploymentStatusRequest, GetDeploymentStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeploymentStatusCommandInput extends GetDeploymentStatusRequest {
}
export interface GetDeploymentStatusCommandOutput extends GetDeploymentStatusResponse, __MetadataBearer {
}
/**
 * Returns the status of a deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeploymentStatusCommand extends $Command<GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetDeploymentStatusCommandInput;
    constructor(input: GetDeploymentStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
