import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyClusterInput, ModifyClusterOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyClusterCommandInput extends ModifyClusterInput {
}
export interface ModifyClusterCommandOutput extends ModifyClusterOutput, __MetadataBearer {
}
/**
 * <p>Modifies the number of steps that can be executed concurrently for the cluster specified
 *          using ClusterID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyClusterCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyClusterCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyClusterCommand extends $Command<ModifyClusterCommandInput, ModifyClusterCommandOutput, EMRClientResolvedConfig> {
    readonly input: ModifyClusterCommandInput;
    constructor(input: ModifyClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterCommandInput, ModifyClusterCommandOutput>;
    private serialize;
    private deserialize;
}
