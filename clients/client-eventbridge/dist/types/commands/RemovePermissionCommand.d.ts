import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { RemovePermissionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemovePermissionCommandInput extends RemovePermissionRequest {
}
export interface RemovePermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Revokes the permission of another AWS account to be able to put events to the specified
 *       event bus. Specify the account to revoke by the <code>StatementId</code> value that you
 *       associated with the account when you granted it permission with <code>PutPermission</code>.
 *       You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemovePermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemovePermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemovePermissionCommand extends $Command<RemovePermissionCommandInput, RemovePermissionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: RemovePermissionCommandInput;
    constructor(input: RemovePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
