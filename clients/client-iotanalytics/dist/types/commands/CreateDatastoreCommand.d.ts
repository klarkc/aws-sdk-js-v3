import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreateDatastoreRequest, CreateDatastoreResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatastoreCommandInput extends CreateDatastoreRequest {
}
export interface CreateDatastoreCommandOutput extends CreateDatastoreResponse, __MetadataBearer {
}
/**
 * <p>Creates a data store, which is a repository for messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreateDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatastoreCommand extends $Command<CreateDatastoreCommandInput, CreateDatastoreCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: CreateDatastoreCommandInput;
    constructor(input: CreateDatastoreCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatastoreCommandInput, CreateDatastoreCommandOutput>;
    private serialize;
    private deserialize;
}
