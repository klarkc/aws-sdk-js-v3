import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { CreateReplicationConfigurationTemplateRequest, ReplicationConfigurationTemplate } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReplicationConfigurationTemplateCommandInput extends CreateReplicationConfigurationTemplateRequest {
}
export interface CreateReplicationConfigurationTemplateCommandOutput extends ReplicationConfigurationTemplate, __MetadataBearer {
}
/**
 * <p>Creates a new ReplicationConfigurationTemplate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new CreateReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReplicationConfigurationTemplateCommand extends $Command<CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput, MgnClientResolvedConfig> {
    readonly input: CreateReplicationConfigurationTemplateCommandInput;
    constructor(input: CreateReplicationConfigurationTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
