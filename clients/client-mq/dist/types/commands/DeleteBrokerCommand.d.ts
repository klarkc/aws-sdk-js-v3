import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DeleteBrokerRequest, DeleteBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBrokerCommandInput extends DeleteBrokerRequest {
}
export interface DeleteBrokerCommandOutput extends DeleteBrokerResponse, __MetadataBearer {
}
/**
 * Deletes a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DeleteBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DeleteBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBrokerCommandInput} for command's `input` shape.
 * @see {@link DeleteBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBrokerCommand extends $Command<DeleteBrokerCommandInput, DeleteBrokerCommandOutput, MqClientResolvedConfig> {
    readonly input: DeleteBrokerCommandInput;
    constructor(input: DeleteBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBrokerCommandInput, DeleteBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
