import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DeleteAutoScalingConfigurationRequest, DeleteAutoScalingConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteAutoScalingConfigurationCommandInput extends DeleteAutoScalingConfigurationRequest {}
export interface DeleteAutoScalingConfigurationCommandOutput
  extends DeleteAutoScalingConfigurationResponse,
    __MetadataBearer {}
/**
 * <p>Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
 *       configuration that's used by one or more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DeleteAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAutoScalingConfigurationCommand extends $Command<
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: DeleteAutoScalingConfigurationCommandInput;
  constructor(input: DeleteAutoScalingConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAutoScalingConfigurationCommandInput, DeleteAutoScalingConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}
