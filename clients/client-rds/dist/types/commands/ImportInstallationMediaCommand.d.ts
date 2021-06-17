import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { InstallationMedia } from "../models/models_0";
import { ImportInstallationMediaMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportInstallationMediaCommandInput extends ImportInstallationMediaMessage {
}
export interface ImportInstallationMediaCommandOutput extends InstallationMedia, __MetadataBearer {
}
/**
 * <p>Imports the installation media for a DB engine that requires an on-premises
 *           customer provided license, such as SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ImportInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ImportInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ImportInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link ImportInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportInstallationMediaCommand extends $Command<ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: ImportInstallationMediaCommandInput;
    constructor(input: ImportInstallationMediaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
