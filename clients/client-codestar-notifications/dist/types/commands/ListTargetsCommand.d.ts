import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { ListTargetsRequest, ListTargetsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTargetsCommandInput extends ListTargetsRequest {
}
export interface ListTargetsCommandOutput extends ListTargetsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of the notification rule targets for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListTargetsCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListTargetsCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTargetsCommand extends $Command<ListTargetsCommandInput, ListTargetsCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: ListTargetsCommandInput;
    constructor(input: ListTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTargetsCommandInput, ListTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
