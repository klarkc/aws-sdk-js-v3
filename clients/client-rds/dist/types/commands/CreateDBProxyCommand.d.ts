import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBProxyRequest, CreateDBProxyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBProxyCommandInput extends CreateDBProxyRequest {
}
export interface CreateDBProxyCommandOutput extends CreateDBProxyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBProxyCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBProxyCommand extends $Command<CreateDBProxyCommandInput, CreateDBProxyCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBProxyCommandInput;
    constructor(input: CreateDBProxyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBProxyCommandInput, CreateDBProxyCommandOutput>;
    private serialize;
    private deserialize;
}
