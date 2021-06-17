import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateChannelCommandInput extends CreateChannelRequest {
}
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {
}
/**
 * <p>Creates a new channel and an associated stream key to start streaming.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateChannelCommand extends $Command<CreateChannelCommandInput, CreateChannelCommandOutput, IvsClientResolvedConfig> {
    readonly input: CreateChannelCommandInput;
    constructor(input: CreateChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IvsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateChannelCommandInput, CreateChannelCommandOutput>;
    private serialize;
    private deserialize;
}
