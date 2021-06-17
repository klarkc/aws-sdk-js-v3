import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListScheduledAuditsCommandInput extends ListScheduledAuditsRequest {
}
export interface ListScheduledAuditsCommandOutput extends ListScheduledAuditsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of your scheduled audits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListScheduledAuditsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListScheduledAuditsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListScheduledAuditsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScheduledAuditsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledAuditsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListScheduledAuditsCommand extends $Command<ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListScheduledAuditsCommandInput;
    constructor(input: ListScheduledAuditsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput>;
    private serialize;
    private deserialize;
}
