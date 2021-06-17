import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationFsxWindowsRequest, CreateLocationFsxWindowsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocationFsxWindowsCommandInput extends CreateLocationFsxWindowsRequest {
}
export interface CreateLocationFsxWindowsCommandOutput extends CreateLocationFsxWindowsResponse, __MetadataBearer {
}
/**
 * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocationFsxWindowsCommand extends $Command<CreateLocationFsxWindowsCommandInput, CreateLocationFsxWindowsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationFsxWindowsCommandInput;
    constructor(input: CreateLocationFsxWindowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationFsxWindowsCommandInput, CreateLocationFsxWindowsCommandOutput>;
    private serialize;
    private deserialize;
}
