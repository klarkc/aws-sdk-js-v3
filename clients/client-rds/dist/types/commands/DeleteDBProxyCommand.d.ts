import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBProxyRequest, DeleteDBProxyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBProxyCommandInput extends DeleteDBProxyRequest {
}
export interface DeleteDBProxyCommandOutput extends DeleteDBProxyResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBProxyCommand extends $Command<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBProxyCommandInput;
    constructor(input: DeleteDBProxyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput>;
    private serialize;
    private deserialize;
}
