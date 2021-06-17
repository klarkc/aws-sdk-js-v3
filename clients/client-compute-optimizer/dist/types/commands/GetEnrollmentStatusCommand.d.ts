import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEnrollmentStatusCommandInput extends GetEnrollmentStatusRequest {
}
export interface GetEnrollmentStatusCommandOutput extends GetEnrollmentStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer
 *             service.</p>
 *
 *
 *
 *         <p>If the account is the management account of an organization, this action also confirms
 *             the enrollment status of member accounts within the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEnrollmentStatusCommand extends $Command<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEnrollmentStatusCommandInput;
    constructor(input: GetEnrollmentStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
