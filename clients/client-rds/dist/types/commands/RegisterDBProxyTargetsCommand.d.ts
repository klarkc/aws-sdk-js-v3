import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterDBProxyTargetsCommandInput extends RegisterDBProxyTargetsRequest {
}
export interface RegisterDBProxyTargetsCommandOutput extends RegisterDBProxyTargetsResponse, __MetadataBearer {
}
/**
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RegisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RegisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RegisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterDBProxyTargetsCommand extends $Command<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput, RDSClientResolvedConfig> {
    readonly input: RegisterDBProxyTargetsCommandInput;
    constructor(input: RegisterDBProxyTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
