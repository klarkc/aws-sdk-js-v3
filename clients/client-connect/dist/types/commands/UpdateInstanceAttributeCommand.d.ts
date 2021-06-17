import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateInstanceAttributeRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInstanceAttributeCommandInput extends UpdateInstanceAttributeRequest {
}
export interface UpdateInstanceAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the value for the specified attribute type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInstanceAttributeCommand extends $Command<UpdateInstanceAttributeCommandInput, UpdateInstanceAttributeCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateInstanceAttributeCommandInput;
    constructor(input: UpdateInstanceAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceAttributeCommandInput, UpdateInstanceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
