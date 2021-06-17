import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateLocationNfsRequest, UpdateLocationNfsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLocationNfsCommandInput extends UpdateLocationNfsRequest {
}
export interface UpdateLocationNfsCommandOutput extends UpdateLocationNfsResponse, __MetadataBearer {
}
/**
 * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
 *       For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLocationNfsCommand extends $Command<UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: UpdateLocationNfsCommandInput;
    constructor(input: UpdateLocationNfsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput>;
    private serialize;
    private deserialize;
}
