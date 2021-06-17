import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateSnapshotRequest, CreateSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {
}
export interface CreateSnapshotCommandOutput extends CreateSnapshotResult, __MetadataBearer {
}
/**
 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p>
 *          <note>
 *             <p>You cannot take snapshots of AD Connector directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSnapshotCommand extends $Command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateSnapshotCommandInput;
    constructor(input: CreateSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
