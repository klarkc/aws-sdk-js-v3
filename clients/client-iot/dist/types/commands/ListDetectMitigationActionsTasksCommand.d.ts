import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListDetectMitigationActionsTasksRequest, ListDetectMitigationActionsTasksResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDetectMitigationActionsTasksCommandInput extends ListDetectMitigationActionsTasksRequest {
}
export interface ListDetectMitigationActionsTasksCommandOutput extends ListDetectMitigationActionsTasksResponse, __MetadataBearer {
}
/**
 * <p>
 *       List of Device Defender ML Detect mitigation actions tasks.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDetectMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDetectMitigationActionsTasksCommand extends $Command<ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListDetectMitigationActionsTasksCommandInput;
    constructor(input: ListDetectMitigationActionsTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput>;
    private serialize;
    private deserialize;
}
