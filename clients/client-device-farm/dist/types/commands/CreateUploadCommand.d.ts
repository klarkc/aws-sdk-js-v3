import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateUploadRequest, CreateUploadResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUploadCommandInput extends CreateUploadRequest {
}
export interface CreateUploadCommandOutput extends CreateUploadResult, __MetadataBearer {
}
/**
 * <p>Uploads an app or test scripts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUploadCommandInput} for command's `input` shape.
 * @see {@link CreateUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUploadCommand extends $Command<CreateUploadCommandInput, CreateUploadCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateUploadCommandInput;
    constructor(input: CreateUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUploadCommandInput, CreateUploadCommandOutput>;
    private serialize;
    private deserialize;
}
