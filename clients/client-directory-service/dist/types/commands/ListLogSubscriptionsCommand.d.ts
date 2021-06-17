import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListLogSubscriptionsRequest, ListLogSubscriptionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLogSubscriptionsCommandInput extends ListLogSubscriptionsRequest {
}
export interface ListLogSubscriptionsCommandOutput extends ListLogSubscriptionsResult, __MetadataBearer {
}
/**
 * <p>Lists the active log subscriptions for the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListLogSubscriptionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListLogSubscriptionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListLogSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLogSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListLogSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLogSubscriptionsCommand extends $Command<ListLogSubscriptionsCommandInput, ListLogSubscriptionsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListLogSubscriptionsCommandInput;
    constructor(input: ListLogSubscriptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLogSubscriptionsCommandInput, ListLogSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
