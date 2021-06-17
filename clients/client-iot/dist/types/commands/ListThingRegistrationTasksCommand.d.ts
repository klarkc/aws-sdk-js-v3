import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTasksRequest, ListThingRegistrationTasksResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThingRegistrationTasksCommandInput extends ListThingRegistrationTasksRequest {
}
export interface ListThingRegistrationTasksCommandOutput extends ListThingRegistrationTasksResponse, __MetadataBearer {
}
/**
 * <p>List bulk thing provisioning tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingRegistrationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingRegistrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThingRegistrationTasksCommand extends $Command<ListThingRegistrationTasksCommandInput, ListThingRegistrationTasksCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListThingRegistrationTasksCommandInput;
    constructor(input: ListThingRegistrationTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThingRegistrationTasksCommandInput, ListThingRegistrationTasksCommandOutput>;
    private serialize;
    private deserialize;
}
