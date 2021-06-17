import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateContactFlowRequest, CreateContactFlowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactFlowCommandInput extends CreateContactFlowRequest {
}
export interface CreateContactFlowCommandOutput extends CreateContactFlowResponse, __MetadataBearer {
}
/**
 * <p>Creates a contact flow for the specified Amazon Connect instance.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactFlowCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactFlowCommand extends $Command<CreateContactFlowCommandInput, CreateContactFlowCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateContactFlowCommandInput;
    constructor(input: CreateContactFlowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactFlowCommandInput, CreateContactFlowCommandOutput>;
    private serialize;
    private deserialize;
}
