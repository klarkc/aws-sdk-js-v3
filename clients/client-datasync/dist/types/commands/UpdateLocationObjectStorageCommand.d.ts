import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateLocationObjectStorageRequest, UpdateLocationObjectStorageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLocationObjectStorageCommandInput extends UpdateLocationObjectStorageRequest {
}
export interface UpdateLocationObjectStorageCommandOutput extends UpdateLocationObjectStorageResponse, __MetadataBearer {
}
/**
 * <p>Updates some of the parameters of a previously created location for self-managed object
 *       storage server access. For information about creating a self-managed object storage location,
 *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLocationObjectStorageCommand extends $Command<UpdateLocationObjectStorageCommandInput, UpdateLocationObjectStorageCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: UpdateLocationObjectStorageCommandInput;
    constructor(input: UpdateLocationObjectStorageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLocationObjectStorageCommandInput, UpdateLocationObjectStorageCommandOutput>;
    private serialize;
    private deserialize;
}
