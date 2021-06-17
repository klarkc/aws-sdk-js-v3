import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingRegistrationTaskReportsCommandInput extends ListThingRegistrationTaskReportsRequest {
}
export interface ListThingRegistrationTaskReportsCommandOutput extends ListThingRegistrationTaskReportsResponse, __MetadataBearer {
}
/**
 * <p>Information about the thing registration tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTaskReportsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTaskReportsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingRegistrationTaskReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingRegistrationTaskReportsCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTaskReportsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingRegistrationTaskReportsCommand extends $Command<ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingRegistrationTaskReportsCommandInput;
    constructor(input: ListThingRegistrationTaskReportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput>;
    private serialize;
    private deserialize;
}
