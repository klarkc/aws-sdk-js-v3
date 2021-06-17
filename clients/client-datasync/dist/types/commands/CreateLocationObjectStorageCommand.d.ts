import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationObjectStorageRequest, CreateLocationObjectStorageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocationObjectStorageCommandInput extends CreateLocationObjectStorageRequest {
}
export interface CreateLocationObjectStorageCommandOutput extends CreateLocationObjectStorageResponse, __MetadataBearer {
}
/**
 * <p>Creates an endpoint for a self-managed object storage bucket. For more information
 *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link CreateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocationObjectStorageCommand extends $Command<CreateLocationObjectStorageCommandInput, CreateLocationObjectStorageCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationObjectStorageCommandInput;
    constructor(input: CreateLocationObjectStorageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationObjectStorageCommandInput, CreateLocationObjectStorageCommandOutput>;
    private serialize;
    private deserialize;
}
