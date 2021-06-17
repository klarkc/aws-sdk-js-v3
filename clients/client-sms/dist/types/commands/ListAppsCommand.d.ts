import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { ListAppsRequest, ListAppsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAppsCommandInput extends ListAppsRequest {
}
export interface ListAppsCommandOutput extends ListAppsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves summaries for all applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ListAppsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ListAppsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAppsCommand extends $Command<ListAppsCommandInput, ListAppsCommandOutput, SMSClientResolvedConfig> {
    readonly input: ListAppsCommandInput;
    constructor(input: ListAppsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAppsCommandInput, ListAppsCommandOutput>;
    private serialize;
    private deserialize;
}
