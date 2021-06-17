import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { ListConnectionsInput, ListConnectionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConnectionsCommandInput extends ListConnectionsInput {
}
export interface ListConnectionsCommandOutput extends ListConnectionsOutput, __MetadataBearer {
}
/**
 * <p>Lists the connections associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, ListConnectionsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, ListConnectionsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConnectionsCommand extends $Command<ListConnectionsCommandInput, ListConnectionsCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: ListConnectionsCommandInput;
    constructor(input: ListConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectionsCommandInput, ListConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
