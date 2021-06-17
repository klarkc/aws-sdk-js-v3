import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { RemovePermissionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemovePermissionCommandInput extends RemovePermissionInput {
}
export interface RemovePermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a statement from a topic's access control policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, RemovePermissionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, RemovePermissionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemovePermissionCommand extends $Command<RemovePermissionCommandInput, RemovePermissionCommandOutput, SNSClientResolvedConfig> {
    readonly input: RemovePermissionCommandInput;
    constructor(input: RemovePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
