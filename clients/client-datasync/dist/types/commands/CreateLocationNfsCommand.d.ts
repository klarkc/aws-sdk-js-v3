import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationNfsRequest, CreateLocationNfsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocationNfsCommandInput extends CreateLocationNfsRequest {
}
export interface CreateLocationNfsCommandOutput extends CreateLocationNfsResponse, __MetadataBearer {
}
/**
 * <p>Defines a file system on a Network File System (NFS) server that can be read from or
 *       written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocationNfsCommand extends $Command<CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationNfsCommandInput;
    constructor(input: CreateLocationNfsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput>;
    private serialize;
    private deserialize;
}
