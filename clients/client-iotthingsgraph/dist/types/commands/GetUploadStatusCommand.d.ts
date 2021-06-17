import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetUploadStatusRequest, GetUploadStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUploadStatusCommandInput extends GetUploadStatusRequest {
}
export interface GetUploadStatusCommandOutput extends GetUploadStatusResponse, __MetadataBearer {
}
/**
 * <p>Gets the status of the specified upload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetUploadStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetUploadStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetUploadStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUploadStatusCommandInput} for command's `input` shape.
 * @see {@link GetUploadStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUploadStatusCommand extends $Command<GetUploadStatusCommandInput, GetUploadStatusCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetUploadStatusCommandInput;
    constructor(input: GetUploadStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUploadStatusCommandInput, GetUploadStatusCommandOutput>;
    private serialize;
    private deserialize;
}
