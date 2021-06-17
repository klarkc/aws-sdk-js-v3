import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateInstanceStorageConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateInstanceStorageConfigCommandInput extends DisassociateInstanceStorageConfigRequest {
}
export interface DisassociateInstanceStorageConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Removes the storage type configurations for the specified resource type and association
 *    ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateInstanceStorageConfigCommand extends $Command<DisassociateInstanceStorageConfigCommandInput, DisassociateInstanceStorageConfigCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DisassociateInstanceStorageConfigCommandInput;
    constructor(input: DisassociateInstanceStorageConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateInstanceStorageConfigCommandInput, DisassociateInstanceStorageConfigCommandOutput>;
    private serialize;
    private deserialize;
}
