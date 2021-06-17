import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateInstanceStorageConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInstanceStorageConfigCommandInput extends UpdateInstanceStorageConfigRequest {
}
export interface UpdateInstanceStorageConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInstanceStorageConfigCommand extends $Command<UpdateInstanceStorageConfigCommandInput, UpdateInstanceStorageConfigCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateInstanceStorageConfigCommandInput;
    constructor(input: UpdateInstanceStorageConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceStorageConfigCommandInput, UpdateInstanceStorageConfigCommandOutput>;
    private serialize;
    private deserialize;
}
