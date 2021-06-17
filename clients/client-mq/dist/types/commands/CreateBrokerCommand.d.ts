import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { CreateBrokerRequest, CreateBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBrokerCommandInput extends CreateBrokerRequest {
}
export interface CreateBrokerCommandOutput extends CreateBrokerResponse, __MetadataBearer {
}
/**
 * Creates a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new CreateBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBrokerCommandInput} for command's `input` shape.
 * @see {@link CreateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBrokerCommand extends $Command<CreateBrokerCommandInput, CreateBrokerCommandOutput, MqClientResolvedConfig> {
    readonly input: CreateBrokerCommandInput;
    constructor(input: CreateBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBrokerCommandInput, CreateBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
