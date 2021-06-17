import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeDeploymentJobRequest, DescribeDeploymentJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeploymentJobCommandInput extends DescribeDeploymentJobRequest {
}
export interface DescribeDeploymentJobCommandOutput extends DescribeDeploymentJobResponse, __MetadataBearer {
}
/**
 * <p>Describes a deployment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeploymentJobCommand extends $Command<DescribeDeploymentJobCommandInput, DescribeDeploymentJobCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: DescribeDeploymentJobCommandInput;
    constructor(input: DescribeDeploymentJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeploymentJobCommandInput, DescribeDeploymentJobCommandOutput>;
    private serialize;
    private deserialize;
}
