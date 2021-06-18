import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DeleteComputeEnvironmentRequest, DeleteComputeEnvironmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteComputeEnvironmentCommandInput extends DeleteComputeEnvironmentRequest {}
export interface DeleteComputeEnvironmentCommandOutput extends DeleteComputeEnvironmentResponse, __MetadataBearer {}
/**
 * <p>Deletes an AWS Batch compute environment.</p>
 *          <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use AWS Fargate resources must terminate all
 *    active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute
 *    environment enters an invalid state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeleteComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteComputeEnvironmentCommand extends $Command<
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
> {
  readonly input: DeleteComputeEnvironmentCommandInput;
  constructor(input: DeleteComputeEnvironmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteComputeEnvironmentCommandInput, DeleteComputeEnvironmentCommandOutput>;
  private serialize;
  private deserialize;
}
