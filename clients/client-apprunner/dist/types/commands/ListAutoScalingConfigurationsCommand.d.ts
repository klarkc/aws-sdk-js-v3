import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAutoScalingConfigurationsCommandInput extends ListAutoScalingConfigurationsRequest {}
export interface ListAutoScalingConfigurationsCommandOutput
  extends ListAutoScalingConfigurationsResponse,
    __MetadataBearer {}
/**
 * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
 *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAutoScalingConfigurationsCommand extends $Command<
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
  AppRunnerClientResolvedConfig
> {
  readonly input: ListAutoScalingConfigurationsCommandInput;
  constructor(input: ListAutoScalingConfigurationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutoScalingConfigurationsCommandInput, ListAutoScalingConfigurationsCommandOutput>;
  private serialize;
  private deserialize;
}
