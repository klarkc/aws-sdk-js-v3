import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListDeploymentJobsRequest, ListDeploymentJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeploymentJobsCommandInput extends ListDeploymentJobsRequest {
}
export interface ListDeploymentJobsCommandOutput extends ListDeploymentJobsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to
 *          retrieve specific deployment jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListDeploymentJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListDeploymentJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListDeploymentJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeploymentJobsCommand extends $Command<ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListDeploymentJobsCommandInput;
    constructor(input: ListDeploymentJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput>;
    private serialize;
    private deserialize;
}
