import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAppReplicationConfigurationCommandInput extends PutAppReplicationConfigurationRequest {
}
export interface PutAppReplicationConfigurationCommandOutput extends PutAppReplicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppReplicationConfigurationCommand extends $Command<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: PutAppReplicationConfigurationCommandInput;
    constructor(input: PutAppReplicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
