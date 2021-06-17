import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateQueueMaxContactsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateQueueMaxContactsCommandInput extends UpdateQueueMaxContactsRequest {
}
export interface UpdateQueueMaxContactsCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the maximum number of contacts allowed in a queue before it is considered
 *    full.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueMaxContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueMaxContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueMaxContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueMaxContactsCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueMaxContactsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateQueueMaxContactsCommand extends $Command<UpdateQueueMaxContactsCommandInput, UpdateQueueMaxContactsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateQueueMaxContactsCommandInput;
    constructor(input: UpdateQueueMaxContactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQueueMaxContactsCommandInput, UpdateQueueMaxContactsCommandOutput>;
    private serialize;
    private deserialize;
}
