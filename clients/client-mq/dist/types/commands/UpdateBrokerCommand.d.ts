import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { UpdateBrokerRequest, UpdateBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBrokerCommandInput extends UpdateBrokerRequest {
}
export interface UpdateBrokerCommandOutput extends UpdateBrokerResponse, __MetadataBearer {
}
/**
 * Adds a pending configuration change to a broker.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBrokerCommand extends $Command<UpdateBrokerCommandInput, UpdateBrokerCommandOutput, MqClientResolvedConfig> {
    readonly input: UpdateBrokerCommandInput;
    constructor(input: UpdateBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBrokerCommandInput, UpdateBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
