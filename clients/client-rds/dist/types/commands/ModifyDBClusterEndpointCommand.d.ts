import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterEndpoint } from "../models/models_0";
import { ModifyDBClusterEndpointMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {
}
export interface ModifyDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {
}
/**
 * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterEndpointCommand extends $Command<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterEndpointCommandInput;
    constructor(input: ModifyDBClusterEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
