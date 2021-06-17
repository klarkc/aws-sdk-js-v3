import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartTaskContactRequest, StartTaskContactResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTaskContactCommandInput extends StartTaskContactRequest {
}
export interface StartTaskContactCommandOutput extends StartTaskContactResponse, __MetadataBearer {
}
/**
 * <p>Initiates a contact flow to start a new task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartTaskContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartTaskContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartTaskContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTaskContactCommandInput} for command's `input` shape.
 * @see {@link StartTaskContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTaskContactCommand extends $Command<StartTaskContactCommandInput, StartTaskContactCommandOutput, ConnectClientResolvedConfig> {
    readonly input: StartTaskContactCommandInput;
    constructor(input: StartTaskContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTaskContactCommandInput, StartTaskContactCommandOutput>;
    private serialize;
    private deserialize;
}
