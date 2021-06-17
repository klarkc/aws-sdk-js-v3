import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeDetectMitigationActionsTaskRequest, DescribeDetectMitigationActionsTaskResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDetectMitigationActionsTaskCommandInput extends DescribeDetectMitigationActionsTaskRequest {
}
export interface DescribeDetectMitigationActionsTaskCommandOutput extends DescribeDetectMitigationActionsTaskResponse, __MetadataBearer {
}
/**
 * <p>
 *       Gets information about a Device Defender ML Detect mitigation action.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDetectMitigationActionsTaskCommand extends $Command<DescribeDetectMitigationActionsTaskCommandInput, DescribeDetectMitigationActionsTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeDetectMitigationActionsTaskCommandInput;
    constructor(input: DescribeDetectMitigationActionsTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDetectMitigationActionsTaskCommandInput, DescribeDetectMitigationActionsTaskCommandOutput>;
    private serialize;
    private deserialize;
}
