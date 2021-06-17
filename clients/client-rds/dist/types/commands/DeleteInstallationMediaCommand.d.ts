import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteInstallationMediaMessage, InstallationMedia } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInstallationMediaCommandInput extends DeleteInstallationMediaMessage {
}
export interface DeleteInstallationMediaCommandOutput extends InstallationMedia, __MetadataBearer {
}
/**
 * <p>Deletes the installation medium for a DB engine that requires an on-premises customer provided license,
 *             such as Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link DeleteInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInstallationMediaCommand extends $Command<DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteInstallationMediaCommandInput;
    constructor(input: DeleteInstallationMediaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstallationMediaCommandInput, DeleteInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
