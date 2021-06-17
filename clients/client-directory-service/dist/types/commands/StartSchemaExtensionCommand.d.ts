import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { StartSchemaExtensionRequest, StartSchemaExtensionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSchemaExtensionCommandInput extends StartSchemaExtensionRequest {
}
export interface StartSchemaExtensionCommandOutput extends StartSchemaExtensionResult, __MetadataBearer {
}
/**
 * <p>Applies a schema extension to a Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, StartSchemaExtensionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, StartSchemaExtensionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new StartSchemaExtensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaExtensionCommandInput} for command's `input` shape.
 * @see {@link StartSchemaExtensionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSchemaExtensionCommand extends $Command<StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: StartSchemaExtensionCommandInput;
    constructor(input: StartSchemaExtensionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput>;
    private serialize;
    private deserialize;
}
