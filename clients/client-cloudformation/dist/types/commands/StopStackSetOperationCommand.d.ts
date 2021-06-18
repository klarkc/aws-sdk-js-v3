import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { StopStackSetOperationInput, StopStackSetOperationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StopStackSetOperationCommandInput extends StopStackSetOperationInput {}
export interface StopStackSetOperationCommandOutput extends StopStackSetOperationOutput, __MetadataBearer {}
/**
 * <p>Stops an in-progress operation on a stack set and its associated stack instances. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StopStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StopStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new StopStackSetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link StopStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopStackSetOperationCommand extends $Command<
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  readonly input: StopStackSetOperationCommandInput;
  constructor(input: StopStackSetOperationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStackSetOperationCommandInput, StopStackSetOperationCommandOutput>;
  private serialize;
  private deserialize;
}
