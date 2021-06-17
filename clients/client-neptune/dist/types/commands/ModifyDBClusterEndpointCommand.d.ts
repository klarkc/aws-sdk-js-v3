import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBClusterEndpointMessage, ModifyDBClusterEndpointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {
}
export interface ModifyDBClusterEndpointCommandOutput extends ModifyDBClusterEndpointOutput, __MetadataBearer {
}
/**
 * <p>Modifies the properties of an endpoint in an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterEndpointCommand extends $Command<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ModifyDBClusterEndpointCommandInput;
    constructor(input: ModifyDBClusterEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
