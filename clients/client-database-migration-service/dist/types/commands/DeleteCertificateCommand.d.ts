import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteCertificateMessage, DeleteCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCertificateCommandInput extends DeleteCertificateMessage {
}
export interface DeleteCertificateCommandOutput extends DeleteCertificateResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCertificateCommand extends $Command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteCertificateCommandInput;
    constructor(input: DeleteCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
