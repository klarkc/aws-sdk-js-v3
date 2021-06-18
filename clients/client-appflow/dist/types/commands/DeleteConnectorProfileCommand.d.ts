import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DeleteConnectorProfileRequest, DeleteConnectorProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteConnectorProfileCommandInput extends DeleteConnectorProfileRequest {}
export interface DeleteConnectorProfileCommandOutput extends DeleteConnectorProfileResponse, __MetadataBearer {}
/**
 * <p>
 *  Enables you to delete an existing connector profile.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DeleteConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DeleteConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DeleteConnectorProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConnectorProfileCommand extends $Command<
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
> {
  readonly input: DeleteConnectorProfileCommandInput;
  constructor(input: DeleteConnectorProfileCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConnectorProfileCommandInput, DeleteConnectorProfileCommandOutput>;
  private serialize;
  private deserialize;
}
