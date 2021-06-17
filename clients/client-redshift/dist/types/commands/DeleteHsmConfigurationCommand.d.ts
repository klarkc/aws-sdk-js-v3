import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmConfigurationMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHsmConfigurationCommandInput extends DeleteHsmConfigurationMessage {
}
export interface DeleteHsmConfigurationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHsmConfigurationCommand extends $Command<DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteHsmConfigurationCommandInput;
    constructor(input: DeleteHsmConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
