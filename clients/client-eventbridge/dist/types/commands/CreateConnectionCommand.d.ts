import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectionCommandInput extends CreateConnectionRequest {
}
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {
}
/**
 * <p>Creates a connection. A connection defines the authorization type and credentials to use
 *       for authorization with an API destination HTTP endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
