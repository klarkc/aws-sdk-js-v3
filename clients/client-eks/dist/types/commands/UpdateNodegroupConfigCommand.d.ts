import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { UpdateNodegroupConfigRequest, UpdateNodegroupConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateNodegroupConfigCommandInput extends UpdateNodegroupConfigRequest {
}
export interface UpdateNodegroupConfigCommandOutput extends UpdateNodegroupConfigResponse, __MetadataBearer {
}
/**
 * <p>Updates an Amazon EKS managed node group configuration. Your node group continues to
 *             function during the update. The response output includes an update ID that you can use
 *             to track the status of your node group update with the <a>DescribeUpdate</a>
 *             API operation. Currently you can update the Kubernetes labels for a node group or the
 *             scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateNodegroupConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodegroupConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateNodegroupConfigCommand extends $Command<UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput, EKSClientResolvedConfig> {
    readonly input: UpdateNodegroupConfigCommandInput;
    constructor(input: UpdateNodegroupConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNodegroupConfigCommandInput, UpdateNodegroupConfigCommandOutput>;
    private serialize;
    private deserialize;
}
