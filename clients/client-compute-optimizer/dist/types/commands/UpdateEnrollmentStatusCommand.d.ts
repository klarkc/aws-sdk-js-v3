import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEnrollmentStatusCommandInput extends UpdateEnrollmentStatusRequest {
}
export interface UpdateEnrollmentStatusCommandOutput extends UpdateEnrollmentStatusResponse, __MetadataBearer {
}
/**
 * <p>Updates the enrollment (opt in and opt out) status of an account to the
 *             AWS Compute Optimizer service.</p>
 *
 *
 *
 *         <p>If the account is a management account of an organization, this action can also be used
 *             to enroll member accounts within the organization.</p>
 *
 *         <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
 *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with AWS
 *                 Identity and Access Management</a> in the <i>AWS Compute Optimizer User
 *                 Guide</i>.</p>
 *
 *
 *
 *         <p>When you opt in, Compute Optimizer automatically creates a Service-Linked Role in your
 *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for AWS Compute Optimizer</a> in the <i>AWS Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new UpdateEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEnrollmentStatusCommand extends $Command<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: UpdateEnrollmentStatusCommandInput;
    constructor(input: UpdateEnrollmentStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
