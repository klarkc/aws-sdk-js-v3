import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteAuthorizerRequest, DeleteAuthorizerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAuthorizerCommandInput extends DeleteAuthorizerRequest {
}
export interface DeleteAuthorizerCommandOutput extends DeleteAuthorizerResponse, __MetadataBearer {
}
/**
 * <p>Deletes an authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAuthorizerCommand extends $Command<DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteAuthorizerCommandInput;
    constructor(input: DeleteAuthorizerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput>;
    private serialize;
    private deserialize;
}
