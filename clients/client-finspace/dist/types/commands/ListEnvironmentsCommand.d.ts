import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {
}
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResponse, __MetadataBearer {
}
/**
 * <p>A list of all of your FinSpace environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListEnvironmentsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListEnvironmentsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEnvironmentsCommand extends $Command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput, FinspaceClientResolvedConfig> {
    readonly input: ListEnvironmentsCommandInput;
    constructor(input: ListEnvironmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FinspaceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
