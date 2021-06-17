import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocationSmbCommandInput extends CreateLocationSmbRequest {
}
export interface CreateLocationSmbCommandOutput extends CreateLocationSmbResponse, __MetadataBearer {
}
/**
 * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
 *       written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationSmbCommandInput} for command's `input` shape.
 * @see {@link CreateLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocationSmbCommand extends $Command<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateLocationSmbCommandInput;
    constructor(input: CreateLocationSmbCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput>;
    private serialize;
    private deserialize;
}
