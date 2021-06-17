import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBProxyTargetGroupCommandInput extends ModifyDBProxyTargetGroupRequest {
}
export interface ModifyDBProxyTargetGroupCommandOutput extends ModifyDBProxyTargetGroupResponse, __MetadataBearer {
}
/**
 * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyTargetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyTargetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBProxyTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBProxyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBProxyTargetGroupCommand extends $Command<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBProxyTargetGroupCommandInput;
    constructor(input: ModifyDBProxyTargetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
