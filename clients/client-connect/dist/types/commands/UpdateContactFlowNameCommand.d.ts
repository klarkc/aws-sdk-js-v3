import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateContactFlowNameRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateContactFlowNameCommandInput extends UpdateContactFlowNameRequest {
}
export interface UpdateContactFlowNameCommandOutput extends __MetadataBearer {
}
/**
 * <p>The name of the contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactFlowNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactFlowNameCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateContactFlowNameCommand extends $Command<UpdateContactFlowNameCommandInput, UpdateContactFlowNameCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateContactFlowNameCommandInput;
    constructor(input: UpdateContactFlowNameCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContactFlowNameCommandInput, UpdateContactFlowNameCommandOutput>;
    private serialize;
    private deserialize;
}
