import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppReplicationConfigurationRequest, GetAppReplicationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppReplicationConfigurationCommandInput extends GetAppReplicationConfigurationRequest {
}
export interface GetAppReplicationConfigurationCommandOutput extends GetAppReplicationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the application replication configuration associated with the specified
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppReplicationConfigurationCommand extends $Command<GetAppReplicationConfigurationCommandInput, GetAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppReplicationConfigurationCommandInput;
    constructor(input: GetAppReplicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppReplicationConfigurationCommandInput, GetAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
