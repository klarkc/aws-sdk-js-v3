import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppReplicationConfigurationRequest, DeleteAppReplicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAppReplicationConfigurationCommandInput extends DeleteAppReplicationConfigurationRequest {
}
export interface DeleteAppReplicationConfigurationCommandOutput extends DeleteAppReplicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAppReplicationConfigurationCommand extends $Command<DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppReplicationConfigurationCommandInput;
    constructor(input: DeleteAppReplicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
