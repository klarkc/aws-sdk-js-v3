import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { UpdateDatastoreRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDatastoreCommandInput extends UpdateDatastoreRequest {
}
export interface UpdateDatastoreCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the settings of a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdateDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatastoreCommandInput} for command's `input` shape.
 * @see {@link UpdateDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDatastoreCommand extends $Command<UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: UpdateDatastoreCommandInput;
    constructor(input: UpdateDatastoreCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput>;
    private serialize;
    private deserialize;
}
