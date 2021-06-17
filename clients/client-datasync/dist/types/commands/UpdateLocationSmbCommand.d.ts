import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateLocationSmbRequest, UpdateLocationSmbResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLocationSmbCommandInput extends UpdateLocationSmbRequest {
}
export interface UpdateLocationSmbCommandOutput extends UpdateLocationSmbResponse, __MetadataBearer {
}
/**
 * <p>Updates some of the parameters of a previously created location for Server Message Block
 *       (SMB) file system access. For information about creating an SMB location, see
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLocationSmbCommand extends $Command<UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: UpdateLocationSmbCommandInput;
    constructor(input: UpdateLocationSmbCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput>;
    private serialize;
    private deserialize;
}
