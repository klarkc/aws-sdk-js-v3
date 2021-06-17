import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelSchemaExtensionCommandInput extends CancelSchemaExtensionRequest {
}
export interface CancelSchemaExtensionCommandOutput extends CancelSchemaExtensionResult, __MetadataBearer {
}
/**
 * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CancelSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CancelSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CancelSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link CancelSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelSchemaExtensionCommand extends $Command<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CancelSchemaExtensionCommandInput;
    constructor(input: CancelSchemaExtensionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput>;
    private serialize;
    private deserialize;
}
