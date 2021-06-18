import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeleteDeploymentStrategyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteDeploymentStrategyCommandInput extends DeleteDeploymentStrategyRequest {}
export interface DeleteDeploymentStrategyCommandOutput extends __MetadataBearer {}
/**
 * <p>Delete a deployment strategy. Deleting a deployment strategy does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new DeleteDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeploymentStrategyCommand extends $Command<
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
  AppConfigClientResolvedConfig
> {
  readonly input: DeleteDeploymentStrategyCommandInput;
  constructor(input: DeleteDeploymentStrategyCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentStrategyCommandInput, DeleteDeploymentStrategyCommandOutput>;
  private serialize;
  private deserialize;
}
