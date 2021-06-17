import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ReplicationConfiguration, UpdateReplicationConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateReplicationConfigurationCommandInput extends UpdateReplicationConfigurationRequest {
}
export interface UpdateReplicationConfigurationCommandOutput extends ReplicationConfiguration, __MetadataBearer {
}
/**
 * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UpdateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateReplicationConfigurationCommand extends $Command<UpdateReplicationConfigurationCommandInput, UpdateReplicationConfigurationCommandOutput, MgnClientResolvedConfig> {
    readonly input: UpdateReplicationConfigurationCommandInput;
    constructor(input: UpdateReplicationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReplicationConfigurationCommandInput, UpdateReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
