import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateScalingParametersRequest, UpdateScalingParametersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateScalingParametersCommandInput extends UpdateScalingParametersRequest {
}
export interface UpdateScalingParametersCommandOutput extends UpdateScalingParametersResponse, __MetadataBearer {
}
/**
 * <p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateScalingParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScalingParametersCommandInput} for command's `input` shape.
 * @see {@link UpdateScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateScalingParametersCommand extends $Command<UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: UpdateScalingParametersCommandInput;
    constructor(input: UpdateScalingParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput>;
    private serialize;
    private deserialize;
}
