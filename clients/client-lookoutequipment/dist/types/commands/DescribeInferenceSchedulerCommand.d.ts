import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeInferenceSchedulerRequest, DescribeInferenceSchedulerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInferenceSchedulerCommandInput extends DescribeInferenceSchedulerRequest {
}
export interface DescribeInferenceSchedulerCommandOutput extends DescribeInferenceSchedulerResponse, __MetadataBearer {
}
/**
 * <p> Specifies information about the inference scheduler being used, including name, model,
 *          status, and associated metadata </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInferenceSchedulerCommand extends $Command<DescribeInferenceSchedulerCommandInput, DescribeInferenceSchedulerCommandOutput, LookoutEquipmentClientResolvedConfig> {
    readonly input: DescribeInferenceSchedulerCommandInput;
    constructor(input: DescribeInferenceSchedulerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutEquipmentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInferenceSchedulerCommandInput, DescribeInferenceSchedulerCommandOutput>;
    private serialize;
    private deserialize;
}
