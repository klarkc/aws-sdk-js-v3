import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTaskExecutionsCommandInput extends ListTaskExecutionsRequest {
}
export interface ListTaskExecutionsCommandOutput extends ListTaskExecutionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of executed tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListTaskExecutionsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListTaskExecutionsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListTaskExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskExecutionsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTaskExecutionsCommand extends $Command<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: ListTaskExecutionsCommandInput;
    constructor(input: ListTaskExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
