import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListBootstrapActionsInput, ListBootstrapActionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBootstrapActionsCommandInput extends ListBootstrapActionsInput {
}
export interface ListBootstrapActionsCommandOutput extends ListBootstrapActionsOutput, __MetadataBearer {
}
/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListBootstrapActionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListBootstrapActionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListBootstrapActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBootstrapActionsCommandInput} for command's `input` shape.
 * @see {@link ListBootstrapActionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBootstrapActionsCommand extends $Command<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListBootstrapActionsCommandInput;
    constructor(input: ListBootstrapActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput>;
    private serialize;
    private deserialize;
}
