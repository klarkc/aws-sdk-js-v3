import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeregisterDBProxyTargetsRequest, DeregisterDBProxyTargetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterDBProxyTargetsCommandInput extends DeregisterDBProxyTargetsRequest {
}
export interface DeregisterDBProxyTargetsCommandOutput extends DeregisterDBProxyTargetsResponse, __MetadataBearer {
}
/**
 * <p>Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeregisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeregisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeregisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterDBProxyTargetsCommand extends $Command<DeregisterDBProxyTargetsCommandInput, DeregisterDBProxyTargetsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeregisterDBProxyTargetsCommandInput;
    constructor(input: DeregisterDBProxyTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterDBProxyTargetsCommandInput, DeregisterDBProxyTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
