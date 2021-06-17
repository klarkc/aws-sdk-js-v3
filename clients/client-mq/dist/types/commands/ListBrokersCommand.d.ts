import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListBrokersRequest, ListBrokersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBrokersCommandInput extends ListBrokersRequest {
}
export interface ListBrokersCommandOutput extends ListBrokersResponse, __MetadataBearer {
}
/**
 * Returns a list of all brokers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListBrokersCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListBrokersCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListBrokersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBrokersCommandInput} for command's `input` shape.
 * @see {@link ListBrokersCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBrokersCommand extends $Command<ListBrokersCommandInput, ListBrokersCommandOutput, MqClientResolvedConfig> {
    readonly input: ListBrokersCommandInput;
    constructor(input: ListBrokersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBrokersCommandInput, ListBrokersCommandOutput>;
    private serialize;
    private deserialize;
}
