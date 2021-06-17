import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProgressUpdateStreamsCommandInput extends ListProgressUpdateStreamsRequest {
}
export interface ListProgressUpdateStreamsCommandOutput extends ListProgressUpdateStreamsResult, __MetadataBearer {
}
/**
 * <p>Lists progress update streams associated with the user account making this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListProgressUpdateStreamsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListProgressUpdateStreamsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListProgressUpdateStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProgressUpdateStreamsCommandInput} for command's `input` shape.
 * @see {@link ListProgressUpdateStreamsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProgressUpdateStreamsCommand extends $Command<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListProgressUpdateStreamsCommandInput;
    constructor(input: ListProgressUpdateStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
