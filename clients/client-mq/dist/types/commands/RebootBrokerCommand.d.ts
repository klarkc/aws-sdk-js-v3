import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { RebootBrokerRequest, RebootBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootBrokerCommandInput extends RebootBrokerRequest {
}
export interface RebootBrokerCommandOutput extends RebootBrokerResponse, __MetadataBearer {
}
/**
 * Reboots a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, RebootBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, RebootBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new RebootBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootBrokerCommandInput} for command's `input` shape.
 * @see {@link RebootBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootBrokerCommand extends $Command<RebootBrokerCommandInput, RebootBrokerCommandOutput, MqClientResolvedConfig> {
    readonly input: RebootBrokerCommandInput;
    constructor(input: RebootBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootBrokerCommandInput, RebootBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
